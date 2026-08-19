"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Parallax } from "@/components/ui/Parallax";
import { CountUp } from "@/components/ui/CountUp";
import { GridTexture } from "@/components/ui/backdrop";

export function Dosage() {
  const { dosage } = guiaPratico;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0c2869] py-32 text-bone-50 md:py-40">
      <GridTexture color="#6f9bea" opacity={0.05} size={68} fade="edges" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow tone="light">{dosage.eyebrow}</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              text={dosage.title}
              delay={0.1}
              className="mt-7 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
            />
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-lg text-[14.5px] font-light leading-relaxed text-bone-50/65">
                {dosage.intro}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Reveal delay={0.15}>
              <Parallax
                strength={16}
                className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[20px] bg-azure-950 ring-1 ring-bone-50/10 md:max-w-none"
              >
                <Image
                  src={officialImages.productTilted.src}
                  alt={officialImages.productTilted.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 20vw, 60vw"
                />
              </Parallax>
            </Reveal>
          </div>
        </div>

        <motion.div
          className="mt-14 flex flex-col border-t border-bone-50/12 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? { staggerChildren: 0, delayChildren: 0 }
                : { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          {dosage.rows.map((row) => (
            <motion.div
              key={row.region}
              className="flex flex-col gap-2 border-b border-bone-50/12 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE } },
              }}
            >
              <p className="text-[14.5px] font-light text-bone-50/85">{row.region}</p>
              <div className="flex items-center gap-8 font-mono text-[12.5px] tabular-nums">
                <CountUp value={row.volumeMl} decimals={1} suffix=" ml" className="text-azure-300" />
                <CountUp value={row.drops} suffix=" gotas" className="text-bone-50/45" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
