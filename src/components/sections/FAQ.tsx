"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faq } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

/** Indicador +/− — duas linhas finas; a vertical recolhe sobre a horizontal ao abrir. */
function FaqIndicator({
  isOpen,
  reduceMotion,
}: {
  isOpen: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <span
      aria-hidden
      className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center sm:mt-0"
    >
      <span className="absolute h-px w-3 bg-azure-300" />
      <motion.span
        className="absolute h-px w-3 bg-azure-300"
        animate={{ rotate: isOpen ? 0 : 90 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
      />
    </span>
  );
}

function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const number = String(index + 1).padStart(2, "0");
  const buttonId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      className="border-b border-bone-50/12"
      variants={{
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE },
        },
      }}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start gap-5 py-6 text-left sm:items-center sm:gap-6 sm:py-7"
      >
        <span className="w-8 shrink-0 pt-0.5 font-mono text-[12px] tracking-widest2 text-azure-300/60 sm:pt-0">
          {number}
        </span>
        <span className="flex-1 text-[15px] font-light leading-snug text-bone-50 sm:text-[16.5px]">
          {question}
        </span>
        <FaqIndicator isOpen={isOpen} reduceMotion={reduceMotion} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: reduceMotion ? 1 : 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: reduceMotion ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: reduceMotion ? 0 : -8 }}
              animate={{ y: 0 }}
              exit={{ y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
              className="max-w-xl pb-7 pr-2 text-[14px] font-light leading-relaxed text-bone-50/70 sm:pl-[3.25rem] sm:text-[14.5px]"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-azure-950 py-32 md:py-40"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">{faq.eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            text={faq.title}
            delay={0.1}
            className="mt-7 font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
          />

          <motion.div
            className="mt-14 flex flex-col border-t border-bone-50/12 md:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: reduceMotion
                  ? { staggerChildren: 0, delayChildren: 0 }
                  : { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
          >
            {faq.items.map((item, i) => (
              <FaqItem
                key={item.question}
                index={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
