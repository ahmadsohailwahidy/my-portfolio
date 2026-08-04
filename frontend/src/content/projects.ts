import type { FeaturedProjectsContent } from "@/types/projects";

export const featuredProjectsContent: FeaturedProjectsContent = {
  label: "PROJECTS / 05",
  meta: "PROJECT EVIDENCE CHAPTERS / 05 SELECTED WORKS",
  heading: "Real systems, traced from workflow to technical evidence.",
  introduction:
    "A curated set of academic and personal projects showing how I apply full-stack development, software design, relational modeling, and data intelligence to concrete workflows.",
  flagship: {
    id: "final-year-project-management-system",
    number: "01",
    title: "Final Year Project Management System",
    category: "Full-Stack Web Application",
    tier: "flagship",
    accent: "violet",
    alignment: "copy-first",
    mediaLayout: "flagship",
    summary:
      "A role-aware academic workflow system that manages final-year projects from proposal registration through supervision, evaluation, presentation scheduling, and publication.",
    workflow:
      "The system coordinates Admin, Student, Supervisor, and Evaluator responsibilities across a connected project lifecycle instead of separating each activity into disconnected tools.",
    role: "Implemented the frontend, backend, database integration, authentication, authorization, APIs, validation, file handling, dashboards, and the complete project workflow.",
    architecture:
      "The project exists in two variants that share a React, Express, and Node.js application model: MongoDB in the MERN version and PostgreSQL in the PERN version.",
    capabilities: [
      "Proposal registration, revision, approval, rejection, editing, and cancellation",
      "Supervisor and evaluator assignment with role-aware workflows",
      "Milestones, document uploads, feedback, rubrics, scoring, and evaluations",
      "Presentation scheduling, notifications, dashboards, and project publication",
      "User management, active-account control, validation, and error handling",
      "PDF and ZIP uploads with a supplied 10 MB file limit",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "REST APIs",
    ],
    evidence: [
      {
        label: "WORKFLOW",
        value:
          "Proposal → supervision → milestones → evaluation → presentation → publication",
      },
      {
        label: "ACCESS MODEL",
        value:
          "Email/password login, bcrypt hashing, JWT authentication, RBAC, and account activation state",
      },
      {
        label: "IMPLEMENTATION SCOPE",
        value:
          "End-to-end interface, service, data, authorization, file, validation, and reporting work",
      },
    ],
    media: [
      {
        src: "/images/projects/fyp/Screenshot (418).png",
        alt: "Administrator dashboard of the Final Year Project Management System showing user, project, presentation, and evaluation summaries.",
        width: 1920,
        height: 869,
        role: "primary",
      },
      {
        src: "/images/projects/fyp/Screenshot (422).png",
        alt: "Supervisor assignment interface showing projects, proposal states, and assigned supervisors.",
        width: 1920,
        height: 865,
        role: "supporting",
      },
      {
        src: "/images/projects/fyp/Screenshot (423).png",
        alt: "Presentation scheduling interface for final-year project presentations.",
        width: 1920,
        height: 865,
        role: "supporting",
      },
    ],
    caption:
      "Administrator dashboard, supervisor assignment, and presentation scheduling views from the complete project workflow.",
  },
  major: [
    {
      id: "ai-intelligence-data-warehouse",
      number: "02",
      title: "AI Intelligence Data Warehouse & Business Intelligence",
      category: "Data Engineering and Business Intelligence",
      context: "Team project",
      tier: "major",
      accent: "emerald",
      alignment: "copy-first",
      mediaLayout: "dashboard",
      summary:
        "A PostgreSQL data warehouse and analytical dashboard for studying AI model adoption, human preference, benchmark performance, model categories, and company influence.",
      workflow:
        "The project collects and prepares data from supplied APIs and datasets, loads a star schema, and presents analysis through six focused dashboard areas.",
      architecture:
        "Python ETL stages feed five dimension tables and six fact tables in the ai_intelligence_dw PostgreSQL database; Flask and Chart.js serve the analytical interface.",
      capabilities: [
        "Extract, transform, and load workflows using Python, Requests, JSON, and Psycopg2",
        "Star-schema modeling for model, company, date, benchmark, and category analysis",
        "Dashboards for adoption, preference, performance, categories, influence, and company profiles",
        "KPI analysis across downloads, likes, votes, Elo ratings, benchmark scores, rankings, and market-share signals",
      ],
      technologies: [
        "PostgreSQL",
        "Python",
        "Requests",
        "JSON",
        "Psycopg2",
        "Flask",
        "Chart.js",
      ],
      evidence: [
        {
          label: "DATA MODEL",
          value:
            "Star schema with dim_date, dim_model, dim_company, dim_benchmark, dim_category, and six fact tables",
        },
        {
          label: "SOURCE BOUNDARY",
          value:
            "Hugging Face API plus supplied LMSYS, benchmark, discovered-model, and company-influence datasets",
        },
        {
          label: "ACCURACY NOTE",
          value:
            "LMSYS and benchmark records are maintained in Python data rather than fetched from live APIs; GitHub and OpenRouter ETL was not active",
        },
      ],
      media: [
        {
          src: "/images/projects/data-warehouse/Screenshot (411).png",
          alt: "AI Intelligence data warehouse dashboard showing model downloads, likes, active models, and adoption charts.",
          width: 1920,
          height: 896,
          role: "primary",
        },
        {
          src: "/images/projects/data-warehouse/Screenshot (412).png",
          alt: "Human preference dashboard showing LMSYS Arena ratings, vote totals, company trends, and a model leaderboard.",
          width: 1920,
          height: 876,
          role: "supporting",
        },
        {
          src: "/images/projects/data-warehouse/Screenshot (413).png",
          alt: "Model performance dashboard comparing benchmark scores and state-of-the-art records.",
          width: 1920,
          height: 882,
          role: "supporting",
        },
      ],
      caption:
        "Model adoption, human preference, and benchmark-performance dashboards built on the warehouse model.",
    },
    {
      id: "online-food-ordering-database",
      number: "03",
      title: "Online Food Ordering Database Design",
      category: "Database Design and Data Modeling",
      context: "Team project",
      tier: "major",
      accent: "cyan",
      alignment: "media-first",
      mediaLayout: "diagram",
      summary:
        "A MySQL relational design for the complete ordering lifecycle, from users, restaurants, menus, and food items to payments, delivery, reviews, loyalty, and historical tracking.",
      workflow:
        "The model connects customer ordering, restaurant operations, delivery assignment, payment variants, review eligibility, status history, and price history in a normalized data structure.",
      architecture:
        "The design uses InnoDB, mainly Third Normal Form, superclass/subclass structures for users and payments, and OrderItem as the bridge between orders and food items.",
      capabilities: [
        "Normalized modeling for customers, owners, delivery personnel, restaurants, menus, items, orders, and payments",
        "Stored procedures for ordering, delivery assignment, cancellation, status updates, and food-item creation",
        "Views for active orders, restaurant performance, and customer order history",
        "Triggers for price validation, loyalty updates, order logs, price history, cleanup, and review-rating validation",
        "Analytical queries for revenue, customer value, item popularity, delivery performance, and order status",
      ],
      technologies: ["MySQL 8.0+", "InnoDB", "SQL", "ERD", "3NF"],
      evidence: [
        {
          label: "RELATIONAL MODEL",
          value:
            "One-to-one role subtypes, one-to-many operational relationships, and many-to-many order items resolved through OrderItem",
        },
        {
          label: "DATABASE LOGIC",
          value:
            "Stored procedures, views, and triggers move key workflow and integrity rules into the database layer",
        },
        {
          label: "HISTORY DESIGN",
          value:
            "OrderLog and PriceHistory preserve status and pricing changes for later reporting and analysis",
        },
      ],
      media: [
        {
          src: "/images/projects/food-ordering/Online_Food_Ordering_ERD.png",
          alt: "Entity-relationship diagram for the online food ordering database, including users, restaurants, orders, payments, reviews, and history tables.",
          width: 4315,
          height: 2588,
          role: "primary",
        },
      ],
      caption:
        "The relational model connects identity subtypes, restaurant operations, ordering, payment, delivery, reviews, and historical records.",
    },
  ],
  compact: [
    {
      id: "responsive-real-estate-website",
      number: "04",
      title: "Modern Responsive Real Estate Website",
      category: "Frontend Web Development",
      context: "Single-person project",
      tier: "compact",
      accent: "violet",
      alignment: "copy-first",
      mediaLayout: "responsive",
      summary:
        "A mobile-first property discovery interface that adapts listing, search, service, and contact content across desktop, tablet, and mobile layouts.",
      workflow:
        "The frontend guides visitors from search and property browsing to detailed property content and a contact path without claiming a connected backend or live property service.",
      role: "Designed and implemented the complete responsive frontend and reusable interface structure.",
      architecture:
        "Semantic HTML, Tailwind CSS, and JavaScript support reusable page sections, responsive layout changes, and performance-conscious presentation.",
      capabilities: [
        "Property search interface and listing presentation",
        "Property detail and contact experiences",
        "Mobile-first responsive behavior across desktop, tablet, and phone views",
      ],
      technologies: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Web Design",
      ],
      evidence: [
        {
          label: "RESPONSIVE EVIDENCE",
          value:
            "Supplied desktop, tablet, and mobile captures demonstrate deliberate layout adaptation",
        },
        {
          label: "SCOPE",
          value:
            "Frontend-only implementation; no backend, authentication, database, or live property data is claimed",
        },
      ],
      media: [
        {
          src: "/images/projects/real-estate/Screenshot (391).png",
          alt: "Desktop homepage of the responsive real estate website with property search and featured property content.",
          width: 1886,
          height: 865,
          role: "primary",
        },
        {
          src: "/images/projects/real-estate/Screenshot (396).png",
          alt: "Mobile homepage of the real estate website showing the responsive property search interface.",
          width: 345,
          height: 663,
          role: "mobile",
        },
      ],
      caption:
        "Desktop and mobile views demonstrate the same property-discovery flow at different breakpoints.",
    },
    {
      id: "employee-management-system",
      number: "05",
      title: "Employee Management System",
      category: "Desktop Software Application",
      context: "Single-person project",
      tier: "compact",
      accent: "amber",
      alignment: "copy-first",
      mediaLayout: "desktop",
      summary:
        "A Java Swing desktop application for managing employee, department, attendance, salary, account, and reporting workflows against a PostgreSQL database.",
      workflow:
        "The application brings common administrative records into a menu-driven desktop interface with data-entry forms, tables, refresh operations, and printable salary reporting.",
      role: "Implemented the Swing interface, layered application structure, JDBC data access, PostgreSQL integration, CRUD workflows, and salary reporting.",
      architecture:
        "A layered UI, Model, DAO, and database-configuration structure separates Swing screens from JDBC operations and domain data.",
      capabilities: [
        "CRUD for employees, departments, attendance, and salaries",
        "Username/password login with active-account checking and ADMIN/USER roles",
        "Salary report with employee, department, net salary, refresh, and print functions",
      ],
      technologies: ["Java", "Swing", "PostgreSQL", "JDBC", "DAO"],
      evidence: [
        {
          label: "DESKTOP UI",
          value:
            "JFrame, JPanel, JDialog, JTable, and JMenuBar compose the application interface",
        },
        {
          label: "REPORTING",
          value:
            "Salary reporting presents employee, department, and net salary data with refresh and print operations",
        },
      ],
      media: [
        {
          src: "/images/projects/employee-management/Screenshot (387).png",
          alt: "Java Swing employee management interface showing employee records and CRUD form controls.",
          width: 1920,
          height: 1000,
          role: "primary",
        },
        {
          src: "/images/projects/employee-management/Screenshot (390).png",
          alt: "Java Swing salary report showing employee, department, and net salary columns with refresh and print actions.",
          width: 1920,
          height: 1005,
          role: "supporting",
        },
      ],
      caption:
        "Employee CRUD and salary-report views from the layered Java Swing application.",
    },
  ],
};
