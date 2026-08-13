"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CornerFrame, GlowOrb } from "@/components/ui/backdrop";

type Pair = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  label: string;
  weeks: string;
  badge: string | null;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function ResultsGallery({ pairs }: { pairs: readonly Pair[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = pairs.length;
  const pair = pairs[index];

  function go(delta: number) {
    setDirection(delta);
    setIndex((current) => (current + delta + total) % total);
  }

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -50) go(1);
    else if (info.offset.x > 50) go(-1);
  }

  return (
    <div className="relative">
      <GlowOrb className="-bottom-24 -left-24" color="rgba(114,155,240,0.16)" size={320} drift={false} />

      <motion.div
        className="relative touch-pan-y"
        drag={total > 1 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.14}
        onDragEnd={onDragEnd}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 16 : -16, scale: 1.008 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction >= 0 ? -16 : 16, scale: 0.996 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div className="relative grid grid-cols-1 gap-px overflow-hidden bg-bone-50/10 sm:grid-cols-2">
              <div className="relative aspect-[16/11] bg-azure-900">
                <Image
                  src={pair.before.src}
                  alt={pair.before.alt}
                  fill
                  draggable={false}
                  className="img-clinical object-cover"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
                <span className="absolute left-4 top-4 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-6 md:top-6">
                  Antes
                </span>
              </div>
              <div className="relative aspect-[16/11] bg-azure-900">
                <Image
                  src={pair.after.src}
                  alt={pair.after.alt}
                  fill
                  draggable={false}
                  className="img-clinical object-cover"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
                <span className="absolute right-4 top-4 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-6 md:top-6">
                  Depois
                </span>
              </div>
              {pair.badge && (
                <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-azure-600/90 font-mono text-[9px] uppercase tracking-widest text-bone-50 backdrop-blur-sm sm:flex">
                  {pair.badge}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <CornerFrame className="-inset-2" color="border-azure-300/40" size={20} />
      </motion.div>

      {/* Legenda editorial — protagonismo da imagem, navegação discreta ao lado do índice */}
      <div className="mt-6 flex items-end justify-between gap-6 border-t border-bone-50/15 pt-6">
        <div>
          <p className="font-display text-[18px] italic text-bone-50">{pair.label}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
            {pair.weeks}
          </p>
        </div>

        {total > 1 && (
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Resultado anterior"
              className="-m-2 p-2 text-bone-50/45 transition-colors duration-300 hover:text-bone-50"
            >
              <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={1.1} />
            </button>
            <p className="font-mono text-[12.5px] tabular-nums tracking-wider">
              <span className="text-bone-50">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-bone-50/25">/</span>
              <span className="text-bone-50/40">{String(total).padStart(2, "0")}</span>
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo resultado"
              className="-m-2 p-2 text-bone-50/45 transition-colors duration-300 hover:text-bone-50"
            >
              <ChevronRight className="h-[18px] w-[18px]" strokeWidth={1.1} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
