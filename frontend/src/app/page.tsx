import HeroSection from "./components/HeroSection";
import InteractiveGrid from "./components/InteractiveGrid";
import Navbar from "./components/Navbar";

type NavItem = {
  number: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
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
    href: "#projects",
  },
  {
    number: "04",
    label: "Contact",
    href: "#contact",
  },
];

export default function HomePage() {
  return (
    <InteractiveGrid>
      
      <Navbar />
      <HeroSection />
    </InteractiveGrid>
  );
}
