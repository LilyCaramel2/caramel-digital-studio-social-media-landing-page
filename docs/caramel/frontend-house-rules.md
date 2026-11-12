<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Caramel Frontend House Rules

## Authority

The existing repository wins over Manus defaults.

Preserve the user's framework, package manager, bundler, Tailwind setup, component conventions, route conventions, deployment provider and Git workflow.

## Default phase

Static HTML, Tailwind CSS and frontend components come before dynamic application work.

The first phase must be suitable for:

- pitches
- demos
- client review
- brand approval
- content approval
- architecture approval
- responsive review
- SEO review

## Implementation rules

- Prefer semantic HTML.
- Preserve meaningful content in the initial page output.
- Use the existing Tailwind setup.
- Use existing design tokens and CSS variables.
- Keep content, layout and components separable.
- Make mobile, tablet and desktop behaviour intentional.
- Use realistic copy or clearly labelled placeholders.
- Use accessible controls and descriptive link text.
- Use useful image alt text.
- Preserve focus states and keyboard access.
- Keep interactions frontend-only during the static phase.
- Avoid unnecessary abstraction.
- Extract components when the boundary is meaningful, not merely because markup repeats once.

## Prohibited without explicit approval

- backend services
- API routes
- server actions
- databases
- ORM models
- authentication
- user accounts
- CMS integration
- payments
- webhooks
- background workers
- server-side data fetching
- Manus hosting
- Manus publishing
- framework migration
- package installation
- package upgrades
- deployment changes
- Git remote changes
- branch changes
- pushes and merges

## Content and visual direction

Do not replace approved copy or brand decisions with generic AI-generated content.

If content is missing, identify the gap and propose copy separately.

Do not turn a proposed visual direction into an assumed brand decision.

## Preview

Use the existing development command.

Show the local preview after meaningful changes.

Do not publish or deploy as part of preview work.

## Reporting

Every implementation pass must state:

- files inspected
- files changed
- visible result
- preview command/status
- unresolved decisions
- dependency or architecture changes proposed
