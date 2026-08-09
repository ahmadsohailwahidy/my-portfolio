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
    id: "education",
    label: "Education & Academic Foundation",
    shortLabel: "Education",
    href: "#education",
    group: "secondary",
    description:
      "University studies, academic focus and self-directed learning",
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
    label: "Services & Collaboration",
    shortLabel: "Services",
    href: "#services",
    group: "secondary",
    description: "Practical development services and collaboration fit",
  },
  {
    id: "profile",
    label: "Professional Profile & Resume",
    shortLabel: "Profile",
    href: "#profile",
    group: "secondary",
    description:
      "Professional strengths, languages, opportunity fit and Resume access",
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
    href: "#contact",
    group: "secondary",
    description: "Start a conversation or discuss an opportunity",
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
