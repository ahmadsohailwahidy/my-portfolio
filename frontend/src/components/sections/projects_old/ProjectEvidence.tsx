import type { FeaturedProject } from "@/types/projects";

import styles from "./FeaturedProjectsSection.module.css";

interface ProjectEvidenceProps {
  readonly project: FeaturedProject;
}

export function ProjectEvidence({ project }: ProjectEvidenceProps) {
  return (
    <div className={styles.projectEvidence} data-grid-ignore>
      <dl className={styles.evidenceList}>
        {project.evidence.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.capabilityBlock}>
        <p className={styles.blockLabel}>SELECTED CAPABILITIES</p>

        <ul>
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>

      <div className={styles.technologyBlock}>
        <p className={styles.blockLabel}>IMPLEMENTATION SIGNALS</p>

        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
