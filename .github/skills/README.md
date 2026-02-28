# Skills

Reusable knowledge modules that agents reference for domain-specific guidance.

## How It Works

Skills are Markdown files with YAML frontmatter. Each skill documents rules, patterns, and examples for a specific domain. Agents reference skills in their frontmatter, and Copilot loads the relevant skills when acting as that agent.

## Skill Categories

### Mandatory (All Agents)

Every agent loads these skills regardless of specialization.

| Skill | File | Description |
|-------|------|-------------|
| Project Context | `project-context.md` | Project structure, tech stack, architecture overview |
| Code Standards | `code-standards.md` | TypeScript, React, Tailwind, and naming conventions |
| Git Workflow | `git-workflow.md` | Branch strategy, commit messages, PR process |

### Development

Technical skills for building features.

| Skill | File | Used By |
|-------|------|---------|
| Next.js App Router | `nextjs-app-router.md` | Next.js Developer, UI Developer |
| Tailwind CSS v4 | `tailwind-v4.md` | UI Developer |
| shadcn/ui | `shadcn-ui.md` | UI Developer |
| React Patterns | `react-patterns.md` | UI Developer, Next.js Developer |
| TypeScript Patterns | `typescript-patterns.md` | Next.js Developer, QA Reviewer |
| Dev Preview | `dev-preview.md` | UI Developer, Next.js Developer, Coordinator, QA Reviewer |

### Design

Visual design, accessibility, content, and SEO skills.

| Skill | File | Used By |
|-------|------|---------|
| Design System | `design-system.md` | UI Developer |
| Accessibility | `accessibility.md` | UI Developer, QA Reviewer |
| SEO and Metadata | `seo-metadata.md` | Next.js Developer, Content Writer |
| Copywriting and Tone | `copywriting-tone.md` | Content Writer |

### Process

Workflow, templates, and review processes.

| Skill | File | Used By |
|-------|------|---------|
| SDD Writer Iterative | `sdd-writer-iterative/SKILL.md` | SDD Writer Agent |
| Agent Definition Template | `agent-definition-template.md` | Agent Architect |
| Code Review Checklist | `code-review-checklist.md` | QA Reviewer |

## Adding New Skills

See the `agent-definition-template` skill for the skill template and guidelines.
