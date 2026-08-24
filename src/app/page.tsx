import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Technology } from "@/components/sections/Technology";
import { Results } from "@/components/sections/Results";
import { Numbers } from "@/components/sections/Numbers";
import { About } from "@/components/sections/About";
import { Recognition } from "@/components/sections/Recognition";
import { Protocols } from "@/components/sections/Protocols";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Technology />
        <Results />
        <Numbers />
        <About />
        <Recognition />
        <Protocols />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
