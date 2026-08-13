import Image from "next/image";
import { footer, nav } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-azure-950 pb-10 pt-24 text-bone-50">
      <Container>
        <div className="grid grid-cols-1 gap-14 border-b border-bone-50/12 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3 font-display text-[26px] tracking-tight text-bone-50">
              <Image
                src={officialImages.logo.src}
                alt={officialImages.logo.alt}
                width={22}
                height={30}
                className="h-8 w-auto"
              />
              NanoSkin<span className="font-display-italic">Bio</span>
            </a>
            <span className="mt-4 block h-px w-10 bg-azure-400" />
            <p className="mt-4 max-w-xs font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
              {footer.tagline}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
              {footer.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:col-start-7">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/50">
                  {col.title}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={
                          nav.find((n) => n.label === link)?.href ??
                          (link.startsWith("NanoSkinBio") ? "#protocolos" : "#top")
                        }
                        className="text-[13.5px] font-light text-bone-50/75 transition-colors duration-300 hover:text-azure-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[11.5px] font-light text-bone-50/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NanoSkinBio. Protótipo visual — não representa o site oficial.</p>
          <p>Nano-hidroxiapatita · Ácido hialurônico · Peptídeos bioativos</p>
        </div>
      </Container>
    </footer>
  );
}
