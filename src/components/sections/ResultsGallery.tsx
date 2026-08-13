"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/backdrop";

type Pair = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  label: string;
  weeks: string;
  badge: string | null;
};

function CompareFrame({ pair, autoDelay = 0 }: { pair: Pair; autoDelay?: number }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const percent = useMotionValue(50);
  const clipPath = useTransform(percent, (v) => `inset(0 0 0 ${v}%)`);
  const handleLeft = useTransform(percent, (v) => `${v}%`);
  const [ariaValue, setAriaValue] = useState(50);

  const startIdle = useCallback(() => {
    controlsRef.current = animate(percent, [percent.get(), 62, 38, 50], {
      duration: 11,
      ease: "easeInOut",
      repeat: Infinity,
    });
  }, [percent]);

  useEffect(() => {
    const t = setTimeout(startIdle, autoDelay * 1000);
    return () => {
      clearTimeout(t);
      controlsRef.current?.stop();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [startIdle, autoDelay]);

  const pauseIdle = useCallback(() => {
    controlsRef.current?.stop();
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const scheduleResume = useCallback(() => {
    resumeTimer.current = setTimeout(startIdle, 1600);
  }, [startIdle]);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = frameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(97, Math.max(3, pct));
      percent.set(clamped);
      setAriaValue(Math.round(clamped));
    },
    [percent]
  );

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    pauseIdle();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture is a progressive enhancement — dragging still works without it
    }
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }
  function onPointerUp() {
    draggingRef.current = false;
    scheduleResume();
  }

  return (
    <div
      ref={frameRef}
      role="slider"
      aria-label="Comparar antes e depois — arraste para revelar"
      aria-valuenow={ariaValue}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={(e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        pauseIdle();
        const next = Math.min(97, Math.max(3, percent.get() + (e.key === "ArrowRight" ? 4 : -4)));
        percent.set(next);
        setAriaValue(Math.round(next));
        scheduleResume();
      }}
      className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-[20px] bg-azure-900 ring-1 ring-inset ring-bone-50/15"
    >
      <Image
        src={pair.before.src}
        alt={pair.before.alt}
        fill
        draggable={false}
        className="img-clinical pointer-events-none object-cover"
        sizes="(min-width: 768px) 32vw, 92vw"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath }}
      >
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          draggable={false}
          className="img-clinical object-cover"
          sizes="(min-width: 768px) 32vw, 92vw"
        />
      </motion.div>

      <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-4 md:top-4">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-4 md:top-4">
        Depois
      </span>

      {pair.badge && (
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 items-center rounded-full bg-azure-600/85 px-2.5 font-mono text-[9px] uppercase tracking-widest text-bone-50 backdrop-blur-sm md:bottom-4 md:right-4">
          {pair.badge}
        </span>
      )}

      <motion.div
        className="pointer-events-none absolute inset-y-0 w-px bg-bone-50/90 shadow-[0_0_18px_rgba(248,249,251,0.5)]"
        style={{ left: handleLeft }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone-50/40 bg-bone-50 text-azure-800 shadow-[0_10px_28px_rgba(5,15,48,0.35)]"
        style={{ left: handleLeft }}
      >
        <MoveHorizontal className="h-3.5 w-3.5" strokeWidth={1.6} />
      </motion.div>
    </div>
  );
}

export function ResultsGallery({ pairs }: { pairs: readonly Pair[] }) {
  return (
    <div className="relative">
      <GlowOrb className="-bottom-24 -left-24" color="rgba(114,155,240,0.16)" size={320} drift={false} />

      {/* As três evidências lado a lado, com deriva ambiente sutil e assíncrona entre elas */}
      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {pairs.map((pair, i) => (
          <Reveal key={pair.label} delay={0.08 * i}>
            <div>
              <CompareFrame pair={pair} autoDelay={i * 1.7} />
              <div className="mt-5 border-t border-bone-50/15 pt-4">
                <p className="font-display text-[16px] italic text-bone-50">{pair.label}</p>
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-widest2 text-azure-300">
                  {pair.weeks}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
