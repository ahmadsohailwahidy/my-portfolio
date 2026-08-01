import Image from "next/image";
import { TypingName } from "./TypingName";

import type { AboutProfile } from "@/types/about";

import styles from "./AboutSection.module.css";

interface AboutVisualProps {
  profile: AboutProfile;
}

export function AboutVisual({ profile }: AboutVisualProps) {
  return (
    <figure
      className={styles.visual}
      aria-labelledby="about-profile-name"
      data-grid-ignore
    >
      <div className={styles.visualHeader}>
        <span className={styles.visualLabel}>Identity profile</span>
        <span className={styles.visualStatus}>
          <span aria-hidden="true" />
          {profile.availabilityLabel}
        </span>
      </div>

      <div className={styles.portraitStage}>
        <span className={styles.orbitOuter} aria-hidden="true" />
        <span className={styles.orbitInner} aria-hidden="true" />
        <span className={styles.axisHorizontal} aria-hidden="true" />
        <span className={styles.axisVertical} aria-hidden="true" />
        <span className={styles.cornerMarkerTop} aria-hidden="true" />
        <span className={styles.cornerMarkerBottom} aria-hidden="true" />

        {profile.photo ? (
          <div className={styles.photoShell}>
            <span className={styles.photoRing} aria-hidden="true" />

            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              className={styles.profilePhoto}
              sizes="(max-width: 48rem) 15rem, 17rem"
              priority={false}
            />

            <span className={styles.photoOverlay} aria-hidden="true" />
          </div>
        ) : (
          <div className={styles.monogramShell} aria-hidden="true">
            <span className={styles.monogram}>{profile.initials}</span>
            <span className={styles.monogramCaption}>Developer profile</span>
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

        <p className={styles.profileIdentity}>{profile.professionalIdentity}</p>
        {!profile.photo ? (
          <p className={styles.placeholderNote}>{profile.placeholderLabel}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
