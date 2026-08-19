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
  { label: "Guia Prático", href: "/guia-pratico" },
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
  body: "Desenvolvida em Zug, na Suíça, a NanoSkinBio segue um padrão globalmente reconhecido, focado em qualidade, eficácia, segurança, rastreabilidade e prestígio regulatório.",
  points: [
    "Conceito suíço (Swiss Concept)",
    "Primeira no mundo com nano-hidroxiapatita de cálcio (CaHA)",
    "Tecnologia não injetável e não inflamatória",
    "Peptídeos Bioativos",
    "Ácido Hialurônico Multi-profundidade",
    "Tecnologia Biomimética",
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
    "O NanoSkinBio® foi concebido para interagir com o tecido dérmico através de um mecanismo biomimético e não inflamatório, apoiando a ativação de fibroblastos e a produção de colágeno.",
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
  tagline: ["Tecnologia suíça", "agora no Brasil"],
  columns: [
    {
      title: "Explorar",
      links: ["Tecnologia", "Resultados", "NanoSkinBio", "Protocolos", "Guia Prático"],
    },
    {
      title: "Conecte-se",
      links: ["Instagram", "Contato"],
    },
  ],
};

/**
 * Conteúdo da página /guia-pratico — extraído e adaptado da página oficial
 * "Guia Prático" em nanoskinbiobrasil.com.br. Dados clínicos (profundidades,
 * indicações, contraindicações) preservados fielmente; apenas a composição
 * editorial (títulos de seção, eyebrows) foi adaptada ao tom do protótipo.
 */
export const guiaPratico = {
  rationale:
    "O NanoSkinBio® foi concebido para interagir com o tecido dérmico através de um mecanismo biomimético e não inflamatório, apoiando a ativação de fibroblastos e a produção de colágeno.",

  results: {
    eyebrow: "Resultados clínicos",
    title: "A evidência do protocolo.",
    caption: "Antes e depois do protocolo NanoSkinBio®.",
  },

  indications: {
    eyebrow: "Indicações",
    items: [
      {
        title: "Rejuvenescimento e qualidade de pele",
        description:
          "Aumenta a espessura da derme, devolve firmeza e melhora rugas finas, textura e luminosidade.",
      },
      {
        title: "Cicatrizes (acnéicas e cirúrgicas)",
        description:
          "Estímulo dos fibroblastos preenche depressões de dentro para fora e homogeneíza a textura.",
      },
      {
        title: "Melasma e manchas (coadjuvante)",
        description:
          "Fortalece a derme e a barreira e melhora a luminosidade — não é despigmentante direto.",
      },
    ],
  },

  dosage: {
    eyebrow: "Aplicação",
    title: "Quantidade de produto por região",
    intro:
      "Base: 10 ml = 140 gotas (14 gotas/ml). Profundidade a critério do profissional conforme a tecnologia e a espessura da pele.",
    rows: [
      { region: "Full face", volumeMl: 2.5, drops: 35 },
      { region: "Olhos (pálpebras / perioral)", volumeMl: 1.0, drops: 14 },
      { region: "Papada", volumeMl: 1.0, drops: 14 },
      { region: "Pescoço", volumeMl: 1.5, drops: 21 },
      { region: "Papada + pescoço", volumeMl: 2.5, drops: 35 },
      { region: "Colo", volumeMl: 2.5, drops: 35 },
      { region: "Mãos", volumeMl: 1.5, drops: 21 },
      { region: "Protocolo Europa (face + papada + pescoço)", volumeMl: 5.0, drops: 70 },
    ],
  },

  aftercare: {
    eyebrow: "Pós-procedimento",
    title: "Cuidados nas primeiras 24 horas",
    timeline: [
      {
        time: "0–12h",
        description:
          "Não aplicar nenhum outro produto — o NSB fornece bioestimulação, proteção e regeneração completas.",
      },
      {
        time: "12h+",
        description:
          "Retomar os cuidados normais da pele: limpeza suave, hidratação, proteção solar.",
      },
      {
        time: "24h",
        description: "Evitar exposição solar intensa, sauna ou exercício intenso.",
      },
    ],
  },

  contraindications: {
    eyebrow: "Atenção",
    title: "Contraindicações",
    items: [
      "Acne ativa, rosácea ativa, eczema ou dermatite aguda",
      "Infecção cutânea localizada (herpética ou bacteriana)",
      "Lesões malignas suspeitas",
      "Uso recente de isotretinoína oral (menos de 6 meses)",
      "Distúrbios de cicatrização ou coagulopatias",
    ],
  },
};

export const faq = {
  eyebrow: "FAQ",
  title: "Perguntas frequentes",
  items: [
    {
      question: "O que é o NanoSkinBio®?",
      answer:
        "NanoSkinBio® é um ativador de colágeno biomimético avançado baseado em tecnologia de nano-hidroxiapatita, concebido para estimular a produção natural de colágeno respeitando a fisiologia da pele.",
    },
    {
      question: "O que diferencia NanoSkinBio® dos estimuladores tradicionais?",
      answer:
        "Ao contrário dos estimuladores convencionais, NanoSkinBio® utiliza nano-hidroxiapatita biomimética com tamanho e morfologia controlados, permitindo ativação superior de fibroblastos e melhor perfil de segurança.",
    },
    {
      question: "NanoSkinBio® é injetável ou tópico?",
      answer:
        "Atualmente disponível como produto tópico em suas versão profissional: NSB MED para uso médico e estético.",
    },
    {
      question: "NanoSkinBio® é seguro?",
      answer:
        "Sim. NanoSkinBio® demonstrou excelente biocompatibilidade em estudos in vitro, sem citotoxicidade observada em concentrações clinicamente relevantes.",
    },
    {
      question: "Como NanoSkinBio® ativa o colágeno?",
      answer:
        "Ativa fibroblastos através da sua estrutura à nanoescala, mimetizando a fase mineral natural dos tecidos humanos, promovendo neocolagênese e regeneração progressiva.",
    },
    {
      question: "NanoSkinBio® causa tempo de recuperação?",
      answer:
        "Uma das principais vantagens é o perfil de tempo de recuperação mínimo a zero, ideal para pacientes que procuram retorno rápido às atividades.",
    },
    {
      question: "Quem pode usar NanoSkinBio®?",
      answer:
        "Destina-se a médicos, médicos estéticos e profissionais estéticos certificados. A linha Home Care permitirá uso por consumidores sob orientação profissional.",
    },
    {
      question: "Em que indicações pode ser aplicado?",
      answer:
        "Adequado para rejuvenescimento cutâneo, bioativação de colágeno, melhoria da qualidade da pele, regeneração pós-procedimento e melhoria de textura e firmeza.",
    },
    {
      question: "É adequado para áreas sensíveis?",
      answer:
        "Sim. Devido à sua dispersão homogênea e baixo risco de agregação, é particularmente adequado para áreas delicadas como perioculares e periorais.",
    },
    {
      question: "NanoSkinBio® é clinicamente validado?",
      answer:
        "Apoiado por validação biológica in vitro, estudos pré-clínicos e clínicos em curso, e publicações científicas em preparação.",
    },
    {
      question: "Onde foi desenvolvido?",
      answer:
        "Desenvolvido e fabricado com rigorosos padrões de qualidade na Suíça, Europa e EAU, seguindo regulamentações internacionais.",
    },
  ],
};
