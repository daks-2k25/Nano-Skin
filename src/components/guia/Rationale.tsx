import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

export function Rationale() {
  return (
    <section className="relative overflow-hidden bg-azure-950 py-32 md:py-44">
      <GlowOrb className="-left-40 top-10" color="rgba(114,155,240,0.18)" size={460} duration={26} />
      <ArcLine className="-bottom-48 -right-48 h-[520px] w-[520px]" color="#729bf0" opacity={0.14} />

      <Container className="relative">
        <div className="max-w-6xl border-l border-azure-300/30 pl-6 md:pl-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
              Fundamento clínico
            </p>
          </Reveal>
          <TextReveal
            as="p"
            text={guiaPratico.rationale}
            delay={0.12}
            lineDelay={0.12}
            className="mt-4 font-sans text-[6.4vw] font-light italic leading-relaxed tracking-tightest text-bone-50/90 sm:text-[4vw] md:text-[2.1vw]"
          />
        </div>
      </Container>
    </section>
  );
}
