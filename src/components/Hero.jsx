import { ArrowRight } from "lucide-react";
import { brand, heroSignals, highlights } from "../data/siteContent.js";
import { h } from "../lib/h.js";

export default function Hero() {
  return h(
    "section",
    { id: "home", className: "hero-section" },
    h(
      "div",
      { className: "hero-grid" },
      h(
        "div",
        { className: "hero-copy", "data-reveal": true },
        h("p", { className: "eyebrow" }, "Agentic AI. Automation. Secure cloud systems."),
        h("h1", null, brand.name),
        h("p", { className: "hero-lede" }, brand.tagline),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "button primary", href: "#contact" }, "Discuss your roadmap ", h(ArrowRight, { size: 18 })),
          h("a", { className: "button secondary", href: "#services" }, "Explore services")
        ),
        h(
          "div",
          { className: "highlight-list", "aria-label": "Company strengths" },
          highlights.map((item) => h("span", { key: item }, item))
        )
      ),
      h(
        "div",
        {
          className: "hero-visual",
          "data-reveal": true,
          "aria-label": "Secure AI cloud infrastructure visualization"
        },
        h("div", { className: "visual-orbit visual-orbit-one" }),
        h("div", { className: "visual-orbit visual-orbit-two" }),
        h("div", { className: "visual-core" }, h("span"), h("span"), h("span")),
        h(
          "div",
          { className: "signal-stack" },
          heroSignals.map(({ label, Icon }) =>
            h("div", { className: "signal-row", key: label }, h(Icon, { size: 18 }), h("span", null, label))
          )
        )
      )
    )
  );
}
