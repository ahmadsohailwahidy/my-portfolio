import { aboutContent } from "@/content/about";

import { AboutContent } from "./AboutContent";
import { AboutInterests } from "./AboutInterests";
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
      <div className={styles.transition} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container} data-grid-ignore>
        <div className={styles.dossier}>
          <AboutVisual profile={aboutContent.profile} />
          <AboutContent content={aboutContent} />
        </div>

        <AboutInterests
          label={aboutContent.interestsLabel}
          heading={aboutContent.interestsHeading}
          description={aboutContent.interestsDescription}
          groups={aboutContent.interestGroups}
        />
      </div>
    </section>
  );
}
