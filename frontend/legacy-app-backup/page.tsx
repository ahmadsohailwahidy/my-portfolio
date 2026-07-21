import InteractiveGrid from "@/components/effects/InteractiveGrid";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <InteractiveGrid>
      <Navbar />
      <HeroSection />
    </InteractiveGrid>
  );
}
