---
name: Code Standards
type: skill
category: mandatory
applies_to: all
version: 1.0.0
---

# Code Standards

## Language & Types

### TypeScript Rules

- Strict mode enabled; never use `any`
- Use `interface` for object shapes, `type` for unions/intersections
- Export types alongside their related code
- Prefer explicit return types on exported functions
- Use `readonly` for props and data that should not be mutated

```typescript
// Good
interface Project {
  readonly title: string;
  readonly slug: string;
  readonly tags: readonly string[];
}

// Bad
type Project = {
  title: any;
  slug: any;
  tags: string[];
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `ProjectCard`, `HeroSection` |
| Files (components) | PascalCase or kebab-case matching component | `ProjectCard.tsx` or `project-card.tsx` |
| Files (pages) | `page.tsx` (Next.js convention) | `src/app/projects/page.tsx` |
| Files (data) | camelCase | `projects.ts` |
| Variables/functions | camelCase | `getProjectBySlug` |
| Constants | UPPER_SNAKE_CASE | `MAX_PROJECTS_PER_PAGE` |
| Types/Interfaces | PascalCase | `ProjectProps` |
| CSS variables | kebab-case | `--primary-foreground` |

## React & Components

### Server vs Client Components

- **Default to Server Components** (no directive needed)
- Add `'use client'` only when the component needs:
  - Event handlers (`onClick`, `onChange`, etc.)
  - React hooks (`useState`, `useEffect`, etc.)
  - Browser-only APIs (`window`, `localStorage`, etc.)
- Keep client components small and push them to leaf nodes

### Component Structure

```typescript
// 1. Imports
import { cn } from "@/lib/utils";

// 2. Types
interface CardProps {
  readonly title: string;
  readonly className?: string;
  readonly children: React.ReactNode;
}

// 3. Component
export function Card({ title, className, children }: CardProps) {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

### Component Guidelines

- One component per file (small helpers are fine in the same file)
- Prefer named exports over default exports
- Destructure props in the function signature
- Use `cn()` for conditional class names
- Keep components focused; extract sub-components when they grow large

## Styling

### Tailwind CSS

- Use Tailwind utility classes directly in JSX
- Use `cn()` from `lib/utils` for conditional classes
- Follow mobile-first approach: base styles for mobile, then `md:`, `lg:`, etc.
- Use CSS custom properties for theme values (colors, spacing)
- Do not use inline `style` props unless absolutely necessary
- Do not create custom CSS classes unless Tailwind utilities are insufficient

```tsx
// Good
<div className={cn("flex flex-col gap-4 md:flex-row", isActive && "border-primary")}>

// Bad
<div style={{ display: "flex", gap: "1rem" }}>
```

### shadcn/ui

- Import components from `@/components/ui/`
- Do not modify shadcn/ui source files for one-off changes; wrap or extend instead
- Use component variants via CVA when creating reusable variations

## File Organization

### Import Order

Prettier and ESLint handle import sorting, but the logical order is:

1. React / Next.js imports
2. Third-party libraries
3. Internal components (`@/components/...`)
4. Internal utilities (`@/lib/...`)
5. Data / types (`@/data/...`)
6. Relative imports

### Directory Placement

| Type | Location |
|------|----------|
| Pages | `src/app/<route>/page.tsx` |
| Layouts | `src/app/<route>/layout.tsx` |
| Layout components (header, footer) | `src/components/layout/` |
| UI primitives (shadcn/ui) | `src/components/ui/` |
| Feature components | `src/components/<feature>/` |
| Data files | `src/data/` |
| Utilities | `src/lib/` or `lib/` |
| Static assets | `public/` |

## Formatting

- **Prettier** handles all formatting automatically
- Do not manually format code; let the formatter do its job
- Key Prettier settings:
  - Tailwind class sorting enabled (via `prettier-plugin-tailwindcss`)
  - Default Prettier rules apply (semicolons, double quotes, etc.)
- Run `pnpm format` to format all files
- Run `pnpm lint` to check for linting issues
- Run `pnpm typecheck` to verify types
