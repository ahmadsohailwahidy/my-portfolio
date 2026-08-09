"use client";

import { useState } from "react";

import { CopyIcon } from "./ContactIcons";
import styles from "./ContactSection.module.css";

interface CopyEmailButtonProps {
  email: string;
}

type CopyState = "idle" | "copied" | "error";

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const helper = document.createElement("textarea");
        helper.value = email;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();

        const copied = document.execCommand("copy");
        document.body.removeChild(helper);

        if (!copied) {
          throw new Error("Copy command was not available.");
        }
      }

      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 2600);
    }
  };

  const label =
    copyState === "copied"
      ? "Copied"
      : copyState === "error"
        ? "Copy failed"
        : "Copy email";

  return (
    <button
      type="button"
      className={styles.copyButton}
      onClick={copyEmail}
      aria-label={`${label}: ${email}`}
    >
      <CopyIcon />
      <span>{label}</span>
    </button>
  );
}
