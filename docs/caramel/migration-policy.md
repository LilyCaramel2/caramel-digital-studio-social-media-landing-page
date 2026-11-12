<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Caramel Static-to-Next Migration Policy

This policy applies only after the static frontend has passed the Caramel Review Gates.

## Purpose

The migration converts an approved static frontend into a maintainable React or Next.js structure while preserving the approved design, content, responsive behaviour and SEO foundations.

It is not a redesign engine and it is not permission to introduce application infrastructure.

## Preconditions

Migration may begin only when:

- the static page set is approved;
- the target framework is explicitly approved;
- the target router is explicitly approved;
- the migration manifest is approved;
- the repository or output strategy is approved;
- the working tree state is known;
- unresolved forms and scripts are classified;
- the asset strategy is agreed.

## Non-destructive requirement

Never migrate in place during the first pass.

Generate into:

- a new directory; or
- a new branch; or
- a separately approved worktree.

Do not modify the approved static source until the generated version has been reviewed.

## Preservation requirements

Preserve:

- Tailwind classes
- semantic HTML
- heading hierarchy
- approved content
- image paths where possible
- responsive behaviour
- accessibility attributes
- metadata
- section order
- approved component boundaries

Do not automatically:

- rename design tokens
- reorder Tailwind classes
- redesign layouts
- replace copy
- optimise all images
- add a UI library
- add state management
- add a CMS
- add data fetching
- add a backend

## Manifest requirement

Use a migration manifest that explicitly defines:

- source pages
- target routes
- App Router or Pages Router
- shared regions
- approved component extraction rules
- asset copy strategy
- metadata strategy
- form treatment
- inline-script treatment
- output directory
- overwrite policy
- validation commands

The script must not infer major architecture from HTML alone.

## Forms

A static form must not become a server action, API route or external integration automatically.

The migration must either:

- preserve the form as frontend-only and report it; or
- stop and ask for an approved submission strategy.

## Scripts and interactions

Inline scripts are migration review items.

The migration must not add `'use client'`, event handlers or state unless the behaviour has been classified and approved.

When client behaviour is approved, keep the client boundary as small as possible.

## Images

Copy assets first without automatic optimisation.

Do not convert every `<img>` to `next/image` without review because dimensions, cropping, loading and remote configuration may change.

Report images that lack dimensions or require visual review.

## Links

Convert internal links to the approved framework's link component only when they are confidently classified as internal routes.

Preserve external, mailto, tel and hash links as anchors.

Report unresolved or templated URLs.

## Metadata

Migrate existing title and description values.

Do not invent canonical URLs, Open Graph image URLs, analytics IDs, verification values or public origins.

## Validation

Run available repository-native:

- formatter
- lint
- typecheck
- build

Do not install missing tools without approval.

Create a migration report containing:

- generated routes
- generated components
- copied assets
- migrated metadata
- unresolved forms
- unresolved scripts
- image review items
- missing assets
- unknown routes
- dependencies not added
- services not added
- validation status

## Final migration rule

A migration is not complete when files have merely been generated.

It is complete only after:

1. technical validation;
2. visual comparison with the approved static version;
3. review of unresolved behaviour;
4. explicit approval of the resulting structure.
