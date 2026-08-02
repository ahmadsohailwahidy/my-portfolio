import type { SkillStatus, SkillTechnology } from "@/types/skills";

import { SkillIcon } from "./SkillsIcons";
import styles from "./SkillsSection.module.css";

interface SkillsTechnologyProps {
  readonly technology: SkillTechnology;
}

const statusLabels: Record<SkillStatus, string> = {
  primary: "Primary",
  applied: "Applied",
  supporting: "Supporting",
  foundation: "Foundation",
  growth: "Growth",
};

const statusClasses: Record<SkillStatus, string> = {
  primary: styles.statusPrimary,
  applied: styles.statusApplied,
  supporting: styles.statusSupporting,
  foundation: styles.statusFoundation,
  growth: styles.statusGrowth,
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
