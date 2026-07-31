import type { HeroContentData } from "@/types/hero";

import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

interface HeroSocialLinksProps {
  socials: HeroContentData["socials"];
}

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export function HeroSocialLinks({ socials }: HeroSocialLinksProps) {
  return (
    <nav className={styles.socialLinks} aria-label="Social profiles">
      {(Object.keys(socials) as Array<keyof typeof socials>).map(
        (socialKey) => {
          const social = socials[socialKey];
          const SocialIcon = socialIcons[socialKey];

          return (
            <a
              key={socialKey}
              className={styles.socialLink}
              href={social.href}
              aria-label={social.ariaLabel}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
            >
              <SocialIcon className={styles.socialIcon} />
              <span>{social.label}</span>
              <ArrowUpRightIcon className={styles.socialArrow} />
            </a>
          );
        },
      )}
    </nav>
  );
}
