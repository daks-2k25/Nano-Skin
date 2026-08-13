"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type GlowOrbProps = {
  className?: string;
  color?: string;
  size?: number;
  drift?: boolean;
  duration?: number;
};

/** Halo de luz suave e desfocado, com deslocamento quase imperceptível. */
export function GlowOrb({
  className,
  color = "rgba(71,126,235,0.22)",
  size = 560,
  drift = true,
  duration = 24,
}: GlowOrbProps) {
  return (
    <motion.div
      aria-hidden
      className={clsx("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(50px)",
      }}
      animate={
        drift
          ? { x: [0, 18, -14, 0], y: [0, -16, 12, 0] }
          : undefined
      }
      transition={
        drift
          ? { duration, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    />
  );
}
