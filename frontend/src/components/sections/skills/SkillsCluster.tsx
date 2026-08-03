import type {
  SkillAccent,
  SkillCluster as SkillClusterData,
  SkillClusterLayout,
} from "@/types/skills";

import { SkillIcon } from "./SkillsIcons";
import { SkillsTechnology } from "./SkillsTechnology";
import styles from "./SkillsSection.module.css";

interface SkillsClusterProps {
  readonly cluster: SkillClusterData;
}

const layoutClasses: Record<SkillClusterLayout, string> = {
  frontend: styles.frontendCluster,
  backend: styles.backendCluster,
  database: styles.databaseCluster,
  intelligence: styles.intelligenceCluster,
};

const accentClasses: Record<SkillAccent, string> = {
  cyan: styles.accentCyan,
  emerald: styles.accentEmerald,
  mixed: styles.accentMixed,
  violet: styles.accentViolet,
};

export function SkillsCluster({ cluster }: SkillsClusterProps) {
  const className = [
    styles.cluster,
    layoutClasses[cluster.layout],
    accentClasses[cluster.accent],
  ].join(" ");

  return (
    <article
      className={className}
      aria-labelledby={`${cluster.id}-title`}
      data-flow-step={cluster.index}
      data-grid-ignore
    >
      <span className={styles.clusterIndex} aria-hidden="true">
        {cluster.index}
      </span>

      <header className={styles.clusterHeader}>
        <span className={styles.clusterIcon} aria-hidden="true">
          <SkillIcon name={cluster.icon} />
        </span>

        <div>
          <p className={styles.clusterEyebrow}>
            {cluster.index} / {cluster.eyebrow}
          </p>

          <h3 id={`${cluster.id}-title`}>{cluster.title}</h3>
        </div>
      </header>

      <p className={styles.clusterDescription}>{cluster.description}</p>

      <ul className={styles.featuredTechnologies}>
        {cluster.featured.map((technology) => (
          <SkillsTechnology key={technology.name} technology={technology} />
        ))}
      </ul>

      <div className={styles.supportingLayer}>
        <p>SUPPORTING LAYER</p>

        <ul aria-label={`${cluster.title} supporting skills`}>
          {cluster.supporting.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      {cluster.evidence ? (
        <p className={styles.evidenceLine}>
          <span>{cluster.evidence.label}</span>

          <strong>{cluster.evidence.project}</strong>
        </p>
      ) : null}
    </article>
  );
}
