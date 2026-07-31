"use client";

import { useEffect, useState, type CSSProperties } from "react";

import styles from "./HeroSection.module.css";

const HASH_GLYPHS = "01#<>/{}[]*+=-_";
const FRAME_INTERVAL = 52;

interface HashRevealTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

function isRevealableCharacter(character: string): boolean {
  return /[A-Za-z0-9]/.test(character);
}

function createHashFrame(
  text: string,
  progress: number,
  frame: number,
): string {
  const characters = Array.from(text);
  const revealableCount = characters.filter(isRevealableCharacter).length;
  const normalizedProgress = Math.min(1, Math.max(0, progress));
  const revealedCount = Math.floor(revealableCount * normalizedProgress);

  let revealableIndex = 0;

  return characters
    .map((character, characterIndex) => {
      if (!isRevealableCharacter(character)) {
        return character;
      }

      const isRevealed = revealableIndex < revealedCount;
      revealableIndex += 1;

      if (isRevealed) {
        return character;
      }

      const glyphIndex =
        (character.charCodeAt(0) + characterIndex * 11 + frame * 7) %
        HASH_GLYPHS.length;

      return HASH_GLYPHS[glyphIndex];
    })
    .join("");
}

export function HashRevealText({
  text,
  delay = 0,
  duration = 1000,
  className,
  style,
}: HashRevealTextProps) {
  const [visibleText, setVisibleText] = useState(() =>
    createHashFrame(text, 0, 0),
  );

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotionQuery.matches) {
      setVisibleText(text);
      return;
    }

    let animationFrameId = 0;
    let frame = 0;
    let previousFrameTime = 0;
    const startTime = performance.now() + delay;

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        animationFrameId = window.requestAnimationFrame(animate);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      if (currentTime - previousFrameTime >= FRAME_INTERVAL || progress === 1) {
        previousFrameTime = currentTime;
        frame += 1;
        setVisibleText(createHashFrame(text, progress, frame));
      }

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      } else {
        setVisibleText(text);
      }
    };

    setVisibleText(createHashFrame(text, 0, 0));
    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [delay, duration, text]);

  return (
    <span className={className} style={style}>
      <span aria-hidden="true">{visibleText}</span>
      <span className={styles.screenReaderOnly}>{text}</span>
    </span>
  );
}
