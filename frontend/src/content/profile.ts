import { aboutContent } from "@/content/about";
import { resumeContent } from "@/content/resume";
import type { ProfessionalProfileContentData } from "@/types/profile";

export const professionalProfileContent = {
  label: "PROFILE / 09",
  meta: "PROFESSIONAL DOSSIER · WORK STYLE · CAREER DIRECTION",
  headingLead: "A concise professional brief,",
  headingAccent: "beyond the code.",
  introduction:
    "A recruiter-friendly view of how I approach software work, communicate across languages, continue learning, and evaluate the opportunities that fit my current direction.",

  snapshotLabel: "CURRENT PROFILE",
  snapshot:
    "Final-year Computer Science student working across full-stack, software, and database development, with practical project experience in management systems, modern web applications, and structured data solutions.",

  directionLabel: "CAREER DIRECTION",
  directionHeading:
    "Growing toward reliable software engineering for systems, data, and modern products.",
  direction:
    "My next step is to deepen backend engineering, cloud, system design, database, and data-engineering capability while continuing to build complete web applications and responsibly explore AI-enabled systems.",

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
  resumeHeading: "The concise record behind this portfolio.",
  resume: resumeContent,
} satisfies ProfessionalProfileContentData;
