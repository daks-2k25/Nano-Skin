"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { recognition } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, HairlineCross } from "@/components/ui/backdrop";

export function Recognition() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-azure-900 py-20 md:py-28">
        <GlowOrb
          className="-right-24 top-1/2 -translate-y-1/2"
          color="rgba(114,155,240,0.14)"
          size={420}
          duration={30}
        />
        <HairlineCross className="left-[6%] top-[16%] hidden lg:block" opacity={0.28} />

        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-14 border-t border-bone-50/12 pt-16 md:grid-cols-12 md:gap-8 md:pt-20">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow tone="light">{recognition.eyebrow}</Eyebrow>
              </Reveal>
              <TextReveal
                as="h3"
                text={recognition.title}
                delay={0.1}
                className="mt-7 max-w-xl font-display text-[7vw] font-light leading-[1.1] tracking-tightest text-bone-50 sm:text-[4.4vw] md:text-[2.3vw]"
              />
              <Reveal
                as="p"
                delay={0.22}
                className="mt-6 max-w-lg text-[14.5px] font-light leading-relaxed text-bone-50/70"
              >
                {recognition.body}
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-10 flex items-baseline gap-4 border-t border-bone-50/12 pt-6">
                  <span className="whitespace-nowrap bg-gradient-to-b from-bone-50 to-azure-300 bg-clip-text font-display text-[11vw] font-light leading-none tracking-tightest text-transparent sm:text-[7vw] md:text-[2.8vw]">
                    {recognition.stat.value}
                  </span>
                  <span className="max-w-[22ch] text-[13px] font-light leading-snug text-bone-50/55">
                    {recognition.stat.label}
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.15}>
                <div className="relative mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center">
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-dashed border-azure-300/25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-6 rounded-full border border-bone-50/10"
                  />
                  <Image
                    src={officialImages.awardCatalystFinalist.src}
                    alt={officialImages.awardCatalystFinalist.alt}
                    width={220}
                    height={220}
                    className="relative w-[58%]"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col items-center gap-3 text-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={officialImages.logo.src}
                      alt={officialImages.logo.alt}
                      width={22}
                      height={22}
                      className="h-6 w-auto opacity-90"
                    />
                    <span className="h-px w-6 bg-bone-50/20" />
                    <span className="font-display text-[15px] font-light tracking-tight text-bone-50/80">
                      NanoSkinBio
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-50/50">
                    {recognition.badge.line1}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-50/35">
                    {recognition.badge.line2}
                  </p>
                  <p className="mt-1 max-w-[26ch] text-[11px] font-light leading-snug text-bone-50/35">
                    {recognition.badge.congress}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}
