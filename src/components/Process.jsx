import { processSteps } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";
import { h } from "../lib/h.js";

export default function Process() {
  return h(
    "section",
    { id: "approach", className: "section-block approach-section" },
    h(SectionIntro, {
      eyebrow: "Approach",
      title: "From architecture to protected operations.",
      text: "Every engagement is shaped around the systems you already run, the risks you need to reduce, and the outcomes your teams need to repeat."
    }),
    h(
      "div",
      { className: "process-track", "data-reveal": true },
      processSteps.map((step, index) =>
        h(
          "article",
          { className: "process-step", key: step.title },
          h("span", null, String(index + 1).padStart(2, "0")),
          h("h3", null, step.title),
          h("p", null, step.text)
        )
      )
    )
  );
}
