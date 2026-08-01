import styles from "./AboutSection.module.css";

interface AboutTechStackProps {
  label: string;
  technologies: readonly string[];
}

export function AboutTechStack({ label, technologies }: AboutTechStackProps) {
  return (
    <div className={styles.techStack} data-grid-ignore>
      <p className={styles.subsectionLabel}>{label}</p>
      <ul className={styles.techList} aria-label={label}>
        {technologies.map((technology) => (
          <li className={styles.techItem} key={technology} data-grid-ignore>
            <span aria-hidden="true" />
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
