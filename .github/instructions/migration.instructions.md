<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

---
applyTo: "migration/**/*.{js,ts,json,md},app/**/*.{js,ts,jsx,tsx},components/**/*.{js,ts,jsx,tsx},content/**/*.{js,ts,jsx,tsx}"
---

# Caramel Migration Instructions

Read `migration/migration-state.json` and `migration/migration.config.ts` before migration work.

Do not begin generation unless the static approval, migration plan and dry-run approval are recorded and the current phase permits generation.

Do not modify the approved static source. Preserve approved content, semantic markup, Tailwind classes, responsive behaviour, metadata, accessibility attributes and asset paths.

Report forms, inline scripts, unresolved links, missing assets, dynamic Tailwind classes, image-dimension concerns and required packages. Do not create backend infrastructure or install packages automatically. Do not commit, push, publish or deploy.
