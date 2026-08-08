import type { ServicesContentData } from "@/types/services";

export const servicesContent = {
  label: "SERVICES / 08",
  meta: "PRACTICAL BUILD & COLLABORATION",
  heading: "Practical development support, from interface to working system.",
  introduction:
    "I can help turn clear requirements into responsive interfaces, React and Next.js applications, connected API workflows, and structured management tools. The focus is practical implementation grounded in the systems and technologies already demonstrated across this portfolio.",

  servicesLabel: "WHAT I CAN HELP BUILD",
  servicesHeading: "Focused services for useful, maintainable web products.",
  servicesDescription:
    "Four areas where my current project experience is strongest, presented as realistic development support rather than agency-style service claims.",
  services: [
    {
      id: "frontend-web-development",
      index: "01",
      title: "Frontend Web Development",
      description:
        "Building responsive, readable, and user-friendly interfaces with careful attention to layout, interaction, reusable styling, and behavior across screen sizes.",
      bestFor:
        "Landing pages, responsive interfaces, UI refinement, and existing frontend bug fixing.",
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
      title: "React & Next.js Development",
      description:
        "Developing component-driven web applications and interactive product interfaces with modern React patterns, Next.js structure, and maintainable frontend organization.",
      bestFor:
        "Product interfaces, multi-page applications, dashboards, and modern business or portfolio websites.",
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
      title: "REST API & Backend Integration",
      description:
        "Connecting interfaces with backend services and data flows, including REST endpoints, CRUD workflows, validation, authentication-aware UI states, and database-backed application behavior.",
      bestFor:
        "Forms, authenticated workflows, CRUD applications, API-connected interfaces, and frontend-to-database product flows.",
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
    {
      id: "dashboard-management-systems",
      index: "04",
      title: "Dashboard & Management Systems",
      description:
        "Building practical dashboards and management interfaces that organize users, records, roles, workflows, and operational data into clearer day-to-day software experiences.",
      bestFor:
        "Admin panels, academic systems, internal tools, small-business applications, and structured data-management workflows.",
      icon: "dashboard",
      accent: "amber",
      capabilities: [
        { label: "React / Next.js" },
        { label: "PostgreSQL" },
        { label: "MySQL" },
        { label: "SQL" },
        { label: "NoSQL" },
        { label: "Role-based workflows" },
      ],
    },
  ],

  collaborationLabel: "COLLABORATION FIT",
  collaborationHeading: "Ways we can work together.",
  collaborationDescription:
    "I am most useful where the scope is clear, the product can be built iteratively, and communication stays close to the actual implementation.",
  collaborationTypes: [
    {
      title: "Freelance & short-term builds",
      description:
        "Focused implementation work with a defined outcome, feature set, or improvement target.",
    },
    {
      title: "Small-business web applications",
      description:
        "Practical websites, dashboards, and internal tools for straightforward operational needs.",
    },
    {
      title: "Team-based development",
      description:
        "Contributing frontend, integration, database, or feature work inside a collaborative development workflow.",
    },
    {
      title: "Academic prototypes & student collaboration",
      description:
        "Legitimate learning projects, prototypes, and team builds where the goal is shared implementation and understanding.",
    },
    {
      title: "Open-source collaboration",
      description:
        "Growing toward useful, well-scoped contributions where I can understand the code and make a responsible change.",
    },
    {
      title: "Personal & early-stage startup products",
      description:
        "Helping shape an idea into a testable interface, working feature, or structured first version.",
    },
  ],

  workflowLabel: "DELIVERY RHYTHM",
  workflowHeading: "A compact path from idea to usable result.",
  workflowDescription:
    "The process stays intentionally simple: understand the task, build the right scope, review the result, and leave the work in a usable state.",
  workflow: [
    {
      index: "01",
      title: "Discover",
      description:
        "Clarify the problem, users, required features, constraints, and the most useful first outcome.",
    },
    {
      index: "02",
      title: "Build",
      description:
        "Implement the agreed interface, feature, integration, or data workflow with maintainable structure.",
    },
    {
      index: "03",
      title: "Review",
      description:
        "Check responsiveness, behavior, edge cases, clarity, and alignment with the original requirement.",
    },
    {
      index: "04",
      title: "Deliver",
      description:
        "Refine the result, document important handoff details, and leave the work ready for its next step.",
    },
  ],

  ctaEyebrow: "PROJECT HANDOFF",
  ctaHeading:
    "Have a project in mind? Let’s discuss what would make it useful.",
  ctaDescription:
    "If you have a web interface, application feature, API integration, dashboard, or management workflow to build or improve, the Contact section is the best place to start.",
  ctaLabel: "Start a Conversation",
  ctaHref: "#contact",
} satisfies ServicesContentData;
