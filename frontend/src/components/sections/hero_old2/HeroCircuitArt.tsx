import styles from "./HeroSection.module.css";

const verticalStems = [
  { x: 22, y: 12, h: 48 },
  { x: 52, y: 24, h: 68 },
  { x: 86, y: 15, h: 76 },
  { x: 118, y: 33, h: 78 },
  { x: 154, y: 8, h: 84 },
  { x: 194, y: 26, h: 88 },
  { x: 230, y: 13, h: 82 },
  { x: 266, y: 29, h: 94 },
  { x: 302, y: 18, h: 87 },
  { x: 338, y: 34, h: 92 },
  { x: 374, y: 16, h: 82 },
];

const nodes = [
  [18, 192], [42, 206], [68, 201], [98, 222], [128, 235], [158, 247],
  [188, 239], [214, 216], [244, 199], [272, 194], [304, 181], [334, 169],
  [362, 157], [390, 146], [54, 264], [88, 278], [122, 293], [160, 305],
  [198, 299], [236, 273], [276, 248], [316, 235], [350, 222], [382, 214],
] as const;

export function HeroCircuitArt() {
  return (
    <div className={styles.circuitArt} aria-hidden="true">
      <svg
        viewBox="0 0 413 430"
        preserveAspectRatio="none"
        className={styles.circuitSvg}
        focusable="false"
      >
        <defs>
          <linearGradient id="heroCircuitStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#036b87" stopOpacity="0.25" />
            <stop offset="0.48" stopColor="#0be8ef" stopOpacity="0.98" />
            <stop offset="1" stopColor="#07b9b0" stopOpacity="0.62" />
          </linearGradient>
          <linearGradient id="heroCircuitMuted" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0a4f6c" stopOpacity="0.2" />
            <stop offset="0.55" stopColor="#08aac2" stopOpacity="0.58" />
            <stop offset="1" stopColor="#0b435d" stopOpacity="0.18" />
          </linearGradient>
          <filter id="heroCircuitGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="heroCircuitWideGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        <ellipse
          cx="244"
          cy="292"
          rx="128"
          ry="88"
          fill="#0589a4"
          opacity="0.12"
          filter="url(#heroCircuitWideGlow)"
        />

        <g className={styles.circuitStems}>
          {verticalStems.map((stem) => (
            <g key={`${stem.x}-${stem.y}`}>
              <path
                d={`M ${stem.x} ${stem.y} V ${stem.h}`}
                className={styles.circuitStem}
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={stem.x} cy={stem.y} r="2.4" className={styles.circuitDot} />
            </g>
          ))}
        </g>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M0 172 H38 V224 H61 C81 224 96 239 112 259 C138 291 153 307 180 316 C211 327 238 304 259 274 C279 246 293 229 318 229 H349 L379 202 H413"
            className={styles.circuitTraceMuted}
          />
          <path
            d="M0 202 H49 V253 H76 C98 253 113 270 130 291 C151 317 170 331 196 330 C229 329 251 300 269 276 C287 251 303 236 326 236 H354 L383 209 H413"
            className={styles.circuitTraceFine}
          />
          <path
            d="M0 229 H42 V278 H78 C98 278 115 291 136 316 C156 339 177 351 203 350 C238 348 263 317 281 292 C298 270 312 253 333 253 H362 L391 223 H413"
            className={styles.circuitTrace}
            filter="url(#heroCircuitGlow)"
          />
          <path
            d="M0 256 H65 C88 256 102 270 116 287 C139 315 155 330 181 338 C212 347 239 328 260 299 C282 268 296 251 319 251 H346 L378 221 H413"
            className={styles.circuitTraceBright}
            filter="url(#heroCircuitGlow)"
          />
          <path
            d="M0 287 H58 C80 287 97 297 119 322 C142 349 166 363 194 361 C229 359 254 331 273 305 C292 279 309 266 331 266 H360 L392 238 H413"
            className={styles.circuitTraceFine}
          />
          <path
            d="M0 319 H72 C94 319 108 330 126 348 C150 372 176 383 202 379 C236 374 260 347 278 325 C296 302 314 288 337 288 H367 L396 264 H413"
            className={styles.circuitTraceMuted}
          />
        </g>

        <g className={styles.circuitNodes}>
          {nodes.map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={index % 5 === 0 ? 3.2 : 2.2}
              className={index % 5 === 0 ? styles.circuitRingStrong : styles.circuitRing}
            />
          ))}
        </g>

        <circle cx="244" cy="259" r="15" className={styles.circuitCoreHalo} />
        <circle cx="244" cy="259" r="7" className={styles.circuitCoreGlow} />
        <circle cx="244" cy="259" r="3" className={styles.circuitCore} />
      </svg>
      <span className={styles.circuitGridFade} />
    </div>
  );
}
