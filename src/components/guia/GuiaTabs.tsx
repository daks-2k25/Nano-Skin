"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { EASE, useSafeReducedMotion } from "@/components/ui/Reveal";
import { GuiaHero } from "./GuiaHero";
import { DepthGuide } from "./DepthGuide";
import { Safety } from "./Safety";
import { Rationale } from "./Rationale";
import { IntegrationGuide } from "./IntegrationGuide";
import { DeviceCompatibility } from "./DeviceCompatibility";
import { ClinicalSequence } from "./ClinicalSequence";
import { MicroneedlingProtocol } from "./MicroneedlingProtocol";
import { AnesthesiaGuide } from "./AnesthesiaGuide";
import { Aftercare } from "./Aftercare";
import { Contraindications } from "./Contraindications";
import { GuiaResults } from "./GuiaResults";

const tabs = [
  { id: "guia", label: "Guia Prático" },
  { id: "microagulhamento", label: "Microagulhamento" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function GuiaTabs() {
  const [active, setActive] = useState<TabId>("guia");
  const reduceMotion = useSafeReducedMotion();
  const topRef = useRef<HTMLDivElement>(null);

  // Ao trocar de aba, volta o topo da aba para a viewport — sem isso, a
  // posição de scroll herdada da aba anterior podia cair no meio do
  // conteúdo novo (abas têm alturas diferentes), fazendo o whileInView
  // disparar quase tudo de uma vez e a seção parecer "já carregada" em
  // vez de revelar progressivamente enquanto o usuário rola.
  function handleTabClick(id: TabId) {
    if (id === active) return;
    setActive(id);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div ref={topRef} className="relative overflow-hidden bg-azure-950 pb-4 pt-40 md:pt-48">
        <Container>
          <div
            role="tablist"
            aria-label="Seções do Guia Prático"
            className="inline-flex items-center gap-1 rounded-full border border-bone-50/15 bg-bone-50/[0.03] p-1 backdrop-blur-sm"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={clsx(
                  "relative whitespace-nowrap rounded-full px-3.5 py-2 text-[10px] uppercase tracking-wide transition-colors duration-300 sm:px-6 sm:py-2.5 sm:text-[12px] sm:tracking-widest2",
                  active === tab.id ? "text-ink-900" : "text-bone-50/55 hover:text-bone-50",
                )}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="guia-tab-pill"
                    className="absolute inset-0 rounded-full bg-bone-50 shadow-[0_2px_10px_rgba(5,15,48,0.25)]"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </Container>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
        >
          {active === "guia" ? (
            <>
              <Rationale />
              <IntegrationGuide />
              <DeviceCompatibility />
              <ClinicalSequence />
              <MicroneedlingProtocol />
              <AnesthesiaGuide />
              <Aftercare />
              <Contraindications />
              <GuiaResults />
            </>
          ) : (
            <>
              <GuiaHero />
              <DepthGuide />
              <Safety />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
