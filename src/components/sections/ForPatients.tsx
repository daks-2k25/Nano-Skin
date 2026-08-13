import Image from "next/image";
import { patients } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { GlowOrb } from "@/components/ui/backdrop";

export function ForPatients() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 via-azure-900 to-azure-950 py-32 md:py-40">
      <GlowOrb
        className="-right-28 top-1/3"
        color="rgba(71,126,235,0.18)"
        size={440}
        duration={27}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 pb-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow tone="light">{patients.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-[9vw] font-light leading-[1.04] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.4vw]">
                {patients.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-bone-50/70 md:mt-4">
                {patients.body}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] bg-azure-700 p-3 md:p-4">
            <Parallax
              strength={22}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] md:aspect-[21/9]"
            >
              <Image
                src={images.patients.src}
                alt={images.patients.alt}
                fill
                className="object-cover object-[38%_20%]"
                sizes="100vw"
              />
            </Parallax>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
