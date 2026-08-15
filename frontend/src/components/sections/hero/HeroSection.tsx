import { heroContent } from "@/content/hero";

import { CodeMarkIcon } from "./HeroIcons";
import { HeroActions } from "./HeroActions";
import { HeroCircuitArt } from "./HeroCircuitArt";
import { HeroContent } from "./HeroContent";
import { HeroSocialLinks } from "./HeroSocialLinks";
import { HeroStageIndicator } from "./HeroStageIndicator";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroShade} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <aside className={styles.leftPanel} data-grid-ignore>
            <div className={styles.leftPanelTop}>
              <div className={styles.codeOrb} aria-hidden="true">
                <span className={styles.codeOrbRing} />
                <CodeMarkIcon className={styles.codeIcon} />
              </div>

              <div className={styles.sidebarIdentity}>
                <strong>{heroContent.name}</strong>
                <span className={styles.sidebarRole}>
                  <i aria-hidden="true" />
                  Full-Stack Developer
                </span>
              </div>

              <div className={styles.sidebarDivider} aria-hidden="true" />

              <span className={styles.sidebarEyebrow}>
                {heroContent.eyebrow}
              </span>
              <HeroStageIndicator stages={heroContent.stages} />
            </div>

            <HeroSocialLinks socials={heroContent.socials} />
          </aside>

          <div className={styles.centerPanel}>
            <HeroContent />
          </div>

          <aside className={styles.rightPanel} data-grid-ignore>
            <div className={styles.dotMatrix} aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <p className={styles.valueProposition}>
              {heroContent.valueProposition}
            </p>
            <HeroCircuitArt />
          </aside>

          <div className={styles.bottomPanel}>
            <HeroActions actions={heroContent.actions} />
          </div>
        </div>
      </div>
    </section>
  );
}
