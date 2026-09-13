import { contactContent } from "@/content/contact";

import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import {
  ClockIcon,
  ContactLinkIcon,
  ExternalIcon,
  MailIcon,
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

      <header className={styles.contactHeader} data-contact-reveal>
        <div className={styles.headerBadge}>
          <span className={styles.badgePulse} aria-hidden="true" />
          <span>{contactContent.label}</span>
          <strong>{contactContent.meta}</strong>
        </div>

        <p className={styles.finalPhaseLabel}>FINAL CONTACT PHASE</p>

        <div className={styles.heroCopy}>
          <h2 id="contact-heading">
            <span>
              {contactContent.headingLead} <strong>{contactContent.headingAccent}</strong>
            </span>
          </h2>
        </div>

        <div className={styles.heroNote}>
          <p>{contactContent.introduction}</p>
        </div>

        <div className={styles.responseBadge}>
          <span className={styles.responseIcon} aria-hidden="true">
            <ClockIcon />
          </span>
          <span>
            <small>{contactContent.responseLabel}</small>
            <strong>{contactContent.responseWindow}</strong>
          </span>
        </div>

        <span className={styles.introDiamond} aria-hidden="true" />
        <span className={styles.introConnector} aria-hidden="true" />
      </header>

      <div className={styles.moduleGrid}>
        <section
          className={`${styles.panel} ${styles.channelsPanel}`}
          aria-labelledby="contact-channels-heading"
          data-contact-reveal
          // data-grid-ignore
        >
          <div className={styles.moduleKicker}>
            <span className={styles.moduleIndex}>01</span>
            <span className={styles.moduleLabel}>CONTACT CHANNELS</span>
          </div>

          <h3 id="contact-channels-heading">{contactContent.directHeading}</h3>
          <p className={styles.channelsDescription}>
            {contactContent.directDescription}
          </p>

          <div className={styles.channelsList}>
            <article className={`${styles.channelCard} ${styles.emailCard}`}>
              <span className={styles.channelArc} aria-hidden="true" />

              <span
                className={`${styles.channelIcon} ${styles.emailIcon}`}
                aria-hidden="true"
              >
                <MailIcon />
              </span>

              <span className={styles.channelState}>PRIMARY</span>

              <div className={styles.channelContent}>
                <span className={styles.channelLabel}>Email</span>
                <a
                  className={styles.emailAddress}
                  href={`mailto:${contactContent.email}`}
                >
                  {contactContent.email}
                </a>
                <div className={styles.channelUtility}>
                  <CopyEmailButton email={contactContent.email} />
                </div>
              </div>
            </article>

            {contactContent.directLinks.map((link) => (
              <a
                key={link.label}
                className={`${styles.channelCard} ${styles.profileCard}`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={
                  link.external ? `Open Ahmad Sohail Wahidy on ${link.label}` : undefined
                }
              >
                <span className={styles.channelIcon} aria-hidden="true">
                  <ContactLinkIcon name={link.icon} />
                </span>

                <span className={styles.channelContent}>
                  <span className={styles.channelLabel}>{link.label}</span>
                  <strong className={styles.profileAddress}>{link.display}</strong>
                  <span className={styles.channelAction}>Open profile</span>
                </span>

                <ExternalIcon className={styles.channelArrow} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section
          className={`${styles.panel} ${styles.composerPanel}`}
          aria-labelledby="contact-form-heading"
          data-contact-reveal
          data-grid-ignore
        >
          <span className={styles.cornerBracket} aria-hidden="true" />

          <div className={styles.composerTopline}>
            <div className={styles.moduleKicker}>
              <span className={styles.moduleIndex}>03</span>
              <span className={styles.moduleLabel}>{contactContent.formLabel}</span>
            </div>

            <div className={styles.composerRoute} aria-hidden="true">
              <span>You</span>
              <i />
              <span>Email</span>
              <i />
              <span>Ahmad</span>
            </div>
          </div>

          <div className={styles.composerTitle}>
            <h3 id="contact-form-heading">{contactContent.formHeading}</h3>
            <p>{contactContent.formDescription}</p>
          </div>

          <ContactForm />
        </section>
      </div>

      <ContactFooter
        navigationIds={contactContent.footerNavigationIds}
        email={contactContent.email}
      />
    </section>
  );
}
