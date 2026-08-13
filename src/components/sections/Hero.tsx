"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { officialImages } from "@/lib/images";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowOrb, GridTexture, HairlineCross } from "@/components/ui/backdrop";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[720px] w-full items-center overflow-hidden bg-azure-950 py-40 lg:h-[100svh] lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_78%_55%,rgba(71,126,235,0.20),transparent)]" />
      <GlowOrb
        className="-left-32 -top-24"
        color="rgba(114,155,240,0.16)"
        size={480}
        duration={26}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] lg:block">
        <GridTexture color="#729bf0" opacity={0.05} size={72} fade="edges" />
      </div>
      <HairlineCross className="left-[68px] top-[168px] hidden md:block" opacity={0.3} />
      <HairlineCross className="left-[380px] top-[720px] hidden lg:block" opacity={0.22} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-bone-50/70"
            >
              <span className="h-px w-8 bg-azure-300" />
              {hero.kicker}
            </motion.p>

            <h1 className="font-display text-[13vw] leading-[0.98] tracking-tightest text-bone-50 sm:text-[9vw] lg:text-[4.6vw]">
              {hero.headline.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.55 + i * 0.12, ease: EASE }}
                  className="block overflow-hidden"
                >
                  {i === hero.headline.length - 1 ? (
                    <span className="font-display-italic bg-gradient-to-r from-bone-50 via-azure-300 to-azure-500 bg-clip-text text-transparent">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05, ease: EASE }}
              className="mt-8 max-w-md text-[15px] font-light leading-relaxed text-bone-50/75"
            >
              {hero.support}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-[10px] uppercase tracking-widest2 text-azure-300"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.35, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Button href="#tecnologia" tone="light" variant="primary">
                {hero.ctaPrimary}
              </Button>
              <Button href="#protocolos" tone="light" variant="ghost">
                {hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[24px] lg:max-w-none"
            >
              <Image
                src={officialImages.productGlow.src}
                alt={officialImages.productGlow.alt}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 44vw, 80vw"
              />
            </motion.div>
          </div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 lg:right-16 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-50/50">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-bone-50/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-azure-300"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
