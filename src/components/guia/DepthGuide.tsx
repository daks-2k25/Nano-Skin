import Image from "next/image";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { ArcLine } from "@/components/ui/backdrop";
import { DepthList } from "./DepthList";

export function DepthGuide() {
  const { facialAreas, periorbital, byRegion } = guiaPratico;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 via-azure-900 to-azure-950 py-32 md:py-40">
      <ArcLine className="-right-56 top-16 h-[560px] w-[560px]" color="#729bf0" opacity={0.14} />

      <Container className="relative">
        {/* Bloco 1 — áreas faciais gerais */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow tone="light">{facialAreas.eyebrow}</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              text={facialAreas.title}
              delay={0.1}
              className="mt-7 font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <p className="text-[13px] uppercase tracking-widest2 text-bone-50/50 md:pt-2">
                {facialAreas.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <DepthList rows={facialAreas.rows} delay={0.15} />
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-[20px] bg-bone-50 p-3 md:p-4">
                <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[12px] md:max-w-none">
                  <Image
                    src={images.guia.depthMap.src}
                    alt={images.guia.depthMap.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 26vw, 70vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bloco 2 — região periorbital */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:mt-32 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="font-display text-[6vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[3.6vw] md:text-[2vw]">
                {periorbital.title}
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-sm text-[13.5px] font-light italic leading-relaxed text-bone-50/55">
                {periorbital.note}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <DepthList rows={periorbital.rows} delay={0.1} />
          </div>
        </div>

        {/* Bloco 3 — referência rápida por área x tipo de pele */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <h3 className="max-w-xl font-display text-[6vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[3.6vw] md:text-[2vw]">
              {byRegion.title}
            </h3>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal delay={0.06}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                  {byRegion.byArea.label}
                </p>
              </Reveal>
              <div className="mt-5">
                <DepthList rows={byRegion.byArea.rows} delay={0.1} />
              </div>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                  {byRegion.bySkin.label}
                </p>
              </Reveal>
              <div className="mt-5">
                <DepthList rows={byRegion.bySkin.rows} delay={0.14} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
