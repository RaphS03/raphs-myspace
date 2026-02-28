# System Patterns

## Architecture
- **Framework**: Next.js 16 with App Router (file-system based routing)
- **Rendering**: Static generation by default (pages are server components), client components only when interactivity needed
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **Component Library**: shadcn/ui (Radix UI primitives + Class Variance Authority)

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
```

## Key Technical Decisions
1. **App Router over Pages Router** -- leverages React Server Components, layouts, and modern Next.js patterns
2. **shadcn/ui** -- copy-paste component model gives full control over styling; not a locked-in dependency
3. **CSS custom properties for theming** -- enables dark mode via `.dark` class toggle, with both HSL and OKLCH tokens defined
4. **Data-driven projects** -- projects defined in `src/data/projects.ts` as typed objects, rendered dynamically on list and detail pages
5. **pnpm** -- fast, disk-efficient package manager

## Design Patterns
- **Server Components by default**: All pages are server components unless they need client-side interactivity
- **Data co-location**: Project data lives in `src/data/` alongside the app code rather than a CMS or database
- **Component composition**: shadcn/ui components composed together for UI, extended as needed
- **Utility-first CSS**: Tailwind utility classes for styling, `cn()` helper for conditional classes

## Component Relationships
- `layout.tsx` wraps all pages (will contain header/nav + footer)
- Projects list page reads from `projects.ts` data and renders project cards
- Project detail page uses dynamic `[slug]` param to look up a specific project from the data
- UI components in `src/components/ui/` are reusable building blocks (buttons, cards, badges, etc.)

## Critical Implementation Paths
- **Adding a new project**: Add entry to `src/data/projects.ts` array -> appears on projects list -> detail page auto-generated via slug
- **Adding a new page**: Create folder in `src/app/` with `page.tsx` -> add link in nav
- **Theming/dark mode**: Toggle `.dark` class on `<html>` element -> CSS variables swap automatically
