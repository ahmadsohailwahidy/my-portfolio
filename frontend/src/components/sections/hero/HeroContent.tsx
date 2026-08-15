import { heroContent } from "@/content/hero";

import { HashRevealText } from "./HashRevealText";
import styles from "./HeroSection.module.css";

export function HeroContent() {
  return (
    <div className={styles.heroContent} data-grid-ignore>
      <div className={styles.topMeta}>
        <span>{heroContent.eyebrow}</span>
        <span>{heroContent.contextLabel}</span>
      </div>

      <div className={styles.centerIdentity}>
        <div className={styles.greetingRow}>
          <span className={styles.greetingRule} aria-hidden="true" />
          <span className={styles.greeting}>{heroContent.greeting}</span>
        </div>

        <HashRevealText
          className={styles.identityName}
          text={heroContent.name}
          delay={130}
          duration={900}
        />

        <h1 id="hero-title" className={styles.headline}>
          <span className={styles.headlinePrimary}>
            {heroContent.primaryTitle[0]}
          </span>
          <HashRevealText
            className={styles.headlineAccent}
            text={heroContent.primaryTitle[1]}
            delay={380}
            duration={1120}
          />
        </h1>
      </div>

      <div className={styles.horizon} aria-hidden="true">
        <span className={styles.horizonBeam} />
        <span className={styles.horizonPulse} />
      </div>
    </div>
  );
}
