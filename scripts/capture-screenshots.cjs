const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";
const screenshotDir = path.join(process.cwd(), "screenshots");

async function capture() {
  fs.mkdirSync(screenshotDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1
  });

  await desktop.goto(baseUrl, { waitUntil: "load" });
  await desktop.screenshot({
    path: path.join(screenshotDir, "desktop-hero.png"),
    fullPage: false
  });

  await desktop.locator('a.nav-cta[href="#contact"]').click();
  await desktop.waitForTimeout(1300);
  await desktop.screenshot({
    path: path.join(screenshotDir, "desktop-contact.png"),
    fullPage: false
  });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 900 },
    isMobile: true,
    deviceScaleFactor: 1
  });

  await mobile.goto(baseUrl, { waitUntil: "load" });
  await mobile.screenshot({
    path: path.join(screenshotDir, "mobile-home.png"),
    fullPage: false
  });

  await browser.close();
  console.log(`Captured screenshots in ${screenshotDir}`);
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
