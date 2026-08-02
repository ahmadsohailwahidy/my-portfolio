import type { HeroContentData } from "@/types/hero";

export const heroContent: HeroContentData = {
  greeting: "Hi, I'm",
  name: "Ahmad Sohail Wahidy",
  studentRole: "Final-year Computer Science Student",
  primaryTitle: ["Full-Stack", "Developer"],
  secondaryTitle: "Software & Database Developer",
  description:
    "Final-Year Computer Science student and Full-Stack Developer experienced in management systems, database design, modern web applications, and data warehouse and business intelligence projects.",
  specialties: [
    { number: "01", label: "Web Applications" },
    { number: "02", label: "Backend Systems" },
    { number: "03", label: "Database Engineering" },
  ],
  stages: [
    { id: "home", number: "00", label: "Intro" },
    { id: "about", number: "01", label: "About" },
    { id: "expertise", number: "02", label: "Expertise" },
    { id: "skills", number: "03", label: "Skills" },
    { id: "projects", number: "04", label: "Projects" },
    { id: "experience", number: "05", label: "Experience" },
    { id: "education", number: "06", label: "Education" },
    { id: "certifications", number: "07", label: "Credentials" },
    { id: "github", number: "08", label: "GitHub" },
    { id: "services", number: "09", label: "Services" },
    { id: "soft-skills", number: "10", label: "Profile" },
    { id: "resume", number: "11", label: "Resume" },
    { id: "contact", number: "12", label: "Contact" },
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
