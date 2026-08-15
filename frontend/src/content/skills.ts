import type { SkillsContent } from "@/types/skills";

export const skillsContent: SkillsContent = {
  label: "SKILLS / 02",
  meta: "FULL-STACK CAPABILITY MAP",
  heading: "A practical stack organized around how I build",
  accentWord: "software.",
  introduction:
    "My skills are grouped by the parts of a system they support—from interface development and application logic to databases and data-driven solutions. Applied technologies reflect hands-on project experience, while the learning track shows the areas I am actively developing.",
  axis: "INTERFACE → APPLICATION → DATA → INSIGHT",
  clusters: [
    {
      id: "skills-frontend",
      index: "01",
      eyebrow: "INTERFACE LAYER",
      title: "Frontend Engineering",
      description:
        "Building responsive interfaces with reusable components, typed application code, and deliberate visual structure across screen sizes.",
      icon: "frontend",
      accent: "cyan",
      layout: "frontend",
      featured: [
        { name: "React", status: "applied", icon: "react" },
        { name: "Next.js", status: "applied", icon: "nextjs" },
        { name: "TypeScript", status: "applied", icon: "typescript" },
        { name: "Tailwind CSS", status: "applied", icon: "tailwind" },
      ],
      supportingLabel: "SUPPORTING LAYER",
      supporting: ["JavaScript", "HTML / CSS", "Responsive Design"],
      footerLabel: "WORKING CONTEXT",
      footerText:
        "Interface development for responsive product pages, portfolio systems, and full-stack application work.",
    },
    {
      id: "skills-backend",
      index: "02",
      eyebrow: "APPLICATION LAYER",
      title: "Backend & API Development",
      description:
        "Structuring application behavior, maintainable server logic, and service boundaries that connect interfaces with data and system rules.",
      icon: "backend",
      accent: "teal",
      layout: "backend",
      featured: [
        { name: "Node.js", status: "applied", icon: "nodejs" },
        { name: "Express.js", status: "applied", icon: "express" },
        { name: "Java", status: "applied", icon: "java" },
        { name: "ASP.NET / .NET", status: "applied", icon: "dotnet" },
      ],
      supportingLabel: "SUPPORTING LAYER",
      supporting: [
        "REST APIs",
        "C#",
        "Authentication & Authorization",
        "Git / GitHub",
      ],
      footerLabel: "WORKING CONTEXT",
      footerText:
        "Application logic, API integration, authentication, and versioned full-stack development workflows.",
    },
    {
      id: "skills-database",
      index: "03",
      eyebrow: "DATA FOUNDATION",
      title: "Database Engineering",
      description:
        "Designing structured schemas, relationships, and query-ready data systems that support real application requirements.",
      icon: "database",
      accent: "emerald",
      layout: "database",
      featured: [
        { name: "PostgreSQL", status: "applied", icon: "postgresql" },
        { name: "MongoDB", status: "applied", icon: "mongodb" },
        { name: "MySQL", status: "applied", icon: "mysql" },
        { name: "SQL Server", status: "applied", icon: "sqlserver" },
      ],
      supportingLabel: "SUPPORTING LAYER",
      supporting: [
        "SQL",
        "Database Design",
        "Data Modeling",
        "ERD",
        "Normalization",
      ],
      footerLabel: "WORKING CONTEXT",
      footerText:
        "Relational modeling and database implementation across management systems, food ordering, and full-stack application work.",
    },
    {
      id: "skills-insight",
      index: "04",
      eyebrow: "INSIGHT & LEARNING TRACK",
      title: "Data & Business Intelligence",
      description:
        "Working with data warehouse and business intelligence concepts while actively extending into data, automation, and intelligent workflow tooling.",
      icon: "intelligence",
      accent: "violet",
      layout: "intelligence",
      featured: [
        { name: "Data Warehouse", status: "applied", icon: "warehouse" },
        { name: "Power BI", status: "applied", icon: "powerbi" },
        { name: "Tableau", status: "applied", icon: "tableau" },
        { name: "Chart.js", status: "applied", icon: "chartjs" },
      ],
      supportingLabel: "CURRENTLY LEARNING",
      supporting: [
        "Python",
        "FastAPI",
        "Data Engineering",
        "Docker",
        "AWS",
        "Azure",
        "Workflow Automation",
        "LLM Development",
      ],
      footerLabel: "WORKING CONTEXT",
      footerText:
        "Applied BI project experience with an active learning path toward data engineering, cloud delivery, and intelligent workflow systems.",
    },
  ],
};
