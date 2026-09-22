"use client";

import { useEffect } from "react";
import Script from "next/script";
import { contact } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowOrb, ArcLine } from "@/components/ui/backdrop";

const TALLY_EMBED_SRC =
  "https://tally.so/embed/b5aRO1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_WIDGET_SRC = "https://tally.so/widgets/embed.js";

type TallyWindow = Window & {
  Tally?: { loadEmbeds: () => void };
};

function loadTallyEmbeds() {
  const tally = (window as TallyWindow).Tally;
  if (tally) {
    tally.loadEmbeds();
    return;
  }

  document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach((frame) => {
    if (frame.dataset.tallySrc) frame.src = frame.dataset.tallySrc;
  });
}

export function Contact() {
  useEffect(() => {
    (window as TallyWindow).Tally?.loadEmbeds();
  }, []);

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-azure-900 pb-32 pt-40 md:pb-44 md:pt-48"
    >
      <GlowOrb
        className="-right-40 -top-32"
        color="rgba(169,194,247,0.16)"
        size={460}
        duration={28}
      />
      <ArcLine
        className="-bottom-48 -left-40 h-[520px] w-[520px]"
        color="#729bf0"
        opacity={0.12}
      />

      <Container className="relative">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <Eyebrow tone="light">{contact.eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            text={contact.title}
            delay={0.1}
            className="mt-7 font-display text-[9vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.4vw]"
          />
          <Reveal as="p" delay={0.22} className="mt-7 text-[15px] font-light leading-relaxed text-bone-50/70">
            {contact.body}
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-2xl md:mt-16">
          <Reveal delay={0.18}>
            <div className="overflow-hidden rounded-[20px] bg-white p-6 md:p-8">
              <iframe
                data-tally-src={TALLY_EMBED_SRC}
                loading="lazy"
                width="100%"
                height={484}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Preencha seus dados e nossa equipe entrará em contato para entender sua necessidade e orientar você da melhor forma."
                className="w-full bg-white"
              />
            </div>
            <Script src={TALLY_WIDGET_SRC} strategy="lazyOnload" onLoad={loadTallyEmbeds} onError={loadTallyEmbeds} />
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <div className="mx-auto mt-20 max-w-3xl border-t border-bone-50/12 pt-12 md:mt-24">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              {contact.channels.map((channel, i) => (
                <li key={`${channel.label}-${channel.value}-${i}`} className="flex min-w-0 flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/45">
                    {channel.label}
                  </span>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="break-words text-[13.5px] font-light text-bone-50 transition-colors duration-300 hover:text-azure-300"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
