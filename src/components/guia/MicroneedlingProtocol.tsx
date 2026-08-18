"use client";

import { motion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

function TechniqueList({
  items,
  delay,
}: {
  items: readonly { label: string; description: string }[];
  delay: number;
}) {
  return (
    <motion.ul
      className="mt-6 flex flex-col border-t border-bone-50/12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item.label}
          className="border-b border-bone-50/12 py-5"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
          }}
        >
          <p className="text-[14.5px] font-light text-bone-50">{item.label}</p>
          <p className="mt-1.5 max-w-xs text-[12.5px] font-light leading-relaxed text-bone-50/55">
            {item.description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function MicroneedlingProtocol() {
  const { microneedlingProtocol: p } = guiaPratico;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{p.eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          text={p.title}
          delay={0.1}
          className="mt-7 max-w-2xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                Preparação
              </p>
            </Reveal>
            <TechniqueList items={p.prep} delay={0.1} />
          </div>
          <div>
            <Reveal delay={0.06}>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                Técnica de aplicação
              </p>
            </Reveal>
            <TechniqueList items={p.application} delay={0.16} />
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
              Etapas da sequência
            </p>
          </Reveal>
          <motion.ol
            className="mt-6 flex flex-col divide-y divide-bone-50/12 sm:flex-row sm:divide-x sm:divide-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {p.steps.map((step, i) => (
              <motion.li
                key={step}
                className="flex flex-1 items-start gap-4 py-5 sm:px-8 sm:py-0 sm:first:pl-0"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                }}
              >
                <span className="font-mono text-[11px] text-azure-300">
                  0{i + 1}
                </span>
                <p className="text-[13.5px] font-light leading-relaxed text-bone-50/75">
                  {step}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
