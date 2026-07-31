import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps: IconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function MenuIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg
      {...sharedProps}
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 .75a11.25 11.25 0 0 0-3.556 21.922c.563.104.769-.244.769-.542 0-.267-.01-1.154-.016-2.094-3.13.68-3.79-1.327-3.79-1.327-.512-1.301-1.25-1.647-1.25-1.647-1.022-.699.077-.684.077-.684 1.13.08 1.725 1.16 1.725 1.16 1.005 1.722 2.637 1.225 3.28.937.101-.728.393-1.225.715-1.506-2.499-.284-5.127-1.25-5.127-5.56 0-1.228.439-2.232 1.158-3.019-.116-.284-.502-1.428.11-2.976 0 0 .944-.302 3.093 1.153A10.75 10.75 0 0 1 12 6.238c.956.004 1.92.129 2.819.379 2.147-1.455 3.09-1.153 3.09-1.153.613 1.548.227 2.692.111 2.976.721.787 1.157 1.791 1.157 3.019 0 4.321-2.633 5.273-5.14 5.552.404.348.764 1.034.764 2.084 0 1.506-.014 2.719-.014 3.087 0 .3.203.651.775.54A11.252 11.252 0 0 0 12 .75Z" />
    </svg>
  );
}
