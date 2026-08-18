import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { GuiaHero } from "@/components/guia/GuiaHero";
import { DepthGuide } from "@/components/guia/DepthGuide";
import { Safety } from "@/components/guia/Safety";
import { ClinicalSequence } from "@/components/guia/ClinicalSequence";
import { MicroneedlingProtocol } from "@/components/guia/MicroneedlingProtocol";
import { IntegrationGuide } from "@/components/guia/IntegrationGuide";
import { Rationale } from "@/components/guia/Rationale";
import { GuiaResults } from "@/components/guia/GuiaResults";
import { Aftercare } from "@/components/guia/Aftercare";
import { Contraindications } from "@/components/guia/Contraindications";

export const metadata: Metadata = {
  title: "Guia Prático — Diretrizes de Profundidade | NanoSkinBio",
  description:
    "Orientação clínica abrangente para protocolos individualizados de microagulhamento com NanoSkinBio, por área anatômica, tipo de pele e indicação clínica.",
};

export default function GuiaPraticoPage() {
  return (
    <>
      <Header />
      <main>
        <GuiaHero />
        <DepthGuide />
        <Safety />
        <ClinicalSequence />
        <MicroneedlingProtocol />
        <IntegrationGuide />
        <Rationale />
        <GuiaResults />
        <Aftercare />
        <Contraindications />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
