import Image from "next/image";
import { protocols } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlowOrb, GridTexture } from "@/components/ui/backdrop";

export function Protocols() {
  const item = protocols.item;

  return (
    <section id="protocolos" className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <GlowOrb
        className="-bottom-40 left-1/3"
        color="rgba(114,155,240,0.16)"
        size={500}
        duration={29}
      />
      <Container className="mb-16 md:mb-20">
        <Reveal>
          <Eyebrow tone="light">{protocols.eyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="max-w-xl font-display text-[9vw] font-light leading-[1.02] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.4vw]">
                {protocols.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <p className="text-[14.5px] font-light leading-relaxed text-bone-50/70 md:pt-2">
                {protocols.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="relative md:col-span-6 md:col-start-8 md:order-2">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-azure-950 ring-1 ring-bone-50/10">
                <Image
                  src={officialImages.productBox.src}
                  alt={officialImages.productBox.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 90vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative md:col-span-6 md:order-1 md:pt-4">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-10 select-none font-display text-[9rem] font-light leading-none tracking-tightest text-transparent [-webkit-text-stroke:1px_rgba(169,194,247,0.16)] sm:text-[11rem] md:-top-16 md:text-[13rem]"
            >
              {item.code}
            </span>
            <GridTexture
              className="pointer-events-none -left-6 top-0 hidden h-40 w-40 md:block"
              color="#729bf0"
              opacity={0.06}
              size={36}
              fade="edges"
            />

            <div className="relative">
              <Reveal>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-azure-300" />
                  {item.subtitle}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 font-display text-[11vw] font-light leading-none tracking-tightest text-bone-50 sm:text-[7vw] md:text-[3.6vw]">
                  {item.name}
                </h3>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-bone-50/70">
                  {item.description}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-8 flex flex-col gap-0 border-t border-bone-50/12">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 border-b border-bone-50/12 py-4 text-[13.5px] font-light text-bone-50"
                    >
                      <span className="h-px w-5 bg-azure-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="mt-10">
                  <Button href="#cta" variant="primary" tone="light">
                    Ver protocolo
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
