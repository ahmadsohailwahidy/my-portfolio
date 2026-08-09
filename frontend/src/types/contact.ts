export interface ContactLink {
  label: string;
  href: string;
  display: string;
  external?: boolean;
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
  directLinks: readonly ContactLink[];
  opportunitiesLabel: string;
  opportunitiesHeading: string;
  opportunities: readonly string[];
  formLabel: string;
  formHeading: string;
  formDescription: string;
  formPrivacyNote: string;
  footerNavigationIds: readonly string[];
}
