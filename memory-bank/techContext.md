# Tech Context

## Technologies Used

### Core Framework
- **Next.js 16.1.6** -- React framework with App Router, server components, file-system routing
- **React 19.2.3** -- UI library
- **TypeScript 5** -- Type safety across the codebase

### Styling
- **Tailwind CSS v4** -- Utility-first CSS framework
- **tailwindcss-animate** -- Animation plugin for Tailwind
- **@tailwindcss/postcss** -- PostCSS integration for Tailwind v4
- **CSS Custom Properties** -- Theming via HSL and OKLCH variables (light + dark)

### Component Library
- **shadcn/ui** -- Component system built on:
  - **Radix UI** (`radix-ui` v1.4.3) -- Accessible, unstyled UI primitives
  - **Class Variance Authority** (`cva` v0.7.1) -- Component variant management
  - **clsx** + **tailwind-merge** -- Conditional class name utilities
- **Lucide React** (v0.575.0) -- Icon library

### Developer Tooling
- **pnpm** -- Package manager (with workspace support via `pnpm-workspace.yaml`)
- **ESLint 9** with `eslint-config-next` -- Linting
- **Prettier 3.8.1** with `prettier-plugin-tailwindcss` -- Code formatting (auto-sorts Tailwind classes)
- **TypeScript** (`tsc --noEmit`) -- Type checking

## Development Setup
```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Lint
pnpm lint

# Format
pnpm format

# Type check
pnpm typecheck
```

## Technical Constraints
- All pages are server components by default (Next.js App Router)
- Client components must be explicitly marked with `'use client'` directive
- Tailwind v4 uses `@theme inline` and `@plugin` directives (different from v3 config)
- CSS variables are defined in both HSL format (legacy `@layer base`) and OKLCH format (newer `:root` block) in `globals.css`
- shadcn/ui components are configured via `components.json` at project root

## Dependencies Summary
| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.6 | Framework |
| react / react-dom | 19.2.3 | UI library |
| tailwindcss | v4 | Styling |
| radix-ui | 1.4.3 | Accessible primitives |
| class-variance-authority | 0.7.1 | Component variants |
| clsx | 2.1.1 | Class name utility |
| tailwind-merge | 3.5.0 | Tailwind class merging |
| lucide-react | 0.575.0 | Icons |

## Key Configuration Files
- `tailwind.config.ts` -- Tailwind theme extension (colors, border radius)
- `components.json` -- shadcn/ui component configuration
- `tsconfig.json` -- TypeScript configuration
- `postcss.config.mjs` -- PostCSS plugins
- `next.config.ts` -- Next.js configuration
- `.prettierrc` / `.prettierignore` -- Prettier configuration
- `eslint.config.mjs` -- ESLint configuration
