import { aboutContent } from "@/content/about";

import { AboutContent } from "./AboutContent";
import styles from "./AboutSection.module.css";
import { AboutVisual } from "./AboutVisual";

export function AboutSection() {
  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
      data-grid-ignore
    >
      <div className={styles.container}>
        <div className={styles.dossier}>
          <AboutVisual profile={aboutContent.profile} />
          <AboutContent content={aboutContent} />
        </div>
      </div>
    </section>
  );
}
