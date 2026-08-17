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

/** Assets oficiais NanoSkinBio — produto, campanha, lab e lifestyle. */
export const officialImages = {
  logo: {
    src: "/images/brand/logo-shield.png",
    alt: "Símbolo oficial NanoSkinBio — escudo suíço",
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
  labScientist: {
    src: "/images/professionals/lab-scientist.png",
    alt: "Aplicação profissional em ambiente laboratorial — material oficial NanoSkinBio",
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
          src: "/images/results/pair-1-before.jpg",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-1-after.jpg",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
      {
        before: {
          src: "/images/results/pair-2-before.jpg",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-2-after.jpg",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
      {
        before: {
          src: "/images/results/pair-3-before.jpg",
          alt: "Antes — região periorbital, fotografia clínica NanoSkinBio",
        },
        after: {
          src: "/images/results/pair-3-after.jpg",
          alt: "Depois — região periorbital revitalizada, fotografia clínica NanoSkinBio",
        },
      },
    ],
  },
  about: {
    primary: {
      src: "/images/lifestyle/about-model-v2.png",
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
} as const;
