"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useSafeReducedMotion } from "@/components/ui/Reveal";

type Slide = { src: string; alt: string; label: string; objectPosition?: string };

// Nem lento nem rápido — tempo suficiente para examinar antes/depois sem
// parecer travado, mas sem prender quem quer avançar no próprio ritmo.
const AUTOPLAY_MS = 4200;

export function EvidenceCarousel({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useSafeReducedMotion();
  const hasMultiple = slides.length > 1;
  const slide = slides[index];
  const count = String(slides.length).padStart(2, "0");

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  useEffect(() => {
    if (!hasMultiple || isPaused || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hasMultiple, isPaused, reduceMotion, slides.length, index]);

  return (
    <div
      className="mx-auto max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-azure-900 ring-1 ring-inset ring-bone-50/15"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(index - 1);
          if (e.key === "ArrowRight") go(index + 1);
        }}
      >
        {/* Todas as fotos ficam pré-carregadas e empilhadas — trocar de slide
            é só uma transição de opacidade, sem nova requisição de rede. */}
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={clsx(
              "absolute inset-0 transition-opacity duration-700 ease-premium",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : undefined}
              className="img-clinical object-cover"
              style={{ objectPosition: s.objectPosition ?? "50% 50%" }}
              sizes="(min-width: 1024px) 62vw, 92vw"
            />
          </div>
        ))}

        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-4 md:top-4">
          Antes
        </span>
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-4 md:top-4">
          Depois
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-bone-50/12 pt-5">
        <div className="flex items-baseline gap-3 whitespace-nowrap">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/60">
            {slide.label}
          </p>
          {hasMultiple && (
            <p className="font-mono text-[11px] tabular-nums text-bone-50/35">
              {String(index + 1).padStart(2, "0")} / {count}
            </p>
          )}
        </div>

        {hasMultiple && (
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Foto anterior"
              className="text-bone-50/50 transition-colors duration-300 hover:text-bone-50"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Próxima foto"
              className="text-bone-50/50 transition-colors duration-300 hover:text-bone-50"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir para foto ${i + 1}`}
              aria-current={i === index}
              className={clsx(
                "relative aspect-[16/9] w-20 shrink-0 overflow-hidden rounded-[8px] ring-1 transition-all duration-300 sm:w-24",
                i === index ? "ring-bone-50/70" : "opacity-45 ring-bone-50/15 hover:opacity-75",
              )}
            >
              <Image
                src={s.src}
                alt=""
                fill
                className="img-clinical object-cover"
                style={{ objectPosition: s.objectPosition ?? "50% 50%" }}
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
