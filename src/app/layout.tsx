import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NanoSkinBio — Biomimetic Skin Technology",
  description:
    "Uma nova geração de tecnologia biomimética para a pele: nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos biomiméticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} bg-azure-950 font-sans text-ink-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
