<!-- Managed by CDC Caramel Instruction Deployer. Do not edit this generated copy directly; update the source packet and redeploy deliberately. -->

# Manus Studio Setup — Caramel Plain Local Workflow

## Use this mode

Use Manus Studio with an existing repository in **plain local** mode.

Do not select Manus-managed web development for ordinary Caramel frontend work.

## Setup sequence

1. Open Manus Studio.
2. Sign in.
3. Turn on **Work locally**.
4. Choose the repository root.
5. Select **Plain local** when asked how to connect the project.
6. Confirm that the existing files and stack must be preserved.
7. Use the Caramel Project and the Caramel Frontend-First Skill.
8. Run the repository's existing development command.
9. Inspect before editing.

## Opening prompt

```text
Work only in this existing repository as a plain local project.

Use the repository's existing framework, package manager, scripts, Tailwind setup,
Git configuration and deployment assumptions.

Do not create a Manus-managed project.
Do not add Manus hosting, publishing, backend services, database,
authentication, API routes, server actions, CMS, payments or platform-specific infrastructure.

Use the Caramel Project instructions and /caramel-frontend-first Skill.

Before editing, inspect the repository and report the full inspection output.
Do not install packages or modify files until I approve the inspection and plan.
```

## Inspection prompt

```text
Use /caramel-frontend-first.

Read all Caramel Project files before proceeding.

Inspect:
- package.json
- lockfiles
- framework and version
- available scripts
- Tailwind and CSS configuration
- source and public directories
- route structure
- component structure
- content/data files
- assets
- SEO state
- accessibility observations
- existing backend or service code
- Git status
- preview command

Report findings only.
Do not edit files.
Do not install packages.
Do not scaffold anything.
Wait for approval.
```

## Existing repository rule

Do not apply a starter template over the repository.

Do not create a second application inside it.

Do not change the package manager, remotes, branches, hooks or scripts without explicit approval.

## Preview rule

Use the existing development command from `package.json`.

Do not create a replacement dev server.

A local preview is for review. It is not publication.

## Git rule

Keep the user's own Git workflow authoritative.

Do not commit, push, merge, open a pull request or alter remotes without explicit approval.

Use Git history as the primary recovery mechanism for plain local work.
