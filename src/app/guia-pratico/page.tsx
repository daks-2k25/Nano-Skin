import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { Rationale } from "@/components/guia/Rationale";
import { Indications } from "@/components/guia/Indications";
import { Dosage } from "@/components/guia/Dosage";
import { Aftercare } from "@/components/guia/Aftercare";
import { Contraindications } from "@/components/guia/Contraindications";
import { GuiaResults } from "@/components/guia/GuiaResults";

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
        <Rationale />
        <Indications />
        <Contraindications />
        <Dosage />
        <Aftercare />
        <GuiaResults />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
