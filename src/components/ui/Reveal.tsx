"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span" | "li" | "p";
};

export const EASE = [0.16, 1, 0.3, 1] as const;

// useLayoutEffect warns during SSR ("does nothing on the server"); on the
// server this file only ever runs during the render pass, never an effect,
// so falling back to useEffect there is a no-op and silences that warning.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * framer-motion's useReducedMotion() reads window.matchMedia synchronously
 * during the client's first render — which can already reflect the real OS
 * preference — while the server (no window) always renders as if there's no
 * preference. That mismatch between server and client-on-hydration output
 * is what triggers React's hydration-mismatch warning.
 *
 * This wrapper forces the first client render to match the server (always
 * "not reduced"), then applies the real value right after mount, before the
 * browser paints — so hydration is consistent and there's no visible flash.
 */
export function useSafeReducedMotion() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useIsomorphicLayoutEffect(() => setMounted(true), []);
  return mounted ? reduceMotion : false;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 1,
  y = 28,
  once = true,
  as = "div",
}: RevealProps) {
  const reduceMotion = useSafeReducedMotion();
  // Com reduced-motion, hidden já é igual a visible — o conteúdo nunca fica
  // preso em opacity:0 esperando um whileInView que pode nunca disparar.
  const variants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease: EASE },
    },
  };

  const MotionTag =
    as === "span" ? motion.span : as === "li" ? motion.li : as === "p" ? motion.p : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
};

export function RevealGroup({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.12,
  once = true,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};
