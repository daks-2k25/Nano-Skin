import Image from "next/image";
import { manifesto } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

const campaignImages = {
  ative: images.manifesto.ative,
  regenere: images.manifesto.regenere,
  evolua: images.manifesto.evolua,
} as const;

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 via-azure-900 to-azure-950 py-32 md:py-40">
      <GlowOrb
        className="-right-40 top-0"
        color="rgba(114,155,240,0.20)"
        size={520}
        duration={28}
      />
      <ArcLine
        className="-bottom-56 -left-56 h-[620px] w-[620px]"
        color="#729bf0"
        opacity={0.16}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{manifesto.eyebrow}</Eyebrow>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-[15px] font-light leading-relaxed text-bone-50/70">
                {manifesto.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          <span className="pointer-events-none absolute inset-x-0 top-[38%] hidden h-px bg-bone-50/15 md:block" />

          {manifesto.progression.map((stage, i) => (
            <Reveal key={stage.word} delay={0.08 * i}>
              <div className="relative">
                <span className="mb-6 block font-mono text-[11px] text-azure-300">
                  0{i + 1}
                </span>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-azure-900 md:max-w-none">
                  <Image
                    src={campaignImages[stage.image as keyof typeof campaignImages].src}
                    alt={campaignImages[stage.image as keyof typeof campaignImages].alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: stage.focus }}
                    sizes="(min-width: 768px) 30vw, 80vw"
                  />
                </div>
                <p className="mt-6 font-display text-[9vw] font-light italic leading-none tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.6vw]">
                  {stage.word}
                </p>
                <p className="mt-4 max-w-xs text-[13.5px] font-light leading-relaxed text-bone-50/65">
                  {stage.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
