/**
 * Screenshot Utility for Dev Preview
 *
 * Takes a screenshot of a given page on the running dev server.
 * Used by agents to visually verify UI changes.
 *
 * Usage:
 *   pnpm screenshot                    # Screenshots the home page
 *   pnpm screenshot /projects          # Screenshots the /projects page
 *   pnpm screenshot /contact --dark    # Screenshots in dark mode
 *   pnpm screenshot / --mobile         # Screenshots at mobile viewport
 *   pnpm screenshot / --full           # Full-page screenshot
 *
 * Output: screenshots/ directory (gitignored)
 */

import { chromium, type Page } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const SCREENSHOTS_DIR = path.join(process.cwd(), "screenshots");

// Parse CLI args
const args = process.argv.slice(2);
const pagePath = args.find((a) => a.startsWith("/")) || "/";
const isDark = args.includes("--dark");
const isMobile = args.includes("--mobile");
const isFullPage = args.includes("--full");

// Viewport presets
const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};

function sanitizePath(p: string): string {
  return p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "-");
}

function buildFilename(): string {
  const parts = [sanitizePath(pagePath)];
  if (isMobile) parts.push("mobile");
  if (isDark) parts.push("dark");
  if (isFullPage) parts.push("full");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  parts.push(timestamp);
  return parts.join("_") + ".png";
}

async function takeScreenshot() {
  // Ensure output directory exists
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  const viewport = isMobile ? VIEWPORTS.mobile : VIEWPORTS.desktop;
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport,
    colorScheme: isDark ? "dark" : "light",
    deviceScaleFactor: 2,
  });

  const page: Page = await context.newPage();

  try {
    const url = `${BASE_URL}${pagePath}`;
    console.log(`[Screenshot] Navigating to ${url}`);
    console.log(
      `   Viewport: ${viewport.width}x${viewport.height} | Theme: ${isDark ? "dark" : "light"} | Full page: ${isFullPage}`
    );

    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });

    // Wait for any animations to settle
    await page.waitForTimeout(500);

    const filename = buildFilename();
    const filepath = path.join(SCREENSHOTS_DIR, filename);

    await page.screenshot({
      path: filepath,
      fullPage: isFullPage,
    });

    console.log(`[OK] Screenshot saved: screenshots/${filename}`);
    console.log(`   Size: ${viewport.width}x${viewport.height}@2x`);
  } catch (error) {
    console.error(`[ERROR] Screenshot failed:`, error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

takeScreenshot();
