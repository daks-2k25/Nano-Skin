import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contato | NanoSkinBio",
  description:
    "Fale com a NanoSkinBio: preencha seus dados ou utilize nossos canais diretos de atendimento.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
