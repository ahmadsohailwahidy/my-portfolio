import { professionalProfileContent } from "@/content/profile";

import {
  ArrowIcon,
  DirectionIcon,
  DocumentIcon,
  DownloadIcon,
  LanguageIcon,
  PrintIcon,
  WorldMapGraphic,
} from "./ProfileIcons";
import { ProfileReveal } from "./ProfileReveal";
import styles from "./ProfessionalProfileSection.module.css";

const directionKeywords = ["SYSTEMS", "BACKEND", "DATA", "AI"] as const;
const directionPath = ["BUILD", "LEARN", "GROW"] as const;
const worldWords = ["PEOPLE", "IDEAS", "OPPORTUNITIES", "WORLDWIDE"] as const;

export function ProfessionalProfileSection() {
  const content = professionalProfileContent;
  const resume = content.resume;

  return (
    <section
      id="profile"
      className={styles.section}
      aria-label="Professional Profile"
      data-profile-root
    >
      <ProfileReveal />

      <div className={styles.container}>
        <h2 className={styles.srOnly}>Professional Profile</h2>

        <div className={styles.profileGrid}>
          <article
            className={`${styles.panel} ${styles.careerCard}`}
            aria-labelledby="career-direction-heading"
            data-profile-reveal
          >
            <div className={styles.editorialMarker} aria-hidden="true">
              <strong>01</strong>
              <span />
              <p>{content.directionLabel}</p>
            </div>

            <div className={styles.careerCopy}>
              <h3 id="career-direction-heading">{content.directionHeading}</h3>
              <p>{content.direction}</p>
            </div>

            <div className={styles.directionOrbit} aria-hidden="true">
              <span className={styles.directionOrbitOuter} />
              <span className={styles.directionOrbitInner}>
                <DirectionIcon />
              </span>
            </div>

            <div className={styles.directionKeywords} aria-hidden="true">
              <i />
              {directionKeywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>

            <div className={styles.careerFooter} aria-hidden="true">
              <div className={styles.careerFooterRule} />
              <div className={styles.careerPath}>
                {directionPath.map((item, index) => (
                  <span key={item}>
                    {item}
                    {index < directionPath.length - 1 ? <i>›</i> : null}
                  </span>
                ))}
              </div>
              <div className={styles.technicalSlashes}>
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </article>

          <article
            className={`${styles.panel} ${styles.languageCard}`}
            aria-labelledby="languages-heading"
            data-profile-reveal
          >
            <div className={styles.languageHeadingRow}>
              <span className={styles.languageIcon} aria-hidden="true">
                <LanguageIcon />
              </span>

              <div className={styles.languageHeadingCopy}>
                <div className={styles.eyebrowLine}>
                  <span>{content.languagesLabel}</span>
                  <i aria-hidden="true" />
                </div>
                <h3 id="languages-heading">{content.languagesHeading}</h3>
              </div>
            </div>

            <dl className={styles.languageList}>
              {content.languages.map((language) => (
                <div key={language.name} className={styles.languageRow}>
                  <dt>
                    <strong>{language.name}</strong>
                    <span>{language.context}</span>
                  </dt>
                  <dd>
                    <i aria-hidden="true" />
                    <span>{language.proficiency}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className={styles.languageFooter} aria-hidden="true">
              <div className={styles.worldWords}>
                <i />
                {worldWords.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </div>
              <WorldMapGraphic className={styles.worldMap} />
            </div>
          </article>
        </div>

        <section
          className={`${styles.panel} ${styles.resumeCard}`}
          aria-labelledby="resume-heading"
          data-profile-reveal
        >
          <div className={styles.resumeDocumentMark} aria-hidden="true">
            <DocumentIcon />
            <span>PDF</span>
            <i />
          </div>

          <div className={styles.resumeCopy}>
            <p>{content.resumeLabel}</p>
            <h3 id="resume-heading">{content.resumeHeading}</h3>
            <span>{resume.description}</span>
          </div>

          <dl className={styles.resumeMetadata}>
            <div>
              <dt>FILE</dt>
              <dd>{resume.fileName}</dd>
            </div>
            <div>
              <dt>LAST UPDATED</dt>
              <dd>
                {resume.lastUpdatedDateTime ? (
                  <time dateTime={resume.lastUpdatedDateTime}>
                    {resume.lastUpdatedLabel}
                  </time>
                ) : (
                  <span>{resume.lastUpdatedLabel}</span>
                )}
              </dd>
            </div>
          </dl>

          <div className={styles.resumeActions} aria-label="Resume actions">
            <a
              className={styles.downloadAction}
              href={resume.href}
              download={resume.fileName}
              aria-label={`Download ${resume.fileName}`}
            >
              <DownloadIcon />
              <span>{resume.downloadLabel}</span>
              <ArrowIcon className={styles.actionArrow} />
            </a>

            <a
              className={styles.openAction}
              href={resume.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${resume.fileName} in a new tab for viewing or printing`}
            >
              <PrintIcon />
              <span>{resume.openPrintLabel}</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
