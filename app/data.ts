export type CompanyHighlight = {
  title: string;
  desc: string;
};

export type CompanyAudienceSegment = {
  label: string;
  title: string;
  desc: string;
};

export type CompanyEcosystemItem = {
  title: string;
  desc: string;
  tag?: string;
};

export type CompanyExclusive = {
  kicker: string;
  title: string;
  lead: string;
  points?: { title: string; desc: string }[];
  highlightBox?: { title: string; desc: string };
};

export type Company = {
  slug: string;
  name: string;
  category: "Pagamentos" | "Serviços financeiros" | "Tecnologia" | "Entretenimento";
  tagline: string;
  description: string;
  logo: string;
  website: string;
  accent: string;
  heroKicker?: string;
  role?: {
    kicker: string;
    title: string;
    lead: string;
    body: string;
    highlights: CompanyHighlight[];
  };
  audienceValue?: {
    kicker: string;
    title: string;
    segments: CompanyAudienceSegment[];
  };
  ecosystem?: {
    kicker: string;
    title: string;
    intro?: string;
    items: CompanyEcosystemItem[];
  };
  exclusiveSection?: CompanyExclusive;
  relationDetail?: {
    kicker: string;
    title: string;
    body: string;
  };
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
    tagline: "Serviços essenciais ao alcance de todos, em qualquer ponto do país.",
    description:
      "Uma plataforma viva que liga agentes, empresas e pessoas através de recargas, pagamentos de serviços e transações diárias simples e imediatas.",
    logo: "/companies/pagaso.svg",
    website: "https://www.pagaso.ao/",
    accent: "#bf181d",
    heroKicker: "Retalho Digital & Pagamentos do Quotidiano",
    role: {
      kicker: "Proximidade e Conveniência",
      title: "Facilitar o dia a dia onde as pessoas estão.",
      lead: "Pagar a energia, carregar o telemóvel ou subscrever a televisão não deve exigir deslocações longas nem burocracias complexas.",
      body: "A PagaSó transforma qualquer ponto comercial num centro activo de serviços digitais, garantindo que o acesso a pagamentos essenciais é tão natural e directo como comprar pão no bairro.",
      highlights: [
        { title: "Acesso Universal", desc: "Presença em bairros e centros urbanos com atendimento descomplicado." },
        { title: "Tempo Real", desc: "Confirmação imediata da operação no terminal e no telemóvel do cliente." },
        { title: "Zero Fricção", desc: "Processos rápidos que poupam tempo a quem atende e a quem paga." },
      ],
    },
    audienceValue: {
      kicker: "O Triângulo de Valor",
      title: "Três frentes. Uma rede em crescimento contínuo.",
      segments: [
        {
          label: "Para o Cidadão",
          title: "Conveniência Imediata",
          desc: "Carregamentos, televisão, electricidade e serviços essenciais pagos à porta de casa, com segurança e sem filas.",
        },
        {
          label: "Para os Agentes",
          title: "Rendimento e Autonomia",
          desc: "Um modelo de negócio pronto a usar que permite a comerciantes e empreendedores rentabilizar o seu espaço e expandir receitas.",
        },
        {
          label: "Para as Empresas",
          title: "Capilaridade e Alcance",
          desc: "Marcas e prestadores de serviços ganham uma vasta rede de distribuição que aproxima os seus produtos de milhões de consumidores.",
        },
      ],
    },
    ecosystem: {
      kicker: "Catálogo de Operações",
      title: "Tudo o que a rotina exige num único terminal.",
      intro: "Uma gama completa de operações pensada para satisfazer as necessidades mais frequentes de famílias e profissionais.",
      items: [
        {
          title: "Telecomunicações & Dados",
          desc: "Recargas de voz e pacotes de internet para todas as operadoras móveis em Angola.",
          tag: "Voz e Internet",
        },
        {
          title: "Energia & Serviços Públicos",
          desc: "Pagamento de pré-pago e liquidação de facturas de electricidade e água sem deslocações.",
          tag: "Utilidades",
        },
        {
          title: "TV & Streaming",
          desc: "Subscrição e renovação imediata dos principais pacotes de televisão por satélite e streaming.",
          tag: "Entretenimento",
        },
        {
          title: "Serviços Digitais & Jogos",
          desc: "Carregamentos de contas de entretenimento, vales digitais e vouchers de consumo.",
          tag: "Digital",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Empreendedorismo de Proximidade",
      title: "A Força da Rede: Mais do que tecnologia, um gerador de rendimento local.",
      lead: "Cada terminal PagaSó activo representa um negócio que ganha novo fôlego e um empreendedor que diversifica as suas receitas diárias com liquidação rápida e apoio contínuo.",
      points: [
        { title: "Formação Inicial Prática", desc: "Capacitação directa para o manuseio dos terminais e boas práticas comerciais." },
        { title: "Liquidação e Suporte Ágil", desc: "Acesso a saldo rápido e assistência técnica dedicada no terreno." },
        { title: "Tecnologia Resiliente", desc: "Terminais e aplicações preparados para responder mesmo em condições de conectividade variável." },
      ],
      highlightBox: {
        title: "Impacto no Comércio Local",
        desc: "Milhares de micro-comerciantes fortalecem a sua sustentabilidade através de comissões transparentes e maior fluxo de clientes em loja.",
      },
    },
    relationDetail: {
      kicker: "Integração no Grupo",
      title: "O canal de retalho e proximidade do ecossistema JC.",
      body: "No Grupo JC, acreditamos que a inovação só cumpre o seu propósito quando chega a todos. A PagaSó materializa esta visão ao levar a infraestrutura digital do grupo até à economia real, estabelecendo o contacto directo diário com famílias e pequenos comerciantes em Angola.",
    },
    need:
      "Tornar recargas e pagamentos mais acessíveis, ao mesmo tempo que cria novas fontes de rendimento para agentes e pontos de venda.",
    solutions: ["Recargas telefónicas", "TV e internet", "Energia", "Apostas", "Rede de agentes"],
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
    tagline: "Pagamentos fluidos e seguros que impulsionam o crescimento das empresas.",
    description:
      "Simplificamos a recepção e gestão de pagamentos no mercado angolano através de APIs robustas, múltiplos canais e uma plataforma de controlo em tempo real.",
    logo: "/companies/intelize.svg",
    website: "https://www.intelize.ao/",
    accent: "#FF8722",
    heroKicker: "Infraestrutura & Soluções de Pagamento Corporativo",
    role: {
      kicker: "Engenharia Financeira",
      title: "Reduzir o atrito entre quem vende e quem compra.",
      lead: "O crescimento de uma empresa depende da sua capacidade de cobrar com rapidez, segurança e total transparência contabilística.",
      body: "A Intelize elimina barreiras operacionais, permitindo que negócios de qualquer dimensão integrem os principais canais de pagamento do país sem complicações técnicas nem atrasos de reconciliação.",
      highlights: [
        { title: "Integração Simplificada", desc: "APIs e SDKs modernos documentados para activação rápida em plataformas web e móveis." },
        { title: "Reconciliação Automática", desc: "Relatórios de liquidação transparentes que facilitam o fecho contabilístico diário." },
        { title: "Segurança de Grau Bancário", desc: "Criptografia de ponta a ponta e monitorização activa para prevenção de fraude." },
      ],
    },
    audienceValue: {
      kicker: "Segmentos Atendidos",
      title: "Criada para escalar com a maturidade do seu negócio.",
      segments: [
        {
          label: "Startups & E-commerce",
          title: "Checkout sem Fricção",
          desc: "Activação ágil e taxas de conversão elevadas para negócios digitais que precisam de começar a vender online de imediato.",
        },
        {
          label: "PME & Prestadores de Serviços",
          title: "Cobrança Automatizada",
          desc: "Emissão simplificada de referências para facturas e mensalidades, reduzindo atrasos de pagamento e esforço de cobrança.",
        },
        {
          label: "Grandes Empresas & Instituições",
          title: "Arquitetura de Alto Volume",
          desc: "Elevada capacidade de processamento, tolerância a falhas e integração com sistemas de gestão e ERP corporativos.",
        },
      ],
    },
    ecosystem: {
      kicker: "Canais e Métodos",
      title: "Acesso directo e desimpedido ao ecossistema nacional de pagamentos.",
      intro: "Conectividade directa aos principais circuitos do sistema de pagamentos de Angola.",
      items: [
        {
          title: "Referências Multicaixa",
          desc: "Emissão instantânea de referências para liquidação via ATM, Internet Banking e aplicações financeiras.",
          tag: "Multicaixa",
        },
        {
          title: "GPO Multicaixa Express",
          desc: "Pagamentos móveis iniciados pelo número de telefone com validação biométrica directa do utilizador.",
          tag: "Express",
        },
        {
          title: "APIs REST & Webhooks",
          desc: "Notificações de pagamento em tempo real para sincronização imediata de encomendas e pedidos.",
          tag: "Tecnologia",
        },
        {
          title: "Portal de Gestão Financeira",
          desc: "Painel centralizado com métricas de volume, gráficos de desempenho e exportação de extratos.",
          tag: "Analytics",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Conexão Estrutural",
      title: "Acesso directo e desimpedido ao ecossistema nacional de pagamentos.",
      lead: "A Intelize atua como a ponte tecnológica entre o sistema financeiro formal e as plataformas digitais, garantindo estabilidade nas horas de maior tráfego comercial.",
      points: [
        { title: "Uptime e Disponibilidade", desc: "Infraestrutura com redundância para garantir que nenhuma transação seja perdida." },
        { title: "Conformidade e Regulação", desc: "Alinhamento com os padrões do Banco Nacional de Angola e da EMIS." },
        { title: "Suporte Técnico Local", desc: "Acompanhamento por especialistas em Luanda durante todo o processo de integração." },
      ],
      highlightBox: {
        title: "Confiança Empresarial",
        desc: "Mais do que um gateway de pagamentos, somos o parceiro de liquidez e estabilidade transacional das empresas angolanas.",
      },
    },
    relationDetail: {
      kicker: "Posição no Grupo",
      title: "A espinha dorsal da economia digital do Grupo JC.",
      body: "A Intelize representa a capacidade do Grupo JC de desenhar tecnologia de base para o sistema financeiro nacional. Ao fornecer infraestrutura crítica a outras empresas do grupo e a parceiros externos, a Intelize acelera a transição de Angola para uma economia mais digital e transparente.",
    },
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
    slug: "somoney",
    name: "SóMoney",
    category: "Serviços financeiros",
    tagline: "O seu dinheiro com mais liberdade e sem complicações.",
    description:
      "Uma carteira digital criada em Angola para transferir, pagar, poupar e movimentar recursos a qualquer momento, directamente do seu telemóvel.",
    logo: "/companies/somoney.svg",
    website: "https://www.somoney.ao/",
    accent: "#17CFDA",
    heroKicker: "Carteira Digital & Inclusão Financeira",
    role: {
      kicker: "Autonomia Financeira",
      title: "Uma relação mais leve com as suas finanças.",
      lead: "O dinheiro deve acompanhar o ritmo dos seus dias, sem barreiras nem filas intermináveis.",
      body: "A SóMoney nasceu para descomplicar as operações financeiras diárias, permitindo que qualquer pessoa envie dinheiro, liquide contas ou receba pagamentos com total facilidade e segurança.",
      highlights: [
        { title: "Operações Instantâneas", desc: "Transferências e pagamentos que são concluídos no mesmo segundo." },
        { title: "Seguro & Eficaz no Dia-a-Dia", desc: "Acesso por biometria e confirmação protegida em cada movimento." },
        { title: "100% Intuitivo e Fácil de usar", desc: "Interface pensada para que qualquer pessoa utilize sem dificuldades." },
      ],
    },
    audienceValue: {
      kicker: "Feita para Si",
      title: "Liberdade para pessoas e dinamismo para negócios.",
      segments: [
        {
          label: "Particulares",
          title: "Simplificar o dia a dia",
          desc: "Envie dinheiro, pague serviços e acompanhe os seus movimentos de forma simples, rápida e sem complicações.",
        },
        {
          label: "Comerciantes e Freelancers",
          title: "Receber de forma simples",
          desc: "Aceite pagamentos dos seus clientes através de QR Code no telemóvel, sem depender de processos ou equipamentos complexos.",
        },
        {
          label: "Famílias e Jovens",
          title: "Mais liberdade para usar",
          desc: "Envie, receba e utilize o seu dinheiro com mais autonomia para responder às necessidades do quotidiano.",
        },
      ],
    },
    ecosystem: {
      kicker: "Funcionalidades da Carteira",
      title: "Tudo o que a sua rotina financeira precisa.",
      intro: "Uma experiência digital completa para gerir o seu saldo a partir de qualquer lugar.",
      items: [
        {
          title: "Transferências P2P Imediatas",
          desc: "Envio de dinheiro entre contactos em segundos utilizando apenas o número de telefone.",
          tag: "Transferências",
        },
        {
          title: "Pagamento por QR Code",
          desc: "Compras em estabelecimentos físicos e restaurantes simplesmente apontando a câmara.",
          tag: "QR Code",
        },
        {
          title: "Depósitos e Levantamentos Fáceis",
          desc: "Carregue a sua carteira ou levante fundos com facilidade através de parceiros autorizados.",
          tag: "Operações",
        },
        {
          title: "Recargas e Facturas",
          desc: "Carregamentos de saldo telefónico, internet, TV e energia sem sair da aplicação.",
          tag: "Serviços",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Estilo de Vida & Conveniência",
      title: "A Experiência SóMoney: Desenhada para momentos reais.",
      lead: "Do café com amigos às compras do mês, a SóMoney elimina o atrito de lidar com trocos ou deslocações desnecessárias a agências bancárias.",
      points: [
        { title: "Divisão de Contas Simples", desc: "Partilhe despesas de refeições ou passeios entre amigos com notificações directas." },
        { title: "Controlo Visual de Saldo", desc: "Histórico claro e categorizado para acompanhar as entradas e saídas de cada mês." },
        { title: "Acesso Inclusivo", desc: "Criada para aproximar quem estava fora do sistema bancário de ferramentas digitais modernas." },
      ],
      highlightBox: {
        title: "Cidadania Financeira",
        desc: "A SóMoney é um instrumento de inclusão que confere a mais angolanos o controlo e a autonomia sobre os seus próprios recursos.",
      },
    },
    relationDetail: {
      kicker: "O Compromisso do Grupo",
      title: "Acelerando a inclusão financeira em Angola.",
      body: "A SóMoney reflete o compromisso do Grupo JC em criar soluções que aproximam os angolanos do ecossistema financeiro formal. Democratizar o acesso a ferramentas digitais de pagamento é essencial para promover a autonomia económica das famílias e o dinamismo das comunidades.",
    },
    need:
      "Simplificar o dia a dia financeiro de pessoas e empresas com operações digitais acessíveis, seguras e rápidas.",
    solutions: ["Carteira Digital", "Transferências", "Pagamentos", "Depósitos", "Levantamentos", "Pagamentos por QR Code"],
    audience: ["Particulares", "Comerciantes", "Empresas", "Utilizadores digitais"],
    differentiators: ["Carteira angolana", "Experiência simples", "Segurança", "Serviços num só lugar"],
    result:
      "Uma experiência financeira integrada que devolve às pessoas mais autonomia sobre o seu dinheiro.",
    relation:
      "A SóMoney materializa a visão do Grupo JC para serviços financeiros digitais simples, acessíveis e próximos.",
  },
  {
    slug: "ada",
    name: "ADA",
    category: "Tecnologia",
    tagline: "Desenhamos e construímos os produtos digitais que moldam o futuro.",
    description:
      "Unimos pensamento estratégico, design centrado nas pessoas e engenharia de software para criar plataformas, aplicações e ecossistemas digitais que resolvem desafios reais de negócio.",
    logo: "/companies/ada.svg",
    website: "https://adas.ao/",
    accent: "#8858F9",
    heroKicker: "Estratégia, Design de Experiência & Engenharia de Software",
    role: {
      kicker: "Filosofia de Produto",
      title: "A tecnologia só é excelente quando é útil, intuitiva e duradoura.",
      lead: "Não criamos software apenas pelo código ou interfaces apenas pela estética visual.",
      body: "A ADA actua na interseção exata entre a necessidade do utilizador e os objectivos estratégicos da organização. Cada solução que desenvolvemos nasce de uma investigação profunda do contexto e é construída com arquitetura escalável pronta para evoluir.",
      highlights: [
        { title: "Visão Ponta a Ponta", desc: "Da formulação da estratégia inicial até ao lançamento e sustentação contínua." },
        { title: "Design Centrado no Humano", desc: "Interfaces claras que facilitam a adopção e reduzem o tempo de aprendizagem." },
        { title: "Engenharia Escalável", desc: "Arquiteturas modernas preparadas para crescer com a maturidade do negócio." },
      ],
    },
    audienceValue: {
      kicker: "Para Quem Criamos",
      title: "Parceiro de produto para equipas que não abdicam de qualidade.",
      segments: [
        {
          label: "Empresas em Transformação",
          title: "Modernização Digital",
          desc: "Substituição de processos legados por plataformas digitais ágeis, integradas e intuitivas.",
        },
        {
          label: "Startups & Novos Negócios",
          title: "Do Conceito ao Mercado",
          desc: "Prototipagem rápida, validação de produto (MVP) e engenharia robusta para acelerar a tração.",
        },
        {
          label: "Instituições & Grandes Contas",
          title: "Sistemas Críticos",
          desc: "Plataformas seguras, de alta disponibilidade e desenhadas para responder a requisitos de conformidade rigorosos.",
        },
      ],
    },
    ecosystem: {
      kicker: "Capacidades Técnicas",
      title: "Soluções completas para ecossistemas digitais exigentes.",
      intro: "Uma equipa multidisciplinar que domina todo o ciclo de vida do produto tecnológico.",
      items: [
        {
          title: "Aplicações Móveis & Web",
          desc: "Experiências responsivas e nativas com foco em desempenho, fluidez e fidelidade visual.",
          tag: "Mobile & Web",
        },
        {
          title: "Plataformas e Softwares à Medida",
          desc: "Sistemas desenhados exclusivamente para os fluxos e particularidades operacionais da sua empresa.",
          tag: "Engenharia",
        },
        {
          title: "UI/UX Design & Design Systems",
          desc: "Linguagens visuais coerentes, bibliotecas de componentes e testes de usabilidade aprofundados.",
          tag: "Design",
        },
        {
          title: "Arquitetura de APIs & Integrações",
          desc: "Interligação segura entre múltiplos sistemas de informação e serviços terceiros.",
          tag: "Infraestrutura",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Metodologia de Entrega",
      title: "O Ciclo do Produto Digital: Como transformamos visão em realidade funcional.",
      lead: "Trabalhamos com metodologias ágeis e iterações curtas para garantir que cada entrega traz valor palpável para o utilizador e para o negócio.",
      points: [
        { title: "01. Descoberta & Estratégia", desc: "Mapeamento de requisitos, análise de utilizadores e definição da visão de produto." },
        { title: "02. Prototipagem & Validação", desc: "Desenho de wireframes, protótipos interactivos e validação de usabilidade." },
        { title: "03. Engenharia & Qualidade", desc: "Desenvolvimento com código limpo, testes automatizados e segurança por defeito." },
        { title: "04. Lançamento & Evolução", desc: "Monitorização de métricas de utilização e melhoria contínua das funcionalidades." },
      ],
      highlightBox: {
        title: "Acelerador Digital do Grupo",
        desc: "A ADA é também o núcleo criativo que desenha e optimiza os produtos e plataformas de todas as empresas do Grupo JC.",
      },
    },
    relationDetail: {
      kicker: "Papel Estrutural",
      title: "O acelerador digital de todo o ecossistema JC.",
      body: "Para além de desenvolver soluções para clientes e parceiros de mercado, a ADA concentra competências de produto, design e engenharia que potenciam as restantes empresas do Grupo JC, assegurando coerência, inovação contínua e padrões elevados de experiência digital.",
    },
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
    slug: "itangola",
    name: "ITAngola",
    category: "Tecnologia",
    tagline: "Tecnologia fiável e soluções de gestão para organizações que querem liderar.",
    description:
      "Apoiamos empresas e instituições na modernização dos seus processos, na protecção das suas infraestruturas e na capacitação contínua das suas equipas.",
    logo: "/companies/itangola.svg",
    website: "https://it-angola.com/",
    accent: "#47BCD2",
    heroKicker: "Tecnologia Empresarial, Infraestruturas & Gestão",
    role: {
      kicker: "Sustentação Operacional",
      title: "A segurança de quem conhece as exigências do mercado local.",
      lead: "Nenhuma organização consegue prosperar sem processos de gestão claros e infraestruturas tecnológicas resilientes.",
      body: "A ITAngola combina experiência consolidada no tecido empresarial angolano com as melhores práticas internacionais para implementar sistemas ERP, desenhar redes de comunicação robustas e proteger activos de informação críticos.",
      highlights: [
        { title: "Experiência Comprovada", desc: "Anos de suporte activo a empresas de referência em múltiplos sectores de actividade." },
        { title: "Soluções Certificadas", desc: "Parcerias e certificações com os principais fornecedores globais de tecnologia de gestão." },
        { title: "Acompanhamento Técnico", desc: "Equipas locais prontas para intervir no terreno com rapidez e precisão." },
      ],
    },
    audienceValue: {
      kicker: "Públicos & Organizações",
      title: "Respostas sob medida para quem gere operações críticas.",
      segments: [
        {
          label: "Médias & Grandes Empresas",
          title: "Controlo e Eficiência",
          desc: "Implementação de ERPs integrados para unificar contabilidade, recursos humanos, tesouraria e stocks.",
        },
        {
          label: "Instituições Públicas & Privadas",
          title: "Infraestruturas e Redes",
          desc: "Conectividade estável, centros de dados locais e auditorias de cibersegurança para protecção de dados sensíveis.",
        },
        {
          label: "Quadros e Profissionais",
          title: "Capacitação Contínua",
          desc: "Formação prática e especializada para elevar o domínio técnico das equipas sobre as ferramentas de trabalho.",
        },
      ],
    },
    ecosystem: {
      kicker: "Portfólio de Soluções",
      title: "Soluções integradas para modernizar a sua organização.",
      intro: "Serviços e ferramentas concebidos para garantir a continuidade e a transparência do seu negócio.",
      items: [
        {
          title: "ERP & Gestão Empresarial",
          desc: "Parametrização e suporte a sistemas líderes de facturação, contabilidade e gestão de pessoal.",
          tag: "Sistemas",
        },
        {
          title: "Redes & Infraestrutura de TI",
          desc: "Desenho e montagem de redes de dados estruturadas, servidores e comunicações empresariais.",
          tag: "Infraestrutura",
        },
        {
          title: "Cibersegurança & Continuidade",
          desc: "Firewalls, cópias de segurança automatizadas e planos de recuperação de desastres operacionais.",
          tag: "Segurança",
        },
        {
          title: "Consultoria e Auditoria Tecnológica",
          desc: "Diagnósticos de maturidade digital e planeamento de melhorias de infraestrutura informática.",
          tag: "Consultoria",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Formação & Academia",
      title: "Capacitação Profissional: A tecnologia só gera valor se as equipas souberem dominá-la.",
      lead: "Acreditamos que o verdadeiro ganho de produtividade acontece quando as pessoas se sentem confiantes e qualificadas para tirar o máximo partido das ferramentas digitais.",
      points: [
        { title: "Formação Prática em ERP", desc: "Cursos práticos adaptados aos fluxos de trabalho reais dos departamentos da sua empresa." },
        { title: "Qualificação de Administradores TI", desc: "Treino avançado para equipas internas de redes, servidores e segurança informática." },
        { title: "Certificação e Desenvolvimento Local", desc: "Promoção de competências de topo que valorizam o talento nacional no mercado de trabalho." },
      ],
      highlightBox: {
        title: "Suporte e SLA Garantido",
        desc: "Contratos de manutenção preventiva e correctiva com tempos de resposta rigorosos para assegurar que a sua actividade nunca pare.",
      },
    },
    relationDetail: {
      kicker: "Papel no Grupo",
      title: "A fundação de maturidade tecnológica do Grupo JC.",
      body: "A ITAngola confere ao Grupo JC a solidez necessária para gerir operações de elevada complexidade com disciplina, conformidade e rigor operacional. É o elo que garante que a visão de inovação do grupo assenta numa base técnica segura, profissional e capaz de responder a desafios de grande escala.",
    },
    need:
      "Apoiar empresas na modernização dos seus processos e na gestão segura das suas operações e infraestruturas.",
    solutions: ["ERP e Gestão empresarial", "Consultoria", "Redes", "Segurança informática", "Formação"],
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
    tagline: "A emoção do desporto com a conveniência e a velocidade do digital.",
    description:
      "Uma plataforma vibrante e adaptada a Angola, criada para levar aos adeptos a melhor experiência de apostas desportivas e jogos online, com segurança, rapidez e simplicidade.",
    logo: "/companies/kwanzabet.svg",
    website: "https://www.kwanzabet.ao/pt/",
    accent: "#DDDC23",
    heroKicker: "Entretenimento Digital & Desporto Interactivo",
    role: {
      kicker: "Paixão e Proximidade",
      title: "Criada a pensar no adepto e no utilizador angolano.",
      lead: "O desporto vive da intensidade das emoções e da partilha de momentos únicos entre amigos e adeptos.",
      body: "A KwanzaBet aproxima os adeptos dos seus clubes e competições favoritas através de uma plataforma digital fluida, com suporte aos métodos de pagamento locais e uma oferta diversificada de entretenimento interactivo e responsável.",
      highlights: [
        { title: "Cobertura Desportiva Ampla", desc: "Campeonatos nacionais e internacionais com acompanhamento ao segundo." },
        { title: "Pagamentos Locais Rápidos", desc: "Depósitos e levantamentos imediatos através dos canais de pagamento mais comuns." },
        { title: "Navegação Optimizada", desc: "Interface leve e optimizada para diversos tipos de dispositivos." },
      ],
    },
    audienceValue: {
      kicker: "Experiência de Utilização",
      title: "Entretenimento feito à medida da paixão nacional.",
      segments: [
        {
          label: "Adeptos de Desporto",
          title: "Emoção Antes e Durante o Jogo",
          desc: "Apostas pré-jogo e ao vivo nas principais ligas de futebol, basquetebol e modalidades de referência.",
        },
        {
          label: "Utilizadores Mobile",
          title: "Velocidade na Palma da Mão",
          desc: "Acesso rápido a partir de qualquer telemóvel, com confirmações instantâneas de boletins e resultados.",
        },
        {
          label: "Público Adulto",
          title: "Lazer Digital Seguro",
          desc: "Jogos rápidos, slots e casino online num ambiente regulado, protegido e com regras transparentes.",
        },
      ],
    },
    ecosystem: {
      kicker: "Oferta de Entretenimento",
      title: "Entretimento completo num só destino digital.",
      intro: "Uma variedade de modalidades e jogos desenhados com os mais recentes padrões da indústria interactiva.",
      items: [
        {
          title: "Apostas Desportivas ao Vivo",
          desc: "Cotas competitivas e mercados detalhados para os maiores eventos desportivos do mundo.",
          tag: "Desporto",
        },
        {
          title: "Jogos Rápidos & Crash Games",
          desc: "Títulos de decisão instantânea como o Aviator, com rondas dinâmicas e resultados imediatos.",
          tag: "Crash Games",
        },
        {
          title: "Casino Virtual & Slots",
          desc: "Dezenas de jogos com gráficos contemporâneos, temas diversificados e mecânicas auditadas.",
          tag: "Casino",
        },
        {
          title: "Campanhas e Promoções",
          desc: "Iniciativas sazonais e bónus transparentes para premiar a participação dos utilizadores.",
          tag: "Vantagens",
        },
      ],
    },
    exclusiveSection: {
      kicker: "Responsabilidade Social & Ética",
      title: "Jogo Responsável: O entretenimento só tem valor quando é consciente e seguro.",
      lead: "A KwanzaBet promove activamente uma cultura de jogo orientada estritamente para o lazer e a diversão de adultos (+18 anos), com mecanismos claros de protecção e equilíbrio.",
      points: [
        { title: "Limites de Depósito e Tempo", desc: "Ferramentas integradas para que cada utilizador controle os seus próprios parâmetros de jogo." },
        { title: "Verificação de Idade e Identidade", desc: "Processos rigorosos de validação de contas para impedir o acesso a menores de idade." },
        { title: "Mecanismos de Auto-Exclusão", desc: "Opções simples para pausar ou suspender a actividade de jogo a qualquer momento." },
      ],
      highlightBox: {
        title: "Tecnologia Leve e Acessível",
        desc: "Desenvolvida especificamente para a realidade de rede angolana, garantindo fluidez mesmo em ligações com menor largura de banda.",
      },
    },
    relationDetail: {
      kicker: "Posição no Grupo",
      title: "A presença do Grupo JC no entretenimento digital.",
      body: "O universo digital engloba ferramentas de trabalho, pagamentos e também momentos de lazer. A KwanzaBet materializa a aposta do Grupo JC no sector do entretenimento online, demonstrando capacidade para criar plataformas de alto tráfego com forte ligação à cultura e às paixões dos angolanos.",
    },
    need:
      "Criar uma experiência de entretenimento digital próxima, dinâmica e adaptada aos hábitos do mercado nacional.",
    solutions: ["Eventos desportivos", "Apostas desportivas", "Casino online", "Aviator", "Campanhas promocionais"],
    audience: ["Público adulto", "Adeptos de desporto", "Utilizadores digitais"],
    differentiators: ["Experiência localizada", "Oferta diversificada", "Campanhas relevantes", "Plataforma digital"],
    result:
      "Uma marca de entretenimento com linguagem, produto e experiência desenhados para o contexto angolano.",
    relation:
      "A KwanzaBet expande o ecossistema do Grupo JC para experiências digitais de entretenimento e participação.",
  },
];

export type CompanyChipTheme = {
  bg: string;
  color: string;
  border: string;
};

export const companyChipThemes: Record<string, CompanyChipTheme> = {
  pagaso: {
    bg: "#FFF1E8",
    color: "#9A3412",
    border: "#FB923C",
  },
  intelize: {
    bg: "#EFF6FF",
    color: "#0369A1",
    border: "#38BDF8",
  },
  itangola: {
    bg: "#F0FDFA",
    color: "#0F766E",
    border: "#2DD4BF",
  },
  kwanzabet: {
    bg: "#FEFCE8",
    color: "#713F12",
    border: "#EAB308",
  },
  ada: {
    bg: "#FAF5FF",
    color: "#6B21A8",
    border: "#A855F7",
  },
  somoney: {
    bg: "#ECFEFF",
    color: "#0E7490",
    border: "#22D3EE",
  },
};

/** Soft background tones used by company cards on the Home and directory pages. */
export const companyCardTints: Record<string, string> = {
  pagaso: "#fff4f4",
  itangola: "#f1fdff",
  kwanzabet: "#ffffef",
  ada: "#f9f6ff",
  somoney: "#f3f7ff",
  intelize: "#fff8f5",
};

export const navigation = [
  { label: "Sobre o Grupo", href: "/grupo" },
  { label: "Empresas", href: "/empresas" },
  { label: "Áreas", href: "/areas" },
  { label: "Impacto", href: "/impacto" },
  { label: "Notícias", href: "/noticias" },
];
