import Image from "next/image";
import clsx from "clsx";
import { technology } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb, GridTexture, HairlineCross, CornerFrame } from "@/components/ui/backdrop";

const visuals = [
  images.technology.hydroxyapatite,
  images.technology.hyaluronic,
  images.technology.peptides,
];

export function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-950 py-32 text-bone-50 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_100%,rgba(114,155,240,0.28),transparent)]" />
      <GridTexture color="#6f9bea" opacity={0.05} size={68} fade="edges" />
      <GlowOrb
        className="-right-32 top-1/4"
        color="rgba(169,194,247,0.14)"
        size={420}
        duration={30}
      />
      <HairlineCross className="left-[6%] top-[14%] hidden lg:block" opacity={0.25} />
      <HairlineCross className="right-[8%] top-[62%] hidden lg:block" opacity={0.2} />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 border-b border-bone-50/10 pb-16 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{technology.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-[9vw] font-light leading-[1.02] tracking-tightest sm:text-[6vw] md:text-[3.2vw]">
                {technology.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-bone-50/65 md:mt-4">
                {technology.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div>
          {technology.items.map((item, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <Reveal key={item.index} delay={0.05 * i}>
                <div
                  className={clsx(
                    "grid grid-cols-1 items-center gap-8 border-b border-bone-50/10 py-14 md:grid-cols-12 md:gap-8"
                  )}
                >
                  <div
                    className={clsx(
                      "md:col-span-7",
                      imageFirst ? "md:order-2" : "md:order-1"
                    )}
                  >
                    <div className="flex items-start gap-6 md:gap-10">
                      <span className="font-display text-[15px] font-light italic text-azure-300">
                        {item.index}
                      </span>
                      <div>
                        <h3 className="font-display text-[7vw] font-light leading-none tracking-tightest sm:text-[4vw] md:text-7xl">
                          {item.name}
                        </h3>
                        <p className="mt-3 font-mono text-[16px] uppercase tracking-widest2 text-azure-300">
                          {item.subtitle}
                        </p>
                        <p className="mt-5 max-w-md text-[22px] font-light leading-relaxed text-bone-50/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "md:col-span-4",
                      imageFirst ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-9",
                      i % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
                    )}
                  >
                    <div className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-none">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={visuals[i].src}
                          alt={visuals[i].alt}
                          fill
                          className="img-editorial object-cover"
                          sizes="(min-width: 768px) 30vw, 80vw"
                        />
                      </div>
                      <CornerFrame
                        className="-inset-2"
                        color="border-azure-300/50"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
