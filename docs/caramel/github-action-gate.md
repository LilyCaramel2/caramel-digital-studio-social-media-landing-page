# Caramel GitHub Action Gate

## Purpose

This repository includes a deterministic GitHub Action that checks the output of Caramel frontend-first work.

It does not run GitHub Copilot. It does not ask an AI model to translate code. It verifies the result after Copilot, Manus or a developer has generated it.

## When it runs

The workflow runs on:

- pushes to `chore/caramel-github-migration-gate`;
- pull requests;
- manual workflow dispatch.

When the Caramel control layer is present, the gate also applies the project-specific migration-state and review-gate checks. When those control files are not present, it runs in standalone mode and reports the missing control layer as a warning rather than failing before it can inspect the implementation.

## What it checks

The gate checks that:

- the optional Caramel control layer is detected and used when present;
- changed paths do not introduce obvious backend or service directories;
- changed implementation files do not add prohibited backend terms;
- stateful React behaviour has a local `'use client'` boundary;
- broad `app/page`, `app/layout`, `pages/_app` and similar boundaries do not become client components;
- interactive buttons expose an accessibility attribute for review;
- migration state values are valid;
- migration validation has a report when required;
- the migration dry run is approved before generation-phase changes.

## What it does not check automatically

The gate cannot replace human review of:

- visual fidelity;
- content quality;
- brand decisions;
- responsive behaviour;
- image cropping;
- semantic quality beyond its basic checks;
- whether every Tailwind token is visually correct.

It also does not install packages, commit, push, publish, deploy or invoke Copilot.

## Local run

From the repository root:

```bash
CARAMEL_BASE_REF=origin/main node .github/actions/caramel-migration-gate/validate.mjs
```

If the repository has no `origin/main` locally, the validator falls back to the current working-tree diff.

## Review rule

A passing action is technical evidence, not approval to merge. Lily still reviews the diff, the preview and the relevant Caramel Review Gate.
