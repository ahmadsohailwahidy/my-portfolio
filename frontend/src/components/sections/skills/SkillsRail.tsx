import styles from "./SkillsSection.module.css";

export function SkillsRail() {
  return (
    <div className={styles.rail} aria-hidden="true" data-grid-ignore>
      <div className={styles.topBeacon}>
        <span className={styles.beaconRingOuter} />
        <span className={styles.beaconRingMiddle} />
        <span className={styles.beaconRingInner} />
        <span className={styles.beaconArrow} />
      </div>

      <div className={styles.railTrack} data-skills-rail-track>
        <span className={styles.railBase} />
        <span className={styles.railSegments} />
        <span className={styles.railProgress} />
        <span className={`${styles.railMarker} ${styles.railMarkerOne}`} />
        <span className={`${styles.railMarker} ${styles.railMarkerTwo}`} />
        <span className={`${styles.railMarker} ${styles.railMarkerThree}`} />
        <span className={`${styles.railMarker} ${styles.railMarkerFour}`} />
        <span className={`${styles.railMarker} ${styles.railMarkerFive}`} />
      </div>

      <div className={styles.railTerminus}>
        <span className={styles.terminusOuter} />
        <span className={styles.terminusMiddle} />
        <span className={styles.terminusInner} />
        <span className={styles.terminusCore} />
      </div>
    </div>
  );
}
