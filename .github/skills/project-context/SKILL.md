---
name: Project Context
type: skill
category: mandatory
applies_to: all
version: 1.1.0
---

# Project Context

## Project Identity

- **Name**: Raph's MySpace
- **Owner**: Raphael Schwalb
- **Type**: Personal portfolio website
- **Repo**: https://github.com/RaphS03/raphs-myspace.git

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| Components | shadcn/ui (Radix UI + CVA) | - |
| Icons | Lucide React | 0.575.0 |
| Package Manager | pnpm | - |

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    layout.tsx            # Root layout (shared across all pages)
    page.tsx              # Home page (/)
    globals.css           # Global styles + CSS variable tokens
    projects/
      page.tsx            # Projects list (/projects)
      [slug]/
        page.tsx          # Project detail (/projects/[slug])
    resume/
      page.tsx            # Resume page (/resume)
    contact/
      page.tsx            # Contact page (/contact)
  components/
    layout/               # Shared layout components (header, footer, nav)
    ui/                   # shadcn/ui components
  data/
    projects.ts           # Project data (typed with Project interface)
  lib/                    # Utility functions
lib/
  utils.ts                # cn() helper for Tailwind class merging
public/                   # Static assets (images, SVGs)
docs/
  sdd/                    # Software Design Documents
```

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home page with hero, intro, CTAs |
| `/projects` | `src/app/projects/page.tsx` | Project grid with filtering |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Individual project detail |
| `/resume` | `src/app/resume/page.tsx` | Resume/CV page |
| `/contact` | `src/app/contact/page.tsx` | Contact information |

## Data Patterns

- **Project data** lives in `src/data/projects.ts` as a typed array
- Projects use a `Project` interface with fields for title, slug, description, tags, links, etc.
- Data is co-located with the app (no CMS or database)
- New projects are added by appending to the array

## Theming

- CSS custom properties defined in `src/app/globals.css`
- Light and dark mode tokens (HSL and OKLCH formats)
- Dark mode toggled via `.dark` class on `<html>` element
- shadcn/ui components consume these variables automatically

## Key Files

| File | Purpose |
|------|---------|
| `components.json` | shadcn/ui configuration |
| `tailwind.config.ts` | Tailwind theme extensions |
| `tsconfig.json` | TypeScript configuration |
| `postcss.config.mjs` | PostCSS plugins |
| `next.config.ts` | Next.js configuration |
| `.prettierrc` | Prettier configuration |
| `eslint.config.mjs` | ESLint configuration |

## Reference Resources (`.repos/`)

The `.repos/` directory contains external reference material for development:

| Resource | Path | Purpose |
|----------|------|---------|
| Neofolio | `.repos/neofolio/` | Portfolio template built on shadcn/ui. Use as reference for premade components (navigation, project cards, footer, theme toggle, etc.). Adapt patterns to our conventions. |
| React Best Practices | `.repos/best-practices/react-best-practices/` | 57 Vercel Engineering performance rules across 8 priority categories. Consult when writing or reviewing React/Next.js code. |

**Usage priority**: Check neofolio for existing component patterns first. If a suitable component exists, adapt it. If not, build from scratch with shadcn/ui. Always follow the React best practices rules.

## Design Direction

- **Minimal**: No decorative clutter; every element serves a purpose
- **Elegant**: Refined typography, intentional spacing, thoughtful palette
- **Simple**: Clear hierarchy; users find what they need instantly
- **Clean**: Consistent alignment, uniform spacing, grid-aligned layouts
- **Slight animation**: Subtle entrance fades, hover transitions, staggered lists (CSS transitions preferred over JS libraries)
- Professional but approachable tone
- Mobile-first responsive design
- Dark mode support
- Accessible (WCAG AA) and SEO-friendly
