"use client";

import { motion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GridTexture } from "@/components/ui/backdrop";

export function IntegrationGuide() {
  const { integration: g } = guiaPratico;

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
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {g.combos.map((combo) => (
            <motion.div
              key={combo.a}
              className="border-b border-bone-50/12 py-7 sm:odd:pr-10 sm:even:pl-10"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
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

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
              Anestesia
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Reveal delay={0.06}>
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-azure-300">
                Preferido
              </p>
              <p className="mt-2 text-[13.5px] font-light leading-relaxed text-bone-50/80">
                {g.anesthesia.preferred}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-bone-50/50">
                Alternativa
              </p>
              <p className="mt-2 text-[13.5px] font-light leading-relaxed text-bone-50/60">
                {g.anesthesia.alternative}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-[#ef767b]">
                Evitar
              </p>
              <p className="mt-2 text-[13.5px] font-light leading-relaxed text-bone-50/60">
                {g.anesthesia.avoid}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
