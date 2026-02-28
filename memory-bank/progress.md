# Progress

## What Works
- Project scaffolded and repo initialized on GitHub
- Next.js 16 App Router with all route stubs in place:
  - `/` (Home)
  - `/projects` (Projects list)
  - `/projects/[slug]` (Project detail)
  - `/resume` (Resume)
  - `/contact` (Contact)
- Tailwind CSS v4 configured with light/dark theme tokens
- shadcn/ui initialized (`components.json`, CSS variables, `cn()` utility)
- Developer tooling: ESLint, Prettier (with Tailwind plugin), TypeScript
- pnpm workspace configured
- Memory Bank initialized

## What's Left to Build
- [ ] Shared layout: header/navigation bar + footer
- [ ] Home page: hero section, intro text, call-to-action links
- [ ] Projects page: project card grid, filtering by tags
- [ ] Project detail page: full project write-up with links
- [ ] Resume page: experience, education, skills sections
- [ ] Contact page: contact method (form or links)
- [ ] Dark mode toggle component
- [ ] Responsive design polish
- [ ] Project data population (`src/data/projects.ts`)
- [ ] SEO metadata for each page
- [ ] Favicon and Open Graph images
- [ ] Deployment setup (Vercel or similar)

## Current Status
**Phase: Scaffolding Complete, Implementation Not Started**

All pages exist as empty placeholder components with just an `<h1>` tag. No visual design, styling, layout components, or content has been implemented yet. The infrastructure (routing, theming, tooling) is solid and ready for UI development.

## Known Issues
- `globals.css` has duplicate theme variable definitions (HSL in `@layer base` + OKLCH in `:root`) -- may need cleanup
- No `src/components/ui/` components have been added from shadcn/ui yet (directory has only `.gitkeep`)
- `tailwind.config.ts` uses `require("tailwindcss-animate")` which is the v3 plugin syntax -- may conflict with v4's `@plugin` directive already in `globals.css`

## Evolution of Project Decisions
- **2026-02-28**: Project created with Next.js 16 + Tailwind v4 + shadcn/ui stack. Route structure established. Memory Bank initialized. Raph indicated preference for iterative design decisions -- will decide specifics (projects, resume content, design details, additional pages) as the site is built.
