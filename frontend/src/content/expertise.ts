import type { ExpertiseContent } from "@/types/expertise";

export const expertiseContent: ExpertiseContent = {
  label: "EXPERTISE / 03",
  meta: "CAPABILITY ARCHITECTURE / 04 DOMAINS",
  heading: "Building connected systems—from interface to insight.",
  introduction:
    "My core strength is connecting clear interfaces, maintainable application logic, and structured data. The capabilities below are grounded in academic and personal projects, while the final track shows where I am deliberately growing next.",
  architectureLabel: "SYSTEM-BUILDING CAPABILITY MAP",
  capabilities: [
    {
      id: "full-stack-product-development",
      number: "01",
      eyebrow: "END-TO-END PRODUCT LAYER",
      title: "Full-Stack Product Development",
      description:
        "I shape web applications as connected products: a readable interface, dependable application flow, and a data layer that supports the task the system is meant to solve.",
      valueStatement:
        "Best suited to structured web applications, management workflows, and responsive product experiences.",
      icon: "layers",
      accent: "mixed",
      layout: "anchor",
      systemFlow: ["Interface", "Application logic", "Data layer"],
      evidence: [
        "Final Year Project Management System — PERN stack",
        "Modern Responsive Real Estate Website",
        "ASP.NET project",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PERN"],
    },
    {
      id: "backend-software-systems",
      number: "02",
      eyebrow: "APPLICATION CORE",
      title: "Backend & Software Systems",
      description:
        "I organize application behavior through object-oriented design, backend logic, and clear separation between interface concerns and system rules.",
      valueStatement:
        "Current project evidence is strongest in Java and .NET; Python APIs and automation remain active growth directions.",
      icon: "server",
      accent: "cyan",
      layout: "backend",
      evidence: ["Employee Management System — Java", "ASP.NET project"],
      technologies: ["Java", "C#", ".NET", "FastAPI"],
    },
    {
      id: "database-engineering",
      number: "03",
      eyebrow: "STRUCTURED DATA FOUNDATION",
      title: "Database Engineering & Data Modeling",
      description:
        "I translate requirements into organized data structures using entity relationships, normalization, SQL, and deliberate schema design.",
      valueStatement:
        "The focus is not only storing data, but making relationships and future application queries clear.",
      icon: "database",
      accent: "emerald",
      layout: "database",
      evidence: ["Full Database Design for Online Food Ordering"],
      technologies: [
        "ERD",
        "Normalization",
        "PostgreSQL",
        "SQL Server",
        "MySQL",
      ],
    },
    {
      id: "data-platforms-bi",
      number: "04",
      eyebrow: "DATA-TO-DECISION LAYER",
      title: "Data Platforms & Business Intelligence",
      description:
        "I am developing the ability to structure operational data for analysis, connect data models to warehouse thinking, and present information in a form that supports clearer decisions.",
      valueStatement:
        "This capability is grounded in a dedicated Data Warehouse and Business Intelligence project rather than a production-scale claim.",
      icon: "analytics",
      accent: "mixed",
      layout: "data",
      systemFlow: ["Source data", "Data model", "Warehouse", "Insight"],
      evidence: [
        "AI Intelligence Data Warehouse and Business Intelligence Project",
      ],
      technologies: [
        "Data Warehouse",
        "Business Intelligence",
        "Data Modeling",
        "SQL",
      ],
    },
  ],
  growth: {
    label: "DEVELOPMENT DIRECTION",
    title: "Extending the architecture beyond the current project base.",
    description:
      "These areas are intentional next steps, not claims of senior or production-scale expertise.",
    tracks: [
      {
        title: "Python & Automation",
        description:
          "Building toward repeatable backend workflows, utility tooling, and practical process automation.",
        icon: "automation",
      },
      {
        title: "Cloud Delivery",
        description:
          "Extending Docker knowledge toward cloud deployment patterns and a stronger understanding of Kubernetes.",
        icon: "cloud",
      },
      {
        title: "AI & LLM Systems",
        description:
          "Exploring how intelligent capabilities can support useful future software products and workflows.",
        icon: "intelligence",
      },
      {
        title: "SaaS Product Systems",
        description:
          "Developing the product and system-design thinking needed for maintainable, scalable application ideas.",
        icon: "product",
      },
    ],
  },
};
