"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { DrawLine } from "@/components/ui/backdrop";

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
      className="mt-5 flex flex-col gap-0"
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
          className="flex items-center gap-3 border-b border-bone-50/10 py-3.5 text-[14px] font-light text-bone-50/85"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -8 },
            visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE } },
          }}
        >
          <span
            className={
              tone === "ok"
                ? "h-1.5 w-1.5 shrink-0 rounded-full bg-azure-300"
                : "h-1.5 w-1.5 shrink-0 rounded-full bg-[#e3363c]"
            }
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function Safety() {
  const { bleeding, devices } = guiaPratico;
  const reduceMotion = useReducedMotion();

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

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 md:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                Aceitável
              </p>
            </Reveal>
            <StatusList items={bleeding.acceptable} tone="ok" delay={0.1} />
          </div>
          <div>
            <Reveal delay={0.06}>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-[#ef767b]">
                Não aceitável
              </p>
            </Reveal>
            <StatusList items={bleeding.notAcceptable} tone="warn" delay={0.16} />
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 max-w-2xl border-l border-[#e3363c]/50 pl-6 md:pl-8">
            <p className="text-[14.5px] font-light leading-relaxed text-bone-50/80">
              {bleeding.action}
            </p>
          </div>
        </Reveal>

        <div className="mt-20 md:mt-24">
          <DrawLine className="w-full max-w-3xl bg-bone-50/15" />
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/65">
                {devices.title}
              </p>
            </Reveal>
            <motion.div
              className="flex flex-wrap gap-x-9 gap-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                visible: {
                  transition: reduceMotion
                    ? { staggerChildren: 0, delayChildren: 0 }
                    : { staggerChildren: 0.06, delayChildren: 0.1 },
                },
              }}
            >
              {devices.items.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-baseline gap-2.5 border-l border-azure-300/30 pl-3"
                  variants={{
                    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: EASE } },
                  }}
                >
                  <span className="font-mono text-[10px] text-azure-300/60">0{i + 1}</span>
                  <span className="text-[12.5px] font-light leading-tight text-bone-50/80">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Reveal delay={0.15}>
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
        </div>
      </Container>
    </section>
  );
}
