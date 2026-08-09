"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { contactContent } from "@/content/contact";

import { AlertIcon, CheckIcon, SendIcon } from "./ContactIcons";
import styles from "./ContactSection.module.css";

type FieldName = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FieldName, string>>;
type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const MINIMUM_FILL_TIME_MS = 1200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function validateForm(formData: FormData): FormErrors {
  const name = readText(formData, "name");
  const email = readText(formData, "email");
  const subject = readText(formData, "subject");
  const message = readText(formData, "message");

  const errors: FormErrors = {};

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (name.length > 80) {
    errors.name = "Please keep your name under 80 characters.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > 160) {
    errors.email = "Please keep your email under 160 characters.";
  }

  if (subject.length < 3) {
    errors.subject = "Please add a short subject.";
  } else if (subject.length > 120) {
    errors.subject = "Please keep the subject under 120 characters.";
  }

  if (message.length < 20) {
    errors.message = "Please share at least a few details about your message.";
  } else if (message.length > 1200) {
    errors.message = "Please keep the message under 1,200 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [loadedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const clearFieldError = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.currentTarget.name as FieldName;

    if (!errors[field]) {
      return;
    }

    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = readText(formData, "website");
    const elapsed = Date.now() - loadedAt;

    if (honeypot) {
      setStatus({
        type: "success",
        message: "Thanks. Your message has been prepared.",
      });
      return;
    }

    if (elapsed < MINIMUM_FILL_TIME_MS) {
      setStatus({
        type: "error",
        message: "Please review your message and try again.",
      });
      return;
    }

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields before continuing.",
      });
      return;
    }

    const name = readText(formData, "name");
    const email = readText(formData, "email");
    const subject = readText(formData, "subject");
    const message = readText(formData, "message");

    const mailSubject = `Portfolio inquiry: ${subject}`;
    const mailBody = [
      `Name: ${name}`,
      `Reply-to: ${email}`,
      "",
      "Message:",
      message,
      "",
      "Sent from Ahmad Sohail Wahidy's portfolio contact form.",
    ].join("\n");

    const mailtoUrl = `mailto:${contactContent.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    if (mailtoUrl.length > 7000) {
      setStatus({
        type: "error",
        message:
          "This message is too long for an email link. Please shorten it or email me directly.",
      });
      return;
    }

    setStatus({
      type: "success",
      message:
        "Your email app is opening with the message ready. Review it there and send when ready.",
    });

    window.location.href = mailtoUrl;
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            onChange={clearFieldError}
          />
          {errors.name ? (
            <span id="contact-name-error" className={styles.fieldError}>
              {errors.name}
            </span>
          ) : null}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={160}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            onChange={clearFieldError}
          />
          {errors.email ? (
            <span id="contact-email-error" className={styles.fieldError}>
              {errors.email}
            </span>
          ) : null}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          required
          maxLength={120}
          placeholder="What would you like to discuss?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          onChange={clearFieldError}
        />
        {errors.subject ? (
          <span id="contact-subject-error" className={styles.fieldError}>
            {errors.subject}
          </span>
        ) : null}
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.messageLabelRow}>
          <label htmlFor="contact-message">Message</label>
          <span>20–1,200 characters</span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          maxLength={1200}
          placeholder="A short overview of the opportunity, project, or collaboration..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          onChange={clearFieldError}
        />
        {errors.message ? (
          <span id="contact-message-error" className={styles.fieldError}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.formFooter}>
        <p>{contactContent.formPrivacyNote}</p>

        <button type="submit" className={styles.submitButton}>
          <span>Send Message</span>
          <SendIcon />
        </button>
      </div>

      {status.type !== "idle" ? (
        <div
          className={`${styles.formStatus} ${
            status.type === "success"
              ? styles.statusSuccess
              : styles.statusError
          }`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live={status.type === "error" ? "assertive" : "polite"}
        >
          {status.type === "success" ? <CheckIcon /> : <AlertIcon />}
          <span>{status.message}</span>
        </div>
      ) : null}
    </form>
  );
}
