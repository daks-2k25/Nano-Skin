"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import { EASE } from "./Reveal";

// A máscara overflow-hidden de cada linha recorta a caixa pela line-height;
// títulos com leading apertado (leading-none/tight) cortam a perna de letras
// como "p"/"q" sem essa folga — mesmo caso do fix em Manifesto.tsx.
const HAS_DESCENDER = /[gjpqy]/;

// Divide o texto em "linhas" semânticas (sentença > travessão > vírgula central)
// para o reveal por linha — sem depender de medição de layout em runtime,
// mesma lógica de referências como o Vertical Cut Reveal (splitBy "lines").
function splitIntoLines(text: string): string[] {
  const sentenceSplit = text.match(/^([\s\S]*?[.!?])\s+([\s\S]*)$/);
  if (sentenceSplit) return [sentenceSplit[1], sentenceSplit[2]];

  const dashSplit = text.match(/^([\s\S]*?—)\s+([\s\S]*)$/);
  if (dashSplit) return [dashSplit[1], dashSplit[2]];

  if (text.length > 80) {
    const commaBreaks = [...text.matchAll(/,\s+/g)];
    if (commaBreaks.length > 0) {
      const mid = text.length / 2;
      const best = commaBreaks.reduce((closest, m) =>
        Math.abs((m.index ?? 0) - mid) < Math.abs((closest.index ?? 0) - mid) ? m : closest,
      );
      const cut = (best.index ?? 0) + 1;
      return [text.slice(0, cut), text.slice(cut + (best[0].length - 1))];
    }
  }

  return [text];
}

type TextRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  lineDelay?: number;
  y?: number;
  once?: boolean;
};

export function TextReveal({
  text,
  as: Component = "p",
  className,
  delay = 0,
  lineDelay = 0.1,
  y = 12,
  once = true,
}: TextRevealProps) {
  const lines = splitIntoLines(text);
  const reduceMotion = useReducedMotion();

  return (
    <Component className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={HAS_DESCENDER.test(line) ? "block overflow-hidden pb-[0.2em]" : "block overflow-hidden"}
        >
          <motion.span
            className="block"
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : delay + i * lineDelay,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
