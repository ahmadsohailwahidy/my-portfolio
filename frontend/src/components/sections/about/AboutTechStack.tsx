import type { AboutTechnology } from "@/types/about";

import { TechnologyIcon } from "./AboutIcons";
import styles from "./AboutSection.module.css";

interface AboutTechStackProps {
  label: string;
  technologies: readonly AboutTechnology[];
}

export function AboutTechStack({ label, technologies }: AboutTechStackProps) {
  return (
    <div className={styles.techStack} data-grid-ignore>
      <div className={styles.techStackHeader}>
        <p className={styles.subsectionLabel}>{label}</p>
        <p className={styles.techSupportingText}>
          A concise snapshot of the core tools currently closest to my workflow.
        </p>
      </div>

      <ul className={styles.techList} aria-label={label}>
        {technologies.map((technology) => (
          <li
            className={styles.techItem}
            key={technology.name}
            data-grid-ignore
          >
            <span className={styles.techIconWrap} aria-hidden="true">
              <TechnologyIcon
                name={technology.icon}
                className={styles.techIcon}
              />
            </span>
            <span>{technology.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
