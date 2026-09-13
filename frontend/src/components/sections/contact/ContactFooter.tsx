import { heroContent } from "@/content/hero";
import { contactContent } from "@/content/contact";
import { navigationItems } from "@/content/navigation";

import {
  ArrowRightIcon,
  ArrowUpIcon,
  ContactLinkIcon,
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

  const role = heroContent.primaryTitle.join(" ");

  return (
    <footer className={styles.footer} data-contact-reveal>
      <span className={styles.footerRule} aria-hidden="true" />

      <div className={styles.footerTop}>
        <div className={styles.footerIdentity}>
          <div className={styles.footerMonogram} aria-hidden="true">
            &lt; AS /&gt;
          </div>

          <div className={styles.footerIdentityCopy}>
            <strong>{heroContent.name}</strong>
            <span>
              <i aria-hidden="true" />
              {role}
            </span>
          </div>
        </div>

        <p className={styles.footerMessage}>{contactContent.footerMessage}</p>

        <a href="#home" className={styles.backToTop}>
          <span>Back to top</span>
          <span className={styles.backToTopIcon} aria-hidden="true">
            <ArrowUpIcon />
          </span>
        </a>
      </div>

      <div className={styles.footerBottomWrap}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {COPYRIGHT_YEAR} {heroContent.name}. All rights reserved.
          </p>

          <nav className={styles.footerNavigation} aria-label="Footer navigation">
            <span className={styles.footerGroupLabel}>Explore</span>
            <div>
              {miniNavigation.map((item) => (
                <a key={item.id} href={item.href}>
                  <span>{item.shortLabel}</span>
                  <ArrowRightIcon aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>

          <div className={styles.footerConnections}>
            <span className={styles.footerGroupLabel}>Connect</span>
            <div>
              <a href={`mailto:${email}`} aria-label={`Email ${heroContent.name}`}>
                <span className={styles.footerSocialIcon} aria-hidden="true">
                  <MailIcon />
                </span>
                <span>Email</span>
              </a>
              <a
                href={heroContent.socials.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={heroContent.socials.github.ariaLabel}
              >
                <span className={styles.footerSocialIcon} aria-hidden="true">
                  <ContactLinkIcon name="github" />
                </span>
                <span>GitHub</span>
              </a>
              <a
                href={heroContent.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={heroContent.socials.linkedin.ariaLabel}
              >
                <span className={styles.footerSocialIcon} aria-hidden="true">
                  <ContactLinkIcon name="linkedin" />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
