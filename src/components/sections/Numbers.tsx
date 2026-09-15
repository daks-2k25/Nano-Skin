import { numbers } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { GridTexture, HairlineCross, ArcLine } from "@/components/ui/backdrop";

export function Numbers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-950 via-azure-900 to-azure-800 py-32 md:py-40">
      <GridTexture color="#729bf0" opacity={0.05} size={56} fade="edges" />
      <ArcLine
        className="-bottom-64 -right-64 h-[680px] w-[680px]"
        color="#a9c2f7"
        opacity={0.16}
      />
      <HairlineCross className="left-[8%] top-[14%] hidden lg:block" opacity={0.3} />
      <HairlineCross className="right-[16%] top-[62%] hidden lg:block" opacity={0.22} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow tone="light">{numbers.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-xl font-display text-[8vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[5vw] md:text-[2.6vw]">
                {numbers.title}
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Grade de cartões técnicos — número e leitura, no mesmo peso visual */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {numbers.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.06 * i}>
              <div className="group relative h-full overflow-hidden rounded-[22px] border border-azure-300/15 bg-gradient-to-b from-azure-800 via-azure-800 to-transparent p-8 transition-colors duration-500 hover:border-azure-300/30">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-azure-300/70 to-transparent"
                />
                <p className="font-sans text-[15vw] font-light leading-none tracking-tightest text-transparent [-webkit-text-stroke:0.5px_rgba(169,194,247,0.5)] bg-gradient-to-b from-bone-50 to-azure-300 bg-clip-text sm:text-[9vw] md:text-[4.4vw] lg:text-[3vw]">
                  {stat.value}
                  <span className="ml-1.5 text-[0.4em] tracking-normal text-azure-300 [-webkit-text-stroke:0px]">
                    {stat.unit}
                  </span>
                </p>

                <p className="mt-7 max-w-[26ch] text-[14.5px] font-light leading-relaxed text-bone-50/70">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[11.5px] font-light text-bone-50/40">
            {numbers.disclaimer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
