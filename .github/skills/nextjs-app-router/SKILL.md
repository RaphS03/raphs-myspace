---
name: Next.js App Router
type: skill
category: development
applies_to:
  - nextjs-developer
  - ui-developer
version: 1.0.0
---

# Next.js App Router

## Overview

This project uses Next.js 16 with the App Router. All routing is file-system based under `src/app/`.

## File Conventions

| File | Purpose |
|------|---------|
| `page.tsx` | Page component (makes a route public) |
| `layout.tsx` | Shared layout wrapping child pages |
| `loading.tsx` | Loading UI (React Suspense boundary) |
| `error.tsx` | Error boundary (`'use client'` required) |
| `not-found.tsx` | 404 UI for `notFound()` calls |
| `template.tsx` | Like layout but re-mounts on navigation |

## Routing Patterns

### Static Route

```
src/app/resume/page.tsx      ->  /resume
src/app/contact/page.tsx     ->  /contact
```

### Dynamic Route

```
src/app/projects/[slug]/page.tsx  ->  /projects/my-project
```

Use `generateStaticParams` to pre-render known paths:

```tsx
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
```

### Route Groups (if needed)

```
src/app/(marketing)/page.tsx   ->  / (grouped for shared layout, no URL impact)
```

## Server vs Client Components

### Server Components (default)

- Can directly import data, read files, access server-only resources
- Cannot use hooks, event handlers, or browser APIs
- No directive needed

### Client Components

- Must have `'use client'` directive at the top of the file
- Can use hooks (`useState`, `useEffect`, etc.) and event handlers
- Should be kept small and pushed to leaf nodes

### Boundary Rule

A Server Component can import a Client Component, but a Client Component cannot import a Server Component. Pass Server Component content as `children` props instead.

## Metadata

### Static Metadata

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Raph's MySpace",
  description: "Description for search engines.",
};
```

### Dynamic Metadata

```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title} | Raph's MySpace`,
    description: project?.description,
  };
}
```

## Navigation

- Use `<Link href="/path">` from `next/link` for internal links
- Use `<Image>` from `next/image` for optimized images
- Use `notFound()` from `next/navigation` to trigger 404

## Params in Next.js 16

In Next.js 16, `params` is a `Promise` and must be awaited:

```tsx
interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // ...
}
```

## Data Fetching

This project uses co-located data files (not APIs or CMS):

```tsx
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
