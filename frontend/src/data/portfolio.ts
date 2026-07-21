export type PortfolioHighlight = {
  title: string,
  description: string;
};

export type DeveloperProfile = {
  focus: string,
  status: string,
  principles: string[];
};

export type NavItem = {
    number: string;
    label: string;
    href: string;
};

export const navItems: NavItem[] = [
  {
    number: "01",
    label: "Home",
    href: "#home",
  },
  {
    number: "02",
    label: "About",
    href: "#about",
  },
  {
    number: "03",
    label: "Projects",
    href: "Projects",
  },
  {
    number: "04",
    label: "Contact",
    href: "#contact",
  },
];

export interface PortfolioData {
  name: string;
  shortName: string;
  role: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  availability: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  technologies: string[];
  highlights: PortfolioHighlight[];
  profile: DeveloperProfile;
}
export const portfolioData: PortfolioData = {
   name: "Ahmad Sohail Wahidy",

   shortName: "AWS",

  role: "Frontend Developer",

  eyebrow: "React · Next.js · TypeScript",

  headline:
    "I build fast, accessible, and visually polished web experiences.",

  introduction:
    "I am a frontend developer focused on transforming ideas into responsive, maintainable, and user-friendly web applications. I work with modern technologies and care about clean architecture, thoughtful design, accessibility, and long-term code quality.",

  availability:
    "Open to internships, freelance projects, and junior frontend opportunities",

  location: "Afghanistan · Available for remote work",

  email: "wahidysohail@gmail.com",

  githubUrl: "https://github.com/ahmadsohailwahidy",

  linkedinUrl: "https://www.linkedin.com/in/AhmadSohailWahidy",

  technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
  ],

  highlights: [
    {
      title: "Responsive Interfaces",
      description:
        "Interfaces designed to work clearly and consistently across desktop, tablet, and mobile devices.",
    },
    {
      title: "Type-Safe Development",
      description:
        "Maintainable applications built with TypeScript, reusable components, and predictable data structures.",
    },
    {
      title: "Clean Architecture",
      description:
        "Organized project structures that separate content, components, routes, and application logic.",
    },
  ],

  profile: {
    focus: "Modern frontend applications",

    status: "Available for opportunities",

    principles: [
      "Accessible UI",
      "Reusable components",
      "Responsive design",
      "Maintainable code",
    ],
  },
};



