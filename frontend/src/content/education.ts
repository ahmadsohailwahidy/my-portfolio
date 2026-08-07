import type { EducationContentData } from "@/types/education";

export const educationContent = {
  label: "EDUCATION / 06",
  meta: "FINAL YEAR · 7TH SEMESTER · 2022—PRESENT",
  heading: "Academic foundations for practical software systems.",
  introduction:
    "My studies in Computer Science and Informatics Engineering, within the Information Systems department, give structure to how I approach software: understanding requirements, organizing data, and connecting user needs with reliable applications.",
  visualStatus: {
    eyebrow: "Phase",
    phase: "06",
    caption: "Academic orbit",
    coreValue: "07",
    coreLabel: "Semester",
    coreMeta: "Final year",
    orbitLabels: ["2022", "Now", "Information Systems"],
    description:
      "The orbit visualizes progression from the start of university study toward the current final-year stage, with Information Systems at the center of the academic path.",
    pathLabels: ["Foundation", "Applied projects", "Professional growth"],
  },
  currentStatusLabel: "Current academic status",
  currentStatus:
    "Final-year undergraduate · Seventh semester · Final semester in progress",
  timelineLabel: "ACADEMIC TIMELINE",
  timelineHeading:
    "A focused path from foundational education to applied computing.",
  timeline: [
    {
      id: "computer-science",
      period: "2022 — Present",
      status: "In progress",
      title: "Computer Science & Informatics Engineering",
      institution: "Faculty of Computer Science & Informatics",
      department: "Information Systems Department",
      description:
        "A final-year program focused on the relationship between people, processes, software, and data. My academic work supports the same practical areas shown throughout this portfolio: web applications, software systems, databases, and structured problem-solving.",
      details: [
        "Current level: Seventh semester",
        "Study stage: Final academic semester",
        "Field of study: Information Systems",
      ],
      icon: "campus",
      current: true,
    },
    {
      id: "high-school",
      period: "Completed before 2022",
      status: "Completed",
      title: "High School Diploma",
      institution: "Secondary education",
      department: "Highest completed qualification",
      description:
        "The completed academic credential that prepared me for undergraduate study in computing and information systems.",
      details: [
        "Credential status: Completed",
        "Progression: Entered university studies in 2022",
      ],
      icon: "diploma",
    },
  ],
  focusLabel: "RELEVANT STUDY AREAS",
  focusHeading: "The academic knowledge most connected to my development work.",
  focusDescription:
    "These are broad study areas reflected in my university program and portfolio projects. They are presented as an academic foundation, not as a transcript or a list of certificates.",
  focusAreas: [
    {
      id: "information-systems",
      number: "01",
      title: "Information Systems Thinking",
      description:
        "Understanding how users, business processes, data, and software work together inside a complete system.",
      icon: "systems",
    },
    {
      id: "database-foundations",
      number: "02",
      title: "Database & Data Modeling",
      description:
        "Structuring entities, relationships, and information flows so applications can store and retrieve data clearly.",
      icon: "database",
    },
    {
      id: "software-foundations",
      number: "03",
      title: "Software Development Foundations",
      description:
        "Applying programming logic, modular thinking, and maintainable structure to academic and personal software projects.",
      icon: "software",
    },
    {
      id: "web-systems",
      number: "04",
      title: "Web Application Development",
      description:
        "Connecting responsive interfaces, application logic, APIs, and databases into practical web-based systems.",
      icon: "web",
    },
  ],
  learningLabel: "SELF-DIRECTED LEARNING",
  learningHeading:
    "Extending university study through structured technical practice.",
  learningDescription:
    "Alongside formal study, I use long-form video courses and project-based tutorials to strengthen frontend, backend, and general programming skills.",
  learningResources: [
    {
      provider: "freeCodeCamp",
      path: "Frontend and backend developer learning paths",
      note: "Video-based self-study and implementation practice",
    },
    {
      provider: "Programming with Mosh",
      path: "Programming and software development courses",
      note: "Concept reinforcement through guided lessons",
    },
  ],
  learningNote:
    "No certificate or formal credential is claimed for these resources; they are included as evidence of independent learning habits.",
} satisfies EducationContentData;
