interface IconProps {
  className?: string;
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        stroke="none"
        d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15A10.7 10.7 0 0 1 12 6.12c.95 0 1.91.13 2.81.38 2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.04.76 2.1v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10v7" />
      <path d="M8 7.5v.01" />
      <path d="M12 10v7" />
      <path d="M12 13a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

export function BracketCodeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m8.5 7-4 5 4 5" />
      <path d="m15.5 7 4 5-4 5" />
      <path d="m13.5 4.5-3 15" />
    </svg>
  );
}

export function DotGridIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 24"
      fill="none"
      aria-hidden="true"
    >
      {[
        [6, 6],
        [18, 6],
        [30, 6],
        [42, 6],
        [6, 18],
        [18, 18],
        [30, 18],
        [42, 18],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.9" />
      ))}
    </svg>
  );
}

export function SparkLineIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 210"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 176c28 0 44-42 76-42s48 24 74 24 40-18 64-18 31 26 54 26 34-18 84-18" />
      <path d="M5 190c26 0 40-18 62-18s35 14 56 14 31-11 51-11 29 15 49 15 29-14 45-14 28 10 43 10 26-6 44-6" />
      <path d="M9 160c18 0 29-28 47-28s35 43 57 43 34-19 55-19 35 22 57 22 28-18 48-18 34 17 53 17 18-3 27-3" />
      <path d="M20 76v95" />
      <path d="M66 92v84" />
      <path d="M108 58v121" />
      <path d="M148 104v71" />
      <path d="M196 38v135" />
      <path d="M236 82v94" />
      <path d="M282 46v126" />
      <path d="M324 68v104" />
      <circle cx="20" cy="76" r="3.2" />
      <circle cx="108" cy="58" r="3.2" />
      <circle cx="196" cy="38" r="4" />
      <circle cx="282" cy="46" r="3.2" />
      <circle cx="324" cy="68" r="3.2" />
    </svg>
  );
}

export function FullArrowIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function CodeMarkIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path d="m23 20-12 12 12 12" />
      <path d="m41 20 12 12-12 12" />
      <path d="m37 14-10 36" />
    </svg>
  );
}