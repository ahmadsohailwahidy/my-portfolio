export interface HeroLink {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  download?: boolean;
}

export interface HeroSpecialty {
  number: string;
  label: string;
}

export interface HeroContentData {
  greeting: string;
  name: string;
  studentRole: string;
  primaryTitle: readonly [string, string];
  secondaryTitle: string;
  description: string;
  specialties: readonly HeroSpecialty[];
  actions: {
    projects: HeroLink;
    resume: HeroLink;
  };
  socials: {
    github: HeroLink;
    linkedin: HeroLink;
  };
}
