"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { GlowOrb } from "@/components/ui/backdrop";

export function Indications() {
  const { indications } = guiaPratico;
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <GlowOrb className="-left-24 bottom-0" color="rgba(114,155,240,0.16)" size={440} duration={27} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow tone="light">{indications.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-[15.5px] font-light leading-relaxed text-bone-50/65">
                {indications.note}
              </p>
            </Reveal>

            <motion.div
              className="mt-10 flex flex-col gap-5 md:mt-12"
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
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <Parallax
                strength={18}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-azure-950 ring-1 ring-bone-50/10"
              >
                <Image
                  src={officialImages.applicationPortrait.src}
                  alt={officialImages.applicationPortrait.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 34vw, 92vw"
                />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
