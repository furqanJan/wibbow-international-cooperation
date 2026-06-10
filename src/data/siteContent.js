import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const brand = {
  name: "Wibbow International Cooperation",
  shortName: "Wibbow",
  tagline: "Intelligent systems for secure, automated, cloud-ready operations."
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Agentic AI",
    Icon: BrainCircuit,
    text: "Design and deploy AI agents that reason across workflows, tools, and enterprise data.",
    accent: "cyan"
  },
  {
    title: "AI Automations",
    Icon: Bot,
    text: "Automate repetitive operations with reliable human-in-the-loop controls and measurable outcomes.",
    accent: "green"
  },
  {
    title: "Networking and Cloud",
    Icon: CloudCog,
    text: "Plan, migrate, and optimize resilient cloud and network foundations for modern teams.",
    accent: "blue"
  },
  {
    title: "System Engineering",
    Icon: ServerCog,
    text: "Engineer dependable infrastructure, integrations, and operating environments from the ground up.",
    accent: "silver"
  },
  {
    title: "CyberSecurity",
    Icon: ShieldCheck,
    text: "Reduce exposure with security architecture, hardening, monitoring, and response readiness.",
    accent: "amber"
  }
];

export const processSteps = [
  {
    title: "Discover",
    text: "Map the business workflow, risk profile, users, systems, and operational constraints."
  },
  {
    title: "Architect",
    text: "Shape the AI, cloud, network, and security model before implementation begins."
  },
  {
    title: "Automate",
    text: "Build practical automations with observability, approvals, and clear fallback paths."
  },
  {
    title: "Deploy",
    text: "Release into stable environments with documentation, monitoring, and handover support."
  },
  {
    title: "Protect",
    text: "Continuously improve resilience through hardening, reviews, and incident-aware planning."
  }
];

export const stats = [
  { value: "5", label: "Core service pillars" },
  { value: "24/7", label: "Operational mindset" },
  { value: "AI + Cloud", label: "Modernization focus" },
  { value: "Secure by design", label: "Delivery principle" }
];

export const highlights = [
  "Agentic AI strategy and implementation",
  "Cloud architecture and networking services",
  "Security-led system engineering"
];

export const heroSignals = [
  { label: "AI agents", Icon: Sparkles },
  { label: "Automation", Icon: Bot },
  { label: "Cloud fabric", Icon: Network },
  { label: "Cyber defense", Icon: ShieldCheck }
];

export const contactBenefits = [
  { label: "Clear discovery call", Icon: CheckCircle2 },
  { label: "Solution-fit assessment", Icon: CheckCircle2 },
  { label: "Practical next steps", Icon: CheckCircle2 }
];
