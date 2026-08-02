import type { SkillRail } from "@/types/skills";

import { SkillIcon } from "./SkillsIcons";
import { SkillsTechnology } from "./SkillsTechnology";
import styles from "./SkillsSection.module.css";

interface SkillsRailProps {
  readonly content: SkillRail;
  readonly variant: "foundation" | "delivery";
}

export function SkillsRail({ content, variant }: SkillsRailProps) {
  const className = [
    styles.rail,
    variant === "foundation" ? styles.foundationRail : styles.deliveryRail,
  ].join(" ");

  return (
    <aside className={className} data-grid-ignore>
      <div className={styles.railIntro}>
        <span className={styles.railIcon} aria-hidden="true">
          <SkillIcon name={content.icon} />
        </span>

        <div>
          <p className={styles.railLabel}>{content.label}</p>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      </div>

      <ul className={styles.railItems}>
        {content.items.map((item) => (
          <SkillsTechnology key={item.name} technology={item} />
        ))}
      </ul>
    </aside>
  );
}
