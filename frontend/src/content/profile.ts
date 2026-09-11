import { aboutContent } from "@/content/about";
import { resumeContent } from "@/content/resume";
import type { ProfessionalProfileContentData } from "@/types/profile";

export const professionalProfileContent = {
  label: "PROFILE / 05",
  meta: "PROFESSIONAL PROFILE & RESUME",
  headingLead: "A concise professional brief, ",
  headingAccent: "beyond the code.",
  introduction:
    "A quick view of my career direction, language profile, and professional resume.",

  snapshotLabel: "CURRENT PROFILE",
  snapshot:
    "Final-year Computer Science student working across full-stack, software, and database development, with practical project experience in management systems, modern web applications, and structured data solutions.",

  directionLabel: "CAREER DIRECTION",
  directionHeading:
    "Building toward stronger software engineering across systems, backend, and data.",
  direction:
    "I’m continuing to deepen my backend, system design, database, cloud, and data-engineering capabilities while building complete web applications and exploring practical AI-enabled systems.",

  strengthsLabel: "WORKING PRINCIPLES",
  strengthsHeading: "Four strengths that shape how I approach implementation.",
  strengthsDescription:
    "These are described as working habits rather than percentage scores or unsupported professional claims.",
  strengths: [
    {
      index: "01",
      title: "Structured problem-solving",
      description:
        "I break problems into interface, application-logic, data, and integration decisions so each part can be understood, implemented, and improved clearly.",
      icon: "problem-solving",
    },
    {
      index: "02",
      title: "Attention to implementation detail",
      description:
        "I pay attention to responsive behavior, validation, data flow, reusable structure, and the smaller states that make an application feel dependable.",
      icon: "implementation-detail",
    },
    {
      index: "03",
      title: "Continuous learning",
      description:
        "I actively extend my current web and database foundation toward stronger backend, cloud, data-engineering, system-design, and AI-system knowledge.",
      icon: "continuous-learning",
    },
    {
      index: "04",
      title: "Collaborative iteration",
      description:
        "I prefer clear requirements, practical feedback, shared understanding, and incremental review so implementation decisions stay connected to the real goal.",
      icon: "collaboration",
    },
  ],

  languagesLabel: "LANGUAGE PROFILE",
  languagesHeading: "Communication across three languages.",
  languagesDescription:
    "Proficiency is presented descriptively and exactly as provided, without numeric scoring.",
  languages: [
    {
      name: "Persian (Dari)",
      context: "Primary language",
      proficiency: "Native",
    },
    {
      name: "Pashto",
      context: "Spoken language",
      proficiency: "Fluent",
    },
    {
      name: "English",
      context: "Professional communication",
      proficiency: "Professional Working Proficiency",
    },
  ],

  opportunityLabel: "OPPORTUNITY FIT",
  opportunityHeading: "Where I am open to contributing next.",
  opportunityStatement: aboutContent.opportunityStatement,
  opportunityPreferences: [
    {
      label: "Development work",
      value: "Software development roles",
      description:
        "Opportunities connected to the full-stack, backend, database, and web-application work demonstrated across this portfolio.",
    },
    {
      label: "Collaboration",
      value: "Freelance collaborations",
      description:
        "Focused, clearly scoped development work where practical implementation and iterative feedback are valuable.",
    },
    {
      label: "Work arrangement",
      value: "Remote",
      description:
        "Remote software development roles and collaboration are explicitly part of my current opportunity search.",
    },
    {
      label: "Long-term direction",
      value: "Enterprise technology teams",
      description:
        "Environments where I can contribute while continuing to strengthen software engineering, systems, data, and delivery capability.",
    },
  ],

  resumeLabel: "RESUME ACCESS",
  resumeHeading: "A concise record of my background and work.",
  resume: resumeContent,
} satisfies ProfessionalProfileContentData;
