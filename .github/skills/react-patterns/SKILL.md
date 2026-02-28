---
name: React Patterns
type: skill
category: development
applies_to:
  - ui-developer
  - nextjs-developer
version: 1.1.0
---

# React Patterns

## Overview

React 19 patterns used in this Next.js 16 project. Server Components are the default; Client Components are opt-in.

## Server Components (Default)

```tsx
// No directive needed -- this is a Server Component
import { projects } from "@/data/projects";

export function ProjectList() {
  return (
    <ul>
      {projects.map((p) => (
        <li key={p.slug}>{p.title}</li>
      ))}
    </ul>
  );
}
```

**Can do**: Import data, access server resources, render async content.
**Cannot do**: Use hooks, attach event handlers, access browser APIs.

## Client Components (Opt-In)

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**When to use**: Event handlers, hooks, browser APIs, interactive state.

## Composition Pattern

Pass Server Component content into Client Components via children:

```tsx
// ServerWrapper.tsx (Server Component)
import { ClientShell } from "./ClientShell";

export function ServerWrapper() {
  return (
    <ClientShell>
      {/* This content is rendered on the server */}
      <p>Server-rendered content</p>
    </ClientShell>
  );
}

// ClientShell.tsx (Client Component)
"use client";

export function ClientShell({ children }: { readonly children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div>{open && children}</div>;
}
```

## Props Patterns

### Readonly Props

Always use `readonly` for props:

```tsx
interface CardProps {
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
  readonly children: React.ReactNode;
}
```

### Spreading className

Accept and merge `className` for composability:

```tsx
export function Card({ title, className, children }: CardProps) {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

## List Rendering

Always use a stable, unique `key`:

```tsx
{projects.map((project) => (
  <ProjectCard key={project.slug} project={project} />
))}
```

Never use array index as key if the list can be reordered or filtered.

## Conditional Rendering

```tsx
// Short-circuit
{showBadge && <Badge>New</Badge>}

// Ternary
{isLoading ? <Skeleton /> : <Content />}

// Early return
if (!project) {
  notFound();
}
```

## Event Handlers

Keep handlers inline for simple cases, extract for complex logic:

```tsx
// Simple -- inline
<button onClick={() => setOpen(true)}>Open</button>

// Complex -- extracted
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // complex logic
}
<form onSubmit={handleSubmit}>...</form>
```

## Vercel React Best Practices

The `.repos/best-practices/react-best-practices/` directory contains 57 performance optimization rules from Vercel Engineering, organized by priority. **Always consult these rules** when writing or reviewing React code.

### Priority Reference (highest to lowest)

| Priority | Category | Impact | Key Rules |
|----------|----------|--------|-----------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-parallel` (Promise.all for independent ops), `async-suspense-boundaries` (stream with Suspense) |
| 2 | Bundle Size | CRITICAL | `bundle-barrel-imports` (import directly, avoid barrels), `bundle-dynamic-imports` (next/dynamic for heavy components) |
| 3 | Server Performance | HIGH | `server-cache-react` (React.cache for dedup), `server-serialization` (minimize client data), `server-parallel-fetching` |
| 4 | Client Data Fetching | MEDIUM-HIGH | `client-swr-dedup` (SWR for request dedup), `client-passive-event-listeners` |
| 5 | Re-render Optimization | MEDIUM | `rerender-memo` (memoize expensive work), `rerender-derived-state` (subscribe to derived values), `rerender-lazy-state-init` |
| 6 | Rendering Performance | MEDIUM | `rendering-content-visibility` (for long lists), `rendering-conditional-render` (ternary not &&), `rendering-hoist-jsx` |
| 7 | JS Performance | LOW-MEDIUM | `js-early-exit`, `js-set-map-lookups` (O(1) lookups), `js-combine-iterations` |
| 8 | Advanced Patterns | LOW | `advanced-init-once`, `advanced-use-latest` |

### How to Use

Read individual rule files for detailed before/after code examples:

```
.repos/best-practices/react-best-practices/rules/async-parallel.md
.repos/best-practices/react-best-practices/rules/bundle-dynamic-imports.md
```

The full compiled guide is at: `.repos/best-practices/react-best-practices/AGENTS.md`

### Key Rules for This Project

For a static portfolio site, focus on:
- **Bundle size**: Use `next/dynamic` for heavy components (e.g., code syntax highlighters, carousels)
- **Barrel imports**: Import directly from component files, not barrel `index.ts` files
- **Rendering**: Use `content-visibility: auto` for long project lists
- **Re-renders**: Use `useMemo`/`useCallback` only when profiling shows a problem, not preemptively
- **Server components**: Keep data in Server Components; minimize what crosses the client boundary

## Component Organization

```
src/components/
  layout/           # Header, Footer, Nav (shared layout)
  ui/               # shadcn/ui primitives
  <feature>/        # Feature-specific components (e.g., projects/)
```

- One component per file (small helpers allowed in same file)
- Named exports preferred over default exports
- Group related components in feature directories
