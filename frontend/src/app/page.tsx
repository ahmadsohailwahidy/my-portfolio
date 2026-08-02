import { AboutSection } from "@/components/sections/about";
import { ExpertiseSection } from "@/components/sections/expertise";
import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main>

      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
    </main>
  );
}
