import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { DrawLine, GlowOrb, GridTexture } from "@/components/ui/backdrop";
import { EvidenceCarousel } from "@/components/guia/EvidenceCarousel";

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

        <div className="mt-16 md:mt-20">
          <DrawLine className="mx-auto w-full max-w-6xl bg-bone-50/15" />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <EvidenceCarousel slides={images.guia.evidence} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
