import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "../data/siteContent.js";
import { h } from "../lib/h.js";

export default function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return h(
    "header",
    { className: `site-header ${isScrolled ? "is-scrolled" : ""}` },
    h(
      "a",
      { className: "brand-mark", href: "#home", onClick: closeMenu, "aria-label": `${brand.name} home` },
      h("span", { className: "brand-icon" }, "W"),
      h("span", null, h("strong", null, brand.shortName), h("small", null, "International Cooperation"))
    ),
    h(
      "button",
      {
        className: "nav-toggle",
        type: "button",
        "aria-label": isOpen ? "Close navigation" : "Open navigation",
        "aria-expanded": isOpen,
        onClick: () => setIsOpen((value) => !value)
      },
      isOpen ? h(X, { size: 22 }) : h(Menu, { size: 22 })
    ),
    h(
      "nav",
      { className: `site-nav ${isOpen ? "is-open" : ""}`, "aria-label": "Main navigation" },
      navItems.map((item) => {
        const section = item.href.replace("#", "");
        return h(
          "a",
          {
            key: item.href,
            href: item.href,
            onClick: closeMenu,
            className: activeSection === section ? "is-active" : ""
          },
          item.label
        );
      }),
      h("a", { className: "nav-cta", href: "#contact", onClick: closeMenu }, "Start a project")
    )
  );
}
