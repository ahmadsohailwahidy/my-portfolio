import { heroContent } from "@/content/hero";
import { navigationItems } from "@/content/navigation";

import { ArrowUpIcon, ExternalIcon, MailIcon } from "./ContactIcons";
import styles from "./ContactSection.module.css";

interface ContactFooterProps {
  navigationIds: readonly string[];
  email: string;
}

export function ContactFooter({ navigationIds, email }: ContactFooterProps) {
  const year = new Date().getFullYear();
  const miniNavigation = navigationIds
    .map((id) => navigationItems.find((item) => item.id === id))
    .filter((item): item is (typeof navigationItems)[number] => Boolean(item));

  return (
    <footer className={styles.footer} data-contact-reveal>
      <div className={styles.footerIdentity}>
        <strong>{heroContent.name}</strong>
        <span>{heroContent.secondaryTitle}</span>
      </div>

      <nav className={styles.footerNavigation} aria-label="Footer navigation">
        {miniNavigation.map((item) => (
          <a key={item.id} href={item.href}>
            {item.shortLabel}
          </a>
        ))}
      </nav>

      <div className={styles.footerLinks} aria-label="Contact and social links">
        <a href={`mailto:${email}`} aria-label={`Email ${heroContent.name}`}>
          <MailIcon />
          <span>Email</span>
        </a>
        <a
          href={heroContent.socials.github.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <ExternalIcon />
        </a>
        <a
          href={heroContent.socials.linkedin.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <ExternalIcon />
        </a>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {year} {heroContent.name}. All rights reserved.
        </p>
        <a href="#home" className={styles.backToTop}>
          <span>Back to top</span>
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}
