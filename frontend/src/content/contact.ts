import type { ContactContentData } from "@/types/contact";

export const contactContent = {
  label: "CONTACT / 10",
  meta: "FINAL PHASE · OPEN CHANNEL",
  headingLead: "Have an opportunity in mind?",
  headingAccent: "Let’s talk.",
  introduction:
    "If you’re hiring, planning a focused development project, or looking for a collaborator, send a concise note about what you’re working on and where I could contribute.",
  email: "wahidysohail@gmail.com",
  responseLabel: "Typical response",
  responseWindow: "24–48 hours",
  directHeading: "Choose the channel that works for you.",
  directDescription:
    "Email is the fastest way to start a conversation. GitHub and LinkedIn are available when you want more professional or technical context first.",
  directLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ahmadsohailwahidy",
      display: "github.com/AhmadSohailWahidy",
      icon: "github",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmadsohailwahidy",
      display: "linkedin.com/in/AhmadSohailWahidy",
      icon: "linkedin",
      external: true,
    },
  ],
  opportunitiesLabel: "OPPORTUNITY FIT",
  opportunitiesHeading: "Work I’m open to discussing.",
  opportunitiesDescription:
    "Focused software work where my current web, backend, database, and growing AI interests can contribute meaningfully.",
  opportunities: [
    { label: "Web Development", icon: "web" },
    { label: "Backend Development", icon: "backend" },
    { label: "AI / Machine Learning Projects", icon: "ai" },
    { label: "Freelance Projects", icon: "freelance" },
    { label: "Collaboration", icon: "collaboration" },
  ],
  formLabel: "MESSAGE COMPOSER",
  formHeading: "Give me the useful context.",
  formDescription:
    "A few clear details are enough: who you are, what you’re working on, and where you think I can help.",
  formPrivacyNote:
    "This form prepares the message in your default email app. The portfolio does not store your message or personal details.",
  footerKicker: "END OF PORTFOLIO · OPEN TO CONVERSATION",
  footerMessage: "Thanks for taking the time to explore my work.",
  footerNavigationIds: ["home", "projects", "services", "profile", "contact"],
} satisfies ContactContentData;
