---
name: TypeScript Patterns
type: skill
category: development
applies_to:
  - nextjs-developer
  - qa-reviewer
version: 1.0.0
---

# TypeScript Patterns

## Overview

TypeScript strict mode is enabled. These patterns ensure type safety across the codebase.

## Core Rules

- Never use `any` -- use `unknown` and narrow, or define a proper type
- Use `interface` for object shapes with known properties
- Use `type` for unions, intersections, and computed types
- Prefer `readonly` for props and data that should not mutate
- Export types alongside their related code

## Interfaces vs Types

```typescript
// Use interface for object shapes
interface Project {
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly url?: string;
}

// Use type for unions and intersections
type Status = "draft" | "published" | "archived";
type ProjectWithStatus = Project & { readonly status: Status };
```

## Component Props

```typescript
// Always readonly
interface ButtonProps {
  readonly variant?: "default" | "outline" | "ghost";
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
}

// For components that extend HTML elements
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly title: string;
}
```

## Function Return Types

```typescript
// Explicit return types on exported functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Async functions
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // ...
}
```

## Readonly and Immutability

```typescript
// Readonly arrays
interface Project {
  readonly tags: readonly string[];
}

// Readonly params
interface PageProps {
  readonly params: Promise<{ slug: string }>;
}
```

## Type Narrowing

```typescript
// Prefer type narrowing over type assertions
const project = projects.find((p) => p.slug === slug);

// Good -- narrow with check
if (!project) {
  notFound();
}
// project is now narrowed to Project (not undefined)

// Bad -- type assertion
const project = projects.find((p) => p.slug === slug) as Project;
```

## Utility Types

```typescript
// Pick specific fields
type ProjectSummary = Pick<Project, "title" | "slug" | "description">;

// Make all fields optional
type PartialProject = Partial<Project>;

// Omit fields
type ProjectWithoutUrl = Omit<Project, "url">;
```

## Enums vs Unions

Prefer string literal unions over enums:

```typescript
// Good -- string literal union
type Theme = "light" | "dark" | "system";

// Avoid -- enum
enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}
```

## Anti-Patterns

```typescript
// Bad: any
function processData(data: any) { }

// Bad: type assertion without narrowing
const value = something as string;

// Bad: non-null assertion without checking
const element = document.getElementById("app")!;

// Bad: implicit any in callbacks
projects.forEach((p) => { }); // OK if projects is typed
projects.forEach(function(p) { }); // Ensure p is typed
