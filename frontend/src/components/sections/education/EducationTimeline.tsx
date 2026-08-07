import type { CSSProperties } from "react";

import type { EducationTimelineItem } from "@/types/education";

import { EducationIcon } from "./EducationIcons";
import styles from "./EducationSection.module.css";

interface EducationTimelineProps {
  readonly items: readonly EducationTimelineItem[];
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <ol className={styles.timeline} aria-label="Academic timeline">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`${styles.timelineItem} ${
            item.current ? styles.timelineItemCurrent : ""
          }`}
          data-education-reveal
          data-timeline-side={index % 2 === 0 ? "left" : "right"}
          style={{ "--education-order": index } as CSSProperties}
        >
          <div className={styles.timelineRail} aria-hidden="true">
            <span className={styles.timelineNode}>
              <EducationIcon name={item.icon} />
            </span>
            {index < items.length - 1 ? (
              <span className={styles.timelineLine}>
                <i />
              </span>
            ) : null}
          </div>

          <article className={styles.timelineCard}>
            <div className={styles.timelineTopline}>
              <span>{item.period}</span>
              <strong>{item.status}</strong>
            </div>

            <h4>{item.title}</h4>

            <div className={styles.timelineInstitution}>
              <span>{item.institution}</span>
              {item.department ? <small>{item.department}</small> : null}
            </div>

            <p>{item.description}</p>

            <ul className={styles.timelineDetails}>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
