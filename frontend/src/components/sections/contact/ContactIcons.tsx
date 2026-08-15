import type { SVGProps } from "react";

import type { ContactLinkIconName, OpportunityIconName } from "@/types/contact";

type IconProps = SVGProps<SVGSVGElement>;

interface ContactLinkIconProps extends IconProps {
  name: ContactLinkIconName;
}

interface OpportunityIconProps extends IconProps {
  name: OpportunityIconName;
}

const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MailIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="m21 3-7.7 18-3.1-7.2L3 10.7 21 3Z" />
      <path d="m10.2 13.8 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20c.5-4.2 2.6-6.3 6.5-6.3s6 2.1 6.5 6.3" />
    </svg>
  );
}

export function AtIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.8 15.1V9.3" />
      <path d="M15.8 12.2a3.8 3.8 0 1 1-1-2.6" />
      <path d="M15.8 15.1c1.1.8 3.4.1 3.8-2.2" />
    </svg>
  );
}

export function SubjectIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M5 6h14" />
      <path d="M5 11h10" />
      <path d="M5 16h7" />
      <path d="m16.5 15 1.5 1.5 3-3" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4 5.5h16v11H9l-5 3v-14Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12 19V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </svg>
  );
}

export function ContactLinkIcon({ name, ...props }: ContactLinkIconProps) {
  if (name === "github") {
    return (
      <svg {...commonProps} {...props}>
        <path d="M9 19c-4 .9-4-2-5-2.5" />
        <path d="M15 21v-3.5c0-1 .1-1.5-.5-2 2.8-.3 5.7-1.4 5.7-6.2A4.8 4.8 0 0 0 19 6c.1-.3.5-1.6-.1-3.1 0 0-1-.3-3.4 1.3a11.6 11.6 0 0 0-7 0C6.1 2.6 5 2.9 5 2.9 4.4 4.4 4.8 5.7 5 6a4.8 4.8 0 0 0-1.3 3.3c0 4.8 2.9 5.9 5.7 6.2-.5.4-.6 1-.6 2V21" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10v6" />
      <path d="M8 7.5h.01" />
      <path d="M12 16v-3.3c0-1.6.9-2.7 2.4-2.7 1.4 0 2.1.9 2.1 2.7V16" />
      <path d="M12 10v6" />
    </svg>
  );
}

export function OpportunityIcon({ name, ...props }: OpportunityIconProps) {
  if (name === "web") {
    return (
      <svg {...commonProps} {...props}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 8h17" />
        <path d="m8 12-2 2 2 2" />
        <path d="m16 12 2 2-2 2" />
        <path d="m13.5 11-3 6" />
      </svg>
    );
  }

  if (name === "backend") {
    return (
      <svg {...commonProps} {...props}>
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
        <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg {...commonProps} {...props}>
        <path d="M9 4.5A3.5 3.5 0 0 0 5.5 8c0 .4.1.8.2 1.1A3.7 3.7 0 0 0 7 16.3 3.7 3.7 0 0 0 14 18a3.7 3.7 0 0 0 4.3-5.9A3.8 3.8 0 0 0 15 6.5 3.5 3.5 0 0 0 9 4.5Z" />
        <path d="M9 8.5c1.5 0 2.5.8 3 2" />
        <path d="M8.5 14c1.2.2 2.2-.2 3-1" />
        <path d="M14 9c-1 .8-1.4 1.8-1.2 3" />
      </svg>
    );
  }

  if (name === "freelance") {
    return (
      <svg {...commonProps} {...props}>
        <path d="M4 7h16v12H4z" />
        <path d="M9 7V5h6v2" />
        <path d="M4 11h16" />
        <path d="M10 11v2h4v-2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M3 19c.5-3.5 2.2-5.3 5-5.3 2.1 0 3.6 1 4.4 2.8" />
      <path d="M11.6 16.5c.8-1.8 2.3-2.8 4.4-2.8 2.8 0 4.5 1.8 5 5.3" />
      <path d="M10.3 11.5h3.4" />
    </svg>
  );
}
