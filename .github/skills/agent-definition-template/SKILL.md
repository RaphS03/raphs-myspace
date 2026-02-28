---
name: Agent Definition Template
type: skill
category: process
applies_to:
  - agent-architect
version: 1.0.0
---

# Agent Definition Template

This skill provides templates and guidelines for creating and modifying agents and skills in the `.github/` directory.

## Agent Template

```markdown
---
name: <Agent Name>
type: coordinator | specialist
description: <One-line description>
skills:
  mandatory:
    - project-context
    - code-standards
    - git-workflow
  specialist:
    - <skill-1>
    - <skill-2>
reports_to: coordinator | none
version: 1.0.0
---

# <Agent Name>

## Role

One paragraph describing this agent's purpose and scope within the hierarchy.

## Responsibilities

- Responsibility 1
- Responsibility 2
- Responsibility 3

## Workflow

1. Step 1
2. Step 2
3. Step 3

## Guidelines

### Do

- Specific positive instruction
- Specific positive instruction

### Do Not

- Specific anti-pattern to avoid
- Specific anti-pattern to avoid

## Delegation (Coordinators Only)

When delegating to specialists, provide:

1. Clear task description
2. Relevant context (SDD section, existing code)
3. Expected output format
4. Acceptance criteria

## Output Format

Describe the expected output of this agent (e.g., code files, documents, review comments).
```

## Skill Template

```markdown
---
name: <Skill Name>
type: skill
category: mandatory | development | design | process
applies_to:
  - <agent-1>
  - <agent-2>
version: 1.0.0
---

# <Skill Name>

## Overview

Brief description of what this skill covers (1-2 sentences).

## Rules / Patterns

### Rule 1

Description with examples.

### Rule 2

Description with examples.

## Examples

Concrete examples showing correct usage.

## Anti-Patterns

What to avoid and why.
```

## Guidelines for Creating Agents

### When to Create a New Agent

- A recurring task type does not fit any existing specialist
- An existing agent's scope has grown too broad
- A distinct domain of expertise is needed (e.g., animation, testing, deployment)

### When to Create a New Skill

- Knowledge is shared across multiple agents
- A domain has specific rules/patterns that need documentation
- An existing skill has grown too long and should be split

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Agent files | kebab-case | `ui-developer.md` |
| Skill files | kebab-case | `tailwind-v4.md` |
| Agent names in frontmatter | Title Case | `UI Developer` |
| Skill names in frontmatter | Title Case | `Tailwind CSS v4` |
| Skill references in agent frontmatter | kebab-case (no `.md`) | `tailwind-v4` |

### Version Management

- Start at `1.0.0`
- Increment patch (`1.0.1`) for minor wording/typo fixes
- Increment minor (`1.1.0`) for added content or new sections
- Increment major (`2.0.0`) for restructuring or scope changes

### Checklist for New Agents

- [ ] YAML frontmatter with all required fields
- [ ] All three mandatory skills listed
- [ ] Specialist skills listed and skill files exist
- [ ] `reports_to` field set correctly
- [ ] Role, Responsibilities, Workflow, and Guidelines sections filled
- [ ] `.github/agents/README.md` updated with new agent
- [ ] `.github/copilot-instructions.md` updated if needed

### Checklist for New Skills

- [ ] YAML frontmatter with all required fields
- [ ] `applies_to` lists all agents that use it
- [ ] Content is specific, actionable, and includes examples
- [ ] Referenced in the relevant agents' frontmatter
- [ ] `.github/skills/README.md` updated with new skill
