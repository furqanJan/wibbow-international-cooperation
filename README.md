# Wibbow International Cooperation

Premium dark-tech company website for **Wibbow International Cooperation**, a B2B technology partner offering Agentic AI, AI automation, networking and cloud services, system engineering, and cybersecurity solutions.

The project is built as a polished single-page React experience with responsive layouts, motion-enhanced sections, client-side contact validation, and a no-install static server fallback for environments where npm is not available.

![Wibbow desktop hero](screenshots/desktop-hero.png)

## Project Highlights

- Modern premium UI for an AI, cloud, systems, and cybersecurity company.
- Fully responsive desktop and mobile experience.
- Animated hero section with abstract secure AI infrastructure visuals.
- Service pillars for Agentic AI, AI Automations, Networking and Cloud, System Engineering, and CyberSecurity.
- Process and trust sections designed for B2B credibility.
- Client-side contact form validation with required-field, email, and success states.
- Reusable content model in `src/data/siteContent.js`.
- Smoke test and screenshot capture scripts included.

## Screenshots

### Desktop Contact Section

![Wibbow desktop contact section](screenshots/desktop-contact.png)

### Mobile Homepage

![Wibbow mobile homepage](screenshots/mobile-home.png)

## Tech Stack

- React
- JavaScript
- CSS
- Lucide icons
- Static Node.js server fallback
- Playwright-based smoke testing and screenshot capture

## Project Structure

```text
.
├── index.html
├── package.json
├── public/
│   └── favicon.svg
├── screenshots/
│   ├── desktop-contact.png
│   ├── desktop-hero.png
│   └── mobile-home.png
├── scripts/
│   ├── capture-screenshots.cjs
│   └── smoke-test.cjs
├── server.cjs
└── src/
    ├── App.jsx
    ├── components/
    ├── data/
    │   └── siteContent.js
    ├── lib/
    │   └── h.js
    ├── main.jsx
    └── styles.css
```

## Run Locally

If Node and npm are installed:

```bash
npm install
npm run dev
```

If npm is not available but Node is available:

```bash
node server.cjs
```

Then open:

```text
http://127.0.0.1:4173
```

## Available Scripts

```bash
npm run dev
```

Start the Vite development server.

```bash
npm run build
```

Create a production build with Vite.

```bash
npm run serve
```

Run the dependency-light static server fallback.

```bash
npm run smoke
```

Run the Playwright smoke test for desktop layout, mobile navigation, anchor scrolling, and contact validation.

```bash
npm run screenshots
```

Capture fresh desktop and mobile screenshots into the `screenshots/` folder.

## QA Coverage

The included smoke test verifies:

- Page title and hero heading.
- Five service cards.
- Five process steps.
- Four trust stats.
- Required contact-form validation.
- Invalid email validation.
- Static success confirmation.
- Anchor navigation.
- Mobile menu open and close behavior.
- Mobile horizontal overflow.

Latest local QA result:

```text
Smoke test passed: desktop, mobile nav, anchors, and contact validation.
```

## Notes

This is a static v1 marketing site. The contact form validates locally and displays a confirmation message, but it does not send data to a backend service yet.
