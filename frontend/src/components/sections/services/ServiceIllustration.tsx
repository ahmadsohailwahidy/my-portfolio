import styles from "./ServicesSection.module.css";

type ServiceIllustrationKind = "browser" | "integration" | "dashboard";

interface ServiceIllustrationProps {
  kind: ServiceIllustrationKind;
}

export function ServiceIllustration({ kind }: ServiceIllustrationProps) {
  if (kind === "browser") {
    return (
      <div
        className={`${styles.serviceIllustration} ${styles.browserIllustration}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 214 171" focusable="false">
          <defs>
            <linearGradient id="services-browser-stroke" x1="0" x2="1">
              <stop stopColor="#00d8df" />
              <stop offset="1" stopColor="#2e6785" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="212"
            height="169"
            rx="10"
            className={styles.illustrationFrame}
            stroke="url(#services-browser-stroke)"
          />
          <path d="M1 23h212M58 23v147" className={styles.illustrationRule} />
          <circle
            cx="14"
            cy="13"
            r="3"
            className={styles.illustrationDotStrong}
          />
          <circle cx="27" cy="13" r="3" className={styles.illustrationDot} />
          <circle cx="40" cy="13" r="3" className={styles.illustrationDot} />
          <rect
            x="69"
            y="10"
            width="113"
            height="6"
            rx="3"
            className={styles.illustrationBarDark}
          />
          <rect
            x="190"
            y="10"
            width="13"
            height="6"
            rx="3"
            className={styles.illustrationBarBright}
          />
          <circle
            cx="18"
            cy="39"
            r="4"
            className={styles.illustrationDotStrong}
          />
          <path
            d="M28 39h23M16 55h34M16 70h34M16 85h34M16 100h25"
            className={styles.illustrationNavBars}
          />
          <path
            d="M74 40h46M74 55h120"
            className={styles.illustrationContentBars}
          />
          <rect
            x="75"
            y="67"
            width="119"
            height="65"
            rx="4"
            className={styles.illustrationPane}
          />
          <path
            d="m97 111 12-20 12 16 12-23 16 27z"
            className={styles.illustrationMountain}
          />
          <path
            d="M75 146h120M75 160h58"
            className={styles.illustrationContentBars}
          />
        </svg>
      </div>
    );
  }

  if (kind === "integration") {
    return (
      <div
        className={`${styles.serviceIllustration} ${styles.integrationIllustration}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 228 172" focusable="false">
          <defs>
            <linearGradient id="services-integration-line" x1="0" x2="1">
              <stop stopColor="#ff806d" />
              <stop offset=".45" stopColor="#ff806d" />
              <stop offset=".5" stopColor="#00dce2" />
              <stop offset="1" stopColor="#00dce2" />
            </linearGradient>
          </defs>
          <path
            d="M114 41V23M114 41c0 18-9 25-25 25H42c-16 0-24 8-24 23v11M114 41c0 18 9 25 25 25h47c16 0 24 8 24 23v11M114 131v18M114 131c0-17-9-24-25-24H42c-16 0-24-8-24-23M114 131c0-17 9-24 25-24h47c16 0 24-8 24-23"
            className={styles.integrationConnector}
            stroke="url(#services-integration-line)"
            pathLength="1"
          />
          <g
            className={`${styles.integrationNode} ${styles.integrationNodePrimary}`}
          >
            <rect x="87" y="0" width="54" height="55" rx="9" />
            <path d="m114 12 12 7v15l-12 7-12-7V19zM102 19l12 7 12-7M114 26v15" />
          </g>
          <g className={styles.integrationNode}>
            <rect x="0" y="78" width="55" height="55" rx="9" />
            <ellipse cx="27.5" cy="94" rx="11" ry="4.5" />
            <path d="M16.5 94v16c0 2.5 5 4.5 11 4.5s11-2 11-4.5V94M16.5 102c0 2.5 5 4.5 11 4.5s11-2 11-4.5" />
          </g>
          <g className={styles.integrationNode}>
            <rect x="173" y="78" width="55" height="55" rx="9" />
            <path d="M188 109h24c4.5 0 8-3.2 8-7.4 0-3.7-2.8-6.7-6.4-7.3a10.8 10.8 0 0 0-20.4-1.7c-4.4.6-7.7 4-7.7 8.2 0 4.6 3.5 8.2 8.5 8.2" />
          </g>
          <g className={styles.integrationNode}>
            <rect x="87" y="117" width="54" height="55" rx="9" />
            <path d="m105 136-8 8 8 8M123 136l8 8-8 8M119 130l-10 28" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`${styles.serviceIllustration} ${styles.dashboardIllustration}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 230 155" focusable="false">
        <rect
          x="1"
          y="1"
          width="228"
          height="153"
          rx="10"
          className={styles.illustrationFrame}
        />
        <path d="M1 22h228M45 22v132" className={styles.illustrationRule} />
        <circle
          cx="12"
          cy="12"
          r="3"
          className={styles.illustrationDotStrong}
        />
        <circle cx="24" cy="12" r="3" className={styles.illustrationDot} />
        <circle cx="36" cy="12" r="3" className={styles.illustrationDot} />
        <path d="M57 12h95" className={styles.illustrationTopBar} />
        <rect
          x="11"
          y="31"
          width="24"
          height="8"
          rx="4"
          className={styles.dashboardStatus}
        />
        <rect
          x="15"
          y="34"
          width="8"
          height="2"
          rx="1"
          className={styles.dashboardStatusFill}
        />
        <path
          d="M14 52h22M14 66h22M14 80h18M14 94h22M14 108h16"
          className={styles.illustrationNavBars}
        />
        <rect
          x="56"
          y="31"
          width="78"
          height="53"
          rx="4"
          className={styles.illustrationPane}
        />
        <polyline
          points="66,72 82,56 96,63 112,48 123,52 127,40"
          className={styles.dashboardTrend}
        />
        <path d="m123 40 5 0 0 5" className={styles.dashboardTrend} />
        <rect
          x="147"
          y="31"
          width="66"
          height="53"
          rx="4"
          className={styles.illustrationPane}
        />
        <circle cx="180" cy="57" r="17" className={styles.dashboardRingBase} />
        <path
          d="M180 40a17 17 0 1 1-12 5"
          className={styles.dashboardRingValue}
        />
        <rect
          x="56"
          y="94"
          width="78"
          height="48"
          rx="4"
          className={styles.illustrationPane}
        />
        <circle cx="67" cy="106" r="3" className={styles.dashboardPointCool} />
        <path
          d="M76 106h42M76 117h34M76 128h46"
          className={styles.illustrationDataBars}
        />
        <rect
          x="147"
          y="94"
          width="66"
          height="48"
          rx="4"
          className={styles.illustrationPane}
        />
        <circle
          cx="158"
          cy="106"
          r="3"
          className={styles.dashboardPointBright}
        />
        <path
          d="M167 106h31M167 117h26M167 128h35"
          className={styles.illustrationDataBars}
        />
      </svg>
    </div>
  );
}
