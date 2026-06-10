import { brand, navItems } from "../data/siteContent.js";
import { h } from "../lib/h.js";

export default function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(
      "div",
      null,
      h("a", { className: "footer-brand", href: "#home" }, brand.name),
      h("p", null, brand.tagline)
    ),
    h(
      "nav",
      { "aria-label": "Footer navigation" },
      navItems.map((item) => h("a", { key: item.href, href: item.href }, item.label))
    )
  );
}
