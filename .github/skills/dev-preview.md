---
name: Dev Preview
type: skill
category: development
applies_to:
  - ui-developer
  - nextjs-developer
  - coordinator
  - qa-reviewer
version: 1.0.0
---

# Dev Preview

## Overview

This skill enables agents to run the development server and take screenshots of pages to visually verify UI changes during development. It uses Playwright to capture screenshots that both agents and the user can inspect.

## Prerequisites

- `@playwright/test` is installed as a dev dependency
- Chromium browser is installed via `npx playwright install chromium`
- The `scripts/screenshot.ts` utility is available

## Workflow

### 1. Start the Dev Server

Before taking screenshots, ensure the Next.js dev server is running:

```bash
pnpm dev
```

The server runs at `http://localhost:3000`. If already running (check active terminals), skip this step.

### 2. Open in Browser (for the user)

After making changes, tell the user to check in their browser:

```bash
# The dev server auto-refreshes on file save
# User can view at http://localhost:3000
```

### 3. Take Screenshots (for agent verification)

Use the screenshot utility to capture a page:

```bash
# Home page (default)
pnpm screenshot

# Specific page
pnpm screenshot /projects
pnpm screenshot /resume
pnpm screenshot /contact
pnpm screenshot /projects/my-project-slug

# With options
pnpm screenshot /projects --dark        # Dark mode
pnpm screenshot / --mobile              # Mobile viewport (390x844)
pnpm screenshot / --full                # Full-page screenshot
pnpm screenshot / --mobile --dark       # Combine flags
```

Screenshots are saved to `screenshots/` (gitignored) with auto-generated filenames:
`<page>_<flags>_<timestamp>.png`

### 4. Review Screenshots

After taking a screenshot, report what was captured:
- File path in `screenshots/` directory
- Viewport size and theme used
- Direct the user to open the screenshot file if they want to see it

## When to Use

| Situation | Action |
|-----------|--------|
| After building a new component | Screenshot the page it appears on |
| After styling changes | Screenshot in both light and dark mode |
| After layout changes | Screenshot at both desktop and mobile |
| Before completing a task | Screenshot all affected pages as verification |
| QA review | Screenshot all pages mentioned in the SDD |

## Screenshot Commands Quick Reference

| Command | Description |
|---------|-------------|
| `pnpm screenshot` | Home page, desktop, light mode |
| `pnpm screenshot /projects` | Projects page |
| `pnpm screenshot / --dark` | Home page in dark mode |
| `pnpm screenshot / --mobile` | Home page at mobile viewport |
| `pnpm screenshot / --full` | Home page full-page capture |
| `pnpm screenshot /projects --mobile --dark` | Projects, mobile, dark |

## Viewport Sizes

| Preset | Width | Height | Use Case |
|--------|-------|--------|----------|
| Desktop (default) | 1280 | 800 | Standard desktop view |
| Mobile (`--mobile`) | 390 | 844 | iPhone 14 equivalent |

All screenshots are captured at 2x device pixel ratio for retina quality.

## Integration with Development Workflow

1. **UI Developer**: Screenshot after building components to verify visual output
2. **Coordinator**: Request screenshots from specialists as part of task completion
3. **QA Reviewer**: Take screenshots of all affected pages during review, compare against SDD requirements
4. **Next.js Developer**: Screenshot after metadata/layout changes to verify rendering

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Browser was not found" | Run `npx playwright install chromium` |
| Connection refused | Ensure `pnpm dev` is running first |
| Timeout | Page may be slow; check for build errors in dev server output |
| Missing screenshots dir | Created automatically on first run |

## File Locations

| Item | Path |
|------|------|
| Screenshot script | `scripts/screenshot.ts` |
| Output directory | `screenshots/` (gitignored) |
| Playwright browsers | `~\AppData\Local\ms-playwright\` (system-level) |
