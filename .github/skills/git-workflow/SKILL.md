---
name: Git Workflow
type: skill
category: mandatory
applies_to: all
version: 1.0.0
---

# Git Workflow

## Branch Naming

| Type | Format | Example |
|------|--------|---------|
| Feature | `feat/<short-description>` | `feat/hero-section` |
| Bug fix | `fix/<short-description>` | `fix/nav-mobile-overflow` |
| Chore/maintenance | `chore/<short-description>` | `chore/update-dependencies` |
| Documentation | `docs/<short-description>` | `docs/add-project-data` |
| Refactor | `refactor/<short-description>` | `refactor/extract-card-component` |

### Rules

- Use lowercase kebab-case for descriptions
- Keep branch names short but descriptive
- Branch from `main` unless working on a sub-task of another branch

## Commit Messages

Use **conventional commit** format:

```
<type>: <short description>

[optional body]
```

### Types

| Type | When to Use |
|------|------------|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `chore` | Maintenance, config changes, dependencies |
| `docs` | Documentation changes |
| `style` | Formatting, CSS-only changes (no logic change) |
| `refactor` | Code restructuring without behavior change |
| `test` | Adding or updating tests |

### Rules

- Subject line: imperative mood, lowercase, no period, max 72 characters
- Body (optional): explain *why*, not *what*
- One logical change per commit

### Examples

```
feat: add project card component

fix: resolve dark mode flicker on page load

chore: update tailwindcss to v4.1

docs: add resume content

refactor: extract navigation into separate component

style: adjust hero section spacing on mobile
```

## Pull Requests

### Title Format

Same as commit message format: `<type>: <description>`

### PR Description

Include:

1. **What** -- Brief summary of changes
2. **Why** -- Motivation or link to SDD
3. **How** -- Notable implementation details (if complex)
4. **Screenshots** -- For UI changes (before/after if applicable)

### Template

```markdown
## What
Brief description of the changes.

## Why
Motivation, context, or link to SDD document.

## How
Notable implementation details or decisions.

## Screenshots
(For UI changes)
```

### Rules

- Reference the SDD document if one exists (e.g., "See `docs/sdd/hero-section.md`")
- Keep PRs focused; one feature or fix per PR
- Ensure `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass before merging

## Workflow Summary

```
1. Create branch:     git checkout -b feat/my-feature
2. Make changes:      (implement the feature)
3. Commit:            git commit -m "feat: add my feature"
4. Push:              git push origin feat/my-feature
5. Open PR:           Against main branch
6. Review & merge:    Squash merge preferred
