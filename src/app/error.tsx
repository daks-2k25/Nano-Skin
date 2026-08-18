"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center bg-azure-950 pb-24 pt-40">
        <Container className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-azure-300">
            Erro inesperado
          </p>
          <h1 className="mt-6 font-display text-[10vw] font-light leading-[1.05] tracking-tightest text-bone-50 sm:text-[6vw] md:text-[3.5vw]">
            Algo não carregou como deveria.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15px] font-light leading-relaxed text-bone-50/70">
            Tente novamente. Se o problema persistir, volte ao início e refaça a navegação.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full border border-azure-300/45 px-8 py-4 text-[13px] uppercase tracking-[0.18em] text-bone-50 transition-all duration-500 hover:border-azure-300"
            >
              Tentar novamente
            </button>
            <Button href="/" tone="light" variant="ghost">
              Voltar ao início
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
