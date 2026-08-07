import type { CSSProperties } from "react";

import { educationContent } from "@/content/education";

import { EducationIcon } from "./EducationIcons";
import { EducationReveal } from "./EducationReveal";
import styles from "./EducationSection.module.css";
import { EducationTimeline } from "./EducationTimeline";

export function EducationSection() {
  return (
    <section
      id="education"
      className={styles.section}
      aria-labelledby="education-title"
      data-education-root
    >
      <div className={styles.container}>
        <EducationReveal />

        <header className={styles.sectionHeader} data-grid-ignore>
          <div className={styles.phaseStamp} aria-hidden="true">
            <span>{educationContent.visualStatus.eyebrow}</span>
            <strong>{educationContent.visualStatus.phase}</strong>
            <i />
            <small>{educationContent.visualStatus.caption}</small>
          </div>

          <div className={styles.headerCopy}>
            <div className={styles.headerMetaLine}>
              <p className={styles.sectionLabel}>{educationContent.label}</p>
              <span aria-hidden="true" />
              <p className={styles.sectionMeta}>{educationContent.meta}</p>
            </div>

            <h2 id="education-title">{educationContent.heading}</h2>
            <p>{educationContent.introduction}</p>
          </div>
        </header>

        <section
          className={styles.statusPanel}
          data-education-reveal
          data-grid-ignore
          aria-label="Current academic status"
        >
          <div className={styles.orbitStage} aria-hidden="true">
            <span className={`${styles.orbitRing} ${styles.orbitRingOuter}`}>
              <i className={styles.orbitSatelliteOne} />
              <i className={styles.orbitSatelliteTwo} />
            </span>
            <span className={`${styles.orbitRing} ${styles.orbitRingMiddle}`}>
              <i className={styles.orbitSatelliteThree} />
            </span>
            <span className={`${styles.orbitRing} ${styles.orbitRingInner}`} />

            <span className={`${styles.orbitLabel} ${styles.orbitLabelStart}`}>
              {educationContent.visualStatus.orbitLabels[0]}
            </span>
            <span className={`${styles.orbitLabel} ${styles.orbitLabelNow}`}>
              {educationContent.visualStatus.orbitLabels[1]}
            </span>
            <span className={`${styles.orbitLabel} ${styles.orbitLabelField}`}>
              {educationContent.visualStatus.orbitLabels[2]}
            </span>

            <div className={styles.orbitCore}>
              <span>{educationContent.visualStatus.coreLabel}</span>
              <strong>{educationContent.visualStatus.coreValue}</strong>
              <small>{educationContent.visualStatus.coreMeta}</small>
            </div>
          </div>

          <div className={styles.statusNarrative}>
            <div className={styles.statusSignal}>
              <span className={styles.statusPulse} aria-hidden="true" />
              <span>{educationContent.currentStatusLabel}</span>
            </div>

            <strong>{educationContent.currentStatus}</strong>

            <p>{educationContent.visualStatus.description}</p>
          </div>

          <div className={styles.statusPath} aria-label="Academic progression">
            <span>{educationContent.visualStatus.pathLabels[0]}</span>
            <i aria-hidden="true" />
            <span>{educationContent.visualStatus.pathLabels[1]}</span>
            <i aria-hidden="true" />
            <span>{educationContent.visualStatus.pathLabels[2]}</span>
          </div>
        </section>

        <div className={styles.timelineSection}>
          <div className={styles.subsectionHeader} data-education-reveal>
            <div className={styles.subsectionIndex}>01</div>
            <div>
              <p>{educationContent.timelineLabel}</p>
              <h3>{educationContent.timelineHeading}</h3>
            </div>
          </div>

          <EducationTimeline items={educationContent.timeline} />
        </div>

        <div className={styles.focusSection}>
          <div className={styles.subsectionHeader} data-education-reveal>
            <div className={styles.subsectionIndex}>02</div>
            <div>
              <p>{educationContent.focusLabel}</p>
              <h3>{educationContent.focusHeading}</h3>
              <span>{educationContent.focusDescription}</span>
            </div>
          </div>

          <div className={styles.focusConstellation}>
            <div
              className={styles.focusHub}
              data-education-reveal
              data-grid-ignore
              aria-hidden="true"
            >
              <span>Academic</span>
              <strong>Core</strong>
              <small>Knowledge applied to software</small>
              <i />
            </div>

            {educationContent.focusAreas.map((area, index) => (
              <article
                key={area.id}
                className={styles.focusCard}
                data-education-reveal
                data-focus-position={index + 1}
                style={{ "--education-order": index } as CSSProperties}
              >
                <div className={styles.focusCardTopline}>
                  <span>{area.number}</span>
                  <EducationIcon name={area.icon} />
                </div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
                <span className={styles.focusConnector} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <aside
          className={styles.learningPanel}
          data-education-reveal
          data-grid-ignore
        >
          <div className={styles.learningIntro}>
            <div className={styles.learningIcon} aria-hidden="true">
              <EducationIcon name="learning" />
            </div>
            <p>{educationContent.learningLabel}</p>
            <h3>{educationContent.learningHeading}</h3>
            <span>{educationContent.learningDescription}</span>
          </div>

          <div className={styles.learningStream}>
            <div className={styles.streamRail} aria-hidden="true">
              <span />
              <i />
              <span />
              <i />
              <span />
            </div>

            <div className={styles.learningResources}>
              {educationContent.learningResources.map((resource, index) => (
                <article
                  key={resource.provider}
                  style={{ "--resource-index": index } as CSSProperties}
                >
                  <span className={styles.resourcePulse} aria-hidden="true" />
                  <div>
                    <strong>{resource.provider}</strong>
                    <p>{resource.path}</p>
                    <small>{resource.note}</small>
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.learningNote}>
              {educationContent.learningNote}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
