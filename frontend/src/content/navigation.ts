import type { NavigationItem } from "@/types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  {
    id: "home",
    label: "Hero Section",
    shortLabel: "Home",
    href: "#home",
    group: "primary",
    description: "Introduction and professional identity",
  },
  {
    id: "about",
    label: "About Me",
    shortLabel: "About",
    href: "#about",
    group: "primary",
    description: "Background, goals and professional story",
  },
  {
    id: "expertise",
    label: "Core Expertise",
    shortLabel: "Expertise",
    href: "#expertise",
    group: "primary",
    description: "Main areas of technical specialization",
  },
  {
    id: "skills",
    label: "Technical Skills",
    shortLabel: "Skills",
    href: "#skills",
    group: "primary",
    description: "Languages, frameworks, databases and tools",
  },
  {
    id: "projects",
    label: "Featured Projects",
    shortLabel: "Projects",
    href: "#projects",
    group: "primary",
    description: "Selected project work and implementation evidence",
  },
  {
    id: "experience",
    label: "Project Experience",
    shortLabel: "Experience",
    href: "#experience",
    group: "secondary",
    description: "Detailed responsibilities and implementation work",
  },
  {
    id: "education",
    label: "Education",
    shortLabel: "Education",
    href: "#education",
    group: "secondary",
    description: "Academic background and current studies",
  },
  {
    id: "certifications",
    label: "Certifications & Achievements",
    shortLabel: "Achievements",
    href: "#certifications",
    group: "secondary",
    description: "Certificates, awards and milestones",
  },
  {
    id: "github",
    label: "GitHub Activity",
    shortLabel: "GitHub",
    href: "#github",
    group: "secondary",
    description: "Open-source activity and contribution history",
  },
  {
    id: "services",
    label: "Services",
    shortLabel: "Services",
    href: "#services",
    group: "secondary",
    description: "Professional services and ways I can help",
  },
  {
    id: "soft-skills",
    label: "Soft Skills & Languages",
    shortLabel: "Soft Skills",
    href: "#soft-skills",
    group: "secondary",
    description: "Communication, teamwork and spoken languages",
  },
  {
    id: "resume",
    label: "Resume",
    shortLabel: "Resume",
    href: "#resume",
    group: "secondary",
    description: "Career summary and downloadable CV",
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
    href: "#contact",
    group: "secondary",
    description: "Start a conversation or discuss a project",
  },
] as const;

export const primaryNavigationItems = navigationItems.filter(
  (item) => item.group === "primary",
);

export const secondaryNavigationItems = navigationItems.filter(
  (item) => item.group === "secondary" && item.id !== "contact",
);

export const contactNavigationItem = navigationItems.find(
  (item) => item.id === "contact",
)!;
