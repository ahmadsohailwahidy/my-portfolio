import { resumeContent } from "@/content/resume";
import type { HeroContentData } from "@/types/hero";

export const heroContent: HeroContentData = {
  eyebrow: "Portfolio / 2026",
  contextLabel: "Web · Systems · Data",
  greeting: "Hi, I'm",
  name: "Ahmad Sohail Wahidy",
  primaryTitle: ["Full-Stack", "Developer"],
  valueProposition:
    "I build modern web applications backed by reliable APIs and well-structured database systems.",
  stages: [
    { id: "home", number: "00", label: "Intro" },
    { id: "about", number: "01", label: "About" },
    { id: "expertise", number: "02", label: "Expertise" },
    { id: "skills", number: "03", label: "Skills" },
    { id: "projects", number: "04", label: "Projects" },
    { id: "education", number: "05", label: "Education" },
    { id: "github", number: "06", label: "GitHub" },
    { id: "services", number: "07", label: "Services" },
    { id: "profile", number: "08", label: "Profile" },
    { id: "contact", number: "09", label: "Contact" },
  ],
  actions: {
    projects: {
      label: "Explore Projects",
      href: "#projects",
      ariaLabel: "Go to featured projects",
    },
    resume: {
      label: resumeContent.downloadLabel,
      href: resumeContent.href,
      ariaLabel: `Download Ahmad Sohail Wahidy's Resume (${resumeContent.fileName})`,
      download: true,
    },
  },
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/ahmadsohailwahidy",
      ariaLabel: "Open Ahmad Sohail Wahidy's GitHub profile",
      external: true,
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmadsohailwahidy",
      ariaLabel: "Open Ahmad Sohail Wahidy's LinkedIn profile",
      external: true,
    },
  },
};
