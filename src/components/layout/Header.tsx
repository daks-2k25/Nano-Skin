"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { resolveNavHref } from "@/lib/nav";
import { EASE, useSafeReducedMotion } from "@/components/ui/Reveal";

const headerShell = "mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useSafeReducedMotion();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 220);
      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile sempre que a rota mudar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fecha o menu mobile se a viewport crescer até o breakpoint desktop (2xl).
  // 2xl (1536px) em vez de xl (1280px): com 6 itens de navegação + CTA, o
  // header não cabe com espaçamento adequado abaixo de ~1536px — abaixo
  // disso o menu mobile assume mesmo em telas "desktop" menores.
  useEffect(() => {
    if (!open) return;
    const mql = window.matchMedia("(min-width: 1536px)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [open]);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Esc fecha o menu e devolve o foco ao botão; Tab fica preso no painel
  // enquanto ele está aberto (foco não escapa para o conteúdo atrás dele).
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;

    const focusables = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
      : [];
    focusables[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "border-b border-bone-50/10 bg-azure-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className={headerShell}>
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-500 ease-premium",
            scrolled ? "py-4" : "py-7",
          )}
        >
          <a
            href={resolveNavHref("#top", pathname)}
            className="flex items-center gap-3 font-logo text-[30px] tracking-tight text-bone-50 transition-colors duration-500 md:text-[48px] 2xl:text-[40px]"
          >
            <Image
              src={officialImages.logo.src}
              alt={officialImages.logo.alt}
              width={56}
              height={56}
              className="h-11 w-auto shrink-0 md:h-14"
            />
            NanoSkinBio
          </a>

          <nav className="hidden items-center gap-7 font-sans text-[12.5px] uppercase tracking-widest2 text-bone-50/80 transition-colors duration-500 2xl:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={resolveNavHref(item.href, pathname)}
                className="relative transition-colors duration-300 hover:text-azure-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={resolveNavHref("#protocolos", pathname)}
            className="hidden border-b border-azure-300/45 pb-1 text-[12px] uppercase tracking-widest2 text-bone-50 transition-all duration-500 hover:border-azure-300 2xl:inline-flex"
          >
            Encontrar protocolo
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            className="relative inline-flex h-9 w-9 items-center justify-center text-bone-50 transition-colors duration-300 hover:text-azure-300 focus-visible:text-azure-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure-300 2xl:hidden"
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <Menu
              aria-hidden="true"
              strokeWidth={1.5}
              className={clsx(
                "absolute h-5 w-5 transition-opacity duration-300 ease-premium",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <X
              aria-hidden="true"
              strokeWidth={1.5}
              className={clsx(
                "absolute h-5 w-5 transition-opacity duration-300 ease-premium",
                open ? "opacity-100" : "opacity-0",
              )}
            />
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id={menuId}
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                initial={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
                className="fixed inset-0 z-40 overflow-y-auto border-t border-bone-50/10 bg-azure-950/98 backdrop-blur-md 2xl:hidden"
              >
                <div className={headerShell}>
                  <nav aria-label="Navegação mobile" className="flex flex-col pb-10 pt-28">
                    {nav.map((item) => (
                      <a
                        key={item.href}
                        href={resolveNavHref(item.href, pathname)}
                        onClick={() => setOpen(false)}
                        className="border-b border-bone-50/10 py-5 font-sans text-[15px] uppercase tracking-widest2 text-bone-50/85 transition-colors duration-300 first:pt-0 hover:text-azure-300 focus-visible:text-azure-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure-300"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
