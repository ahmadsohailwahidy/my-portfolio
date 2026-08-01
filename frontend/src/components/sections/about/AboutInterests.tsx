import type { AboutInterestGroup } from "@/types/about";

import { AboutIcon } from "./AboutIcons";
import styles from "./AboutSection.module.css";

interface AboutInterestsProps {
  label: string;
  heading: string;
  description: string;
  groups: readonly AboutInterestGroup[];
}

export function AboutInterests({
  label,
  heading,
  description,
  groups,
}: AboutInterestsProps) {
  return (
    <article
      className={styles.interests}
      aria-labelledby="about-interests-title"
    >
      <header className={styles.interestsHeader}>
        <p className={styles.subsectionLabel}>{label}</p>
        <div>
          <h3 id="about-interests-title">{heading}</h3>
          <p>{description}</p>
        </div>
      </header>

      <ul className={styles.interestGrid} data-grid-ignore>
        {groups.map((group, index) => (
          <li className={styles.interestGroup} key={group.id} data-grid-ignore>
            <div className={styles.interestTopline}>
              <span className={styles.interestNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <AboutIcon name={group.icon} className={styles.interestIcon} />
            </div>
            <h4>{group.title}</h4>
            <ul className={styles.interestItems}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
