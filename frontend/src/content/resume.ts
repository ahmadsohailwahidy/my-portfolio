import type { ResumeDetails } from "@/types/profile";

/**
 * Resume metadata has one source of truth here.
 *
 * The final PDF must exist at:
 * public/resume/Ahmad_Sohail_Wahidy_Resume.pdf
 *
 * The final PDF was not available in the Phase_9 snapshot used for this
 * implementation, so no historical "last updated" date is invented below.
 * Replace only `lastUpdatedLabel` and `lastUpdatedDateTime` after the final
 * PDF metadata has been verified.
 */
export const resumeContent = {
  href: "/resume/Ahmad_Sohail_Wahidy_Resume.pdf",
  fileName: "Ahmad_Sohail_Wahidy_Resume.pdf",
  description:
    "A concise overview of my professional profile, technical skills, selected project work, education, and current career direction.",
  downloadLabel: "Download Resume",
  openPrintLabel: "Open / Print Resume",
  lastUpdatedLabel: "August 2026",
  lastUpdatedDateTime: "2026-08-10",
} satisfies ResumeDetails;
