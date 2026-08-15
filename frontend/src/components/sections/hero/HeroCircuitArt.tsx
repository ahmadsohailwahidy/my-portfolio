import styles from "./HeroSection.module.css";

const stems = [
  { x: 12, y: 46, h: 52 },
  { x: 23, y: 30, h: 75 },
  { x: 36, y: 55, h: 52 },
  { x: 51, y: 61, h: 44 },
  { x: 68, y: 42, h: 73 },
  { x: 81, y: 24, h: 88 },
  { x: 91, y: 39, h: 69 },
];

export function HeroCircuitArt() {
  return (
    <div className={styles.circuitArt} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.circuitSvg}>
        <defs>
          <linearGradient id="heroCircuitStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="0.48" stopColor="#22d3ee" stopOpacity="0.95" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0.5" />
          </linearGradient>
          <filter id="heroCircuitGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {stems.map((stem) => (
          <g key={`${stem.x}-${stem.y}`}>
            <path
              d={`M ${stem.x} ${stem.y} V ${stem.h}`}
              className={styles.circuitStem}
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={stem.x} cy={stem.y} r="0.85" className={styles.circuitDot} />
          </g>
        ))}

        <path
          d="M0 70 C10 70 13 72 21 74 S34 86 45 84 S55 67 66 69 S74 70 79 63 S88 62 100 57"
          className={styles.circuitWaveMuted}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 77 C12 77 17 77 24 82 S36 91 46 89 S55 76 64 75 S75 80 82 69 S91 66 100 65"
          className={styles.circuitWave}
          vectorEffect="non-scaling-stroke"
          filter="url(#heroCircuitGlow)"
        />
        <path
          d="M0 83 C12 83 15 84 25 88 S37 95 47 93 S58 83 68 84 S76 85 83 77 S92 75 100 73"
          className={styles.circuitWaveFine}
          vectorEffect="non-scaling-stroke"
        />

        {[11, 22, 34, 47, 59, 70, 82, 92].map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy={[77, 80, 87, 89, 78, 77, 69, 66][index]}
            r="1.15"
            className={styles.circuitRing}
          />
        ))}

        <circle cx="59" cy="78" r="2.5" className={styles.circuitCoreGlow} />
        <circle cx="59" cy="78" r="1.1" className={styles.circuitCore} />
      </svg>
      <span className={styles.circuitGridFade} />
    </div>
  );
}
