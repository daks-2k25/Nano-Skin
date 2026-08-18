import Image from "next/image";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { ArcLine } from "@/components/ui/backdrop";
import { DepthList } from "./DepthList";
import { InteractiveDepthList } from "./InteractiveDepthList";

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

            {/* Região periorbital — logo abaixo de "Pele espessa, fibrótica ou fotoenvelhecida" */}
            <div className="mt-16 md:mt-20">
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
              <div className="mt-6">
                <DepthList rows={periorbital.rows} delay={0.1} />
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-[20px] bg-bone-50 p-3 md:p-4">
                <Image
                  src={images.guia.depthMap.src}
                  alt={images.guia.depthMap.alt}
                  width={1414}
                  height={2000}
                  className="h-auto w-full max-w-[280px] rounded-[12px] md:max-w-none"
                  sizes="(min-width: 768px) 38vw, 90vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bloco 2 — referência rápida por área x tipo de pele */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <h3 className="max-w-xl mx-auto text-center font-display text-[6vw] font-light leading-tight tracking-tightest text-bone-50 sm:text-[3.6vw] md:text-[2vw]">
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
                <InteractiveDepthList
                  rows={byRegion.byArea.rows}
                  delay={0.1}
                  groupId="byArea"
                />
              </div>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                  {byRegion.bySkin.label}
                </p>
              </Reveal>
              <div className="mt-5">
                <InteractiveDepthList
                  rows={byRegion.bySkin.rows}
                  delay={0.14}
                  groupId="bySkin"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
