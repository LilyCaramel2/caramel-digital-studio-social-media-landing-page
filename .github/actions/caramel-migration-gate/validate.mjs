#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.env.GITHUB_WORKSPACE || process.cwd();
const baseRef = process.env.CARAMEL_BASE_REF || 'origin/main';
const errors = [];
const warnings = [];

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

function rel(path) {
  return path.split(sep).join('/');
}

function exists(path) {
  return existsSync(join(root, path));
}

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

function log(message) {
  console.log(`Caramel: ${message}`);
}

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function walk(directory, output = []) {
  if (!exists(directory)) return output;
  for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path, output);
    else output.push(rel(path));
  }
  return output;
}

function changedFiles() {
  try {
    return git(['diff', '--name-only', `${baseRef}...HEAD`]).split('\n').filter(Boolean);
  } catch {
    warn(`Could not compare against ${baseRef}; checking the current working tree instead.`);
    return git(['diff', '--name-only', 'HEAD']).split('\n').filter(Boolean);
  }
}

log(`Workspace: ${root}`);
log(`Base ref: ${baseRef}`);

const controlFiles = [
  'AGENTS.md',
  '.github/copilot-instructions.md',
  'docs/caramel/review-gates.md',
  'docs/caramel/migration-policy.md',
  'migration/migration-state.json',
  'migration/MIGRATION-CONTRACT.md',
];

const missingControlFiles = controlFiles.filter((file) => !exists(file));
if (missingControlFiles.length > 0) {
  warn(`Caramel control layer is not present; running in standalone mode. Missing: ${missingControlFiles.join(', ')}`);
} else {
  log('Caramel control layer detected; applying project-specific migration checks.');
}

let state = null;
if (exists('migration/migration-state.json')) {
  try {
    state = JSON.parse(read('migration/migration-state.json'));
  } catch (error) {
    fail(`migration/migration-state.json is not valid JSON: ${error.message}`);
  }
}

const files = changedFiles();
log(`Changed files detected: ${files.length}`);

const forbiddenPath = /(^|\/)(api|server|database|prisma|drizzle|auth|authentication)(\/|$)|(^|\/)(route|actions?)\.(ts|tsx|js|jsx)$/i;
for (const file of files) {
  if (forbiddenPath.test(file)) {
    fail(`Potential unapproved backend or service path changed: ${file}`);
  }
}

const forbiddenText = /\b(Express|tRPC|Prisma|Drizzle|server action|API route|database schema|authentication service|CMS integration)\b/i;
const implementationPath = /^(app|components|content|pages|src)\//;
for (const file of files.filter((file) => /\.(ts|tsx|js|jsx|mjs)$/.test(file) && implementationPath.test(file))) {
  const absolute = join(root, file);
  if (!existsSync(absolute)) continue;
  const content = readFileSync(absolute, 'utf8');
  if (forbiddenText.test(content) && !file.startsWith('docs/caramel/') && file !== 'AGENTS.md' && file !== '.github/copilot-instructions.md') {
    fail(`Potential backend/service text found in changed implementation file: ${file}`);
  }
}

const sourceFiles = files.filter((file) => /\.(tsx|jsx|ts|js)$/.test(file) && !file.startsWith('.github/actions/'));
for (const file of sourceFiles) {
  const absolute = join(root, file);
  if (!existsSync(absolute)) continue;
  const content = readFileSync(absolute, 'utf8');
  const stateful = /\b(useState|useReducer|useEffect)\b|onClick\s*=|onChange\s*=|onSubmit\s*=/.test(content);
  const isClient = /^['"]use client['"];?/m.test(content);
  const isBroadAppBoundary = /^(app|pages)\/(layout|page|_app|_document)\.(tsx|jsx|ts|js)$/.test(file);

  if (stateful && !isClient) {
    fail(`Stateful browser behaviour lacks a local 'use client' boundary: ${file}`);
  }
  if (isClient && isBroadAppBoundary) {
    fail(`Broad page/layout client boundary is not allowed; isolate interaction in a component: ${file}`);
  }
  if (/onClick\s*=/.test(content) && !/aria-(expanded|controls|pressed|label)/.test(content)) {
    warn(`Interactive click handler may need an accessibility attribute review: ${file}`);
  }
}

const migrationFilesChanged = files.some((file) => file.startsWith('app/') || file.startsWith('components/') || file.startsWith('content/') || file.startsWith('migration/'));
const reportExists = exists('migration/reports/MIGRATION-REPORT.md') || exists('MIGRATION-REPORT.md');
if (migrationFilesChanged && state?.currentPhase === 'migration-validation' && !reportExists) {
  fail('Migration output changed during validation phase but no migration report was found.');
}

if (state) {
  const approved = ['approved', 'not-approved', 'blocked'];
  for (const key of ['staticApproval', 'migrationPlan', 'migrationDryRun', 'dynamicFeatures', 'delivery']) {
    if (!approved.includes(state[key])) fail(`Invalid migration approval value for ${key}: ${state[key]}`);
  }
  if (migrationFilesChanged && state.currentPhase === 'migration-generation' && state.migrationDryRun !== 'approved') {
    fail('Migration files changed during generation phase without an approved dry run.');
  }
}

const instructionFiles = files.filter((file) => file === 'AGENTS.md' || file.startsWith('.github/') || file.startsWith('docs/caramel/') || file.startsWith('migration/'));
if (instructionFiles.length === 0 && files.length > 0) {
  warn('This pull request does not change Caramel control files; verify that the change is intentionally outside the instruction layer.');
}

console.log('');
log(`Warnings: ${warnings.length}`);
for (const warning of warnings) console.log(`::warning title=Caramel migration gate::${warning}`);
log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`::error title=Caramel migration gate::${error}`);

if (errors.length > 0) {
  console.error(`Caramel migration gate failed with ${errors.length} error(s).`);
  process.exit(1);
}

log('Caramel migration gate passed.');
