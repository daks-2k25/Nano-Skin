import Image from "next/image";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { DrawLine, GlowOrb, GridTexture } from "@/components/ui/backdrop";
import { ResultsGallery } from "@/components/sections/ResultsGallery";

export function GuiaResults() {
  const { results } = guiaPratico;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <GridTexture color="#729bf0" opacity={0.05} size={60} fade="edges" />
      <GlowOrb className="-right-24 top-10" color="rgba(114,155,240,0.18)" size={460} duration={26} />

      <Container className="relative">
        <div className="mb-16 md:mb-20">
          <Reveal>
            <Eyebrow tone="light">{results.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]">
              {results.title}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-md text-[14px] font-light leading-relaxed text-bone-50/60">
              {results.caption}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <ResultsGallery pairs={images.results.pairs} />
        </Reveal>

        <div className="mt-16 md:mt-20">
          <DrawLine className="w-full max-w-3xl bg-bone-50/15" />
          <Reveal delay={0.05}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest2 text-bone-50/60">
              Região perioral
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-azure-900 ring-1 ring-inset ring-bone-50/15 sm:aspect-[2/1]">
            <Image
              src={images.guia.clinicalProfile.src}
              alt={images.guia.clinicalProfile.alt}
              fill
              className="img-clinical object-cover"
              sizes="90vw"
            />
            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:left-4 md:top-4">
              Antes
            </span>
            <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center bg-azure-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-bone-50 backdrop-blur-sm md:right-4 md:top-4">
              Depois
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
