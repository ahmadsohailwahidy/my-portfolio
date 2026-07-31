export type NavigationGroup = "primary" | "secondary";

export interface NavigationItem {
  id: string;
  label: string;
  shortLabel: string;
  href: `#${string}`;
  group: NavigationGroup;
  description: string;
}
