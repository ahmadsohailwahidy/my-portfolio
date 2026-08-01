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

      <div className={styles.portraitStage} aria-hidden="true">
        <span className={styles.orbitOuter} />
        <span className={styles.orbitInner} />
        <span className={styles.axisHorizontal} />
        <span className={styles.axisVertical} />
        <span className={styles.cornerMarkerTop} />
        <span className={styles.cornerMarkerBottom} />

        <div className={styles.monogramShell}>
          <span className={styles.monogram}>{profile.initials}</span>
          <span className={styles.monogramCaption}>Developer profile</span>
        </div>
      </div>

      <figcaption className={styles.visualCaption}>
        <div>
          <p className={styles.profileName} id="about-profile-name">
            {profile.name}
          </p>
          <p className={styles.profileAcademic}>{profile.academicStatus}</p>
        </div>
        <p className={styles.profileIdentity}>{profile.professionalIdentity}</p>
        <p className={styles.placeholderNote}>{profile.placeholderLabel}</p>
      </figcaption>
    </figure>
  );
}
