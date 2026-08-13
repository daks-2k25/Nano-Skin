"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type DrawLineProps = {
  className?: string;
  color?: string;
  delay?: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** Linha técnica que se desenha da esquerda para a direita ao entrar em vista. */
export function DrawLine({ className, color = "bg-azure-400", delay = 0 }: DrawLineProps) {
  return (
    <motion.span
      aria-hidden
      className={clsx("block h-px origin-left", color, className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    />
  );
}
