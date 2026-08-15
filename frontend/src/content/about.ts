import type { AboutContentData } from "@/types/about";

export const aboutContent = {
  eyebrow: "ABOUT / 01",
  heading: "Clear systems. Dependable software. Structured data.",
  introduction:
    "I’m Ahmad Sohail Wahidy, a Full-Stack Developer and final-year Computer Science student focused on building clear user experiences, reliable application logic, and well-structured data systems.",
  projectStory:
    "My practical experience comes from academic and personal projects involving management systems, modern web applications, backend APIs, databases, and data-focused solutions. These projects have strengthened how I turn defined requirements into maintainable software.",
  // careerObjectiveLabel: "Professional direction",
  // careerObjective:
  //   "My goal is to grow into a software engineer who designs scalable, reliable, data-intensive, and AI-enabled systems. I want to deepen my expertise in backend engineering, cloud technologies, system design, databases, and data engineering while contributing to meaningful enterprise and SaaS products.",
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
    // To use a real photo later, add:
    photo: {
      src: "/images/profile/ahmad-sohail-wahidy.png",
      alt: "Portrait of Ahmad Sohail Wahidy",
    },
  },
  // highlights: [
  //   {
  //     label: "Academic stage",
  //     value: "7th semester",
  //     detail: "Final academic year in Computer Science",
  //   },
  //   {
  //     label: "Development focus",
  //     value: "Full-stack systems",
  //     detail: "Software, backend, and database development",
  //   },
  //   {
  //     label: "Project exposure",
  //     value: "Applied software",
  //     detail: "Management systems, web applications, and data platforms",
  //   },
  // ],
  // selectedTechnologiesLabel: "Selected technologies",
  // selectedTechnologies: [
  //   { name: "Next.js", icon: "nextjs" },
  //   { name: "TypeScript", icon: "typescript" },
  //   { name: "React", icon: "react" },
  //   { name: "FastAPI", icon: "fastapi" },
  //   { name: "PostgreSQL", icon: "postgresql" },
  //   { name: "Docker", icon: "docker" },
  // ],
  // interestsLabel: "Technical interests",
  // interestsHeading: "Where I want to build deeper capability next.",
  // interestsDescription:
  //   "These interests connect my current development experience with the systems, data, product, and community work I want to pursue over the long term.",
  // interestGroups: [
  //   {
  //     id: "intelligent-systems",
  //     title: "Intelligent Systems",
  //     icon: "intelligent-systems",
  //     items: ["AI Projects", "LLM Projects"],
  //   },
  //   {
  //     id: "scalable-software",
  //     title: "Scalable Software",
  //     icon: "scalable-software",
  //     items: ["Backend Development", "Cloud Projects", "System Design"],
  //   },
  //   {
  //     id: "data-platforms",
  //     title: "Data Platforms",
  //     icon: "data-platforms",
  //     items: ["Database and Data Warehouse", "Data Engineering"],
  //   },
  //   {
  //     id: "product-innovation",
  //     title: "Product and Innovation",
  //     icon: "product-innovation",
  //     items: ["Startup and SaaS Ideas"],
  //   },
  //   {
  //     id: "knowledge-community",
  //     title: "Knowledge and Community",
  //     icon: "knowledge-community",
  //     items: ["Research and Technical Articles", "Open Source Contributions"],
  //   },
  // ],
} satisfies AboutContentData;
