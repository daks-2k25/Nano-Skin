/**
 * Copy do protótipo — adaptado a partir das fontes oficiais NanoSkinBio
 * (nanoskinbio.com, nanoskinbiobrasil.com.br, Instagram @nanoskinbiobrasil).
 * Reescrito para composição editorial, não copiado literalmente.
 * Nenhum número, claim ou dado foi inventado — tudo tem origem nas fontes oficiais.
 */

export const nav = [
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "NanoSkinBio", href: "#sobre" },
  { label: "Protocolos", href: "#protocolos" },
] as const;

export const hero = {
  headline: ["O primeiro conceito", "de renovação", "biomimética da pele."],
  support:
    "Nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos bioativos, numa só plataforma biomimética.",
  badges: ["Inovação Suíça", "aprovado pela anvisa"],
  ctaPrimary: "Conhecer a tecnologia",
  ctaSecondary: "Encontrar um protocolo",
};

export const manifesto = {
  eyebrow: "O mecanismo",
  intro:
    "Três estágios biomiméticos, da ativação celular à renovação visível da pele.",
  progression: [
    {
      word: "Ative.",
      caption:
        "Ação biomimética sobre os fibroblastos, ativando a produção de colágeno e elastina.",
      image: "ative",
      focus: "50% 22%",
    },
    {
      word: "Regenere.",
      caption:
        "Inteligência na regeneração natural dos tecidos, com peptídeos de precisão.",
      image: "regenere",
      focus: "62% 28%",
    },
    {
      word: "Evolua.",
      caption:
        "Alcance o futuro com tecnologia de ponta, com segurança, rapidez e naturalidade.",
      image: "evolua",
      focus: "50% 20%",
    },
  ],
};

export const technology = {
  eyebrow: "Tecnologia",
  title: "Três sistemas. Uma inteligência biomimética.",
  intro:
    "A plataforma NanoSkinBio combina três abordagens complementares — desenvolvidas para atuar em profundidades distintas da pele, com a mesma lógica estrutural encontrada na biologia natural.",
  items: [
    {
      index: "01",
      name: "Nano-Hidroxiapatita",
      subtitle: "35nm · CaHA biomimética",
      description:
        "Primeira no mundo com nano-hidroxiapatita de cálcio (CaHA): tecnologia biomimética que atua diretamente sobre os fibroblastos, sinalizando a produção natural de colágeno e elastina.",
    },
    {
      index: "02",
      name: "Ácido Hialurônico",
      subtitle: "Multi-profundidade · 24h",
      description:
        "Distintos pesos moleculares atuando em múltiplas profundidades da pele, para hidratação em camadas — imediata e duradoura.",
    },
    {
      index: "03",
      name: "Peptídeos Bioativos",
      subtitle: "Sequências avançadas",
      description:
        "Sistema bioativo de peptídeos que fornece energia às células e potencializa a regeneração natural, com efeito antienvelhecimento.",
    },
  ],
};

export const results = {
  eyebrow: "Resultados",
  title: "A evidência está na pele.",
  body: "Transformações observadas ao longo dos protocolos profissionais NanoSkinBio, com melhora progressiva da textura, firmeza e qualidade da pele.",
};

export const numbers = {
  eyebrow: "Evidências",
  title: "Precisão que se traduz em números.",
  stats: [
    {
      value: "35",
      unit: "nm",
      label: "Escala da nano-hidroxiapatita biomimética",
    },
    {
      value: "24",
      unit: "h",
      label: "Hidratação sustentada em multi-profundidade",
    },
    { value: "21", unit: "dias", label: "Para o resultado pleno" },
    { value: "18", unit: "meses", label: "De resultado sustentado" },
  ],
};

export const about = {
  eyebrow: "NanoSkinBio",
  title: "Conceito Suiço. Ciência, precisão e padrão de luxo.",
  body: "Desenvolvida em Zug, na Suíça, a NanoSkinBio segue um padrão globalmente reconhecido — focado em qualidade, eficácia, segurança, rastreabilidade e prestígio regulatório.",
  points: [
    "Conceito suíço (Swiss Concept)",
    "Primeira no mundo com nano-hidroxiapatita de cálcio (CaHA)",
    "Tecnologia não injetável e não inflamatória",
    "Peptídeos Bioativos",
    "Ácido Hialurônico Multiprofundidades",
    "tecnologia biomimética",
  ],
};

export const patients = {
  eyebrow: "Para pacientes",
  title: "Firmeza natural, sem parecer preenchida.",
  body: "Indicada até para áreas delicadas — ao redor dos olhos, boca e têmporas — a tecnologia NanoSkinBio promove firmeza sem alterar a expressão facial ou a estrutura natural dos tecidos.",
};

export const protocols = {
  eyebrow: "Protocolo",
  title: "Uma formulação. Precisão biomimética absoluta.",
  intro:
    "NanoSkinBio MED — concebida para microagulhamento profissional e tratamentos assistidos por laser, com o mesmo padrão médico-suíço em cada aplicação.",
  item: {
    code: "MED",
    name: "NanoSkinBio MED",
    subtitle: "Protocolo médico avançado",
    description:
      "Ativação premium de colágeno e hidratação multicamada, com peptídeos bioativos, para revitalização intensiva e tratamentos clínicos profissionais.",
    features: [
      "Ativação premium de colágeno",
      "Hidratação multicamada",
      "Aplicação de grau médico",
    ],
  },
};

export const finalCta = {
  title: "A ciência mudou. A sua pele merece acompanhar.",
  body: "Avaliação de protocolo profissional NanoSkinBio — para clínicas e especialistas credenciados.",
  cta: "Falar com a NanoSkinBio",
};

export const footer = {
  tagline: "Tecnologia suíça agora no brasil",
  location: "Zug · Suíça",
  columns: [
    {
      title: "Explorar",
      links: ["Tecnologia", "Resultados", "NanoSkinBio", "Protocolos"],
    },
    {
      title: "Conecte-se",
      links: ["Instagram", "Contato"],
    },
  ],
};
