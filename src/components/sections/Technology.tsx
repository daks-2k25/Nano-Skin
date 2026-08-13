"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { technology } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb, GridTexture, HairlineCross } from "@/components/ui/backdrop";

const visuals = [
  images.technology.hydroxyapatite,
  images.technology.hyaluronic,
  images.technology.peptides,
];

type TechItem = (typeof technology.items)[number];

function SystemPanel({
  item,
  visual,
}: {
  item: TechItem;
  visual: { src: string; alt: string };
}) {
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center overflow-hidden px-6 md:px-16 lg:px-24">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[32vw] font-light leading-none tracking-tightest text-transparent [-webkit-text-stroke:1px_rgba(169,194,247,0.1)] md:text-[16vw]"
      >
        {item.index}
      </span>

      <div className="relative mx-auto w-full max-w-shell">
        <div className="relative grid grid-cols-1 items-center gap-10 rounded-[32px] border border-bone-50/12 bg-bone-50/[0.03] p-8 backdrop-blur-[2px] md:grid-cols-12 md:gap-8 md:p-12 lg:p-14">
          <div className="md:col-span-6">
            <span className="font-display text-[15px] italic text-azure-300">{item.index}</span>
            <h3 className="mt-5 font-display text-[7vw] font-light leading-[0.98] tracking-tightest sm:text-[4vw] md:text-[3vw]">
              {item.name}
            </h3>
            <p className="mt-4 text-[12px] uppercase tracking-widest2 text-azure-300">
              {item.subtitle}
            </p>
            <p className="mt-6 max-w-md text-[16px] font-light leading-relaxed text-bone-50/65 md:text-[16.5px]">
              {item.description}
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[24px] md:max-w-none">
              <Image
                src={visual.src}
                alt={visual.alt}
                fill
                className="img-editorial object-cover"
                sizes="(min-width: 768px) 30vw, 80vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Technology() {
  const items = technology.items;
  const targetRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(items.length - 1) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(items.length - 1, Math.floor(v * items.length)));
  });

  return (
    <section
      id="tecnologia"
      className="relative bg-gradient-to-b from-azure-900 via-azure-800 to-azure-950 text-bone-50"
    >
      <div className="relative overflow-hidden pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_100%,rgba(114,155,240,0.28),transparent)]" />
        <GridTexture color="#6f9bea" opacity={0.05} size={68} fade="edges" />
        <GlowOrb className="-right-32 top-1/4" color="rgba(169,194,247,0.14)" size={420} duration={30} />
        <HairlineCross className="left-[6%] top-[14%] hidden lg:block" opacity={0.25} />

        <Container className="relative pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow tone="light">{technology.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-display text-[9vw] font-light leading-[1.02] tracking-tightest sm:text-[6vw] md:text-[3.2vw]">
                  {technology.title}
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Reveal delay={0.15}>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-bone-50/65 md:mt-4">
                  {technology.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </div>

      {/* Desktop — scroll vertical, conteúdo desloca horizontalmente (pinned) */}
      <div ref={targetRef} className="relative hidden md:block" style={{ height: `${items.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden border-t border-bone-50/10">
          <motion.div style={{ x }} className="flex h-full">
            {items.map((item, i) => (
              <SystemPanel key={item.index} item={item} visual={visuals[i]} />
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-12 flex items-center justify-center gap-4">
            <span className="font-mono text-[11px] tabular-nums text-bone-50/50">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="relative h-px w-24 overflow-hidden bg-bone-50/15">
              <motion.span className="absolute inset-y-0 left-0 bg-azure-300" style={{ width: progressWidth }} />
            </span>
            <span className="font-mono text-[11px] tabular-nums text-bone-50/30">
              {String(items.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile — pilha vertical simples, sem scroll-jacking */}
      <div className="relative border-t border-bone-50/10 pb-24 md:hidden">
        {items.map((item, i) => (
          <Reveal key={item.index} delay={0.05 * i}>
            <Container className="py-8">
              <div className="rounded-[28px] border border-bone-50/12 bg-bone-50/[0.03] p-6">
                <div className="flex items-start gap-6">
                  <span className="font-display text-[15px] italic text-azure-300">{item.index}</span>
                  <div>
                    <h3 className="font-display text-[7vw] font-light leading-none tracking-tightest sm:text-[4vw]">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[12px] uppercase tracking-widest2 text-azure-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={visuals[i].src}
                    alt={visuals[i].alt}
                    fill
                    className="img-editorial object-cover"
                    sizes="90vw"
                  />
                </div>
                <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-bone-50/60">
                  {item.description}
                </p>
              </div>
            </Container>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
