---
name: Global Copilot Instructions
type: global
version: 1.0.0
last_updated: 2026-02-28
---

# Global Copilot Instructions — Raph's MySpace

These instructions apply to **all** Copilot interactions in this repository, including all agents.

## Project Overview

This is **Raph's MySpace**, a personal portfolio website for Raphael Schwalb — a software engineer in his final year of a double degree (Software Engineering + Computer Science) at Monash University, Melbourne, currently working at an AI startup.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Components**: shadcn/ui (Radix UI + Class Variance Authority)
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Formatting**: Prettier with tailwindcss plugin
- **Linting**: ESLint 9

## Agent System

This repository uses a hierarchical agent system defined in `.github/agents/` and `.github/skills/`.

### Hierarchy

```
Coordinators (orchestrate work)
  └── Specialists (execute specific types of work)
        └── Skills (reusable instruction sets)
```

### Key Agents

| Agent | File | Purpose |
|-------|------|---------|
| Main Coordinator | `agents/coordinator.md` | Breaks down SDDs into tasks, delegates to specialists |
| SDD Writer | `agents/sdd-writer.md` | Writes Software Design Documents before development |
| Agent Architect | `agents/agent-architect.md` | Improves and creates agents and skills |
| UI Developer | `agents/ui-developer.md` | Builds UI with Tailwind + shadcn/ui |
| Next.js Developer | `agents/nextjs-developer.md` | App Router, routing, data, server components |
| Content Writer | `agents/content-writer.md` | Copy, tone, SEO content |
| QA Reviewer | `agents/qa-reviewer.md` | Code review, accessibility, quality |

### Skills

Skills are reusable instruction modules in `.github/skills/`. Every agent inherits **mandatory skills**:

- `project-context` — Project structure, stack, conventions
- `code-standards` — Formatting, naming, file organization
- `git-workflow` — Branch naming, commits, PRs

Agents also have **specialist skills** listed in their frontmatter.

## Core Conventions

### File Organization

```
src/app/          → Pages (App Router)
src/components/   → React components (layout/, ui/)
src/data/         → Static data files
src/lib/          → Utility functions
lib/              → Shared utilities (cn() helper)
public/           → Static assets
docs/sdd/         → Software Design Documents
```

### Code Style

- Server Components by default; use `'use client'` only when needed
- Tailwind utility classes for styling; use `cn()` for conditional classes
- shadcn/ui components for UI primitives
- TypeScript strict mode; no `any` types
- Prettier handles formatting (do not fight it)

### Git Conventions

- **Branches**: `feat/description`, `fix/description`, `chore/description`
- **Commits**: Conventional format — `feat: add hero section`, `fix: nav responsive breakpoint`
- **PRs**: Descriptive title, reference the SDD if applicable

### Design Principles

- Modern, clean, minimalist aesthetic
- Mobile-first responsive design
- Accessible (semantic HTML, proper contrast, keyboard navigation)
- Fast (static generation, minimal client JS)
- Dark mode support via CSS custom properties
