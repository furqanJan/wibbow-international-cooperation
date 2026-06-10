import { services } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";
import { h } from "../lib/h.js";

export default function Services() {
  return h(
    "section",
    { id: "services", className: "section-block services-section" },
    h(SectionIntro, {
      eyebrow: "Solutions",
      title: "One partner for intelligent, secure infrastructure.",
      text: "Wibbow blends automation strategy with engineering execution, helping teams modernize systems without losing control of reliability or security."
    }),
    h(
      "div",
      { className: "service-grid" },
      services.map(({ title, text, Icon, accent }) =>
        h(
          "article",
          { className: `service-card accent-${accent}`, key: title, "data-reveal": true },
          h("div", { className: "service-icon" }, h(Icon, { size: 24 })),
          h("h3", null, title),
          h("p", null, text)
        )
      )
    )
  );
}
