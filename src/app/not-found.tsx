import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center bg-azure-950 pb-24 pt-40">
        <Container className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">404</p>
          <h1 className="mt-6 font-display text-[10vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.5vw]">
            Página não encontrada.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15px] font-light leading-relaxed text-bone-50/70">
            O conteúdo que você procura não existe ou foi movido.
          </p>
          <Button href="/" tone="light" variant="secondary" className="mt-10">
            Voltar ao início
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
