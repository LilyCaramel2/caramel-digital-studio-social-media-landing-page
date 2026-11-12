<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Caramel Repository Instructions

This repository follows the Caramel frontend-first workflow.

Read `AGENTS.md`, `docs/caramel/workflow.md`, `docs/caramel/review-gates.md`, `docs/caramel/stack-profile.md`, `docs/caramel/migration-policy.md` and `migration/migration-state.json` before acting.

The existing stack is authoritative. The first phase is static, semantic, responsive frontend work using the existing Tailwind setup where present.

Do not add a backend, API route, server action, database, ORM, authentication, CMS, payments, webhooks, background workers, server-side fetching, Manus-managed service or new external service without explicit approval.

Do not install packages, change frameworks, change package managers, replace Tailwind, modify deployment configuration or alter Git configuration without explicit approval.

Do not migrate to React or Next.js until the review gates and migration state explicitly allow it. Do not overwrite the approved static source during migration.

Use existing repository commands for preview, formatting, linting, typechecking, testing and builds. Do not invent replacement commands or repair unrelated pre-existing failures under cover of migration.

Report files inspected, files changed, commands run, validation results, unresolved decisions, packages not installed, services not added and actions requiring approval.
