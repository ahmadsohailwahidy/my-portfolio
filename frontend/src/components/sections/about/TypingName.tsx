"use client";

import { useEffect, useState } from "react";

import styles from "./AboutSection.module.css";

interface TypingNameProps {
  text: string;
}

interface TypingState {
  characterCount: number;
  isDeleting: boolean;
}

const TYPING_SPEED = 58;
const DELETING_SPEED = 32;
const COMPLETED_PAUSE = 850;
const RESTART_PAUSE = 220;

export function TypingName({ text }: TypingNameProps) {
  const [typingState, setTypingState] = useState<TypingState>({
    characterCount: 0,
    isDeleting: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches) {
      const frameId = window.requestAnimationFrame(() => {
        setTypingState({
          characterCount: text.length,
          isDeleting: false,
        });
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    const hasCompletedTyping = typingState.characterCount === text.length;

    const hasCompletedDeleting =
      typingState.characterCount === 0 && typingState.isDeleting;

    let delay = typingState.isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (hasCompletedTyping && !typingState.isDeleting) {
      delay = COMPLETED_PAUSE;
    }

    if (hasCompletedDeleting) {
      delay = RESTART_PAUSE;
    }

    const timeoutId = window.setTimeout(() => {
      if (hasCompletedTyping && !typingState.isDeleting) {
        setTypingState((currentState) => ({
          ...currentState,
          isDeleting: true,
        }));

        return;
      }

      if (hasCompletedDeleting) {
        setTypingState({
          characterCount: 0,
          isDeleting: false,
        });

        return;
      }

      setTypingState((currentState) => ({
        characterCount: currentState.isDeleting
          ? Math.max(0, currentState.characterCount - 1)
          : Math.min(text.length, currentState.characterCount + 1),
        isDeleting: currentState.isDeleting,
      }));
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [text, typingState]);

  const visibleText = text.slice(0, typingState.characterCount);

  return (
    <span className={styles.typingName} aria-label={text}>
      <span className={styles.typingNameVisible} aria-hidden="true">
        <span className={styles.typedCharacters}>{visibleText}</span>
        <span className={styles.typingCursor} />
      </span>
    </span>
  );
}
