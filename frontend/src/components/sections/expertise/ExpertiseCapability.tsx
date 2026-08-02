import type {
  ExpertiseAccent,
  ExpertiseCapability as ExpertiseCapabilityData,
  ExpertiseLayout,
} from "@/types/expertise";

import { ExpertiseIcon } from "./ExpertiseIcons";
import styles from "./ExpertiseSection.module.css";

interface ExpertiseCapabilityProps {
  readonly capability: ExpertiseCapabilityData;
}

const layoutClasses: Record<ExpertiseLayout, string> = {
  anchor: styles.anchorCapability,
  backend: styles.backendCapability,
  database: styles.databaseCapability,
  data: styles.dataCapability,
};

const accentClasses: Record<ExpertiseAccent, string> = {
  cyan: styles.cyanAccent,
  emerald: styles.emeraldAccent,
  mixed: styles.mixedAccent,
};

export function ExpertiseCapability({ capability }: ExpertiseCapabilityProps) {
  const capabilityClassName = [
    styles.capability,
    layoutClasses[capability.layout],
    accentClasses[capability.accent],
  ].join(" ");

  return (
    <article
      className={capabilityClassName}
      aria-labelledby={`${capability.id}-title`}
      data-grid-ignore
    >
      <span className={styles.capabilityCoordinate} aria-hidden="true">
        {capability.number}
      </span>

      <header className={styles.capabilityHeader}>
        <span className={styles.iconShell} aria-hidden="true">
          <ExpertiseIcon name={capability.icon} className={styles.icon} />
        </span>

        <div className={styles.capabilityHeadingGroup}>
          <p className={styles.capabilityEyebrow}>
            {capability.number} / {capability.eyebrow}
          </p>

          <h3 id={`${capability.id}-title`}>{capability.title}</h3>
        </div>
      </header>

      <div className={styles.capabilityBody}>
        <p className={styles.capabilityDescription}>{capability.description}</p>

        <p className={styles.valueStatement}>{capability.valueStatement}</p>
      </div>

      {capability.systemFlow ? (
        <ol
          className={styles.systemFlow}
          aria-label={`${capability.title} system flow`}
        >
          {capability.systemFlow.map((step, index) => (
            <li key={step}>
              <span className={styles.flowIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      <div className={styles.evidenceBlock}>
        <p className={styles.blockLabel}>PROJECT EVIDENCE</p>

        <ul>
          {capability.evidence.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>

      <ul className={styles.technologyList} aria-label="Selected technologies">
        {capability.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
