"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { useSafeReducedMotion } from "@/components/ui/Reveal";

type Slide = { src: string; alt: string; label: string; objectPosition?: string };

// Nem lento nem rápido — tempo suficiente para examinar antes/depois sem
// parecer travado, mas sem prender quem quer avançar no próprio ritmo.
const AUTOPLAY_MS = 4200;

// O efeito coverflow do Swiper com "loop" nativo quebra visualmente quando
// há poucas fotos (a lib avisa: "not enough slides for loop mode") — sobra
// um lado sem preview e a navegação trava. Em vez disso, repetimos a lista
// real várias vezes e começamos no meio: sempre há uma foto de verdade dos
// dois lados para espiar, sem depender da clonagem interna do Swiper.
const REPEATS = 5;

// Sobrescreve o tema padrão (azul genérico) do Swiper para a paleta
// azure/bone do NanoSkinBio — inclinação sutil no coverflow, sem sombras
// gráficas prontas do plugin (skeuomórficas demais para o tom editorial).
const carouselStyles = `
  .evidence-swiper { padding-bottom: 8px; overflow: visible; }
  .evidence-swiper .swiper-slide {
    width: min(680px, 82vw);
    opacity: 0.4;
    transition: opacity 0.5s ease;
  }
  .evidence-swiper .swiper-slide-active { opacity: 1; }
  .evidence-swiper .swiper-button-next,
  .evidence-swiper .swiper-button-prev {
    color: rgba(248,249,251,0.55);
    transition: color 0.3s ease;
  }
  .evidence-swiper .swiper-button-next:hover,
  .evidence-swiper .swiper-button-prev:hover {
    color: #f8f9fb;
  }
  .evidence-swiper .swiper-button-next::after,
  .evidence-swiper .swiper-button-prev::after {
    font-size: 16px;
  }
`;

export function EvidenceCarousel({ slides }: { slides: readonly Slide[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useSafeReducedMotion();
  const hasMultiple = slides.length > 1;
  const count = slides.length;
  const realIndex = ((activeIndex % count) + count) % count;
  const active = slides[realIndex];

  const padded = hasMultiple
    ? Array.from({ length: REPEATS }, (_, chunk) =>
        slides.map((s) => ({ ...s, chunk })),
      ).flat()
    : slides.map((s) => ({ ...s, chunk: 0 }));
  const initialSlide = hasMultiple ? Math.floor(REPEATS / 2) * count : 0;

  function goToDot(i: number) {
    const currentChunk = Math.floor(activeIndex / count);
    swiperRef.current?.slideTo(currentChunk * count + i);
  }

  return (
    <div className="mx-auto max-w-6xl">
      <style>{carouselStyles}</style>

      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        rewind={hasMultiple}
        initialSlide={initialSlide}
        slidesPerView="auto"
        spaceBetween={24}
        coverflowEffect={{
          rotate: 14,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={
          hasMultiple && !reduceMotion
            ? { delay: AUTOPLAY_MS, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        navigation={hasMultiple}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="evidence-swiper"
      >
        {padded.map((s, i) => (
          <SwiperSlide key={`${s.src}-${s.chunk}`}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-azure-900 ring-1 ring-inset ring-bone-50/15">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === initialSlide}
                className="img-clinical object-cover"
                style={{ objectPosition: s.objectPosition ?? "50% 50%" }}
                sizes="(min-width: 768px) 680px, 82vw"
              />
              <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-4 md:top-4">
                Antes
              </span>
              <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-4 md:top-4">
                Depois
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex items-center justify-center gap-3 border-t border-bone-50/12 pt-5">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/60">
          {active.label}
        </p>
        {hasMultiple && (
          <p className="font-mono text-[11px] tabular-nums text-bone-50/35">
            {String(realIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goToDot(i)}
              aria-label={`Ir para foto ${i + 1}`}
              aria-current={i === realIndex}
              className={clsx(
                "h-1.5 rounded-full transition-all duration-500 ease-premium",
                i === realIndex ? "w-6 bg-bone-50" : "w-1.5 bg-bone-50/30 hover:bg-bone-50/50",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
