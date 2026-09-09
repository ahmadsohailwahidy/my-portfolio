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
  violet: styles.accentViolet,
  teal: styles.accentTeal,
};

export function SkillsCluster({ cluster }: SkillsClusterProps) {
  const isRightSide =
    cluster.layout === "frontend" || cluster.layout === "database";

  const className = [
    styles.cluster,
    layoutClasses[cluster.layout],
    accentClasses[cluster.accent],
    isRightSide ? styles.clusterRight : styles.clusterLeft,
  ].join(" ");

  return (
    <article
      className={className}
      aria-labelledby={`${cluster.id}-title`}
      data-flow-step={cluster.index}
    >
      <div className={styles.clusterJoin} aria-hidden="true" data-grid-ignore>
        <span className={styles.connector}>
          <span className={styles.connectorSpark} />
        </span>

        <span className={styles.timelineNode} data-skills-node>
          <span className={styles.nodeHalo} />
          <span className={styles.nodeOrbit} />
          <span className={styles.nodeCore}>
            <strong>{cluster.index}</strong>
            <small>LAYER</small>
          </span>
          <span className={styles.nodeAccent} />
          <span className={styles.nodeContact} />
        </span>
      </div>

      <div className={styles.clusterSurface} data-grid-ignore>
        <div className={styles.clusterContent}>
          <div className={styles.clusterChrome} aria-hidden="true">
            <span className={styles.clusterGlow} />
            <span className={styles.clusterScan} />
            <span className={styles.clusterSocket} />
            <span className={styles.clusterTicks} />
          </div>

          <header className={styles.clusterHeader}>
            <div className={styles.clusterHeading}>
              <span className={styles.clusterBadge}>{cluster.index}</span>
              <div>
                <p className={styles.clusterEyebrow}>{cluster.eyebrow}</p>
                <h3 id={`${cluster.id}-title`}>{cluster.title}</h3>
              </div>
            </div>

            <span className={styles.clusterIcon} aria-hidden="true">
              <SkillIcon name={cluster.icon} />
            </span>
          </header>

          <p className={styles.clusterDescription}>{cluster.description}</p>

          <ul className={styles.featuredTechnologies}>
            {cluster.featured.map((technology) => (
              <SkillsTechnology key={technology.name} technology={technology} />
            ))}
          </ul>

          <div className={styles.supportingLayer}>
            <p>{cluster.supportingLabel}</p>
            <ul aria-label={`${cluster.title} supporting details`}>
              {cluster.supporting.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {cluster.footerLabel && cluster.footerText ? (
            <p className={styles.evidenceLine}>
              <span>{cluster.footerLabel}</span>
              <strong>{cluster.footerText}</strong>
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
