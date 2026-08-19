import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { GuiaTabs } from "@/components/guia/GuiaTabs";

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
        <GuiaTabs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
