import { HeroContent } from "./HeroContent";
import { ArrowDownIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.readabilityGlow} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.topMeta} data-grid-ignore>
          <span>PORTFOLIO / 2026</span>
          <span className={styles.topMetaRule} aria-hidden="true" />
          <span>FULL-STACK · SOFTWARE · DATABASE</span>
        </div>

        <div className={styles.heroLayout}>
          <HeroContent />
        </div>

        <div className={styles.heroFooter} data-grid-ignore>
          <a
            className={styles.scrollPrompt}
            href="#about"
            aria-label="Scroll to the About Me section"
          >
            <span>Scroll to explore</span>
            <ArrowDownIcon className={styles.scrollIcon} />
          </a>

          <span className={styles.sectionMarker}>01 / 13</span>
        </div>
      </div>
    </section>
  );
}
