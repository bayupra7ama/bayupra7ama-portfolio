import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const port = 3100;
const base = `http://127.0.0.1:${port}`;
const server = spawn("npm", ["run", "start", "--", "--hostname", "127.0.0.1", "--port", String(port)], {
  stdio: "inherit",
  env: { ...process.env, PORT: String(port) },
});
const slugs = ["mudah-catat", "spotgacor", "monitoring-ta", "resikapp", "lapor-infra", "7kaih"];

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
    const visuals = page.locator(".projects-list .project-visual");
    if (await visuals.count() !== slugs.length) throw new Error("Expected six project visuals");
    for (let index = 0; index < slugs.length; index++) {
      await visuals.nth(index).screenshot({ path: `visual-qa/${size}-${slugs[index]}.png` });
    }
    await page.goto(`${base}/projects/mudah-catat`, { waitUntil: "networkidle" });
    await page.locator(".case-hero .project-visual").screenshot({ path: `visual-qa/${size}-case-study.png` });
    await page.close();
  }
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
