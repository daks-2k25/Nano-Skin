import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Contraindications() {
  const { contraindications } = guiaPratico;

  return (
    <section className="relative bg-azure-900 py-28 md:py-36">
      <Container>
        <div className="max-w-none">
          <Reveal>
            <Eyebrow tone="light">{contraindications.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-6 max-w-2xl font-display text-[6vw] font-light leading-tight tracking-tightest text-bone-50/85 sm:text-[3.8vw] md:text-[2vw]">
              {contraindications.title}
            </h3>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="mt-10 grid grid-cols-1 gap-x-14 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {contraindications.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15.5px] font-light leading-relaxed text-bone-50/55"
                >
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-bone-50/30" />
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
