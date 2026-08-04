export type ProjectTier = "flagship" | "major" | "compact";

export type ProjectAccent = "cyan" | "emerald" | "violet" | "amber";

export type ProjectAlignment = "copy-first" | "media-first";

export type ProjectMediaLayout =
  | "flagship"
  | "dashboard"
  | "diagram"
  | "responsive"
  | "desktop";

export type ProjectMediaRole = "primary" | "supporting" | "mobile";

export interface ProjectMediaAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly role: ProjectMediaRole;
}

export interface ProjectEvidenceItem {
  readonly label: string;
  readonly value: string;
}

export interface FeaturedProject {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly category: string;
  readonly context?: string;
  readonly tier: ProjectTier;
  readonly accent: ProjectAccent;
  readonly alignment: ProjectAlignment;
  readonly mediaLayout: ProjectMediaLayout;
  readonly summary: string;
  readonly workflow: string;
  readonly role?: string;
  readonly architecture: string;
  readonly capabilities: readonly string[];
  readonly technologies: readonly string[];
  readonly evidence: readonly ProjectEvidenceItem[];
  readonly media: readonly ProjectMediaAsset[];
  readonly caption: string;
}

export interface FeaturedProjectsContent {
  readonly label: string;
  readonly meta: string;
  readonly heading: string;
  readonly introduction: string;
  readonly flagship: FeaturedProject;
  readonly major: readonly FeaturedProject[];
  readonly compact: readonly FeaturedProject[];
}
