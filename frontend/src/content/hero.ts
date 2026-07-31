import type { HeroContentData } from "@/types/hero";

export const heroContent: HeroContentData = {
  greeting: "Hi, I'm",
  name: "Ahmad Sohail Wahidy",
  studentRole: "Final-year Computer Science Student",
  primaryTitle: ["Full-Stack", "Developer"],
  secondaryTitle: "Software & Database Developer",
  description:
    "Final-year Computer Science student and full-stack developer experienced in management systems, database design, modern web applications, and Data Warehouse and Business Intelligence projects.",
  specialties: [
    {
      number: "01",
      label: "Web Applications",
    },
    {
      number: "02",
      label: "Backend Systems",
    },
    {
      number: "03",
      label: "Database Engineering",
    },
  ],
  actions: {
    projects: {
      label: "Explore Projects",
      href: "#projects",
      ariaLabel: "Go to featured projects",
    },
    resume: {
      label: "Download CV",
      href: "/resume/Ahmad-Sohail-CV.pdf",
      ariaLabel: "Download Ahmad Sohail Wahidy's CV",
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
