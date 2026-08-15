export interface HeroLink {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  download?: boolean;
}

export interface HeroStage {
  id: string;
  number: string;
  label: string;
}

export interface HeroContentData {
  eyebrow: string;
  contextLabel: string;
  greeting: string;
  name: string;
  primaryTitle: readonly [string, string];
  valueProposition: string;
  stages: readonly HeroStage[];
  actions: {
    projects: HeroLink;
    resume: HeroLink;
  };
  socials: {
    github: HeroLink;
    linkedin: HeroLink;
  };
}
