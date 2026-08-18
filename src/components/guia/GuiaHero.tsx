import Image from "next/image";
import { guiaPratico } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, GridTexture, HairlineCross } from "@/components/ui/backdrop";

export function GuiaHero() {
  return (
    <section className="relative overflow-hidden bg-azure-950 pb-28 pt-40 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_20%_0%,rgba(71,126,235,0.18),transparent)]" />
      <GridTexture color="#729bf0" opacity={0.05} size={64} fade="edges" />
      <GlowOrb className="-right-32 -top-24" color="rgba(114,155,240,0.18)" size={480} duration={27} />
      <HairlineCross className="left-[10%] top-[22%] hidden lg:block" opacity={0.3} />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">{guiaPratico.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-8">
            <TextReveal
              as="h1"
              text={guiaPratico.title}
              delay={0.1}
              className="font-display text-[10vw] font-light leading-[1.03] tracking-tightest text-bone-50 sm:text-[7vw] md:text-[4.2vw]"
            />
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.24}>
              <p className="text-[14.5px] font-light leading-relaxed text-bone-50/65">
                {guiaPratico.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <Reveal delay={0.34}>
              <div className="max-w-lg border-l border-azure-300/30 pl-6 md:pl-8">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                  Objetivo terapêutico
                </p>
                <p className="mt-4 font-display text-[19px] font-light italic leading-relaxed text-bone-50/85 md:text-[21px]">
                  {guiaPratico.objective}
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={0.4}>
              <div className="overflow-hidden rounded-[20px] bg-bone-50 p-3 md:p-4">
                <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[12px]">
                  <Image
                    src={images.guia.mechanism.src}
                    alt={images.guia.mechanism.alt}
                    fill
                    priority
                    className="object-contain"
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
