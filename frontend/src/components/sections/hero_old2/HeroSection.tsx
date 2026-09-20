import { heroContent } from "@/content/hero";

import { HeroActions } from "./HeroActions";
import { HeroCircuitArt } from "./HeroCircuitArt";
import { HeroContent } from "./HeroContent";
import { CodeMarkIcon } from "./HeroIcons";
import { HeroSocialLinks } from "./HeroSocialLinks";
import { HeroStageIndicator } from "./HeroStageIndicator";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const role = heroContent.primaryTitle.join(" ");

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroShade} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.centerPanel}>
            <HeroContent />
          </div>

          <div className={styles.bottomPanel} data-grid-ignore>
            <HeroActions actions={heroContent.actions} />
          </div>

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
                  {role}
                </span>
              </div>

              <div className={styles.sidebarDivider} aria-hidden="true" />

              <span className={styles.sidebarEyebrow}>{heroContent.eyebrow}</span>
              <HeroStageIndicator stages={heroContent.stages} />
            </div>

            <HeroSocialLinks socials={heroContent.socials} />
          </aside>

          <aside className={styles.rightPanel} data-grid-ignore>
            <div className={styles.dotMatrix} aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <p className={styles.valueProposition}>{heroContent.valueProposition}</p>
            <HeroCircuitArt />
          </aside>
        </div>
      </div>
    </section>
  );
}
