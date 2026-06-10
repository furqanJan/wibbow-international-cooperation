const { chromium } = require("playwright");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";

async function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const consoleMessages = [];
  const pageErrors = [];

  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleMessages.push(message.text());
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });

  await assert((await page.title()) === "Wibbow International Cooperation", "Page title mismatch.");
  await assert(
    (await page.locator("h1").textContent()) === "Wibbow International Cooperation",
    "Hero heading mismatch."
  );
  await assert((await page.locator(".service-card").count()) === 5, "Expected five service cards.");
  await assert((await page.locator(".process-step").count()) === 5, "Expected five process steps.");
  await assert((await page.locator(".stat-item").count()) === 4, "Expected four trust stats.");

  await page.click("text=Validate request");
  await assert((await page.locator("form small").count()) === 3, "Expected required-field errors.");

  await page.fill('input[name="name"]', "Furqan Jan");
  await page.fill('input[name="email"]', "not-an-email");
  await page.fill('textarea[name="message"]', "We need an AI automation and cloud security roadmap.");
  await page.click("text=Validate request");
  await assert(
    (await page.locator("#email-error").textContent()) === "Enter a valid email address.",
    "Expected invalid email error."
  );

  await page.fill('input[name="email"]', "furqan@example.com");
  await page.click("text=Validate request");
  await assert(
    (await page.locator(".form-status.success").textContent()).includes("no message is sent"),
    "Expected static success confirmation."
  );

  await page.click('a[href="#services"]');
  await page.waitForTimeout(500);
  await assert(await page.evaluate(() => window.scrollY > 300), "Services anchor did not scroll.");

  const mobile = await browser.newPage({ viewport: { width: 390, height: 900 }, isMobile: true });
  await mobile.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await mobile.click(".nav-toggle");
  await assert((await mobile.locator(".site-nav.is-open a").count()) === 5, "Mobile navigation did not open.");

  const overflow = await mobile.evaluate(() => {
    const offenders = [];
    const width = document.documentElement.clientWidth;

    for (const element of document.querySelectorAll("body *")) {
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && (rect.left < -2 || rect.right > width + 2)) {
        offenders.push(element.tagName.toLowerCase());
      }
    }

    return offenders;
  });
  await assert(overflow.length === 0, `Mobile horizontal overflow: ${overflow.join(", ")}`);

  await browser.close();

  if (consoleMessages.length || pageErrors.length) {
    throw new Error(`Browser errors: ${[...consoleMessages, ...pageErrors].join(" | ")}`);
  }

  console.log("Smoke test passed: desktop, mobile nav, anchors, and contact validation.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
