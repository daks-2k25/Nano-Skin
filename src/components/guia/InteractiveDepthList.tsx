"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/Reveal";

type DepthRow = {
  label: string;
  depth: string;
};

/**
 * Variante interativa do DepthList — usada só em "Profundidade recomendada por região".
 * Clique/toque seleciona uma região (persiste); hover/foco no desktop faz preview sem
 * perder a seleção. Sem campo de indicação: os dados de origem só têm label + profundidade
 * para essas linhas (diferente de "Áreas faciais gerais").
 */
export function InteractiveDepthList({
  rows,
  delay = 0,
  groupId,
}: {
  rows: readonly DepthRow[];
  delay?: number;
  groupId: string;
}) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const active = hovered ?? selected;

  return (
    <motion.div
      role="group"
      className="flex flex-col border-t border-bone-50/12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: 0.07, delayChildren: delay },
        },
      }}
    >
      {rows.map((row, i) => {
        const isActive = i === active;
        return (
          <motion.button
            key={row.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            className="flex w-full flex-col gap-1.5 border-b border-bone-50/12 py-5 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            variants={{
              hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE },
              },
            }}
          >
            <div className="relative pl-4 transition-opacity duration-300 sm:max-w-[58%]">
              {isActive && (
                <motion.span
                  layoutId={`${groupId}-indicator`}
                  className="absolute inset-y-0 left-0 w-[2px] bg-azure-300"
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
                />
              )}
              <p
                className={
                  "text-[14.5px] transition-colors duration-300 " +
                  (isActive ? "font-normal text-bone-50" : "font-light text-bone-50/55")
                }
              >
                {row.label}
              </p>
            </div>
            <p
              className={
                "shrink-0 pl-4 font-mono text-[13px] tracking-widest2 transition-all duration-300 sm:pl-0 " +
                (isActive ? "text-azure-300 opacity-100" : "text-azure-300/45 opacity-80")
              }
            >
              {row.depth}
            </p>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
