"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { nav } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

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

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "border-b border-bone-50/10 bg-azure-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-500 ease-premium",
            scrolled ? "py-4" : "py-7"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-[19px] tracking-tight text-bone-50 transition-colors duration-500"
          >
            <Image
              src={officialImages.logo.src}
              alt={officialImages.logo.alt}
              width={18}
              height={24}
              className="h-6 w-auto"
            />
            NanoSkin<span className="font-display-italic">Bio</span>
          </a>

          <nav className="hidden items-center gap-10 font-sans text-[12.5px] uppercase tracking-widest2 text-bone-50/80 transition-colors duration-500 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors duration-300 hover:text-azure-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#protocolos"
            className="hidden border-b border-azure-300/45 pb-1 text-[12px] uppercase tracking-widest2 text-bone-50 transition-all duration-500 hover:border-azure-300 md:inline-flex"
          >
            Encontrar protocolo
          </a>

          <a
            href="#protocolos"
            className="inline-flex text-[12px] uppercase tracking-widest2 text-bone-50 transition-colors duration-500 md:hidden"
          >
            Menu
          </a>
        </div>
      </Container>
    </header>
  );
}
