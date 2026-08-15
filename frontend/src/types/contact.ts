export type ContactLinkIconName = "github" | "linkedin";

export type OpportunityIconName =
  | "web"
  | "backend"
  | "ai"
  | "freelance"
  | "collaboration";

export interface ContactLink {
  label: string;
  href: string;
  display: string;
  icon: ContactLinkIconName;
  external?: boolean;
}

export interface ContactOpportunity {
  label: string;
  icon: OpportunityIconName;
}

export interface ContactContentData {
  label: string;
  meta: string;
  headingLead: string;
  headingAccent: string;
  introduction: string;
  email: string;
  responseLabel: string;
  responseWindow: string;
  directHeading: string;
  directDescription: string;
  directLinks: readonly ContactLink[];
  opportunitiesLabel: string;
  opportunitiesHeading: string;
  opportunitiesDescription: string;
  opportunities: readonly ContactOpportunity[];
  formLabel: string;
  formHeading: string;
  formDescription: string;
  formPrivacyNote: string;
  footerKicker: string;
  footerMessage: string;
  footerNavigationIds: readonly string[];
}
