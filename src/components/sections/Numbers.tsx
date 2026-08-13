import Image from "next/image";
import { numbers } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import {
  GridTexture,
  HairlineCross,
  ArcLine,
  DrawLine,
} from "@/components/ui/backdrop";

const [hero, ...rest] = numbers.stats;

export function Numbers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 via-azure-900 to-azure-800 py-32 md:py-40">
      <GridTexture color="#729bf0" opacity={0.05} size={56} fade="edges" />
      <ArcLine
        className="-bottom-64 -right-64 h-[680px] w-[680px]"
        color="#a9c2f7"
        opacity={0.16}
      />
      <HairlineCross className="left-[8%] top-[14%] hidden lg:block" opacity={0.3} />
      <HairlineCross className="right-[16%] top-[62%] hidden lg:block" opacity={0.22} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow tone="light">{numbers.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-lg font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.6vw]">
                {numbers.title}
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Composição editorial — número-âncora + ficha técnica */}
        <div className="relative mt-20 md:mt-28">
          <Parallax
            strength={16}
            className="pointer-events-none absolute -right-2 top-0 hidden w-[150px] rotate-[9deg] opacity-95 sm:block md:top-4 lg:right-6 lg:w-[190px]"
          >
            <div className="relative aspect-[4/5] drop-shadow-[0_30px_45px_rgba(114,155,240,0.28)]">
              <Image
                src={officialImages.productTilted.src}
                alt={officialImages.productTilted.alt}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          </Parallax>

          <Reveal>
            <div className="relative max-w-xl md:max-w-[58%]">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-azure-300">01</span>
                <DrawLine className="max-w-[64px] flex-1 bg-azure-400" />
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-azure-300">
                  Escala
                </span>
              </div>
              <p className="mt-3 font-mono text-[13.5vw] font-light leading-[0.82] tracking-tightest text-bone-50 sm:text-[9vw] md:text-[9.5rem] lg:text-[11rem]">
                {hero.value}
                <span className="ml-1 text-[0.3em] italic text-azure-300">{hero.unit}</span>
              </p>
              <p className="mt-5 max-w-[30ch] text-[14px] font-light leading-relaxed text-bone-50/65 md:text-[14.5px]">
                {hero.label}
              </p>
            </div>
          </Reveal>

          {/* Régua técnica — demais indicadores */}
          <div className="relative mt-20 md:mt-28">
            <DrawLine className="bg-bone-50/20" delay={0.15} />
            <div className="grid grid-cols-2 gap-x-6 gap-y-14 pt-10 sm:grid-cols-4 md:gap-x-8">
              {rest.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                  <div
                    className={
                      "relative " +
                      (i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-10")
                    }
                  >
                    <span className="absolute -top-10 left-0 h-3 w-px bg-bone-50/25" />
                    <span className="block font-mono text-[10px] text-azure-300">
                      0{i + 2}
                    </span>
                    <p className="mt-3 font-mono text-[9vw] font-light leading-none tracking-tightest text-bone-50 sm:text-[4.4vw] md:text-[2.6vw]">
                      {stat.value}
                      <span className="text-[0.42em] text-azure-300">{stat.unit}</span>
                    </p>
                    <span className="mt-4 block h-px w-8 bg-bone-50/25" />
                    <p className="mt-4 max-w-[16ch] text-[12.5px] font-light leading-snug text-bone-50/60">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
