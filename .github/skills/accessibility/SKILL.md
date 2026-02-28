---
name: Accessibility
type: skill
category: design
applies_to:
  - ui-developer
  - qa-reviewer
version: 1.0.0
---

# Accessibility

## Overview

All UI must meet WCAG 2.1 AA standards. Accessibility is not optional -- it is a core requirement for every component and page.

## Semantic HTML

Use the correct HTML element for its purpose:

| Element | Usage |
|---------|-------|
| `<main>` | Primary page content (one per page) |
| `<nav>` | Navigation sections |
| `<header>` | Page or section header |
| `<footer>` | Page or section footer |
| `<section>` | Thematic grouping with a heading |
| `<article>` | Self-contained content (project cards, blog posts) |
| `<aside>` | Supplementary content |
| `<h1>` - `<h6>` | Headings in proper hierarchy (one `<h1>` per page) |
| `<button>` | Clickable actions (not `<div onClick>`) |
| `<a>` | Navigation links |
| `<ul>` / `<ol>` | Lists of items |

### Heading Hierarchy

Every page must have exactly one `<h1>`. Headings must not skip levels:

```tsx
// Good
<h1>Projects</h1>
  <h2>Web Applications</h2>
    <h3>Project Name</h3>
  <h2>Tools & Libraries</h2>

// Bad -- skips h2
<h1>Projects</h1>
  <h3>Project Name</h3>
```

## Images

Every `<img>` and `<Image>` must have `alt` text:

```tsx
// Informative image -- describe the content
<Image src="/project-screenshot.png" alt="Dashboard showing real-time analytics charts" />

// Decorative image -- empty alt (not omitted)
<Image src="/decorative-dots.svg" alt="" aria-hidden="true" />
```

## Keyboard Navigation

- All interactive elements must be reachable via Tab key
- Focus order must follow visual order (no `tabIndex` hacks)
- Focus must be visible -- use `focus-visible:` styles
- Custom interactive elements need keyboard handlers (`onKeyDown` for Enter/Space)

```tsx
// shadcn/ui handles this for buttons, but for custom elements:
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Custom clickable
</div>
```

**Prefer native elements**: Use `<button>` and `<a>` instead of `<div>` with role/tabIndex.

## ARIA Attributes

Use ARIA only when semantic HTML is insufficient:

```tsx
// Navigation landmark
<nav aria-label="Main navigation">

// Mobile menu toggle
<button aria-expanded={isOpen} aria-controls="mobile-menu">
  Menu
</button>
<div id="mobile-menu" role="dialog" aria-label="Navigation menu">

// Icon-only buttons need labels
<button aria-label="Toggle dark mode">
  <SunIcon />
</button>

// External links
<a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
  GitHub <span className="sr-only">(opens in new tab)</span>
</a>
```

## Color Contrast

- **Normal text**: Minimum 4.5:1 contrast ratio against background
- **Large text** (18px+ bold or 24px+ regular): Minimum 3:1
- **UI components**: Minimum 3:1 for borders and icons
- Using the project's CSS custom properties should satisfy these requirements in both light and dark mode
- Do not rely on color alone to convey information (add text labels or icons)

## Screen Reader Utilities

Use Tailwind's `sr-only` class for visually hidden but screen-reader-accessible text:

```tsx
// Skip link (should be first focusable element)
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Skip to main content
</a>

// Descriptive text for icon-only elements
<button>
  <MoonIcon />
  <span className="sr-only">Toggle dark mode</span>
</button>
```

## Checklist for Every Component

- [ ] Uses semantic HTML elements
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] All images have appropriate alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Focus styles are visible (`focus-visible:ring-2`)
- [ ] ARIA attributes used correctly where needed
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] No information conveyed by color alone
- [ ] Works with screen readers (test with labels and landmarks)
