import type { SkillStatus, SkillTechnology } from "@/types/skills";

import { SkillIcon } from "./SkillsIcons";
import styles from "./SkillsSection.module.css";

interface SkillsTechnologyProps {
  readonly technology: SkillTechnology;
}

const statusLabels: Record<SkillStatus, string> = {
  applied: "Applied",
  learning: "Learning",
};

const statusClasses: Record<SkillStatus, string> = {
  applied: styles.statusApplied,
  learning: styles.statusLearning,
};

export function SkillsTechnology({ technology }: SkillsTechnologyProps) {
  const className = [
    styles.technologyNode,
    statusClasses[technology.status],
  ].join(" ");

  return (
    <li className={className}>
      {technology.icon ? (
        <span className={styles.technologyIcon} aria-hidden="true">
          <SkillIcon name={technology.icon} />
        </span>
      ) : null}

      <span className={styles.technologyCopy}>
        <strong>{technology.name}</strong>
        {technology.note ? <span>{technology.note}</span> : null}
      </span>

      <span className={styles.technologyStatus}>
        {statusLabels[technology.status]}
      </span>
    </li>
  );
}
