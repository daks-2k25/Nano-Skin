"use client";

import { useCallback, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/backdrop";

type Pair = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

function CompareFrame({ pair }: { pair: Pair }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [percent, setPercent] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(97, Math.max(3, pct)));
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
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
  }

  return (
    <div
      ref={frameRef}
      role="slider"
      aria-label="Comparar antes e depois — arraste para revelar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPercent((p) => Math.max(3, p - 4));
        if (e.key === "ArrowRight") setPercent((p) => Math.min(97, p + 4));
      }}
      className="relative aspect-[17/10] w-full touch-none select-none overflow-hidden rounded-[20px] bg-azure-900 ring-1 ring-inset ring-bone-50/15"
    >
      <Image
        src={pair.before.src}
        alt={pair.before.alt}
        fill
        draggable={false}
        className="img-clinical pointer-events-none object-cover object-[50%_38%]"
        sizes="(min-width: 768px) 32vw, 92vw"
      />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
      >
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          draggable={false}
          className="img-clinical object-cover object-[50%_38%]"
          sizes="(min-width: 768px) 32vw, 92vw"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-4 md:top-4">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-4 md:top-4">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-bone-50/90 shadow-[0_0_18px_rgba(248,249,251,0.5)]"
        style={{ left: `${percent}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone-50/40 bg-bone-50 text-azure-800 shadow-[0_10px_28px_rgba(5,15,48,0.35)]"
        style={{ left: `${percent}%` }}
      >
        <MoveHorizontal className="h-3.5 w-3.5" strokeWidth={1.6} />
      </div>
    </div>
  );
}

export function ResultsGallery({ pairs }: { pairs: readonly Pair[] }) {
  return (
    <div className="relative">
      <GlowOrb
        className="-bottom-24 -left-24"
        color="rgba(114,155,240,0.16)"
        size={320}
        drift={false}
      />

      {/* As três evidências lado a lado — paradas, controladas apenas pelo arraste do usuário */}
      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-3 md:-mx-6 lg:-mx-10">
        {pairs.map((pair, i) => (
          <Reveal key={pair.before.src} delay={0.08 * i}>
            <CompareFrame pair={pair} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
