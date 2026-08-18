import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Contraindications() {
  const { contraindications } = guiaPratico;

  return (
    <section className="relative bg-azure-900 py-20 md:py-24">
      <Container>
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow tone="light">{contraindications.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-5 font-display text-[5vw] font-light leading-tight tracking-tightest text-bone-50/85 sm:text-[3.2vw] md:text-[1.7vw]">
              {contraindications.title}
            </h3>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="mt-6 flex flex-col gap-2.5">
              {contraindications.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] font-light leading-relaxed text-bone-50/55"
                >
                  <span className="mt-[0.6em] h-px w-3 shrink-0 bg-bone-50/30" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
