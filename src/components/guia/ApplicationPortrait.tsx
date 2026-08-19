import Image from "next/image";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";

export function ApplicationPortrait() {
  return (
    <section className="relative overflow-hidden bg-azure-950 py-24 md:py-32">
      <Container className="relative">
        <Reveal>
          <Parallax
            strength={20}
            className="relative mx-auto aspect-[3/4] w-full max-w-3xl overflow-hidden rounded-[24px] bg-azure-900 ring-1 ring-bone-50/10"
          >
            <Image
              src={officialImages.applicationPortrait.src}
              alt={officialImages.applicationPortrait.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 92vw"
            />
          </Parallax>
        </Reveal>
      </Container>
    </section>
  );
}
