import Image from "next/image";
import { finalCta } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlowOrb, GridTexture, ArcLine } from "@/components/ui/backdrop";

export function FinalCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-b from-azure-800 to-azure-900 py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(114,155,240,0.22),transparent)]" />
      <GridTexture color="#a9c2f7" opacity={0.045} size={64} fade="edges" />
      <GlowOrb
        className="-bottom-32 -right-24"
        color="rgba(169,194,247,0.16)"
        size={480}
        duration={26}
      />
      <ArcLine
        className="-left-48 -top-48 h-[560px] w-[560px]"
        color="#729bf0"
        opacity={0.14}
      />

      <Container className="relative">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-bone-50/15 sm:aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={images.finalCta.src}
              alt={images.finalCta.alt}
              fill
              className="object-cover object-[50%_18%]"
              sizes="100vw"
            />
          </div>
        </Reveal>

        <div className="mx-auto max-w-2xl pt-16 text-center md:pt-20">
          <Reveal>
            <span className="mx-auto mb-7 block h-px w-10 bg-azure-300" />
            <h2 className="font-display text-[10vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[7vw] md:text-[3.6vw]">
              {finalCta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-md text-[15px] font-light leading-relaxed text-bone-50/70">
              {finalCta.body}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex justify-center">
              <Button href="mailto:contato@nanoskinbio.com" tone="light" variant="primary">
                {finalCta.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
