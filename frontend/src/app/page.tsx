import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { ExpertiseSection } from "@/components/sections/expertise";
import { GitHubSection } from "@/components/sections/github/GitHubSection";
import { HeroSection } from "@/components/sections/hero";
import { ProfessionalProfileSection } from "@/components/sections/profile";
import { FeaturedProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <GitHubSection />
      <ServicesSection />
      <ProfessionalProfileSection />
    </main>
  );
}
