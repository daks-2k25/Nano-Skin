/**
 * Registro central de imagens do protótipo.
 *
 * Todas as imagens abaixo são assets oficiais NanoSkinBio — fotografia de
 * produto e lifestyle fornecida pela marca (pasta "IMAGENS FIREFLY 14_04"),
 * mais os assets originais já verificados em nanoskinbiobrasil.com.br.
 * Nenhuma imagem de banco de imagens genérico permanece no protótipo.
 *
 * Os 3 pares de antes/depois em `results` são fotografia clínica real,
 * fornecida e autorizada pela marca — recortados apenas para remover a
 * marca d'água de um estúdio parceiro, sem qualquer alteração de conteúdo.
 */

export type PlaceholderImage = {
  src: string;
  alt: string;
};

/** Vídeo de fundo do Hero — material oficial NanoSkinBio. */
export const heroVideo = {
  src: "/images/video/header-site.mp4",
};

/** Assets oficiais NanoSkinBio — produto, campanha, lab e lifestyle. */
export const officialImages = {
  logo: {
    src: "/images/brand/logo-shield.png",
    alt: "Símbolo oficial NanoSkinBio — escudo suíço",
  },
  awardCatalystFinalist: {
    src: "/images/brand/amwc-2026-catalyst-finalist.png",
    alt: "AMWC 2026 — Catalyst Finalist, categoria Most Disruptive Innovation",
  },
  productGlow: {
    src: "/images/product/tube-glow.png",
    alt: "NanoSkinBio MED — Biomimetic Collagen Activator, 2 tubos de 5ml",
  },
  productBox: {
    src: "/images/product/tube-box.png",
    alt: "Embalagem oficial NanoSkinBio MED",
  },
  productLight: {
    src: "/images/product/tube-light.jpg",
    alt: "NanoSkinBio MED sobre fundo azul claro — fotografia de produto oficial",
  },
  productClean: {
    src: "/images/product/tube-clean.jpg",
    alt: "NanoSkinBio MED, composição de produto — fotografia oficial",
  },
  productTilted: {
    src: "/images/product/tube-tilted.jpg",
    alt: "NanoSkinBio MED em ângulo, fotografia de produto oficial",
  },
  productTray: {
    src: "/images/product/tube-tray.png",
    alt: "NanoSkinBio MED sobre bandeja de embalagem azul-metálica — still de produto oficial",
  },
  labScientist: {
    src: "/images/professionals/lab-scientist.png",
    alt: "Aplicação profissional em ambiente laboratorial — material oficial NanoSkinBio",
  },
  applicationPortrait: {
    src: "/images/professionals/application-portrait.jpg",
    alt: "Profissional aplicando NanoSkinBio MED na região periorbital da paciente",
  },
  campaign: {
    ative: {
      src: "/images/campaign/ative.png",
      alt: "Campanha oficial NanoSkinBio — Ative",
    },
    regenere: {
      src: "/images/campaign/regenere.png",
      alt: "Campanha oficial NanoSkinBio — Regenere",
    },
    evolua: {
      src: "/images/campaign/evolua.png",
      alt: "Campanha oficial NanoSkinBio — Evolua",
    },
  },
} as const;

export const images = {
  technology: {
    hydroxyapatite: {
      src: "/images/lifestyle/technology-hydroxyapatite.jpg",
      alt: "Textura de pele em macro, luz natural — referência à firmeza e densidade estrutural",
    },
    hyaluronic: {
      src: "/images/lifestyle/technology-hyaluronic.jpg",
      alt: "Aplicação de NanoSkinBio MED junto ao rosto — hidratação multi-profundidade",
    },
    peptides: {
      src: "/images/lifestyle/technology-peptides.jpg",
      alt: "Macro editorial de aplicação, referência aos peptídeos biomiméticos",
    },
  },
  results: {
    pairs: [
      {
        before: {
          src: "/images/results/pair-1-before.png",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-1-after.png",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
      {
        before: {
          src: "/images/results/pair-2-before.png",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-2-after.png",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
      {
        before: {
          src: "/images/results/pair-3-before.png",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-3-after.png",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
    ],
  },
  about: {
    primary: {
      src: "/images/lifestyle/about-model-v3.png",
      alt: "NanoSkinBio — fotografia editorial da modelo",
    },
    secondary: {
      src: officialImages.productLight.src,
      alt: officialImages.productLight.alt,
    },
  },
  manifesto: {
    ative: {
      src: "/images/lifestyle/manifesto-ative.jpg",
      alt: "Aplicação de NanoSkinBio MED — estágio Ative, fotografia oficial",
    },
    regenere: {
      src: "/images/lifestyle/manifesto-regenere.jpg",
      alt: "Aplicação de NanoSkinBio MED — estágio Regenere, fotografia oficial",
    },
    evolua: {
      src: "/images/lifestyle/manifesto-evolua.jpg",
      alt: "Aplicação de NanoSkinBio MED — estágio Evolua, fotografia oficial",
    },
  },
  protocols: {
    secondary: {
      src: "/images/lifestyle/protocols-secondary.jpg",
      alt: "NanoSkinBio MED em uso — fotografia editorial oficial",
    },
  },
  finalCta: {
    src: "/images/lifestyle/final-cta.jpg",
    alt: "Encerramento cinematográfico com NanoSkinBio MED — fotografia oficial",
  },
  guia: {
    /**
     * Evidências clínicas do protocolo — alimenta o carrossel da página
     * Guia Prático. Basta adicionar novos itens aqui conforme mais
     * fotografias clínicas forem fornecidas pela marca.
     */
    evidence: [
      {
        src: "/images/guia/clinical-profile.jpg",
        alt: "Antes e depois do protocolo NanoSkinBio, região perioral — fotografia clínica",
        label: "Região perioral",
        objectPosition: "50% 50%",
      },
      {
        src: "/images/antes-depois/perfil-1.jpg",
        alt: "Antes e depois do protocolo NanoSkinBio, perfil facial — fotografia clínica",
        label: "Perfil facial",
        objectPosition: "50% 40%",
      },
      {
        src: "/images/antes-depois/perfil-2.jpg",
        alt: "Antes e depois do protocolo NanoSkinBio, perfil facial — fotografia clínica",
        label: "Perfil facial",
        objectPosition: "50% 40%",
      },
    ],
  },
} as const;
