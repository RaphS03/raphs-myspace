---
name: shadcn/ui
type: skill
category: development
applies_to:
  - ui-developer
version: 1.0.0
---

# shadcn/ui

## Overview

shadcn/ui is a component collection built on Radix UI primitives and styled with Tailwind CSS. Components are copied into the project (not installed as a dependency), giving full control over styling and behavior.

## Installation

Add components via the CLI:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
```

Components are placed in `src/components/ui/`.

## Configuration

The `components.json` at the project root configures shadcn/ui:

- Component directory: `src/components/ui/`
- Utility import: `@/lib/utils` (the `cn()` function)
- Style: CSS variables (not hardcoded colors)

## Available Components

Common components to use (install as needed):

| Component | Use Case |
|-----------|----------|
| `Button` | Clickable actions, links styled as buttons |
| `Card` | Project cards, content containers |
| `Badge` | Tags, labels, status indicators |
| `Separator` | Visual dividers between sections |
| `NavigationMenu` | Main site navigation |
| `Sheet` | Mobile slide-out menu |
| `Tooltip` | Hover information |
| `Avatar` | Profile images |
| `Tabs` | Tabbed content sections |

## Usage Patterns

### Basic Import

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

### Button Variants

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
```

### Card Composition

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Detailed content here.</p>
  </CardContent>
  <CardFooter>
    <Badge>React</Badge>
    <Badge>TypeScript</Badge>
  </CardFooter>
</Card>
```

### Button as Link

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link href="/projects">View Projects</Link>
</Button>
```

## Neofolio Reference Components

The `.repos/neofolio/` directory contains a portfolio template built on shadcn/ui that provides premade components. **Use neofolio components as reference and inspiration first** -- if a neofolio component fits the need, adapt its pattern. If nothing suitable exists, build from scratch with standard shadcn/ui.

### Available Neofolio Components

| Component | Path | Use As Reference For |
|-----------|------|---------------------|
| Navigation (Sidebar) | `components/layout/navigation.tsx` | Sidebar nav with avatar, active state, icon links |
| Footer | `components/layout/footer.tsx` | Minimal footer layout |
| Main Layout | `components/layout/main.tsx` | Page content wrapper |
| Project List Item | `components/content/project-list-item.tsx` | Project card with image, title, date |
| Blog List Item | `components/content/blog-list-item.tsx` | Blog post card pattern |
| Product List Item | `components/content/product-list-item.tsx` | Product card pattern |
| Review List Item | `components/content/review-list-item.tsx` | Testimonial/review layout |
| Service List Item | `components/content/service-list-item.tsx` | Service offering card |
| Blogs Section | `components/content/sections/blogs-section.tsx` | Section layout with grid |
| Theme Toggle | `components/theme-toggle.tsx` | Dark/light mode toggle |
| Back Button | `components/back-button.tsx` | Navigation back button |
| Download Button | `components/download-button.tsx` | File download CTA |
| Image Carousel | `app/store/[slug]/image-carousel.tsx` | Multi-image carousel |

### Neofolio shadcn/ui Primitives

Neofolio includes these shadcn/ui primitives in `components/ui/`:
`avatar`, `button`, `card`, `carousel`, `form`, `input`, `label`, `separator`, `sheet`, `sidebar`, `skeleton`, `textarea`, `tooltip`

### Usage Rules

- **Check neofolio first** before building a new component pattern
- **Adapt, don't copy verbatim** -- adjust naming, styles, and conventions to match this project
- **Use named exports** (neofolio uses default exports; convert to named exports)
- **Apply our design tokens** -- replace neofolio styling with our design system tokens
- If neofolio doesn't have what you need, build with standard shadcn/ui primitives

## Customization Rules

- **Do** use the `className` prop to add Tailwind classes to shadcn components
- **Do** use `cn()` for conditional styling
- **Do** use the `asChild` prop to render a different element (e.g., `<Link>`)
- **Do not** modify files in `src/components/ui/` for one-off customizations
- **Do not** create wrapper components unless you need reusable project-specific variants
- **Do** create wrapper components with CVA if you need reusable custom variants

## Creating Custom Variants

Use Class Variance Authority (CVA) for project-specific variants:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("mx-auto px-4 md:px-6", {
  variants: {
    width: {
      narrow: "max-w-2xl",
      default: "max-w-4xl",
      wide: "max-w-6xl",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export function Section({ width, className, children }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ width }), className)}>
      {children}
    </section>
  );
}
