---
name: Code Review Checklist
type: skill
category: process
applies_to:
  - qa-reviewer
version: 1.0.0
---

# Code Review Checklist

## Overview

Systematic checklist for the QA Reviewer to evaluate every piece of work before it is presented to the user. Go through each section in order.

## 1. Build & Lint

- [ ] `pnpm build` passes without errors
- [ ] `pnpm lint` passes without warnings
- [ ] `pnpm typecheck` passes without errors
- [ ] No console warnings or errors in dev mode

## 2. TypeScript

- [ ] No `any` types used
- [ ] Props are marked `readonly`
- [ ] Explicit return types on exported functions
- [ ] `interface` used for object shapes, `type` for unions
- [ ] Types exported alongside related code
- [ ] No type assertions (`as`) without prior narrowing

## 3. React & Components

- [ ] Server Components by default (no unnecessary `'use client'`)
- [ ] `'use client'` only where hooks, events, or browser APIs are needed
- [ ] Named exports (not default exports)
- [ ] Props destructured in function signature
- [ ] `cn()` used for conditional class composition
- [ ] Components under ~150 lines (extract sub-components if larger)
- [ ] One component per file (small helpers allowed)
- [ ] Stable, unique `key` props on list items (not array index)

## 4. Styling & Design

- [ ] Tailwind utility classes used (no inline styles)
- [ ] Theme tokens used for colors (`bg-background`, not `bg-white`)
- [ ] Mobile-first responsive approach (`base` then `md:`, `lg:`)
- [ ] Spacing follows design system (consistent use of scale)
- [ ] Typography follows design system scale
- [ ] Dark mode renders correctly (test with `.dark` class)
- [ ] No hardcoded color values (`#hex`, `rgb()`, etc.)

## 5. Accessibility

- [ ] Semantic HTML elements used (`<main>`, `<nav>`, `<section>`, etc.)
- [ ] One `<h1>` per page, heading hierarchy correct
- [ ] All images have descriptive `alt` text
- [ ] Interactive elements are keyboard accessible
- [ ] Focus styles visible (`focus-visible:ring-2`)
- [ ] Icon-only buttons have `aria-label`
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] No information conveyed by color alone

## 6. SEO & Metadata

- [ ] Page exports `metadata` or `generateMetadata`
- [ ] Title follows format: `Page Name | Raph's MySpace`
- [ ] Meta description is 150-160 characters
- [ ] Meta description is unique to the page
- [ ] `<h1>` matches page topic
- [ ] Descriptive link text (not "click here")

## 7. Responsive Design

- [ ] Renders correctly at 375px (mobile)
- [ ] Renders correctly at 768px (tablet)
- [ ] Renders correctly at 1024px+ (desktop)
- [ ] No horizontal overflow at any breakpoint
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Text is readable without zooming on mobile

## 8. Next.js Patterns

- [ ] Pages use App Router conventions (`page.tsx`, `layout.tsx`)
- [ ] Dynamic routes use `generateStaticParams` for known paths
- [ ] `params` is awaited (Next.js 16 async params)
- [ ] `<Link>` used for internal navigation (not `<a>`)
- [ ] `<Image>` used for images (not `<img>`)
- [ ] `notFound()` called for missing dynamic content

## 9. Code Standards

- [ ] File naming follows conventions (PascalCase or kebab-case for components)
- [ ] Import order is logical (React, libs, components, utils, data)
- [ ] No unused imports or variables
- [ ] No commented-out code
- [ ] No TODO comments left unaddressed (unless documented in SDD)

## 10. SDD Compliance

- [ ] All acceptance criteria from the SDD are met
- [ ] All specified files have been created/modified
- [ ] All specified components exist and function
- [ ] Implementation matches the technical design
- [ ] No scope creep (nothing added beyond SDD spec)

## Review Outcome

After completing the checklist, determine the outcome:

| Outcome | Criteria |
|---------|----------|
| **APPROVED** | All checks pass, no Critical or Major issues |
| **APPROVED WITH NOTES** | All checks pass, Minor issues noted for future improvement |
| **CHANGES REQUESTED** | Critical or Major issues found that must be resolved |
