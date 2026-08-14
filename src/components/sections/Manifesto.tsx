import Image from "next/image";
import clsx from "clsx";
import { manifesto } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

// Fraunces italic + leading-none deixa a caixa de recorte do gradiente (bg-clip-text)
// mais baixa que a descendente de letras como "g"; pb reserva esse espaço só quando necessário.
const HAS_DESCENDER = /[gjpqy]/;

export function Manifesto() {
  const featured = manifesto.progression[1];

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
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.1}>
              <p className="text-[15px] font-light leading-relaxed text-bone-50/70">
                {manifesto.intro}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Uma fotografia protagonista + a progressão em leitura editorial, sem repetição de imagens */}
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <Parallax
                strength={24}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-azure-900"
              >
                <Image
                  src={images.manifesto.regenere.src}
                  alt={images.manifesto.regenere.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: featured.focus }}
                  sizes="(min-width: 768px) 56vw, 92vw"
                  priority={false}
                />
              </Parallax>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="flex flex-col gap-0 border-t border-bone-50/12">
              {manifesto.progression.map((stage, i) => (
                <Reveal
                  as="li"
                  key={stage.word}
                  delay={0.08 * i}
                  className="border-b border-bone-50/12 py-8 first:pt-0"
                >
                  <span className="font-mono text-[11px] text-azure-300">0{i + 1}</span>
                  <p
                    className={clsx(
                      "mt-3 bg-gradient-to-r from-bone-50 via-azure-200 to-azure-400 bg-clip-text font-display text-[9vw] font-light italic leading-none tracking-tightest text-transparent sm:text-[5vw] md:text-[2.8vw]",
                      HAS_DESCENDER.test(stage.word) && "pb-[0.2em]",
                    )}
                  >
                    {stage.word}
                  </p>
                  <p className="mt-4 max-w-sm text-[13.5px] font-light leading-relaxed text-bone-50/65">
                    {stage.caption}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
