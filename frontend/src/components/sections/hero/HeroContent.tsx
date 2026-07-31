import { heroContent } from "@/content/hero";

import { HashRevealText } from "./HashRevealText";
import { HeroActions } from "./HeroActions";
import { HeroSocialLinks } from "./HeroSocialLinks";
import styles from "./HeroSection.module.css";

export function HeroContent() {
  return (
    <div className={styles.contentGrid} data-grid-ignore>
      <aside className={styles.introRail} aria-label="Personal introduction">
        <div className={styles.railHeading}>
          <span className={styles.railIndex}>00 / INTRO</span>
          <span className={styles.railLine} aria-hidden="true" />
        </div>

        <div className={styles.identityBlock}>
          <p>{heroContent.greeting}</p>
          <HashRevealText
            className={styles.identityName}
            text={heroContent.name}
            delay={120}
            duration={760}
          />
        </div>

        <HeroSocialLinks socials={heroContent.socials} />
      </aside>

      <div className={styles.mainContent}>
        <div className={styles.roleLabel}>
          <span className={styles.rolePulse} aria-hidden="true" />
          <span>{heroContent.studentRole}</span>
        </div>

        <h1 id="hero-title" className={styles.headline}>
          <span className={`${styles.headlineLine} ${styles.headlineBase}`}>
            {heroContent.primaryTitle[0]}
          </span>

          <HashRevealText
            className={`${styles.headlineLine} ${styles.headlineAccent}`}
            text={heroContent.primaryTitle[1]}
            delay={300}
            duration={1100}
          />
        </h1>

        <div className={styles.supportingContent}>
          <p className={styles.secondaryTitle}>{heroContent.secondaryTitle}</p>
          <p className={styles.description}>{heroContent.description}</p>
        </div>

        <div className={styles.actionRow}>
          <HeroActions actions={heroContent.actions} />
        </div>

        <ol className={styles.specialties} aria-label="Core specialties">
          {heroContent.specialties.map((specialty) => (
            <li key={specialty.number}>
              <span>{specialty.number}</span>
              <strong>{specialty.label}</strong>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
