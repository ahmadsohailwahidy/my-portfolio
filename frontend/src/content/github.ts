import type { GitHubContentData } from "@/types/github";

export const githubContent = {
  label: "GITHUB / 07",
  meta: "PUBLIC CODE · DEVELOPMENT SIGNAL · VERIFIED METADATA",
  heading: "Development activity, visible in the code.",
  introduction:
    "GitHub is where I am consolidating the technical side of my software-development journey: structured repositories, evolving implementations, database work, and experiments that extend what I build in academic and personal projects.",
  profileUrl: "https://github.com/ahmadsohailwahidy",
  username: "ahmadsohailwahidy",
  profileSummary:
    "My public GitHub is a growing code record across information systems, web engineering, data work, and emerging AI exploration. This section intentionally shows only repositories and statistics that GitHub can verify publicly.",
  profileAction: "View GitHub Profile",

  repositoriesLabel: "VERIFIED REPOSITORIES",
  repositoriesHeading: "Selected public code, not a duplicate project gallery.",
  repositoriesDescription:
    "Repository cards are selected from public GitHub data and limited to four. Language, stars, and update dates are read from GitHub when available; private or unpublished work is not presented as public evidence.",
  repositoryPreferences: [
    {
      label: "FYP Management System",
      aliases: [
        "fyp-management-system",
        "final-year-project-management-system",
        "fyp-system",
      ],
    },
    {
      label: "Real Estate Website",
      aliases: ["real-estate-website", "real-estate", "property-website"],
    },
    {
      label: "Database Warehouse Project",
      aliases: [
        "database-warehouse-project",
        "data-warehouse-project",
        "ai-intelligence-data-warehouse",
      ],
    },
    {
      label: "Online Food Ordering",
      aliases: ["online-food-ordering", "food-ordering"],
    },
    {
      label: "EMS",
      aliases: ["ems", "employee-management-system"],
    },
    {
      label: "Python Learning Projects",
      aliases: [
        "python-learning-projects",
        "python-learning",
        "python-practice",
      ],
    },
    {
      label: "Automation Learning Projects",
      aliases: [
        "automation-learning-projects",
        "automation-learning",
        "automation-practice",
      ],
    },
    {
      label: "Robots Project",
      aliases: ["robots-project", "robot-project", "robotics-project"],
    },
  ],

  domainsLabel: "REPOSITORY DOMAINS",
  domainsHeading: "Five code directions instead of a long category list.",
  domainsDescription:
    "The repository structure is grouped by the kind of engineering problem being explored, keeping the section readable while still representing the breadth of my work.",
  domains: [
    {
      index: "01",
      title: "Systems & Backend",
      description:
        "Information systems, workflow applications, APIs, and backend-oriented software structure.",
      signal: "systems / api / backend",
    },
    {
      index: "02",
      title: "AI & Data",
      description:
        "Artificial-intelligence experiments, data engineering, warehouse thinking, and database-focused work.",
      signal: "ai / data / warehouse",
    },
    {
      index: "03",
      title: "Web Engineering",
      description:
        "Responsive interfaces and modern web applications built around React, Next.js, and browser technologies.",
      signal: "react / next / ui",
    },
    {
      index: "04",
      title: "Algorithms & Python",
      description:
        "Programming exercises, data structures, algorithms, Python practice, and automation experiments.",
      signal: "python / dsa / automation",
    },
    {
      index: "05",
      title: "Academic Labs",
      description:
        "University assignments, prototypes, database models, and smaller experiments used to reinforce technical concepts.",
      signal: "coursework / labs / experiments",
    },
  ],

  toolchainLabel: "REPOSITORY TOOLCHAIN",
  toolchainHeading:
    "Technologies grouped by how they appear in the development path.",
  toolchainDescription:
    "Applied tools are separated from active growth areas so this portfolio does not turn learning goals into unsupported proficiency claims.",
  toolGroups: [
    {
      label: "Languages",
      items: [
        { name: "JavaScript / TypeScript", status: "applied" },
        { name: "SQL", status: "applied" },
        { name: "Python", status: "growth" },
      ],
    },
    {
      label: "Web",
      items: [
        { name: "React", status: "applied" },
        { name: "Next.js", status: "applied" },
        { name: "HTML / CSS", status: "applied" },
        { name: "Tailwind CSS", status: "applied" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "REST APIs", status: "applied" },
        { name: "FastAPI", status: "growth" },
      ],
    },
    {
      label: "Data",
      items: [
        { name: "PostgreSQL", status: "applied" },
        { name: "MySQL", status: "applied" },
        { name: "SQL / NoSQL", status: "applied" },
      ],
    },
    {
      label: "Workflow",
      items: [
        { name: "Git", status: "applied" },
        { name: "GitHub", status: "applied" },
      ],
    },
  ],

  loopLabel: "DEVELOPMENT LOOP",
  loopHeading: "How code moves from an idea toward something maintainable.",
  loopDescription:
    "The emphasis is not commit volume. It is the habit of giving software structure, checking behavior, and refining implementation as understanding improves.",
  developmentLoop: [
    {
      index: "01",
      title: "Structure",
      description:
        "Break the problem into clear responsibilities, data boundaries, and reusable pieces before implementation grows.",
    },
    {
      index: "02",
      title: "Build",
      description:
        "Connect interface, application logic, APIs, and data in small implementation steps that can be reviewed independently.",
    },
    {
      index: "03",
      title: "Validate",
      description:
        "Check behavior, responsive states, data flow, error cases, and integration points instead of treating a visual result as completion.",
    },
    {
      index: "04",
      title: "Refine",
      description:
        "Improve readability, organization, maintainability, and performance as the codebase becomes better understood.",
    },
  ],

  interestsLabel: "CURRENT LEARNING VECTOR",
  interestsHeading: "The technical directions shaping what I build next.",
  interestsDescription:
    "These are active learning directions rather than claims of production-scale specialization.",
  interests: [
    {
      index: "A",
      title: "AI Systems",
      description:
        "Large Language Models, RAG, and useful AI-enabled application workflows.",
    },
    {
      index: "B",
      title: "Backend Architecture",
      description:
        "API design, service boundaries, maintainable backend structure, and system thinking.",
    },
    {
      index: "C",
      title: "Data Engineering",
      description:
        "Database engineering, analytical pipelines, warehouse concepts, and reliable data movement.",
    },
    {
      index: "D",
      title: "Cloud Delivery",
      description:
        "Deployment fundamentals, cloud platforms, containers, and the path toward stronger delivery skills.",
    },
    {
      index: "E",
      title: "Product Engineering",
      description:
        "Information systems and frontend engineering connected to practical, user-facing software products.",
    },
  ],

  openSourceLabel: "OPEN-SOURCE DIRECTION",
  openSourceHeading: "Contribution is a next step, not a current claim.",
  openSourceDescription:
    "My current priority is strengthening personal and academic repositories, improving code quality, and publishing work more consistently. As that foundation grows, I plan to contribute to open-source projects where I can make useful, well-understood changes.",
} satisfies GitHubContentData;
