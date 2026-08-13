import { results } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb, GridTexture } from "@/components/ui/backdrop";
import { ResultsGallery } from "@/components/sections/ResultsGallery";

export function Results() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40"
    >
      <GridTexture color="#729bf0" opacity={0.05} size={60} fade="edges" />
      <GlowOrb
        className="-right-24 top-10"
        color="rgba(114,155,240,0.18)"
        size={460}
        duration={26}
      />
      <GlowOrb
        className="-left-32 bottom-0"
        color="rgba(71,126,235,0.14)"
        size={380}
        duration={22}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow tone="light">{results.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-[9vw] font-light leading-[1.02] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.4vw]">
                {results.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-bone-50/70 md:mt-4">
                {results.body}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.05}>
          <ResultsGallery pairs={images.results.pairs} />
        </Reveal>
      </Container>
    </section>
  );
}
