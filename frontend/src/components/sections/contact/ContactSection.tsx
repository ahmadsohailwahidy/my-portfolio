import { contactContent } from "@/content/contact";

import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import { ExternalIcon, MailIcon } from "./ContactIcons";
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
        <header className={styles.contactHeader} data-contact-reveal>
          <div className={styles.headerMeta}>
            <span>{contactContent.label}</span>
            <i aria-hidden="true" />
            <span>{contactContent.meta}</span>
          </div>

          <div className={styles.headerLayout}>
            <h2 id="contact-heading">
              <span>{contactContent.headingLead}</span>
              <strong>{contactContent.headingAccent}</strong>
            </h2>
            <p>{contactContent.introduction}</p>
          </div>
        </header>

        <div className={styles.contactWorkspace}>
          <aside className={styles.contactIndex} data-contact-reveal>
            <section
              className={styles.directContact}
              aria-labelledby="direct-contact-heading"
            >
              <p className={styles.indexLabel}>DIRECT CONTACT</p>
              <h3 id="direct-contact-heading">A simple line to reach me.</h3>

              <div className={styles.emailLine}>
                <span className={styles.emailIcon} aria-hidden="true">
                  <MailIcon />
                </span>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${contactContent.email}`}>
                    {contactContent.email}
                  </a>
                </div>
                <CopyEmailButton email={contactContent.email} />
              </div>

              <dl className={styles.responseLine}>
                <dt>{contactContent.responseLabel}</dt>
                <dd>{contactContent.responseWindow}</dd>
              </dl>

              <div className={styles.socialIndex}>
                {contactContent.directLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    <span>{link.label}</span>
                    <strong>{link.display}</strong>
                    <ExternalIcon />
                  </a>
                ))}
              </div>
            </section>

            <section
              className={styles.opportunityIndex}
              aria-labelledby="contact-opportunities-heading"
            >
              <p className={styles.indexLabel}>
                {contactContent.opportunitiesLabel}
              </p>
              <h3 id="contact-opportunities-heading">
                {contactContent.opportunitiesHeading}
              </h3>

              <ul>
                {contactContent.opportunities.map((opportunity) => (
                  <li key={opportunity}>
                    <span aria-hidden="true" />
                    {opportunity}
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <section
            className={styles.formSection}
            aria-labelledby="contact-form-heading"
            data-contact-reveal
            data-grid-ignore
          >
            <div className={styles.formHeading}>
              <p>{contactContent.formLabel}</p>
              <h3 id="contact-form-heading">{contactContent.formHeading}</h3>
              <span>{contactContent.formDescription}</span>
            </div>

            <ContactForm />
          </section>
        </div>

        <ContactFooter
          navigationIds={contactContent.footerNavigationIds}
          email={contactContent.email}
        />
      </div>
    </section>
  );
}
