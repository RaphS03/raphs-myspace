---
name: Tailwind CSS v4
type: skill
category: development
applies_to:
  - ui-developer
version: 1.0.0
---

# Tailwind CSS v4

## Overview

This project uses Tailwind CSS v4, which has significant differences from v3. Key changes: CSS-first configuration, `@theme` directive, `@plugin` directive, and OKLCH color support.

## Configuration

### CSS-First Config

Tailwind v4 moves configuration into CSS. The main config lives in `src/app/globals.css`:

```css
@import "tailwindcss";
@plugin "tailwindcss-animate";

@theme inline {
  /* Theme extensions here */
}
```

### tailwind.config.ts

The `tailwind.config.ts` file still exists for JS-based extensions (e.g., custom colors referencing CSS variables), but v4 prefers CSS-based config via `@theme`.

## Theme Tokens

### CSS Custom Properties

Colors and design tokens are defined as CSS custom properties in `globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0.02 264.54);
  --primary-foreground: oklch(0.985 0 0);
  /* etc. */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* etc. */
}
```

### Using Theme Tokens in Classes

Reference tokens via Tailwind utility classes:

```tsx
// Colors
<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />
<div className="border-border" />
<div className="text-muted-foreground" />

// Never hardcode colors
// Bad:  className="bg-[#1a1a1a]"
// Good: className="bg-background"
```

## Responsive Design

### Mobile-First Approach

Base styles target mobile. Use breakpoint prefixes to scale up:

| Prefix | Min Width | Target |
|--------|----------|--------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

```tsx
<div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
  {/* Stacks vertically on mobile, horizontal on tablet+ */}
</div>
```

## Dark Mode

Dark mode uses the `class` strategy. The `.dark` class on `<html>` swaps CSS variables:

```tsx
// These automatically adapt to dark mode via CSS variables:
<div className="bg-background text-foreground" />

// For explicit dark-mode-only styles (rarely needed):
<div className="dark:border-white/10" />
```

## Common Utility Patterns

### Layout

```tsx
<div className="mx-auto max-w-4xl px-4 md:px-6" />     // Centered container
<div className="flex flex-col gap-4" />                   // Flex column
<div className="grid grid-cols-1 gap-6 md:grid-cols-2" /> // Responsive grid
```

### Typography

```tsx
<h1 className="text-3xl font-bold tracking-tight md:text-4xl" />
<p className="text-muted-foreground" />
<span className="text-sm font-medium" />
```

### Spacing

```tsx
<section className="py-12 lg:py-16" />   // Vertical section padding
<div className="mt-4 space-y-2" />        // Stacked children with gap
```

### Interactive States

```tsx
<a className="hover:text-primary transition-colors" />
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
```

## The cn() Utility

Use `cn()` from `@/lib/utils` for conditional class composition:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "rounded-lg border p-4",
  isActive && "border-primary bg-primary/5",
  className
)} />
```

## Anti-Patterns

- **Never** hardcode colors: use `bg-background`, not `bg-white` or `bg-[#fff]`
- **Never** use inline styles for things Tailwind can handle
- **Never** create `@apply` utility classes unless truly necessary
- **Never** use `px-[17px]` arbitrary values when a standard scale value works
