import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
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

const cordiaNew = localFont({
  src: "../../public/images/fonts/cordia-new-4.ttf",
  variable: "--font-logo",
  display: "swap",
});

const siteUrl = "https://www.nanoskinbiobrasil.com.br";
const siteTitle = "NanoSkinBio — Biomimetic Skin Technology";
const siteDescription =
  "Uma nova geração de tecnologia biomimética para a pele: nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos biomiméticos.";
const ogImage = "/images/og/og-default.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "NanoSkinBio",
    "nano-hidroxiapatita",
    "ácido hialurônico multi-profundidade",
    "peptídeos biomiméticos",
    "tecnologia biomimética para a pele",
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName: "NanoSkinBio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} ${cordiaNew.variable} bg-azure-950 font-sans text-ink-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
