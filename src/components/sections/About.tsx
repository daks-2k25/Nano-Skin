"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { about } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

export function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="sobre" className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
        <GlowOrb
          className="-left-32 bottom-0"
          color="rgba(114,155,240,0.18)"
          size={480}
          duration={25}
        />
        <ArcLine
          className="-right-40 -top-40 h-[520px] w-[520px]"
          color="#a9c2f7"
          opacity={0.14}
        />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="relative md:col-span-6">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-6 -top-6 hidden h-full w-full rounded-[20px] bg-bone-50 md:block"
              />
              <Reveal>
                <Parallax strength={28} className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={images.about.primary.src}
                    alt={images.about.primary.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                </Parallax>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="absolute -bottom-10 -right-6 hidden w-[42%] overflow-hidden rounded-[16px] border-8 border-bone-50 bg-azure-950 shadow-[0_30px_60px_-15px_rgba(10,31,92,0.22)] sm:block md:-right-10 md:w-[46%]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={images.about.secondary.src}
                      alt={images.about.secondary.alt}
                      fill
                      className="object-contain p-4"
                      sizes="30vw"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 60% 60% at 50% 45%, transparent 30%, rgba(5,15,48,0.65) 100%)",
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8 md:pt-8">
              <Reveal>
                <Eyebrow tone="light">{about.eyebrow}</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                text={about.title}
                delay={0.1}
                className="mt-8 font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.6vw]"
              />
              <TextReveal
                as="p"
                text={about.body}
                delay={0.24}
                className="mt-7 text-[15px] font-light leading-relaxed text-bone-50/70"
              />

              <motion.ul
                className="mt-10 flex flex-col gap-0 border-t border-bone-50/12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.42 } },
                }}
              >
                {about.points.map((point) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-4 border-b border-bone-50/12 py-4 text-[13.5px] font-light text-bone-50"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                    }}
                  >
                    <span className="h-px w-5 bg-azure-300" />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}
