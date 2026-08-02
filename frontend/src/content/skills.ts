import type { SkillsContent } from "@/types/skills";

export const skillsContent: SkillsContent = {
  label: "SKILLS / 04",
  meta: "ENGINEERING STACK TOPOLOGY / 06 LAYERS",
  heading: "A technical ecosystem, organized by how software gets built.",
  introduction:
    "This map separates the technologies I use most directly from supporting tools, software foundations, and deliberate growth directions. It is a working stack—not a proficiency scorecard.",
  legend: [
    {
      status: "primary",
      label: "Primary stack",
      description: "Technologies closest to my current full-stack workflow.",
    },
    {
      status: "applied",
      label: "Project-applied",
      description: "Used in supplied academic or personal project work.",
    },
    {
      status: "supporting",
      label: "Supporting",
      description: "Tools and technologies that extend the main stack.",
    },
    {
      status: "growth",
      label: "Growth direction",
      description: "Areas I am intentionally developing further.",
    },
  ],
  foundation: {
    label: "FOUNDATION AXIS",
    title: "Programming and software foundations",
    description:
      "The concepts that support how I reason about application structure, data, and maintainable implementation.",
    icon: "foundation",
    items: [
      {
        name: "Object-Oriented Programming",
        status: "foundation",
      },
      {
        name: "Data Structures & Algorithms",
        status: "foundation",
      },
      {
        name: "Software Engineering",
        status: "foundation",
      },
      {
        name: "Design Patterns",
        status: "foundation",
      },
      {
        name: "Problem Solving",
        status: "foundation",
      },
      {
        name: "C++ Fundamentals",
        status: "foundation",
        note: "Programming foundations",
      },
    ],
  },
  clusters: [
    {
      id: "interface-engineering",
      index: "01",
      eyebrow: "INTERFACE LAYER",
      title: "Frontend Engineering",
      description:
        "Building responsive interfaces with reusable components, typed application code, and deliberate visual structure across screen sizes.",
      icon: "frontend",
      accent: "cyan",
      layout: "frontend",
      featured: [
        {
          name: "React",
          status: "primary",
          icon: "react",
        },
        {
          name: "Next.js",
          status: "primary",
          icon: "nextjs",
        },
        {
          name: "TypeScript",
          status: "primary",
          icon: "typescript",
        },
        {
          name: "Tailwind CSS",
          status: "applied",
          icon: "tailwind",
        },
      ],
      supporting: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Web Design",
        "Bootstrap",
        "jQuery",
      ],
      evidence: {
        label: "PROJECT SIGNAL",
        project:
          "Modern Responsive Real Estate Website and Final Year Project Management System",
      },
    },
    {
      id: "application-api-development",
      index: "02",
      eyebrow: "APPLICATION LAYER",
      title: "Backend & API Development",
      description:
        "Structuring application behavior, object-oriented logic, and service boundaries that connect interfaces with data and system rules.",
      icon: "backend",
      accent: "mixed",
      layout: "backend",
      featured: [
        {
          name: "Java",
          status: "applied",
          icon: "java",
        },
        {
          name: "C#",
          status: "applied",
          icon: "csharp",
        },
        {
          name: ".NET",
          status: "applied",
          icon: "dotnet",
        },
        {
          name: "REST APIs",
          status: "applied",
          icon: "api",
        },
        {
          name: "Python",
          status: "growth",
          icon: "python",
          note: "Backend and automation direction",
        },
        {
          name: "FastAPI",
          status: "growth",
          icon: "fastapi",
          note: "API development direction",
        },
      ],
      supporting: [
        "Node.js",
        "Express.js",
        "Authentication & Authorization",
        "Backend Development",
      ],
      evidence: {
        label: "PROJECT SIGNAL",
        project:
          "Employee Management System, ASP.NET project, and PERN-stack FYP system",
      },
    },
    {
      id: "database-data-systems",
      index: "03",
      eyebrow: "DATA FOUNDATION",
      title: "Database & Data Systems",
      description:
        "Designing organized schemas, relationships, and query-ready data structures before choosing the database product that implements them.",
      icon: "database",
      accent: "emerald",
      layout: "database",
      featured: [
        {
          name: "Database Design",
          status: "applied",
          icon: "database-design",
        },
        {
          name: "PostgreSQL",
          status: "applied",
          icon: "postgresql",
        },
        {
          name: "SQL Server",
          status: "applied",
          icon: "sqlserver",
        },
        {
          name: "Data Modeling",
          status: "applied",
          icon: "data-model",
        },
      ],
      supporting: [
        "SQL",
        "MySQL",
        "MongoDB / NoSQL",
        "ERD",
        "Normalization",
        "SQL Queries",
      ],
      evidence: {
        label: "PROJECT SIGNAL",
        project:
          "Full Database Design for Online Food Ordering and database work across management systems",
      },
    },
    {
      id: "data-intelligence-workflow",
      index: "04",
      eyebrow: "INSIGHT & EMERGING LAYER",
      title: "Data Intelligence & AI-enabled Workflow",
      description:
        "Combining project-backed data warehouse and business intelligence work with an emerging interest in AI-assisted development and intelligent software workflows.",
      icon: "intelligence",
      accent: "violet",
      layout: "intelligence",
      featured: [
        {
          name: "Data Warehouse",
          status: "applied",
          icon: "warehouse",
        },
        {
          name: "Business Intelligence",
          status: "applied",
          icon: "bi",
        },
        {
          name: "AI-assisted Development",
          status: "supporting",
          icon: "ai",
        },
        {
          name: "Prompt Engineering",
          status: "supporting",
          icon: "prompt",
        },
      ],
      supporting: [
        "Data Engineering interest",
        "AI-related solutions",
        "LLM-related projects",
      ],
      evidence: {
        label: "PROJECT SIGNAL",
        project:
          "AI Intelligence Data Warehouse and Business Intelligence Project",
      },
    },
  ],
  delivery: {
    label: "DELIVERY RAIL",
    title: "Development workflow and platform direction",
    description:
      "Tools that support versioned delivery today and platform capabilities I am building toward without claiming production DevOps expertise.",
    icon: "delivery",
    items: [
      {
        name: "Git & GitHub",
        status: "supporting",
        icon: "git",
      },
      {
        name: "Docker",
        status: "supporting",
        icon: "docker",
      },
      {
        name: "Automation",
        status: "growth",
        icon: "automation",
      },
      {
        name: "Cloud Platforms",
        status: "growth",
        icon: "cloud",
      },
      {
        name: "Kubernetes",
        status: "growth",
        icon: "kubernetes",
      },
    ],
  },
};
