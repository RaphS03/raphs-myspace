---
name: SEO & Metadata
type: skill
category: design
applies_to:
  - nextjs-developer
  - content-writer
version: 1.0.0
---

# SEO & Metadata

## Overview

Every page must export metadata for search engines and social sharing. Next.js App Router provides a built-in metadata API.

## Page Metadata

### Static Metadata

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Raph's MySpace",
  description: "Explore software projects by Raphael Schwalb, from full-stack web apps to AI-powered tools.",
};
```

### Dynamic Metadata

```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Raph's MySpace`,
    description: project.description,
  };
}
```

## Title Format

All page titles follow the pattern: `Page Name | Raph's MySpace`

| Page | Title |
|------|-------|
| Home | `Raph's MySpace` (no suffix) |
| Projects | `Projects \| Raph's MySpace` |
| Project detail | `Project Title \| Raph's MySpace` |
| Resume | `Resume \| Raph's MySpace` |
| Contact | `Contact \| Raph's MySpace` |

## Root Layout Metadata

The root layout (`src/app/layout.tsx`) should define default metadata:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Raph's MySpace",
    template: "%s | Raph's MySpace",
  },
  description: "Personal portfolio of Raphael Schwalb, software engineer and CS student at Monash University.",
  metadataBase: new URL("https://raphs-myspace.com"), // Update with actual domain
};
```

With `template`, child pages only need to set the page-specific part:

```tsx
// In projects/page.tsx
export const metadata: Metadata = {
  title: "Projects", // Renders as "Projects | Raph's MySpace"
  description: "...",
};
```

## Meta Description Rules

- Between 150-160 characters
- Include primary keywords naturally
- Describe the page content accurately
- Write for humans, not search engines
- Each page must have a unique description
- Front-load important information

## Open Graph (Social Sharing)

Add Open Graph metadata for rich social media previews:

```tsx
export const metadata: Metadata = {
  title: "Projects | Raph's MySpace",
  description: "...",
  openGraph: {
    title: "Projects | Raph's MySpace",
    description: "...",
    type: "website",
    url: "https://raphs-myspace.com/projects",
  },
};
```

## Semantic HTML for SEO

- One `<h1>` per page matching the page topic
- Heading hierarchy reflects content structure
- Use `<main>` for primary content
- Use `<nav>` for navigation
- Use descriptive link text (not "click here")

## Structured Data (Future)

When the site has enough content, consider adding JSON-LD for:

- Person schema (about Raph)
- Project/CreativeWork schema (for projects)
- BreadcrumbList (for navigation)

## Sitemap and Robots

Next.js can auto-generate these. When deploying:

- `src/app/sitemap.ts` -- generates sitemap.xml
- `src/app/robots.ts` -- generates robots.txt

## Checklist

- [ ] Every page has a `title` and `description`
- [ ] Root layout has `metadataBase` and title `template`
- [ ] Descriptions are 150-160 characters
- [ ] Each description is unique
- [ ] Open Graph metadata present on key pages
- [ ] One `<h1>` per page
- [ ] Descriptive link text used throughout
