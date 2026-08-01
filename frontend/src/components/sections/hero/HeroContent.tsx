import { heroContent } from "@/content/hero";

import { HashRevealText } from "./HashRevealText";
import { HeroActions } from "./HeroActions";
import { SparkIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

export function HeroContent() {
  return (
    <div className={styles.heroContent} > {/*data-grid-ignore*/}
      <div className={styles.identityColumn}>
        <div className={styles.identityBlock}>
          <span className={styles.greeting}>{heroContent.greeting}</span>

          <HashRevealText
            className={styles.identityName}
            text={heroContent.name}
            delay={130}
            duration={900}
          />
        </div>

        <div className={styles.roleLabel}>
          <span className={styles.roleSignal} aria-hidden="true">
            <SparkIcon className={styles.roleSignalIcon} />
          </span>
          <span>{heroContent.studentRole}</span>
        </div>

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

        <p className={styles.secondaryTitle}>{heroContent.secondaryTitle}</p>

        <HeroActions actions={heroContent.actions} />
      </div>

      <aside className={styles.summaryColumn} aria-label="Professional summary">
        <div className={styles.summaryHeader}>
          <span>Profile / 01</span>
          <span className={styles.summaryHeaderRule} aria-hidden="true" />
        </div>

        <p className={styles.description}>{heroContent.description}</p>

        <ol className={styles.specialties} aria-label="Core specialties">
          {heroContent.specialties.map((specialty) => (
            <li key={specialty.number} className={styles.specialtyItem}>
              <span className={styles.specialtyNumber}>{specialty.number}</span>
              <span className={styles.specialtyRule} aria-hidden="true" />
              <strong>{specialty.label}</strong>
              <span className={styles.specialtyDot} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
