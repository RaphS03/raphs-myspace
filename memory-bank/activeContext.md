# Active Context

## Current Focus

Hierarchical Copilot agent system has been fully set up. The system is ready for use.

## What Was Built

### Agent System (`.github/`)

A complete hierarchical agent system for GitHub Copilot with:

**Coordinators (3):**
- **SDD Writer** — takes a feature idea, analyzes the codebase, writes a comprehensive Software Design Document
- **Agent Architect** — audits, improves, and extends the agent/skill system itself
- **Main Coordinator** — takes an approved SDD and orchestrates implementation by delegating to specialists

**Specialists (4):**
- **UI Developer** — builds React components, layouts, and styling with Tailwind v4 + shadcn/ui
- **Next.js Developer** — handles routing, data fetching, metadata, server/client components
- **Content Writer** — writes copy, manages voice/tone, SEO descriptions, alt text
- **QA Reviewer** — final quality gate checking code, accessibility, and SDD compliance

**Skills (15 total):**
- 3 mandatory (all agents): project-context, code-standards, git-workflow
- 5 development: nextjs-app-router, tailwind-v4, shadcn-ui, react-patterns, typescript-patterns
- 4 design: design-system, accessibility, seo-metadata, copywriting-tone
- 3 process: sdd-template, agent-definition-template, code-review-checklist

**Infrastructure:**
- `copilot-instructions.md` — global instructions pointing Copilot to the agent system
- `agents/README.md` — agent roster and hierarchy documentation
- `skills/README.md` — skill catalog organized by category
- `docs/sdd/` — storage directory for SDD documents

### Workflow

1. User describes a feature idea to the **SDD Writer**
2. SDD Writer analyzes codebase, asks clarifying questions, writes a complete SDD to `docs/sdd/`
3. User reviews and approves the SDD
4. User hands the SDD to the **Main Coordinator**
5. Coordinator parses the implementation plan, delegates tasks to specialists in order
6. **QA Reviewer** does final review against acceptance criteria
7. Coordinator presents completed work to user

The **Agent Architect** is invoked separately to improve existing agents/skills or create new ones.

## Reference Resources Added

- **`.repos/neofolio/`** -- Portfolio template with premade shadcn/ui components (navigation, project cards, footer, theme toggle, blog items, carousel). Agents check these first before building from scratch.
- **`.repos/best-practices/react-best-practices/`** -- 57 Vercel Engineering React/Next.js performance rules across 8 priority categories. Referenced in react-patterns skill.

## Design Philosophy

The site should be **minimal, elegant, simple, and clean** with **slight animation**:
- CSS transitions preferred over JS animation libraries
- Entrance fades, hover transitions, staggered list animations
- All animations respect `prefers-reduced-motion`
- Duration: 150-500ms, easing: ease-out/ease-in-out

## Next Steps

- Start using the SDD Writer Agent to plan first feature (e.g., hero section, navigation, project cards)
- Iterate on agent definitions based on real usage experience
- Use Agent Architect to refine skills as patterns emerge

## Important Patterns

- All agents and skills use Markdown with YAML frontmatter
- Skills are referenced by kebab-case name (no `.md`) in agent frontmatter
- All agents share 3 mandatory skills: project-context, code-standards, git-workflow
- Versions follow semver: patch for typos, minor for content adds, major for restructures
- SDDs are stored in `docs/sdd/<feature-name>.md`
