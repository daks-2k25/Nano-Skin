"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, useSafeReducedMotion } from "@/components/ui/Reveal";

// Trilha vertical inspirada num conceito de "hike": um trilho central que
// se desenha continuamente conforme o scroll avança (useScroll/useTransform,
// mesma técnica de Technology.tsx), com cada dispositivo acendendo em
// sequência ao entrar na tela — só texto, tipografia em destaque (mesmo
// tratamento editorial usado para nomes técnicos em Technology.tsx), sem
// imagens.
export function DeviceTrail({
  items,
  delay = 0,
}: {
  items: readonly string[];
  delay?: number;
}) {
  const reduceMotion = useSafeReducedMotion();
  const trailRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trailRef,
    offset: ["start 0.9", "end 0.65"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={trailRef}
      className="relative flex flex-col border-t border-bone-50/12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
    >
      <span aria-hidden className="absolute left-[6px] top-3 bottom-3 w-px bg-bone-50/10" />
      <motion.span
        aria-hidden
        className="absolute left-[6px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-azure-300 to-azure-500"
        style={{ scaleY: reduceMotion ? 1 : lineScale }}
      />

      {items.map((item, i) => (
        <motion.div
          key={item}
          className="group relative flex items-center gap-6 border-b border-bone-50/12 py-6 md:py-8"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -18 },
            visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.65, ease: EASE } },
          }}
        >
          <div className="relative z-10 flex h-full w-[13px] shrink-0 items-center justify-center">
            <motion.span
              aria-hidden
              className="relative z-10 h-[13px] w-[13px] rounded-full border border-azure-300/50"
              variants={{
                hidden: { backgroundColor: "rgba(10,31,92,1)" },
                visible: {
                  backgroundColor: "rgba(169,194,247,1)",
                  transition: { duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.25, ease: EASE },
                },
              }}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-4 md:gap-5">
              <span className="font-display text-[17px] italic text-azure-300 md:text-[18px]">
                0{i + 1}
              </span>
              <p className="font-display text-[6vw] font-light leading-[0.98] tracking-tightest text-bone-50 transition-colors duration-500 ease-premium group-hover:text-azure-100 sm:text-[3.4vw] md:text-[2vw]">
                {item}
              </p>
            </div>
            <span
              aria-hidden
              className="mt-2 block h-px w-full origin-left scale-x-0 bg-azure-300/60 transition-transform duration-500 ease-premium group-hover:scale-x-100"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
