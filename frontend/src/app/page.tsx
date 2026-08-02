import { AboutSection } from "@/components/sections/about";
import { ExpertiseSection } from "@/components/sections/expertise";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SkillsSection />
    </main>
  );
}
