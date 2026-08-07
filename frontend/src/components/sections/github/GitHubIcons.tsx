import type { SVGProps } from "react";

export type GitHubIconName =
  | "arrow"
  | "branch"
  | "code"
  | "external"
  | "layers"
  | "spark"
  | "star"
  | "terminal";

interface GitHubIconProps extends SVGProps<SVGSVGElement> {
  name: GitHubIconName;
}

export function GitHubIcon({ name, ...props }: GitHubIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h13" />
          <path d="m14 7 5 5-5 5" />
        </svg>
      );
    case "branch":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="5" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="19" r="2" />
          <path d="M6 7v10" />
          <path d="M8 10c5 0 4-4 8-4" />
        </svg>
      );
    case "code":
      return (
        <svg {...commonProps}>
          <path d="m8 9-4 3 4 3" />
          <path d="m16 9 4 3-4 3" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case "external":
      return (
        <svg {...commonProps}>
          <path d="M14 5h5v5" />
          <path d="m19 5-8 8" />
          <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 17 8 4 8-4" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M12 3 13.7 8.3 19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
          <path d="m18.5 16 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m7 9 3 3-3 3" />
          <path d="M13 15h4" />
        </svg>
      );
  }
}
