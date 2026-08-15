import { contactContent } from "@/content/contact";
import { heroContent } from "@/content/hero";
import { navigationItems } from "@/content/navigation";

import {
  ArrowUpIcon,
  ContactLinkIcon,
  ExternalIcon,
  MailIcon,
} from "./ContactIcons";
import styles from "./ContactSection.module.css";

interface ContactFooterProps {
  navigationIds: readonly string[];
  email: string;
}

const COPYRIGHT_YEAR = 2026;

export function ContactFooter({ navigationIds, email }: ContactFooterProps) {
  const miniNavigation = navigationIds
    .map((id) => navigationItems.find((item) => item.id === id))
    .filter((item): item is (typeof navigationItems)[number] => Boolean(item));

  return (
    <footer className={styles.footer} data-contact-reveal>
      <div className={styles.footerHeadline}>
        <div className={styles.footerMonogram} aria-hidden="true">
          <span>&lt;</span>
          <strong>AS</strong>
          <span>/&gt;</span>
        </div>

        <div className={styles.footerHeadlineCopy}>
          <p>{contactContent.footerKicker}</p>
          <h3>{contactContent.footerMessage}</h3>
        </div>

        <a href="#home" className={styles.backToTop}>
          <span>Back to top</span>
          <span className={styles.backToTopIcon} aria-hidden="true">
            <ArrowUpIcon />
          </span>
        </a>
      </div>

      <div className={styles.footerGrid}>
        <div className={styles.footerIdentity}>
          <span>PORTFOLIO BY</span>
          <strong>{heroContent.name}</strong>
          <p>{heroContent.primaryTitle}</p>
        </div>

        <nav className={styles.footerNavigation} aria-label="Footer navigation">
          <span>EXPLORE</span>
          <div>
            {miniNavigation.map((item) => (
              <a key={item.id} href={item.href}>
                <span>{item.shortLabel}</span>
                <ExternalIcon aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.footerConnections}>
          <span>CONNECT</span>
          <div>
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${heroContent.name}`}
            >
              <span className={styles.footerSocialIcon} aria-hidden="true">
                <MailIcon />
              </span>
              <span>Email</span>
            </a>
            <a
              href={heroContent.socials.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${heroContent.name}'s GitHub profile`}
            >
              <span className={styles.footerSocialIcon} aria-hidden="true">
                <ContactLinkIcon name="github" />
              </span>
              <span>GitHub</span>
            </a>
            <a
              href={heroContent.socials.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${heroContent.name}'s LinkedIn profile`}
            >
              <span className={styles.footerSocialIcon} aria-hidden="true">
                <ContactLinkIcon name="linkedin" />
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {COPYRIGHT_YEAR} {heroContent.name}. All rights reserved.
        </p>
        <span>Designed & built as a personal developer portfolio.</span>
      </div>
    </footer>
  );
}
