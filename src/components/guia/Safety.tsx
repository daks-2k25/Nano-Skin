"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CircleCheck, CircleX, TriangleAlert } from "lucide-react";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

function StatusList({
  items,
  tone,
  delay,
}: {
  items: readonly string[];
  tone: "ok" | "warn";
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="mt-5 flex flex-col gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          className="flex items-start gap-3 text-[14px] font-light leading-relaxed text-bone-50/85"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -8 },
            visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE } },
          }}
        >
          <span
            className={
              tone === "ok"
                ? "mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3fae74]"
                : "mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e3363c]"
            }
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function Safety() {
  const { bleeding } = guiaPratico;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{bleeding.eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          text={bleeding.title}
          delay={0.1}
          className="mt-7 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16">
          <Reveal>
            <div className="h-full rounded-[20px] border border-[#3fae74]/25 bg-[#3fae74]/[0.04] p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <CircleCheck className="h-[18px] w-[18px] text-[#3fae74]" strokeWidth={1.75} />
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-[#3fae74]">
                  Aceitável
                </p>
              </div>
              <StatusList items={bleeding.acceptable} tone="ok" delay={0.1} />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-[20px] border border-[#e3363c]/30 bg-[#e3363c]/[0.05] p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <CircleX className="h-[18px] w-[18px] text-[#ef767b]" strokeWidth={1.75} />
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-[#ef767b]">
                  Não aceitável
                </p>
              </div>
              <StatusList items={bleeding.notAcceptable} tone="warn" delay={0.16} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-5 flex items-start gap-3.5 rounded-[20px] border border-[#c99a4b]/30 bg-[#c99a4b]/[0.06] p-6 md:p-7">
            <TriangleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#c99a4b]" strokeWidth={1.75} />
            <p className="text-[14.5px] font-light leading-relaxed text-bone-50/80">
              <span className="font-medium text-bone-50">Ação: </span>
              {bleeding.action}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 overflow-hidden rounded-[20px] bg-bone-50 p-3 md:p-5">
            <Image
              src={images.guia.depthParameters.src}
              alt={images.guia.depthParameters.alt}
              width={2391}
              height={1774}
              className="h-auto w-full rounded-[12px]"
              sizes="(min-width: 768px) 80vw, 90vw"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
