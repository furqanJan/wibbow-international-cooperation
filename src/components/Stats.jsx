import { stats } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";
import { h } from "../lib/h.js";

export default function Stats() {
  return h(
    "section",
    { id: "trust", className: "section-block trust-section" },
    h(
      "div",
      { className: "trust-layout" },
      h(SectionIntro, {
        eyebrow: "Trust",
        title: "Built for teams that need clarity before velocity.",
        text: "The first version of every solution should be understandable, measurable, and maintainable. That is the standard Wibbow uses for AI, cloud, systems, and cybersecurity work."
      }),
      h(
        "div",
        { className: "stats-grid", "data-reveal": true },
        stats.map((stat) =>
          h("div", { className: "stat-item", key: stat.label }, h("strong", null, stat.value), h("span", null, stat.label))
        )
      )
    )
  );
}
