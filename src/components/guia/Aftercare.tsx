"use client";

import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

export function Aftercare() {
  const { aftercare } = guiaPratico;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 to-azure-900 pb-16 pt-32 md:pb-20 md:pt-40">
      <Container>
        <Reveal>
          <Eyebrow tone="light">{aftercare.eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          text={aftercare.title}
          delay={0.1}
          className="mt-7 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 divide-y divide-bone-50/12 border-t border-bone-50/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? { staggerChildren: 0, delayChildren: 0 }
                : { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {aftercare.timeline.map((step) => (
            <motion.div
              key={step.time}
              className="py-10 sm:px-10 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE } },
              }}
            >
              <p className="font-mono text-[15px] tracking-widest2 text-azure-300">{step.time}</p>
              <p className="mt-4 max-w-sm text-[15.5px] font-light leading-relaxed text-bone-50/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
