"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/backdrop";

export function Indications() {
  const { indications } = guiaPratico;
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <GlowOrb className="-left-24 bottom-0" color="rgba(114,155,240,0.16)" size={440} duration={27} />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{indications.eyebrow}</Eyebrow>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? { staggerChildren: 0, delayChildren: 0 }
                : { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {indications.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE } },
              }}
            >
              <motion.div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: hovered === null || hovered === i ? 1 : 0.5,
                        y: hovered === i ? -4 : 0,
                        borderColor: hovered === i ? "rgba(169,194,247,0.4)" : "rgba(169,194,247,0.15)",
                      }
                }
                transition={{ duration: 0.4, ease: EASE }}
                className="relative h-full overflow-hidden rounded-[20px] border border-azure-300/15 bg-bone-50/[0.02] p-6 md:p-7"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-azure-300/60 to-transparent"
                />
                <h3 className="font-display text-[5.5vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[2.6vw] md:text-[1.4vw]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-bone-50/65">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
