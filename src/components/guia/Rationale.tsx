import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

export function Rationale() {
  return (
    <section className="relative bg-azure-950 py-32 md:py-44">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mx-auto mb-8 block h-px w-10 bg-azure-400" />
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
              Fundamento clínico
            </p>
          </Reveal>
          <TextReveal
            as="p"
            text={guiaPratico.rationale}
            delay={0.12}
            lineDelay={0.12}
            className="mt-8 font-display text-[6.4vw] font-light italic leading-[1.3] tracking-tightest text-bone-50/90 sm:text-[4vw] md:text-[2.1vw]"
          />
        </div>
      </Container>
    </section>
  );
}
