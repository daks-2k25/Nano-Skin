"use client";

import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GridTexture } from "@/components/ui/backdrop";

export function IntegrationGuide() {
  const { integration: g } = guiaPratico;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0c2869] py-32 text-bone-50 md:py-40">
      <GridTexture color="#6f9bea" opacity={0.05} size={68} fade="edges" />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{g.eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          text={g.title}
          delay={0.1}
          className="mt-7 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
        />

        <motion.div
          className="mt-14 grid grid-cols-1 border-t border-bone-50/12 sm:grid-cols-2 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? { staggerChildren: 0, delayChildren: 0 }
                : { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {g.combos.map((combo) => (
            <motion.div
              key={combo.a}
              className="border-b border-bone-50/12 py-7 sm:odd:pr-10 sm:even:pl-10"
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE } },
              }}
            >
              <p className="font-display text-[4.6vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[2.4vw] md:text-[1.5vw]">
                {combo.a} <span className="text-azure-300">+</span> {combo.b}
              </p>
              <p className="mt-2.5 max-w-sm text-[13px] font-light leading-relaxed text-bone-50/60">
                {combo.result}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-14 max-w-xl border-l border-azure-300/30 pl-6 md:mt-16 md:pl-8">
            <p className="text-[13.5px] font-light italic leading-relaxed text-bone-50/70">
              {g.maleNote}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
