export type Company = {
  slug: string;
  name: string;
  category: "Pagamentos" | "Serviços financeiros" | "Tecnologia" | "Entretenimento";
  tagline: string;
  description: string;
  logo: string;
  website: string;
  accent: string;
  need: string;
  solutions: string[];
  audience: string[];
  differentiators: string[];
  result: string;
  relation: string;
};

export const companies: Company[] = [
  {
    slug: "pagaso",
    name: "PagaSó",
    category: "Pagamentos",
    tagline: "Serviços digitais ao alcance de todos.",
    description:
      "Uma plataforma que liga agentes, empresas e consumidores através de recargas, pagamentos e serviços essenciais.",
    logo: "/companies/pagaso.svg",
    website: "https://www.pagaso.ao/",
    accent: "#ff6a00",
    need:
      "Tornar recargas e pagamentos mais acessíveis, ao mesmo tempo que cria novas fontes de rendimento para agentes e pontos de venda.",
    solutions: ["Recargas de telefone", "TV e internet", "Energia", "Apostas", "Rede de agentes"],
    audience: ["Agentes", "Comerciantes", "Empresas", "Consumidores"],
    differentiators: ["Ecossistema alargado", "Operações em tempo real", "Cobertura nacional", "Suporte próximo"],
    result:
      "Um ponto de acesso simples a serviços digitais, preparado para apoiar milhares de operações no dia a dia.",
    relation:
      "A PagaSó amplia a presença do Grupo JC no retalho digital e aproxima serviços essenciais de pessoas e negócios.",
  },
  {
    slug: "intelize",
    name: "Intelize",
    category: "Pagamentos",
    tagline: "Pagamentos que aproximam empresas e clientes.",
    description:
      "Infraestrutura de pagamentos desenvolvida para tornar cobranças e transações mais simples, rápidas e seguras.",
    logo: "/companies/intelize.svg",
    website: "https://www.intelize.ao/",
    accent: "#0857ff",
    need:
      "Reduzir a complexidade das integrações e ajudar empresas a receber pagamentos com segurança no ecossistema angolano.",
    solutions: ["Referências Multicaixa", "GPO Multicaixa Express", "APIs de pagamento", "Portal de gestão"],
    audience: ["PME", "Grandes empresas", "Startups", "Plataformas digitais"],
    differentiators: ["Integração simples", "Segurança e compliance", "Flexibilidade", "Suporte especializado"],
    result:
      "Uma infraestrutura que acompanha o crescimento dos negócios e simplifica o acesso ao sistema de pagamentos nacional.",
    relation:
      "A Intelize representa a capacidade do Grupo JC para construir infraestrutura financeira relevante para o mercado.",
  },
  {
    slug: "itangola",
    name: "ITAngola",
    category: "Tecnologia",
    tagline: "Tecnologia que fortalece organizações.",
    description:
      "Soluções de gestão, infraestrutura e suporte tecnológico para empresas que procuram operar com mais controlo e eficiência.",
    logo: "/companies/itangola.svg",
    website: "https://it-angola.com/",
    accent: "#f0c900",
    need:
      "Apoiar empresas na modernização dos seus processos e na gestão segura das suas operações e infraestruturas.",
    solutions: ["ERP e gestão empresarial", "Consultoria", "Redes", "Segurança informática", "Formação"],
    audience: ["Empresas", "Instituições", "Equipas de gestão", "Profissionais"],
    differentiators: ["Experiência local", "Soluções reconhecidas", "Acompanhamento técnico", "Formação certificada"],
    result:
      "Organizações com processos mais integrados, equipas capacitadas e tecnologia preparada para apoiar o negócio.",
    relation:
      "A ITAngola reforça o eixo empresarial do Grupo JC através de tecnologia, gestão e capacitação.",
  },
  {
    slug: "kwanzabet",
    name: "KwanzaBet",
    category: "Entretenimento",
    tagline: "Entretenimento digital pensado para o mercado nacional.",
    description:
      "Uma plataforma de apostas desportivas e entretenimento online com uma experiência adaptada ao público angolano.",
    logo: "/companies/kwanzabet.svg",
    website: "https://www.kwanzabet.ao/pt/",
    accent: "#e6292f",
    need:
      "Criar uma experiência de entretenimento digital próxima, dinâmica e adaptada aos hábitos do mercado nacional.",
    solutions: ["Apostas desportivas", "Casino online", "Aviator", "Campanhas promocionais"],
    audience: ["Público adulto", "Adeptos de desporto", "Utilizadores digitais"],
    differentiators: ["Experiência localizada", "Oferta diversificada", "Campanhas relevantes", "Plataforma digital"],
    result:
      "Uma marca de entretenimento com linguagem, produto e experiência desenhados para o contexto angolano.",
    relation:
      "A KwanzaBet expande o ecossistema do Grupo JC para experiências digitais de entretenimento e participação.",
  },
  {
    slug: "ada",
    name: "ADA",
    category: "Tecnologia",
    tagline: "Estratégia, tecnologia e design para criar soluções digitais.",
    description:
      "Desenvolvemos plataformas, produtos e experiências digitais orientadas para desafios reais de empresas e utilizadores.",
    logo: "/companies/ada.svg",
    website: "https://adas.ao/",
    accent: "#8858f9",
    need:
      "Transformar necessidades de negócio em produtos digitais claros, úteis e preparados para evoluir.",
    solutions: ["Software à medida", "Aplicações móveis", "Plataformas web", "Produto digital", "UI/UX Design"],
    audience: ["Empresas", "Startups", "Instituições", "Equipas de produto"],
    differentiators: ["Visão ponta a ponta", "Design orientado ao utilizador", "Execução técnica", "Conhecimento do mercado"],
    result:
      "Produtos digitais construídos da estratégia à implementação, com foco na experiência e no impacto real.",
    relation:
      "A ADA concentra competências de produto, design e desenvolvimento que também potenciam outras empresas do grupo.",
  },
  {
    slug: "somoney",
    name: "SóMoney",
    category: "Serviços financeiros",
    tagline: "Mais liberdade para movimentar o seu dinheiro.",
    description:
      "Uma carteira digital angolana para transferências, pagamentos, depósitos, levantamentos e gestão financeira.",
    logo: "/companies/somoney.svg",
    website: "https://www.somoney.ao/",
    accent: "#17cfd9",
    need:
      "Simplificar o dia a dia financeiro de pessoas e empresas com operações digitais acessíveis, seguras e rápidas.",
    solutions: ["Transferências", "Pagamentos", "Depósitos", "Levantamentos", "Pagamentos por QR Code"],
    audience: ["Particulares", "Comerciantes", "Empresas", "Utilizadores digitais"],
    differentiators: ["Carteira angolana", "Experiência simples", "Segurança", "Serviços num só lugar"],
    result:
      "Uma experiência financeira integrada que devolve às pessoas mais autonomia sobre o seu dinheiro.",
    relation:
      "A SóMoney materializa a visão do Grupo JC para serviços financeiros digitais simples, acessíveis e próximos.",
  },
];

export const navigation = [
  { label: "Sobre o Grupo", href: "/grupo" },
  { label: "Empresas", href: "/empresas" },
  { label: "Áreas", href: "/areas" },
  { label: "Impacto", href: "/impacto" },
  { label: "Carreiras", href: "/carreiras" },
  { label: "Notícias", href: "/noticias" },
];
