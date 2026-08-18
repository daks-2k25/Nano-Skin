"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { nav } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { resolveNavHref } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
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
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-500 ease-premium",
            scrolled ? "py-4" : "py-7",
          )}
        >
          <a
            href={resolveNavHref("#top", pathname)}
            className="flex items-center gap-3 font-logo text-[30px] tracking-tight text-bone-50 transition-colors duration-500 md:text-[48px]"
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

          <nav className="hidden items-center gap-10 font-sans text-[12.5px] uppercase tracking-widest2 text-bone-50/80 transition-colors duration-500 xl:flex">
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
            className="hidden border-b border-azure-300/45 pb-1 text-[12px] uppercase tracking-widest2 text-bone-50 transition-all duration-500 hover:border-azure-300 xl:inline-flex"
          >
            Encontrar protocolo
          </a>

          <a
            href={resolveNavHref("#protocolos", pathname)}
            className="inline-flex text-[12px] uppercase tracking-widest2 text-bone-50 transition-colors duration-500 xl:hidden"
          >
            Menu
          </a>
        </div>
      </Container>
    </header>
  );
}
