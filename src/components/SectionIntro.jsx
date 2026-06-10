import { h } from "../lib/h.js";

export default function SectionIntro({ eyebrow, title, text }) {
  return h(
    "div",
    { className: "section-intro", "data-reveal": true },
    h("p", { className: "eyebrow" }, eyebrow),
    h("h2", null, title),
    h("p", null, text)
  );
}
