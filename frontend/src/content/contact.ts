import type { ContactContentData } from "@/types/contact";

export const contactContent = {
  label: "CONTACT / 10",
  meta: "FINAL PHASE · OPPORTUNITY CTA",
  headingLead: "Have an opportunity in mind?",
  headingAccent: "Let’s talk.",
  introduction:
    "If you’re hiring, planning a focused development project, or looking for a collaborator, send a concise note about what you’re working on and where I could contribute. I usually respond within 24–48 hours.",
  email: "wahidysohail@gmail.com",
  responseLabel: "Typical response",
  responseWindow: "24–48 hours",
  directLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ahmadsohailwahidy",
      display: "github.com/AhmadSohailWahidy",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmadsohailwahidy",
      display: "linkedin.com/in/AhmadSohailWahidy",
      external: true,
    },
  ],
  opportunitiesLabel: "OPEN TO",
  opportunitiesHeading: "Relevant opportunities and focused collaboration.",
  opportunities: [
    "Web Development",
    "Backend Development",
    "AI / Machine Learning Projects",
    "Freelance Projects",
    "Collaboration",
  ],
  formLabel: "SEND A NOTE",
  formHeading: "Share the details that matter.",
  formDescription:
    "Tell me who you are, what you’re working on, and what kind of help or collaboration you have in mind.",
  formPrivacyNote:
    "This form prepares the message in your default email app. The portfolio does not store your message or personal details.",
  footerNavigationIds: ["home", "projects", "services", "profile", "contact"],
} satisfies ContactContentData;
