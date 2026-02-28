# Agents

Hierarchical agent definitions for Copilot on Raph's MySpace.

## How It Works

Agents are defined as Markdown files with YAML frontmatter. Each agent has a role, responsibilities, workflow, and a list of skills it uses. Copilot reads these definitions to understand how to behave when acting as a specific agent.

## Agent Hierarchy

```
User (Raph)
├── SDD Writer          (coordinator) — writes design documents before development
├── Agent Architect     (coordinator) — improves and extends the agent system
└── Main Coordinator    (coordinator) — orchestrates feature development from SDDs
    ├── UI Developer        (specialist) — components, layouts, styling
    ├── Next.js Developer   (specialist) — routing, data, metadata, config
    ├── Content Writer      (specialist) — copy, tone, SEO content
    └── QA Reviewer         (specialist) — code review, accessibility, standards
```

## Agent Roster

### Coordinators

| Agent | File | Description |
|-------|------|-------------|
| SDD Writer Agent | `sdd-writer-agent.md` | Generates 15-section SDDs with iterative 2-loop self-review (20 critiques each) |
| Agent Architect | `agent-architect.md` | Maintains and extends the agent/skill system |
| Main Coordinator | `coordinator.md` | Breaks SDDs into tasks and delegates to specialists |

### Specialists

| Agent | File | Description |
|-------|------|-------------|
| UI Developer | `ui-developer.md` | Builds components and pages with Tailwind + shadcn/ui |
| Next.js Developer | `nextjs-developer.md` | Handles routing, data fetching, metadata, config |
| Content Writer | `content-writer.md` | Writes copy, manages tone, handles SEO content |
| QA Reviewer | `qa-reviewer.md` | Reviews quality, accessibility, and standards compliance |

## Usage

To activate an agent, reference its definition in your prompt:

```
@agent-architect Audit the current agent system and suggest improvements.
@sdd-writer I want to add a blog section to my website.
@coordinator Implement the hero-section SDD.
```

## Adding New Agents

See the `agent-definition-template` skill in `.github/skills/` for templates and guidelines.
