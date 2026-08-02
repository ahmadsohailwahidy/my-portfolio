import { expertiseContent } from "@/content/expertise";

import { ExpertiseCapability } from "./ExpertiseCapability";
import { ExpertiseGrowth } from "./ExpertiseGrowth";
import styles from "./ExpertiseSection.module.css";

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className={styles.section}
      aria-labelledby="expertise-title"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.coordinateGrid} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.sectionHeader} data-grid-ignore>
          <div className={styles.headerMeta}>
            <span className={styles.headerMarker} aria-hidden="true" />

            <p className={styles.sectionLabel}>{expertiseContent.label}</p>

            <p className={styles.sectionMeta}>{expertiseContent.meta}</p>
          </div>

          <div className={styles.headerCopy}>
            <h2 id="expertise-title">{expertiseContent.heading}</h2>

            <p>{expertiseContent.introduction}</p>
          </div>
        </header>

        <div className={styles.architectureHeading} data-grid-ignore>
          <span>{expertiseContent.architectureLabel}</span>

          <span className={styles.architectureRule} aria-hidden="true" />

          <span>INTERFACE → LOGIC → DATA → INSIGHT</span>
        </div>

        <div className={styles.architecture}>
          <div className={styles.connectionPath} aria-hidden="true">
            <span className={styles.connectionHorizontal} />

            <span className={styles.connectionVertical} />

            <span className={styles.connectionPulse} />
          </div>

          {expertiseContent.capabilities.map((capability) => (
            <ExpertiseCapability key={capability.id} capability={capability} />
          ))}
        </div>

        <ExpertiseGrowth content={expertiseContent.growth} />
      </div>
    </section>
  );
}
