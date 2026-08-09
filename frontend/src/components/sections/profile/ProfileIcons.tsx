import type { SVGProps } from "react";

import type { ProfessionalStrengthIconName } from "@/types/profile";

type IconProps = SVGProps<SVGSVGElement>;

interface StrengthIconProps extends IconProps {
  name: ProfessionalStrengthIconName;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function StrengthIcon({ name, ...props }: StrengthIconProps) {
  if (name === "problem-solving") {
    return (
      <svg {...iconProps} {...props}>
        <path d="M5 7.5 9 4l4 3.5L9 11 5 7.5Z" />
        <path d="m11 13 4-3.5 4 3.5-4 3.5L11 13Z" />
        <path d="M5 16.5 9 13l4 3.5L9 20l-4-3.5Z" />
        <path d="M9 11v2" />
        <path d="M13 7.5h2v2" />
      </svg>
    );
  }

  if (name === "implementation-detail") {
    return (
      <svg {...iconProps} {...props}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="m15.3 15.1 1.4 1.4 3-3" />
      </svg>
    );
  }

  if (name === "continuous-learning") {
    return (
      <svg {...iconProps} {...props}>
        <path d="M5 6.5 12 3l7 3.5-7 3.5-7-3.5Z" />
        <path d="M7.5 8v5.2c0 1.7 2 3.1 4.5 3.1s4.5-1.4 4.5-3.1V8" />
        <path d="M19 7v5" />
        <path d="M12 16.3V21" />
      </svg>
    );
  }

  return (
    <svg {...iconProps} {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M2.8 19c.5-3.5 2.2-5.2 5.2-5.2 2.2 0 3.7.9 4.6 2.7" />
      <path d="M11.4 16.5c.9-1.8 2.4-2.7 4.6-2.7 3 0 4.7 1.7 5.2 5.2" />
      <path d="M10.3 11.8h3.4" />
    </svg>
  );
}

export function DirectionIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-1.8 4.2L9 15l1.8-4.2L15 9Z" />
    </svg>
  );
}

export function LanguageIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 5h10v9H8l-4 3V5Z" />
      <path d="M10 18h6l4 3V9h-3" />
      <path d="M7 9h4" />
    </svg>
  );
}

export function OpportunityIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 7h16v12H4z" />
      <path d="M9 7V5h6v2" />
      <path d="M4 11h16" />
      <path d="M10 11v2h4v-2" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 3h7l4 4v14H7V3Z" />
      <path d="M14 3v5h4" />
      <path d="M10 12h5" />
      <path d="M10 16h5" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3v11" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 18v2h14v-2" />
    </svg>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 8V3h10v5" />
      <path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
      <path d="M17.5 11.5h.01" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}
