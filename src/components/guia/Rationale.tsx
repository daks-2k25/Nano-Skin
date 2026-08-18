import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

export function Rationale() {
  return (
    <section className="relative bg-azure-950 py-32 md:py-44">
      <Container>
        {/* Quadro único com degradê azul — mesmo padrão da seção "Evidências":
            o degradê é o fundo do quadro, não da seção. */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-azure-300/15 bg-gradient-to-br from-azure-900 to-azure-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-azure-300/60 to-transparent"
            />

            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto mb-8 block h-px w-10 bg-azure-400" />
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                Fundamento clínico
              </p>
              <TextReveal
                as="p"
                text={guiaPratico.rationale}
                delay={0.12}
                lineDelay={0.12}
                className="mt-8 font-sans text-[6.4vw] font-light italic leading-[1.3] tracking-tightest text-bone-50/90 sm:text-[4vw] md:text-[2.1vw]"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
