import { contactContent } from "@/content/contact";

import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import {
  ClockIcon,
  ContactLinkIcon,
  ExternalIcon,
  MailIcon,
  OpportunityIcon,
} from "./ContactIcons";
import { ContactReveal } from "./ContactReveal";
import { CopyEmailButton } from "./CopyEmailButton";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
      data-contact-root
    >
      <ContactReveal />

      <div className={styles.container}>
        <div className={styles.sectionBoundary} aria-hidden="true">
          <span>10</span>
          <i />
          <span>FINAL CONTACT PHASE</span>
        </div>

        <header className={styles.contactHeader} data-contact-reveal>
          <div className={styles.headerBadge}>
            <span className={styles.badgePulse} aria-hidden="true" />
            <span>{contactContent.label}</span>
            <strong>{contactContent.meta}</strong>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h2 id="contact-heading">
                <span>{contactContent.headingLead}</span>
                <strong>{contactContent.headingAccent}</strong>
              </h2>
            </div>

            <div className={styles.heroNote}>
              <p>{contactContent.introduction}</p>

              <div className={styles.responseBadge}>
                <span className={styles.responseIcon} aria-hidden="true">
                  <ClockIcon />
                </span>
                <span>
                  <small>{contactContent.responseLabel}</small>
                  <strong>{contactContent.responseWindow}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        <section
          className={styles.channelSection}
          aria-labelledby="contact-channels-heading"
          data-contact-reveal
        >
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.sectionNumber}>01</span>
              <p>CONTACT CHANNELS</p>
            </div>
            <div>
              <h3 id="contact-channels-heading">
                {contactContent.directHeading}
              </h3>
              <p>{contactContent.directDescription}</p>
            </div>
          </div>

          <div className={styles.channelGrid}>
            <article className={`${styles.channelCard} ${styles.emailCard}`}>
              <div className={styles.channelCardTop}>
                <span className={styles.channelIcon} aria-hidden="true">
                  <MailIcon />
                </span>
                <span className={styles.channelState}>PRIMARY</span>
              </div>

              <div className={styles.channelContent}>
                <span>Email</span>
                <a href={`mailto:${contactContent.email}`}>
                  {contactContent.email}
                </a>
              </div>

              <div className={styles.channelUtility} data-grid-ignore>
                <CopyEmailButton email={contactContent.email} />
              </div>
            </article>

            {contactContent.directLinks.map((link) => (
              <a
                key={link.label}
                className={styles.channelCard}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <div className={styles.channelCardTop}>
                  <span className={styles.channelIcon} aria-hidden="true">
                    <ContactLinkIcon name={link.icon} />
                  </span>
                  <ExternalIcon className={styles.channelArrow} />
                </div>

                <div className={styles.channelContent}>
                  <span>{link.label}</span>
                  <strong>{link.display}</strong>
                </div>

                <span className={styles.channelAction}>Open profile</span>
              </a>
            ))}
          </div>
        </section>

        <section
          className={styles.opportunitySection}
          aria-labelledby="contact-opportunities-heading"
          data-contact-reveal
        >
          <div className={styles.opportunityCopy}>
            <span className={styles.sectionNumber}>02</span>
            <p>{contactContent.opportunitiesLabel}</p>
            <h3 id="contact-opportunities-heading">
              {contactContent.opportunitiesHeading}
            </h3>
            <span>{contactContent.opportunitiesDescription}</span>
          </div>

          <ul className={styles.opportunityList}>
            {contactContent.opportunities.map((opportunity, index) => (
              <li key={opportunity.label}>
                <span className={styles.opportunityIcon} aria-hidden="true">
                  <OpportunityIcon name={opportunity.icon} />
                </span>
                <span className={styles.opportunityText}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{opportunity.label}</strong>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.composerSection}
          aria-labelledby="contact-form-heading"
          data-contact-reveal
          data-grid-ignore
        >
          <div className={styles.composerHeading}>
            <div className={styles.composerMarker}>
              <span className={styles.sectionNumber}>03</span>
              <p>{contactContent.formLabel}</p>
            </div>

            <div className={styles.composerTitle}>
              <h3 id="contact-form-heading">{contactContent.formHeading}</h3>
              <p>{contactContent.formDescription}</p>
            </div>

            <div className={styles.composerRoute} aria-hidden="true">
              <span>YOU</span>
              <i />
              <span>EMAIL</span>
              <i />
              <span>AHMAD</span>
            </div>
          </div>

          <ContactForm />
        </section>

        <ContactFooter
          navigationIds={contactContent.footerNavigationIds}
          email={contactContent.email}
        />
      </div>
    </section>
  );
}
