import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const port = 3100;
const base = `http://127.0.0.1:${port}`;
const server = spawn("npm", ["run", "start", "--", "--hostname", "127.0.0.1", "--port", String(port)], {
  stdio: "inherit",
  env: { ...process.env, PORT: String(port) },
});
const slugs = ["ponsel-yen", "desa-cantik", "7kaih", "spotgacor", "ukt", "jastip", "mudah-catat", "monitoring-ta"];

async function ready() {
  for (let attempt = 0; attempt < 90; attempt++) {
    if (server.exitCode !== null) throw new Error("Next.js server exited before startup");
    try {
      const response = await fetch(base);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error("Next.js server did not start");
}

let browser;
try {
  await ready();
  await mkdir("visual-qa", { recursive: true });
  browser = await chromium.launch({ headless: true });
  for (const [size, viewport] of Object.entries({
    desktop: { width: 1440, height: 900 },
    mobile: { width: 390, height: 844 },
  })) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: "reduce" });
    page.on("pageerror", (error) => { throw error; });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.locator(".hero-tech").screenshot({ path: `visual-qa/${size}-hero-tech.png` });
    await page.locator(".projects-list .tag-row").first().screenshot({ path: `visual-qa/${size}-project-tech.png` });
    const colors = await page.locator(".hero-tech .tech-badge-icon").evaluateAll((nodes) =>
      nodes.map((node) => getComputedStyle(node).color)
    );
    console.log(`${size} hero tech icon colors: ${colors.join(", ")}`);
    const visuals = page.locator(".projects-list .project-visual");
    if (await visuals.count() !== slugs.length) throw new Error(`Expected ${slugs.length} project visuals`);
    for (let index = 0; index < slugs.length; index++) {
      await visuals.nth(index).screenshot({ path: `visual-qa/${size}-${slugs[index]}.png` });
    }
    for (const slug of slugs) {
      await page.goto(`${base}/projects/${slug}`, { waitUntil: "networkidle" });
      await page.locator(".highlight-grid").screenshot({ path: `visual-qa/${size}-highlights-${slug}.png` });
      await page.locator(".architecture-flow").screenshot({ path: `visual-qa/${size}-system-${slug}.png` });
      if (slug === slugs[0]) {
        await page.locator(".case-heading").screenshot({ path: `visual-qa/${size}-case-heading.png` });
        await page.locator(".case-hero .project-visual").screenshot({ path: `visual-qa/${size}-case-study.png` });
      }
    }
    await page.close();
  }
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
