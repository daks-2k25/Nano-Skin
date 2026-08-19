import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GridTexture } from "@/components/ui/backdrop";

export function AnesthesiaGuide() {
  const { integration: g } = guiaPratico;
  const { anesthesia } = g;

  return (
    <section className="relative overflow-hidden bg-[#0c2869] py-32 text-bone-50 md:py-40">
      <GridTexture color="#6f9bea" opacity={0.05} size={68} fade="edges" />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{anesthesia.eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          text={anesthesia.title}
          delay={0.1}
          className="mt-7 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.8vw]"
        />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-[15.5px] font-light leading-relaxed text-bone-50/65">
            {anesthesia.intro}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col border-t border-bone-50/12 md:mt-14">
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-2 border-b border-bone-50/12 py-6 sm:flex-row sm:gap-8">
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-[#3fae74] sm:w-44 sm:shrink-0">
                Preferencial
              </p>
              <p className="text-[13.5px] font-light leading-relaxed text-bone-50/80">
                {anesthesia.preferred}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-2 border-b border-bone-50/12 py-6 sm:flex-row sm:gap-8">
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-bone-50/60 sm:w-44 sm:shrink-0">
                Alternativa
              </p>
              <p className="text-[13.5px] font-light leading-relaxed text-bone-50/80">
                {anesthesia.alternative}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-2 border-b border-bone-50/12 py-6 sm:flex-row sm:gap-8">
              <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-[#ef767b] sm:w-44 sm:shrink-0">
                Evitar
              </p>
              <p className="text-[13.5px] font-light leading-relaxed text-bone-50/80">
                {anesthesia.avoid}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
