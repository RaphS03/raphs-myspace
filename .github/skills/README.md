# Skills

Reusable knowledge modules that agents reference for domain-specific guidance.

## How It Works

Skills are directories in `.github/skills/` containing a `SKILL.md` file with YAML frontmatter. Each skill documents rules, patterns, and examples for a specific domain. Agents reference skills in their frontmatter, and Copilot loads the relevant skills when acting as that agent.

## Skill Categories

### Mandatory (All Agents)

Every agent loads these skills regardless of specialization.

| Skill | Directory | Description |
|-------|-----------|-------------|
| Project Context | `project-context/` | Project structure, tech stack, architecture overview |
| Code Standards | `code-standards/` | TypeScript, React, Tailwind, and naming conventions |
| Git Workflow | `git-workflow/` | Branch strategy, commit messages, PR process |

### Development

Technical skills for building features.

| Skill | Directory | Used By |
|-------|-----------|---------|
| Next.js App Router | `nextjs-app-router/` | Next.js Developer, UI Developer |
| Tailwind CSS v4 | `tailwind-v4/` | UI Developer |
| shadcn/ui | `shadcn-ui/` | UI Developer |
| React Patterns | `react-patterns/` | UI Developer, Next.js Developer |
| TypeScript Patterns | `typescript-patterns/` | Next.js Developer, QA Reviewer |
| Dev Preview | `dev-preview/` | UI Developer, Next.js Developer, Coordinator, QA Reviewer |

### Design

Visual design, accessibility, content, and SEO skills.

| Skill | Directory | Used By |
|-------|-----------|---------|
| Design System | `design-system/` | UI Developer |
| Accessibility | `accessibility/` | UI Developer, QA Reviewer |
| SEO and Metadata | `seo-metadata/` | Next.js Developer, Content Writer |
| Copywriting and Tone | `copywriting-tone/` | Content Writer |

### Process

Workflow, templates, and review processes.

| Skill | Directory | Used By |
|-------|-----------|---------|
| SDD Writer Iterative | `sdd-writer-iterative/` | SDD Writer Agent |
| Agent Definition Template | `agent-definition-template/` | Agent Architect |
| Code Review Checklist | `code-review-checklist/` | QA Reviewer |

## Adding New Skills

1. Create a new directory: `.github/skills/<skill-name>/`
2. Add a `SKILL.md` file with YAML frontmatter (see `agent-definition-template/SKILL.md` for the template)
3. Reference the skill name in the agent's `skills` frontmatter
4. Add the skill to this README
