"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { footer, nav } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { resolveNavHref } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

// Rótulos de "footer.columns" que não são âncoras internas de navegação —
// e-mail, redes sociais, telefone e WhatsApp têm destino fixo, então saem
// direto daqui em vez de caírem no fallback de navegação (que os jogava
// para "#top" por não baterem com nenhum item de `nav`).
const EXTERNAL_LINKS: Record<string, { href: string; external?: boolean }> = {
  Contato: { href: "mailto:contato@nanoskinbiobrasil.com.br" },
  Instagram: { href: "https://www.instagram.com/nanoskinbiobrasil/", external: true },
  "41 3057-8800": { href: "tel:+554130578800" },
  "41 3206-8654": { href: "tel:+554132068654" },
  "WhatsApp · Vendas e distribuidores": {
    href: "https://wa.me/5511925675536",
    external: true,
  },
  "Seja um distribuidor": { href: "https://wa.me/5511925675536", external: true },
  "nanoskinbiobrasil.com.br": {
    href: "https://www.nanoskinbiobrasil.com.br/",
    external: true,
  },
};

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="relative bg-azure-950 pb-10 pt-24 text-bone-50">
      <Container>
        <div className="grid grid-cols-1 gap-14 border-b border-bone-50/12 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href={resolveNavHref("#top", pathname)}
              className="flex items-center gap-3 font-logo text-[56px] tracking-tight text-bone-50"
            >
              <Image
                src={officialImages.logo.src}
                alt={officialImages.logo.alt}
                width={40}
                height={40}
                className="w-auto"
              />
              NanoSkinBio
            </a>
            <span className="mt-4 block h-px w-10 bg-azure-400" />
            <p className="mt-4 max-w-xs font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
              {footer.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <Image
              src={officialImages.awardCatalystFinalist.src}
              alt={officialImages.awardCatalystFinalist.alt}
              width={120}
              height={120}
              className="mt-8 h-24 w-24"
            />
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:col-start-7 md:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
                  {col.title}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => {
                    const special = EXTERNAL_LINKS[link];
                    const href = special
                      ? special.href
                      : resolveNavHref(
                          nav.find((n) => n.label === link)?.href ??
                            (link.startsWith("NanoSkinBio")
                              ? "#protocolos"
                              : "#top"),
                          pathname,
                        );

                    return (
                      <li key={link}>
                        <a
                          href={href}
                          {...(special?.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-[13.5px] font-light text-bone-50/75 transition-colors duration-300 hover:text-azure-300"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[11.5px] font-light text-bone-50/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2">
          <p>
            &copy; {new Date().getFullYear()} NanoSkinBio. - Todos os direitos
            reservados
          </p>
          <p>Nano-hidroxiapatita · Ácido hialurônico · Peptídeos bioativos</p>
          <p>{footer.importer}</p>
        </div>
      </Container>
    </footer>
  );
}
