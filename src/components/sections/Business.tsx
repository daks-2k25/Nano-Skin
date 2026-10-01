import { business } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GridTexture } from "@/components/ui/backdrop";

export function Business() {
  return (
    <section
      id="negocio"
      className="relative overflow-hidden border-t border-bone-50/10 bg-azure-900 py-24 md:py-32"
    >
      <GridTexture color="#a9c2f7" opacity={0.04} size={64} fade="edges" />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{business.eyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-6">
          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] font-light leading-[1.02] tracking-tightest text-bone-50 sm:text-[7vw] md:text-[3.6vw]">
                {business.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.15}>
              <p className="text-[16px] font-light leading-relaxed text-bone-50/75">
                {business.body}
              </p>
              <p className="mt-6 border-l border-azure-300/60 pl-4 font-mono text-[11px] uppercase leading-relaxed tracking-widest2 text-azure-300">
                {business.note}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <Button
                  href="https://wa.me/5511925675536"
                  target="_blank"
                  rel="noopener noreferrer"
                  tone="light"
                  variant="primary"
                >
                  {business.cta}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
