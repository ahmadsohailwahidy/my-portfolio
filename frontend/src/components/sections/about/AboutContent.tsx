import type { AboutContentData } from "@/types/about";

import {
  ArrowIcon,
  CodePanelIcon,
  DocumentPanelIcon,
  UsersPanelIcon,
} from "./AboutIcons";
import styles from "./AboutSection.module.css";

interface AboutContentProps {
  content: AboutContentData;
}

function PanelDots() {
  return (
    <span className={styles.panelDots} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <span key={index} />
      ))}
    </span>
  );
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

        <h2 id="about-title" className={styles.aboutHeading}>
          <span>Clear systems.</span>
          <span>Dependable software.</span>
          <span className={styles.aboutHeadingAccent}>Structured data.</span>
        </h2>

        <div className={styles.headingBeam} aria-hidden="true">
          <span />
        </div>
      </header>

      <div className={styles.narrative}>
        <section
          className={styles.storyPanel}
          aria-labelledby="about-summary-title"
        >
          <div className={styles.panelIconWrap} aria-hidden="true">
            <DocumentPanelIcon className={styles.panelIcon} />
          </div>

          <div className={styles.panelCopy}>
            <p className={styles.storyPanelLabel} id="about-summary-title">
              Professional summary
            </p>
            <p>{content.introduction}</p>
          </div>

          <PanelDots />
        </section>

        <section
          className={styles.storyPanel}
          aria-labelledby="about-project-story-title"
        >
          <div className={styles.panelIconWrap} aria-hidden="true">
            <CodePanelIcon className={styles.panelIcon} />
          </div>

          <div className={styles.panelCopy}>
            <p
              className={styles.storyPanelLabel}
              id="about-project-story-title"
            >
              Project-backed experience
            </p>
            <p>{content.projectStory}</p>
          </div>

          <PanelDots />
        </section>
      </div>

      <aside className={styles.opportunity} aria-label="Opportunity status">
        <div className={styles.panelIconWrap} aria-hidden="true">
          <UsersPanelIcon className={styles.panelIcon} />
        </div>

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
