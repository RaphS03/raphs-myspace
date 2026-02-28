---
name: Design System
type: skill
category: design
applies_to:
  - ui-developer
version: 1.1.0
---

# Design System

## Overview

Design tokens, spacing, typography, and visual rules for Raph's MySpace. This skill ensures visual consistency across all pages and components.

## Design Philosophy

The site should feel **minimal, elegant, simple, and clean** with **slight animation** for polish.

| Principle | Implementation |
|-----------|---------------|
| **Minimal** | Remove anything that doesn't serve a purpose. No decorative clutter, no excess borders/shadows. Let content breathe with generous whitespace. |
| **Elegant** | Refined typography, intentional spacing, thoughtful color palette. Every detail should feel considered. |
| **Simple** | Clear information hierarchy. Users find what they need instantly. No cognitive overload. |
| **Clean** | Consistent alignment, uniform spacing, flat design. Grid-aligned layouts with crisp edges. |
| **Slight animation** | Subtle motion to add life without distraction. Entrance animations, hover transitions, and smooth page transitions. |

### Animation Guidelines

Use CSS transitions and Tailwind's built-in animation utilities. Keep animations **subtle and purposeful**.

| Animation Type | Implementation | Duration |
|---------------|---------------|----------|
| Hover state | `transition-colors duration-200` | 150-200ms |
| Element entrance | `animate-in fade-in slide-in-from-bottom-4` | 300-500ms |
| Page section stagger | Stagger children with increasing `delay-[N]` | 50-100ms between items |
| Scale on hover | `hover:scale-[1.02] transition-transform duration-200` | 200ms |
| Opacity fade | `transition-opacity duration-300` | 300ms |

**Animation Rules**:
- Prefer CSS transitions over JS animation libraries (keep bundle small)
- All animations must respect `prefers-reduced-motion` -- use Tailwind's `motion-reduce:` modifier
- Duration: 150-500ms (never longer unless justified)
- Easing: `ease-out` for entrances, `ease-in-out` for transitions
- No animation on initial page load above the fold (avoid layout shift)
- Hover animations only on interactive elements (links, buttons, cards)
- Stagger animations for lists/grids (50-100ms between items)

```tsx
// Example: Fade-in on scroll with stagger
<div className="space-y-6">
  {projects.map((project, i) => (
    <div
      key={project.slug}
      className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
      style={{ animationDelay: `${i * 75}ms` }}
    >
      <ProjectCard project={project} />
    </div>
  ))}
</div>

// Example: Hover card lift
<div className="transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
  <Card>...</Card>
</div>

// Example: Respect reduced motion
<div className="motion-reduce:animate-none animate-in fade-in">
  <Content />
</div>
```

## Color Tokens

All colors come from CSS custom properties. Never hardcode color values.

| Token | Usage |
|-------|-------|
| `background` / `foreground` | Page background and default text |
| `primary` / `primary-foreground` | Primary actions, links, accents |
| `secondary` / `secondary-foreground` | Secondary buttons, subtle backgrounds |
| `muted` / `muted-foreground` | Subdued text, placeholder text |
| `accent` / `accent-foreground` | Hover states, highlights |
| `destructive` / `destructive-foreground` | Error states, destructive actions |
| `border` | Borders and dividers |
| `ring` | Focus rings |
| `card` / `card-foreground` | Card backgrounds and text |

## Typography Scale

Use Tailwind's built-in scale. Do not define custom font sizes.

| Element | Classes | Usage |
|---------|---------|-------|
| Page title (h1) | `text-3xl font-bold tracking-tight md:text-4xl` | Main heading per page |
| Section title (h2) | `text-2xl font-semibold tracking-tight md:text-3xl` | Section headings |
| Subsection (h3) | `text-xl font-semibold` | Card titles, subsections |
| Body text | `text-base` (default) | Paragraphs, content |
| Small text | `text-sm text-muted-foreground` | Captions, metadata |
| Extra small | `text-xs text-muted-foreground` | Timestamps, labels |

## Spacing

Use consistent spacing throughout:

| Context | Spacing | Tailwind Class |
|---------|---------|---------------|
| Page vertical padding | 48-64px | `py-12 lg:py-16` |
| Page horizontal padding | 16-24px | `px-4 md:px-6` |
| Section gap | 32-48px | `space-y-8 lg:space-y-12` |
| Card padding | 16-24px | `p-4 md:p-6` |
| Element gap (list items, cards) | 16-24px | `gap-4 md:gap-6` |
| Inline element gap | 8px | `gap-2` |
| Text block spacing | 16px | `space-y-4` |

## Container Width

| Width | Class | Usage |
|-------|-------|-------|
| Narrow | `max-w-2xl` | Blog-style content, text-heavy pages |
| Default | `max-w-4xl` | Most pages (projects, resume) |
| Wide | `max-w-6xl` | Grid layouts, wide content |

Always center with `mx-auto` and add horizontal padding: `mx-auto max-w-4xl px-4 md:px-6`

## Border Radius

Use the project's radius token:

| Size | Class | Usage |
|------|-------|-------|
| Default | `rounded-lg` | Cards, containers |
| Small | `rounded-md` | Buttons, badges, inputs |
| Full | `rounded-full` | Avatars, circular elements |

## Shadows

Use sparingly for depth:

| Class | Usage |
|-------|-------|
| `shadow-sm` | Subtle card elevation |
| `shadow-md` | Hover state elevation |
| No shadow by default | Flat design is preferred |

## Visual Rules

- **Whitespace is a feature**: Generous padding and margins create a clean look
- **Flat design**: Minimal shadows; use borders for separation
- **Consistent alignment**: Left-align text; center only hero/CTA sections
- **Visual hierarchy**: Size + weight + color to guide the eye (not decoration)
- **Two-column max on mobile**: Badges/tags can wrap, but content is single column
- **Image aspect ratios**: Use `aspect-video` (16:9) for project thumbnails

## Dark Mode Considerations

- All colors swap automatically via CSS variables
- Test both modes for every component
- Borders may need subtle adjustments: `border-border` handles this
- Avoid `bg-white` or `text-black` -- always use semantic tokens
