import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Stats from "./components/Stats.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { h, Fragment } from "./lib/h.js";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const sections = document.querySelectorAll("main section[id]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return h(
    Fragment,
    null,
    h(Header, { activeSection }),
    h("main", null, h(Hero), h(Services), h(Process), h(Stats), h(Contact)),
    h(Footer)
  );
}
