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
      fill="none"
      aria-hidden="true"
    >
      <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.63 3.6-.4 7.38-1.77 7.38-8A6.26 6.26 0 0 0 19.61 2.1 5.76 5.76 0 0 0 19.45 6S18.17 5.6 15 7.48a13.38 13.38 0 0 0-6 0C5.83 5.6 4.55 6 4.55 6a5.76 5.76 0 0 0-.16 4.1 6.26 6.26 0 0 0-1.67 4.37c0 6.22 3.78 7.59 7.38 8A3.37 3.37 0 0 0 9 18.1V22" />
      <path d="M9 19c-3 .92-3-1.5-4.2-2" />
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
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 4v15" />
      <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
    </svg>
  );
}
