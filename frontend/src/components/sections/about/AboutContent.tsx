import type { AboutContentData } from "@/types/about";

import { ArrowIcon } from "./AboutIcons";
import { AboutHighlights } from "./AboutHighlights";
import { AboutTechStack } from "./AboutTechStack";
import styles from "./AboutSection.module.css";

interface AboutContentProps {
  content: AboutContentData;
}

export function AboutContent({ content }: AboutContentProps) {
  return (
    <article className={styles.story} aria-labelledby="about-title">
      <header className={styles.sectionHeader}>
        <div className={styles.headingMeta}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <p className={styles.headingSupport}>
            A concise look at how I approach building useful, reliable software.
          </p>
        </div>
        <h2 id="about-title">{content.heading}</h2>
      </header>

      <div className={styles.narrative}>
        <section
          className={`${styles.storyPanel} ${styles.storyLeadPanel}`}
          aria-labelledby="about-summary-title"
        >
          <p className={styles.storyPanelLabel} id="about-summary-title">
            Professional summary
          </p>
          <p className={styles.lead}>{content.introduction}</p>
        </section>

        <section
          className={styles.storyPanel}
          aria-labelledby="about-project-story-title"
        >
          <p className={styles.storyPanelLabel} id="about-project-story-title">
            Project-backed experience
          </p>
          <p>{content.projectStory}</p>
        </section>
      </div>

      <blockquote className={styles.objective}>
        {/* <p className={styles.subsectionLabel}>{content.careerObjectiveLabel}</p>
        <p>{content.careerObjective}</p> */}
      </blockquote>

      {/* <AboutHighlights highlights={content.highlights} /> */}

      {/* <AboutTechStack
        label={content.selectedTechnologiesLabel}
        technologies={content.selectedTechnologies}
      /> */}

      <aside className={styles.opportunity} aria-label="Opportunity status">
        <div className={styles.opportunityCopy}>
          <p className={styles.subsectionLabel}>{content.opportunityLabel}</p>
          <p>{content.opportunityStatement}</p>
        </div>

        <nav
          className={styles.opportunityActions}
          aria-label="About section actions"
        >
          {content.opportunityLinks.map((link, index) => (
            <a
              className={
                index === 0 ? styles.primaryLink : styles.secondaryLink
              }
              href={link.href}
              aria-label={link.ariaLabel}
              key={link.href}
              data-grid-ignore
            >
              {link.label}
              <ArrowIcon className={styles.linkIcon} />
            </a>
          ))}
        </nav>
      </aside>
    </article>
  );
}
