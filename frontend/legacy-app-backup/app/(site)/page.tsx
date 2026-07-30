import HeroSection from "@/components/sections/HeroSection";
import InteractiveGrid from "@/components/effects/InteractiveGrid";
import Navbar from "@/components/layout/Navbar";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <InteractiveGrid>
      <Navbar />
      <main>
        <HeroSection data={portfolioData} />
      </main>
    </InteractiveGrid>
  );
}
