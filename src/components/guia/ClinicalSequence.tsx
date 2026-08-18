"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, HairlineCross } from "@/components/ui/backdrop";

const LINE_DURATION = 1.7;

export function ClinicalSequence() {
  const { clinicalSequence } = guiaPratico;
  const steps = clinicalSequence.steps;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-azure-950 py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_82%_10%,rgba(71,126,235,0.16),transparent)]" />
      <GlowOrb className="-left-40 top-1/3" color="rgba(114,155,240,0.14)" size={460} duration={30} />
      <HairlineCross className="right-[10%] top-[16%] hidden lg:block" opacity={0.28} />

      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <Eyebrow tone="light" className="mx-auto justify-center">
              {clinicalSequence.eyebrow}
            </Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            text={clinicalSequence.title}
            delay={0.1}
            className="mt-7 font-display text-[9vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.2vw]"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-14 md:mt-24 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[24px] bg-azure-950 ring-1 ring-bone-50/10 md:max-w-none">
                <Image
                  src={officialImages.productTray.src}
                  alt={officialImages.productTray.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 36vw, 80vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative md:col-span-6 md:col-start-7">
            {/* Trilho vertical — desenhado progressivamente atrás dos marcadores numerados */}
            <span
              aria-hidden
              className="absolute left-[19px] top-3 bottom-3 w-px bg-bone-50/10 md:left-[23px]"
            />
            <motion.span
              aria-hidden
              className="absolute left-[19px] top-3 w-px origin-top bg-gradient-to-b from-azure-300 to-azure-500 md:left-[23px]"
              style={{ bottom: "0.75rem" }}
              initial={{ scaleY: reduceMotion ? 1 : 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reduceMotion ? 0 : LINE_DURATION, ease: EASE }}
            />

            <ol className="relative flex flex-col gap-14 md:gap-16">
              {steps.map((step, i) => (
                <motion.li
                  key={step.index}
                  className="relative flex gap-6 pl-0 md:gap-8"
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    ease: EASE,
                    delay: reduceMotion ? 0 : (LINE_DURATION / (steps.length - 1)) * i * 0.85,
                  }}
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-azure-300/40 bg-azure-950 font-mono text-[12px] text-azure-300 md:h-12 md:w-12">
                    {step.index}
                  </span>
                  <div className="pt-1 md:pt-2">
                    <h3 className="font-display text-[5vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[3.2vw] md:text-[1.7vw]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[14px] font-light leading-relaxed text-bone-50/65">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-md text-center text-[13px] font-light italic leading-relaxed text-bone-50/50 md:mt-20">
            {clinicalSequence.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
