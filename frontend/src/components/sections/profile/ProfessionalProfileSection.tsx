import { professionalProfileContent } from "@/content/profile";

import {
  ArrowIcon,
  DirectionIcon,
  DocumentIcon,
  DownloadIcon,
  LanguageIcon,
  OpportunityIcon,
  PrintIcon,
  StrengthIcon,
} from "./ProfileIcons";
import { ProfileReveal } from "./ProfileReveal";
import styles from "./ProfessionalProfileSection.module.css";

export function ProfessionalProfileSection() {
  const content = professionalProfileContent;
  const resume = content.resume;

  return (
    <section
      id="profile"
      className={styles.section}
      aria-labelledby="professional-profile-heading"
      data-profile-root
    >
      <ProfileReveal />

      <div className={styles.container}>
        <div className={styles.sectionDivider} aria-hidden="true">
          <span>PROFESSIONAL PROFILE</span>
          <i />
          <span>09 / DOSSIER</span>
        </div>

        <header className={styles.masthead} data-profile-reveal>
          <div className={styles.headerMeta}>
            <span>{content.label}</span>
            <i aria-hidden="true" />
            <span>{content.meta}</span>
          </div>

          <div className={styles.mastheadGrid}>
            <div className={styles.headingBlock}>
              <h2 id="professional-profile-heading">
                <span>{content.headingLead}</span>
                <strong>{content.headingAccent}</strong>
              </h2>
              <p>{content.introduction}</p>
            </div>

            <aside className={styles.snapshot} aria-label="Current profile">
              <span className={styles.snapshotLabel}>
                {content.snapshotLabel}
              </span>
              <p>{content.snapshot}</p>
              <div className={styles.snapshotRule} aria-hidden="true">
                <span />
                <i />
                <span />
              </div>
            </aside>
          </div>
        </header>

        <div className={styles.dossierLayout}>
          <div className={styles.mainColumn}>
            <section
              className={styles.directionBrief}
              aria-labelledby="career-direction-heading"
              data-profile-reveal
            >
              <div className={styles.editorialMarker}>
                <span>01</span>
                <i aria-hidden="true" />
                <p>{content.directionLabel}</p>
              </div>

              <div className={styles.directionContent}>
                <span className={styles.directionIcon} aria-hidden="true">
                  <DirectionIcon />
                </span>
                <h3 id="career-direction-heading">
                  {content.directionHeading}
                </h3>
                <p>{content.direction}</p>
              </div>
            </section>

            <section
              className={styles.strengthsSection}
              aria-labelledby="professional-strengths-heading"
              data-profile-reveal
            >
              <div className={styles.subsectionHeading}>
                <div>
                  <span>02</span>
                  <p>{content.strengthsLabel}</p>
                </div>
                <div>
                  <h3 id="professional-strengths-heading">
                    {content.strengthsHeading}
                  </h3>
                  <p>{content.strengthsDescription}</p>
                </div>
              </div>

              <ol className={styles.strengthLedger}>
                {content.strengths.map((strength) => (
                  <li key={strength.index} className={styles.strengthEntry}>
                    <div className={styles.strengthTopline}>
                      <span>{strength.index}</span>
                      <span className={styles.strengthIcon} aria-hidden="true">
                        <StrengthIcon name={strength.icon} />
                      </span>
                    </div>
                    <h4>{strength.title}</h4>
                    <p>{strength.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside
            className={styles.sideIndex}
            aria-label="Professional profile details"
          >
            <section
              className={styles.languageSection}
              aria-labelledby="languages-heading"
              data-profile-reveal
            >
              <div className={styles.railHeading}>
                <span className={styles.railIcon} aria-hidden="true">
                  <LanguageIcon />
                </span>
                <div>
                  <p>{content.languagesLabel}</p>
                  <h3 id="languages-heading">{content.languagesHeading}</h3>
                </div>
              </div>

              <p className={styles.railDescription}>
                {content.languagesDescription}
              </p>

              <dl className={styles.languageList}>
                {content.languages.map((language) => (
                  <div key={language.name} className={styles.languageRow}>
                    <dt>
                      <strong>{language.name}</strong>
                      <span>{language.context}</span>
                    </dt>
                    <dd>{language.proficiency}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              className={styles.opportunitySection}
              aria-labelledby="opportunity-heading"
              data-profile-reveal
            >
              <div className={styles.railHeading}>
                <span className={styles.railIcon} aria-hidden="true">
                  <OpportunityIcon />
                </span>
                <div>
                  <p>{content.opportunityLabel}</p>
                  <h3 id="opportunity-heading">{content.opportunityHeading}</h3>
                </div>
              </div>

              <blockquote className={styles.opportunityStatement}>
                {content.opportunityStatement}
              </blockquote>

              <dl className={styles.preferenceList}>
                {content.opportunityPreferences.map((preference) => (
                  <div key={preference.label} className={styles.preferenceRow}>
                    <dt>{preference.label}</dt>
                    <dd>
                      <strong>{preference.value}</strong>
                      <span>{preference.description}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>

        <section
          className={styles.resumeIndex}
          aria-labelledby="resume-heading"
          data-profile-reveal
        >
          <div className={styles.resumeDocumentMark} aria-hidden="true">
            <DocumentIcon />
            <span>PDF</span>
          </div>

          <div className={styles.resumeCopy}>
            <p>{content.resumeLabel}</p>
            <h3 id="resume-heading">{content.resumeHeading}</h3>
            <span>{resume.description}</span>
          </div>

          <dl className={styles.resumeMetadata}>
            <div>
              <dt>File</dt>
              <dd>{resume.fileName}</dd>
            </div>
            <div>
              <dt>Last updated</dt>
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
