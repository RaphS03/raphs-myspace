# Active Context

## Current Work Focus
Initializing the Memory Bank for the project. The site is scaffolded but has no visual implementation yet -- all pages are empty placeholders.

## Recent Changes
- Project scaffolded with Next.js 16, Tailwind CSS v4, shadcn/ui
- Route structure created: Home (`/`), Projects (`/projects`), Project Detail (`/projects/[slug]`), Resume (`/resume`), Contact (`/contact`)
- Data layer started with `src/data/projects.ts` (empty array, interface defined)
- shadcn/ui configured with CSS custom properties (light + dark mode tokens)
- Memory Bank initialized

## Next Steps
- Build shared layout (header/nav, footer)
- Design and implement the Home page (hero section, brief intro)
- Build out the Projects page with project cards
- Add project data to `src/data/projects.ts`
- Build the Resume page
- Build the Contact page
- Add dark mode toggle
- Polish responsive design

## Active Decisions and Considerations
- Design direction: modern, clean, minimalist -- details to be decided incrementally
- Project content (which projects to showcase) -- to be provided by Raph
- Resume content -- to be provided by Raph
- Contact method (form vs. links only) -- to be decided
- Whether to add additional pages (Blog, About, etc.) -- to be decided

## Important Patterns and Preferences
- Raph prefers to make design/content decisions iteratively as the site is built
- Keep things simple and professional
- Use existing shadcn/ui component library rather than building from scratch

## Learnings and Project Insights
- Project name "Raph's MySpace" suggests a personal/fun touch despite the clean aesthetic
- The site should balance professionalism with personality
