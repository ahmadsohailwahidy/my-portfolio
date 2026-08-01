import type { AboutContentData } from "@/types/about";

export const aboutContent = {
  eyebrow: "ABOUT / 02",
  heading: "Clear systems. Dependable software. Structured data.",
  introduction:
    "I’m Ahmad Sohail Wahidy, a seventh-semester, final-year Computer Science student working across full-stack, software, and database development. I focus on turning defined problems into clear user interfaces, maintainable application logic, and well-organized data systems.",
  projectStory:
    "My practical experience has grown through a Final Year Project Management System, a modern real estate web application, an Employee Management System, a Data Warehouse project, an ASP.NET project, and other academic and personal software projects. Together, these projects have strengthened how I approach management systems, backend development, database design, modern web applications, and technical problem-solving.",
  careerObjectiveLabel: "Professional direction",
  careerObjective:
    "My goal is to grow into a software engineer who designs scalable, reliable, data-intensive, and AI-enabled systems. I want to deepen my expertise in backend engineering, cloud technologies, system design, databases, and data engineering while contributing to meaningful enterprise and SaaS products.",
  opportunityLabel: "Currently open to",
  opportunityStatement:
    "Freelance collaborations, remote software development roles, and long-term opportunities within enterprise technology teams.",
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
    professionalIdentity: "Full-Stack · Software · Database Development",
    availabilityLabel: "Open to selected opportunities",
    placeholderLabel: "Portrait slot — ready for a real photo",
    // To use a real photo later, add:
    photo: {
      src: "/images/profile/ahmad-sohail-wahidy.png",
      alt: "Portrait of Ahmad Sohail Wahidy",
    },
  },
  highlights: [
    {
      label: "Academic stage",
      value: "7th semester",
      detail: "Final academic year in Computer Science",
    },
    {
      label: "Development focus",
      value: "Full-stack systems",
      detail: "Software, backend, and database development",
    },
    {
      label: "Project exposure",
      value: "Applied software",
      detail: "Management systems, web applications, and data platforms",
    },
  ],
  selectedTechnologiesLabel: "Selected technologies",
  selectedTechnologies: [
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
  ],
  interestsLabel: "Technical interests",
  interestsHeading: "Where I want to build deeper capability next.",
  interestsDescription:
    "These interests connect my current development experience with the systems, data, product, and community work I want to pursue over the long term.",
  interestGroups: [
    {
      id: "intelligent-systems",
      title: "Intelligent Systems",
      icon: "intelligent-systems",
      items: ["AI Projects", "LLM Projects"],
    },
    {
      id: "scalable-software",
      title: "Scalable Software",
      icon: "scalable-software",
      items: ["Backend Development", "Cloud Projects", "System Design"],
    },
    {
      id: "data-platforms",
      title: "Data Platforms",
      icon: "data-platforms",
      items: ["Database and Data Warehouse", "Data Engineering"],
    },
    {
      id: "product-innovation",
      title: "Product and Innovation",
      icon: "product-innovation",
      items: ["Startup and SaaS Ideas"],
    },
    {
      id: "knowledge-community",
      title: "Knowledge and Community",
      icon: "knowledge-community",
      items: ["Research and Technical Articles", "Open Source Contributions"],
    },
  ],
} satisfies AboutContentData;
