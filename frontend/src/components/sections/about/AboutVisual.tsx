import Image from "next/image";

import type { AboutProfile } from "@/types/about";

import styles from "./AboutSection.module.css";
import { TypingName } from "./TypingName";

interface AboutVisualProps {
  profile: AboutProfile;
}

function DecorativeDots() {
  return (
    <span className={styles.visualDots} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <span key={index} />
      ))}
    </span>
  );
}

export function AboutVisual({ profile }: AboutVisualProps) {
  return (
    <figure
      className={styles.visual}
      aria-labelledby="about-profile-name"
      data-grid-ignore
    >
      <span className={styles.visualCornerTop} aria-hidden="true" />
      <span className={styles.visualCornerBottom} aria-hidden="true" />
      <DecorativeDots />

      <div className={styles.visualHeader}>
        <span className={styles.visualLabel}>Identity profile</span>
        <span className={styles.visualStatus}>
          <span aria-hidden="true" />
          {profile.availabilityLabel}
        </span>
      </div>

      <div className={styles.portraitStage}>
        <span className={styles.circuitGlow} aria-hidden="true" />
        <span className={styles.orbitOuter} aria-hidden="true" />
        <span className={styles.orbitInner} aria-hidden="true" />
        <span className={styles.axisHorizontal} aria-hidden="true" />
        <span className={styles.axisVertical} aria-hidden="true" />

        <div className={styles.circuitLines} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {profile.photo ? (
          <div className={styles.photoShell}>
            <span className={styles.photoRing} aria-hidden="true" />

            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              className={styles.profilePhoto}
              sizes="(max-width: 48rem) 18rem, 20rem"
              priority={false}
            />

            <span className={styles.photoOverlay} aria-hidden="true" />
          </div>
        ) : (
          <div className={styles.monogramShell} aria-hidden="true">
            <span className={styles.monogram}>{profile.initials}</span>
          </div>
        )}
      </div>

      <figcaption className={styles.visualCaption}>
        <div className={styles.profileTitleBlock}>
          <p className={styles.profileNameWrap} id="about-profile-name">
            <TypingName text={profile.name} />
          </p>
          <p className={styles.profileAcademic}>{profile.academicStatus}</p>
        </div>

        <p className={styles.profileIdentity}>
          {profile.professionalIdentity
            .split(" · ")
            .map((item, index, items) => (
              <span className={styles.profileIdentityItem} key={item}>
                {item}
                {index < items.length - 1 ? (
                  <span
                    className={styles.profileIdentityDot}
                    aria-hidden="true"
                  >
                    •
                  </span>
                ) : null}
              </span>
            ))}
        </p>
      </figcaption>
    </figure>
  );
}
