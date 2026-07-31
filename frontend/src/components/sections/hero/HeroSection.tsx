import { heroContent } from "@/content/hero";

import { HeroContent } from "./HeroContent";
import { HeroSocialLinks } from "./HeroSocialLinks";
import { HeroStageIndicator } from "./HeroStageIndicator";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <HeroStageIndicator stages={heroContent.stages} />

      <div className={styles.heroGlowOne} aria-hidden="true" />
      <div className={styles.heroGlowTwo} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.frame} data-grid-ignore>
          <header className={styles.topMeta}>
            <span className={styles.metaLabel}>Portfolio / 2026</span>
            <span className={styles.metaRule} aria-hidden="true" />
            <span className={styles.metaLabel}>
              Full-Stack · Software · Database
            </span>
          </header>

          <div className={styles.frameBody}>
            <HeroContent />
          </div>

          <footer className={styles.frameFooter}>
            <HeroSocialLinks socials={heroContent.socials} />
          </footer>
        </div>
      </div>
    </section>
  );
}
