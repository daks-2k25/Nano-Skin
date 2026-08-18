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
  eyebrow: "Guia Prático",
  title: "Diretrizes de profundidade para microagulhamento.",
  subtitle:
    "Aplicação pós-procedimento de NanoSkinBio — orientação clínica abrangente para protocolos individualizados de microagulhamento, com base nas características da pele, área anatômica e indicação clínica.",
  objective:
    "Criar microcanais controlados que alcancem a interface epidérmica-dérmica, permitindo a entrega transdérmica eficaz e a interação biológica das partículas biomiméticas com os fibroblastos dérmicos.",

  facialAreas: {
    eyebrow: "Profundidade · Áreas gerais",
    title: "Áreas faciais gerais",
    intro: "Classificação por tipo de pele.",
    rows: [
      {
        label: "Pele fina / delicada",
        depth: "1.0 – 1.25 mm",
        indication: "Pacientes mais jovens, baixo fotoenvelhecimento",
      },
      {
        label: "Pele média",
        depth: "1.5 mm",
        indication: "Equilíbrio ideal entre eficácia e segurança",
      },
      {
        label: "Pele espessa, fibrótica ou fotoenvelhecida",
        depth: "2.0 – 2.5 mm",
        indication: "Apenas quando clinicamente justificado",
      },
    ],
  },

  periorbital: {
    eyebrow: "Profundidade · Região periorbital",
    title: "Região periorbital",
    note: "Devido à menor espessura da pele e maior sensibilidade, são essenciais técnica cuidadosa e seleção conservadora da profundidade.",
    rows: [
      { label: "Pálpebras superiores e inferiores", depth: "0.5 – 1.0 mm" },
      { label: "Canto lateral / pés de galinha", depth: "1.0 – 1.5 mm" },
    ],
  },

  byRegion: {
    eyebrow: "Profundidade · Referência rápida",
    title: "Profundidade recomendada por região",
    byArea: {
      label: "Por área anatômica",
      rows: [
        { label: "Periorbital / olheiras", depth: "0.25 – 0.5 mm" },
        { label: "Bochechas e testa", depth: "0.5 – 1.0 mm" },
        { label: "Mãos", depth: "0.5 – 0.75 mm" },
        { label: "Pescoço e colo", depth: "0.5 – 1.0 mm" },
        { label: "Periorbital e lábios", depth: "0.25 – 0.75 mm" },
      ],
    },
    bySkin: {
      label: "Por tipo de pele",
      rows: [
        { label: "Pele fina / sensível", depth: "0.25 – 0.5 mm" },
        { label: "Pele espessa / seborreica", depth: "0.75 – 1.0 mm" },
        { label: "Pele normal / mista", depth: "0.5 – 0.75 mm" },
      ],
    },
  },

  bleeding: {
    eyebrow: "Segurança",
    title: "Controle de sangramento.",
    acceptable: ["Eritema leve", "Sangramento pontual ocasional"],
    notAcceptable: ["Sangramento ativo", "Fluxo sanguíneo difuso ou contínuo"],
    action:
      "Reduza imediatamente a profundidade do microagulhamento. O sangramento excessivo não aumenta a eficácia e pode comprometer a segurança.",
  },

  devices: {
    eyebrow: "Compatibilidade",
    title: "Dispositivos de energia compatíveis",
    items: ["Laser de Thulium", "Endolaser", "HIFU", "Laser de CO₂ fracionado"],
  },

  clinicalSequence: {
    eyebrow: "Sequência clínica",
    title: "A ordem que preserva a eficácia.",
    steps: [
      {
        index: "01",
        title: "Tratamentos baseados em energia",
        description:
          "Realizar todos os tratamentos baseados em energia primeiro — HIFU, laser, entre outros.",
      },
      {
        index: "02",
        title: "Microagulhamento",
        description:
          "Completar o microagulhamento, se indicado, com a técnica apropriada.",
      },
      {
        index: "03",
        title: "Aplicar NanoSkinBio",
        description:
          "Aplicar imediatamente após, enquanto os microcanais ainda estão abertos — tempo de ouro: até 5 minutos.",
      },
    ],
    note: "Esta sequência maximiza a entrega transdérmica e melhora a resposta biológica sem comprometer a segurança.",
  },

  microneedlingProtocol: {
    eyebrow: "Protocolo",
    title: "Sequência do protocolo de microagulhamento",
    prep: [
      {
        label: "Limpeza profunda da pele",
        description: "Remover oleosidade, células mortas e resíduos.",
      },
      { label: "Antissepsia", description: "Reduzir o risco de infecção." },
      {
        label: "Anestesia",
        description: "Preferencialmente máscara anestésica NSB CALM Peel, sem sérum.",
      },
    ],
    application: [
      {
        label: "Carimbo",
        description: "Ideal para áreas delicadas e pequenas — olheiras, perioral.",
      },
      {
        label: "Arrasto / rolamento",
        description: "Indicado para regiões maiores — bochechas, testa, pescoço.",
      },
      {
        label: "Combinado",
        description: "Carimbo em áreas sensíveis + arrasto em áreas maiores.",
      },
    ],
    steps: [
      "Microagulhamento — técnica apropriada (carimbo ou arrasto)",
      "Aplicar NanoSkinBio uniformemente sobre a pele tratada",
      "Segunda passagem (opcional) — repetir em áreas específicas, se indicado",
    ],
  },

  integration: {
    eyebrow: "Integração tecnológica",
    title: "Combinações recomendadas",
    combos: [
      {
        a: "Microagulhamento",
        b: "NSB",
        result: "Máxima bioestimulação + canais para entrega do NSB",
      },
      {
        a: "CO₂ fracionado",
        b: "NSB",
        result: "Remodelação profunda + entrega transdérmica para casos complexos",
      },
      {
        a: "Laser Thulium",
        b: "NSB",
        result: "Rejuvenescimento superficial, textura e poros",
      },
      {
        a: "Eletroporação",
        b: "NSB",
        result: "Máxima permeação ativa, sem trauma mecânico",
      },
    ],
    maleNote:
      "Homens devem barbear-se antes do procedimento, para remover pelos faciais e permitir boa permeação do NSB.",
    anesthesia: {
      preferred: "Máscara anestésica NSB CALM Peel (sem sérum)",
      alternative: "Anestésicos líquidos ou diluídos",
      avoid: "Séruns anestésicos — podem dificultar a penetração do NSB",
    },
  },

  rationale:
    "O NanoSkinBio® foi concebido para interagir com o tecido dérmico através de um mecanismo biomimético e não inflamatório, apoiando a ativação de fibroblastos e a produção de colágeno. A profundidade adequada do microagulhamento garante eficácia, preservando a integridade tecidual e a segurança do paciente.",

  results: {
    eyebrow: "Resultados clínicos",
    title: "A evidência do protocolo.",
    caption: "Antes e depois do protocolo NanoSkinBio®.",
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
