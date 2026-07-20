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

export const portfolioData = {
    name: "Ahmad Sohail Wahidy",
    shortName: "ASW",
    role: "Full-Stack Developer",
    greeting: "Hello my name is ",

    introduction:  "I build modern, responsive, and reliable web applications with a strong focus on clean interfaces, scalable architecture, and excellent user experience.",
    location: "Afghanistan",

    availability: "Available for selected projects",
    email: "wahidysohail@gmail.com",
    githubUrl:"https://github.com/AhmadSohailWahidy",
    linkedinUrl: "https://linkedin.com/AhmadSohailWahidy",
    technologies: [
         "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    ],

} as const;


