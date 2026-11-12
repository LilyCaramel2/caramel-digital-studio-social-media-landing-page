<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Caramel Review Gates

These gates control the order of work. Do not silently skip a gate.

## Gate 1 — Repository inspection

Before editing, report:

- repository path
- framework and version
- language
- package manager
- lockfile
- available scripts
- Tailwind and CSS setup
- route structure
- component structure
- content and assets
- SEO state
- accessibility observations
- existing backend or service code
- Git status
- preview command

No files are changed during inspection unless the user explicitly authorises inspection and implementation together.

## Gate 2 — Direction

Before substantial implementation, confirm or propose:

- audience
- page purpose
- primary action
- page set
- navigation
- content hierarchy
- brand direction
- typography
- colour roles
- imagery direction
- responsive priorities
- SEO intent

Confirmed decisions must be distinguished from proposals.

## Gate 3 — Static frontend implementation

Build the approved pages as frontend-only static pages using the existing stack.

Do not add backend services, data persistence, authentication, CMS integration, API routes or server actions.

Use the existing package manager and scripts.

## Gate 4 — Static review

Before migration, review:

- page structure
- copy direction
- visual system
- responsive behaviour
- component boundaries
- accessibility
- SEO foundations
- assets
- interaction intent

The static page set must be explicitly approved before migration begins.

## Gate 5 — Migration manifest

Before automated migration, approve:

- source pages
- target routes
- App Router or Pages Router
- shared components
- component extraction rules
- asset strategy
- metadata strategy
- forms treatment
- interactive behaviour treatment
- output directory or branch
- dependency policy

## Gate 6 — Migration dry run

The migration script must produce a plan without writing files.

Review:

- generated files
- extracted components
- copied assets
- metadata changes
- forms requiring decisions
- inline scripts requiring decisions
- image review items
- missing assets
- unknown routes
- dependencies

## Gate 7 — Migration generation

Generate into a new directory or branch.

Do not overwrite the approved static source.

Do not create backend infrastructure by implication.

Do not push, publish, deploy or merge.

## Gate 8 — Technical validation

Run available repository-native checks:

- formatter
- linter
- typecheck
- build

Do not install missing tools without approval.

## Gate 9 — Visual comparison

Compare generated pages with the approved static version for:

- layout
- typography
- spacing
- colour
- image cropping
- navigation
- responsive behaviour
- section order
- content density
- focus states

## Gate 10 — Dynamic boundary approval

Only after migration review may the user decide whether to add:

- real form submission
- data fetching
- CMS content
- authentication
- server actions
- API routes
- database storage
- payments
- webhooks

These are separate product decisions.

## Gate 11 — Delivery

Explicit approval is required before:

- pushing
- merging
- opening a pull request
- publishing
- deploying
- changing remotes
- changing branches
- changing production configuration
