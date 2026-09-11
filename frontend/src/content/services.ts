import type { ServicesContentData } from "@/types/services";

export const servicesContent = {
  label: "SERVICES / 04",
  meta: "SERVICES & COLLABORATION",
  heading: "Development support focused on clear, useful outcomes.",
  introduction:
    "I contribute to focused web and software projects where the requirements are defined and the result needs to be functional, maintainable, and ready to move forward. My strongest fit is implementing or improving interfaces, application features, integrations, and structured workflows.",

  servicesLabel: "WHAT I CAN HELP WITH",
  servicesHeading: "Practical development work across three focused areas.",
  servicesDescription:
    "Four areas where my current project experience is strongest, presented as realistic development support rather than agency-style service claims.",
  services: [
    {
      id: "frontend-web-development",
      index: "01",
      title: "FRONTEND & PRODUCT INTERFACES",
      description:
        "Developing new interfaces or improving existing ones with attention to structure, responsive behavior, reusable components, interaction, and overall usability.",
      bestFor:
        "Product interfaces, responsive websites, dashboards, portfolio and business websites, UI implementation, frontend refinement, and existing interface fixes.",
      icon: "frontend",
      accent: "coral",
      capabilities: [
        { label: "HTML5" },
        { label: "CSS3" },
        { label: "JavaScript" },
        { label: "Tailwind CSS" },
        { label: "Responsive UI" },
        { label: "Interface refinement" },
      ],
    },
    {
      id: "react-next-development",
      index: "02",
      title: "APPLICATION FEATURES & INTEGRATIONS",
      description:
        "Implementing practical application flows that move beyond the interface itself, including forms, validation, authentication-aware behavior, API communication, persistent data, and feature-level integration.",
      bestFor:
        "CRUD workflows, authenticated features, API-connected interfaces, application extensions, forms, data-driven features, and end-to-end feature implementation.",
      icon: "react",
      accent: "sky",
      capabilities: [
        { label: "React" },
        { label: "Next.js" },
        { label: "TypeScript" },
        { label: "JavaScript" },
        { label: "Tailwind CSS" },
        { label: "Component architecture" },
      ],
    },
    {
      id: "api-backend-integration",
      index: "03",
      title: "DASHBOARDS & WORKFLOW SYSTEMS",
      description:
        "Building interfaces for workflows involving users, roles, records, status changes, operational data, and day-to-day management tasks.",
      bestFor:
        "Admin panels, internal tools, academic systems, small-business applications, management systems, and data-centered dashboards.",
      icon: "api",
      accent: "mint",
      capabilities: [
        { label: "REST APIs" },
        { label: "Node.js" },
        { label: "Express.js" },
        { label: "API integration" },
        { label: "SQL integration" },
        { label: "Python / FastAPI", status: "growth" },
      ],
    },
    // {
    //   id: "dashboard-management-systems",
    //   index: "04",
    //   title: "Dashboard & Management Systems",
    //   description:
    //     "Building practical dashboards and management interfaces that organize users, records, roles, workflows, and operational data into clearer day-to-day software experiences.",
    //   bestFor:
    //     "Admin panels, academic systems, internal tools, small-business applications, and structured data-management workflows.",
    //   icon: "dashboard",
    //   accent: "amber",
    //   capabilities: [
    //     { label: "React / Next.js" },
    //     { label: "PostgreSQL" },
    //     { label: "MySQL" },
    //     { label: "SQL" },
    //     { label: "NoSQL" },
    //     { label: "Role-based workflows" },
    //   ],
    // },
  ],

  collaborationLabel: "COLLABORATION FIT",
  collaborationHeading: "Where I can contribute most effectively.",
  collaborationDescription:
    "I work best when the goal is concrete, responsibilities are clear, and I work best when the goal is concrete, responsibilities are clear, and progress can be reviewed through practical implementation and iterative feedback.",
  collaborationTypes: [
    {
      title: "Project-based development",
      description:
        "A defined interface, feature, integration, or application improvement with a clear expected outcome.",
    },
    {
      title: "Team contribution",
      description:
        "Focused frontend, backend integration, database, or feature work inside an existing development workflow and codebase.",
    },
    {
      title: "Early-stage products",
      description:
        "Turning a defined idea or workflow into a usable first version that can be tested, reviewed, and developed further.",
    },
    // {
    //   title: "Academic prototypes & student collaboration",
    //   description:
    //     "Legitimate learning projects, prototypes, and team builds where the goal is shared implementation and understanding.",
    // },
    // {
    //   title: "Open-source collaboration",
    //   description:
    //     "Growing toward useful, well-scoped contributions where I can understand the code and make a responsible change.",
    // },
    // {
    //   title: "Personal & early-stage startup products",
    //   description:
    //     "Helping shape an idea into a testable interface, working feature, or structured first version.",
    // },
  ],

  workflowLabel: "DELIVERY APPROACH",
  workflowHeading: "A simple path from requirement to usable result.",
  workflowDescription:
    "The process stays intentionally simple: understand the task, build the right scope, review the result, and leave the work in a usable state.",
  workflow: [
    {
      index: "01",
      title: "Define",
      description:
        "Confirm the problem, expected outcome, important constraints, and the scope that needs to be implemented.",
    },
    {
      index: "02",
      title: "Implement",
      description:
        "Build the agreed interface, feature, integration, or workflow with clear and maintainable structure.",
    },
    {
      index: "03",
      title: "Review",
      description:
        "Check behavior, responsiveness, edge cases, data flow, and alignment with the original requirement.",
    },
    {
      index: "04",
      title: "Handoff",
      description:
        "Refine the finished work and leave the implementation in a clear state for continued development.",
    },
  ],

  ctaEyebrow: "PROJECT HANDOFF",
  ctaHeading: "Have something specific you want to build or improve?",
  ctaDescription:
    "If you have an interface, application feature, integration, dashboard, or workflow that could benefit from focused implementation, send me the current context and the outcome you are aiming for.",
  ctaLabel: "Discuss the project",
  ctaHref: "#contact",
} satisfies ServicesContentData;
