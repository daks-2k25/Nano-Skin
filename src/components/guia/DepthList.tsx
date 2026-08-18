"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/ui/Reveal";

type DepthRow = {
  label: string;
  depth: string;
  indication?: string;
};

/** Lista técnica label/profundidade/indicação — mesma gramática de divisores do Manifesto/Protocolos. */
export function DepthList({
  rows,
  delay = 0,
}: {
  rows: readonly DepthRow[];
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col border-t border-bone-50/12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {rows.map((row) => (
        <motion.div
          key={row.label}
          className="flex flex-col gap-1.5 border-b border-bone-50/12 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          }}
        >
          <div className="sm:max-w-[58%]">
            <p className="text-[14.5px] font-light text-bone-50">{row.label}</p>
            {row.indication && (
              <p className="mt-1 text-[12.5px] font-light text-bone-50/50">{row.indication}</p>
            )}
          </div>
          <p className="shrink-0 font-mono text-[13px] tracking-widest2 text-azure-300">
            {row.depth}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
