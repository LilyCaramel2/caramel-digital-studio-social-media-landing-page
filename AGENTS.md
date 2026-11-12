<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Caramel Agent Instructions

This repository follows the Caramel frontend-first workflow. Read `docs/caramel/workflow.md`, `docs/caramel/review-gates.md`, `docs/caramel/stack-profile.md`, `docs/caramel/migration-policy.md` and `migration/migration-state.json` before acting.

The existing repository, framework, package manager, lockfile, scripts, Tailwind setup, routes, components and deployment assumptions are authoritative. If the repository is blank or the stack is unclear, report that fact and ask rather than choosing a framework silently.

The default phase is static frontend work. Preserve semantic HTML, approved content, Tailwind classes, CSS variables, responsive behaviour, accessibility and SEO foundations.

Do not add a backend, API route, server action, database, ORM, authentication, CMS, payments, webhooks, background workers, server-side fetching, Manus-managed services or new external services without explicit approval.

Do not install packages, change frameworks, change package managers, replace Tailwind, alter Git remotes, change branches, commit, push, merge, publish or deploy without explicit approval.

Read `migration/migration-state.json` before migration work. Do not infer approval from conversation history, a successful preview, a clean build or the presence of files. Stop if the phase or approval state does not permit the requested action.

Do not modify the approved static source during the first migration. Generate into the approved target. Report exact files changed, commands run, validation results, unresolved decisions, packages not installed, services not added and remote actions not performed.

If Manus and Copilot instructions conflict, stop and report the conflict instead of choosing silently.
