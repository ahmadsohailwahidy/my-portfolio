import type { AboutContentData } from "@/types/about";

export const aboutContent = {
  eyebrow: "ABOUT / 01",
  heading: "Clear systems. Dependable software. Structured data.",
  introduction:
    "I’m Ahmad Sohail Wahidy, a Full-Stack Developer and final-year Computer Science student focused on building clear user experiences, reliable application logic, and well-structured data systems.",
  projectStory:
    "My practical experience comes from academic and personal projects involving management systems, modern web applications, backend APIs, databases, and data-focused solutions. These projects have strengthened how I turn defined requirements into maintainable software.",
  opportunityLabel: "Currently open to",
  opportunityStatement:
    "Open to remote-first full-stack roles, as well as hybrid, on-site, and selected freelance project opportunities.",
  opportunityLinks: [
    {
      label: "Discuss a project",
      href: "#contact",
      ariaLabel: "Go to the contact section to discuss a software project",
    },
    {
      label: "View project work",
      href: "#projects",
      ariaLabel: "Go to the featured projects section",
    },
  ],
  profile: {
    initials: "ASW",
    name: "Ahmad Sohail Wahidy",
    academicStatus: "Final-year Computer Science student",
    professionalIdentity: "DESIGN · DEVELOPMENT · SYSTEMS",
    availabilityLabel: "Open to full-stack roles & selected projects",
    placeholderLabel: "Portrait slot — ready for a real photo",
    photo: {
      src: "/images/profile/ahmad-sohail-wahidy.png",
      alt: "Portrait of Ahmad Sohail Wahidy",
    },
  },
} satisfies AboutContentData;
