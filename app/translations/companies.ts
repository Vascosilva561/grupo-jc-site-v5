import type { Company } from "../data";
import type { LanguageCode } from "./types";

export const localizedCompanies: Record<LanguageCode, Company[]> = {
  pt: [
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
      need: "Tornar recargas e pagamentos mais acessíveis, ao mesmo tempo que cria novas fontes de rendimento para agentes e pontos de venda.",
      solutions: ["Recargas telefónicas", "TV e internet", "Energia", "Apostas", "Rede de agentes"],
      audience: ["Agentes", "Comerciantes", "Empresas", "Consumidores"],
      differentiators: ["Ecossistema alargado", "Operações em tempo real", "Cobertura nacional", "Suporte próximo"],
      result: "Um ponto de acesso simples a serviços digitais, preparado para apoiar milhares de operações no dia a dia.",
      relation: "A PagaSó amplia a presença do Grupo JC no retalho digital e aproxima serviços essenciais de pessoas e negócios.",
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
      need: "Reduzir a complexidade das integrações e ajudar empresas a receber pagamentos com segurança no ecossistema angolano.",
      solutions: ["Referências Multicaixa", "GPO Multicaixa Express", "APIs de pagamento", "Portal de gestão"],
      audience: ["PME", "Grandes empresas", "Startups", "Plataformas digitais"],
      differentiators: ["Integração simples", "Segurança e compliance", "Flexibilidade", "Suporte especializado"],
      result: "Uma infraestrutura que acompanha o crescimento dos negócios e simplifica o acesso ao sistema de pagamentos nacional.",
      relation: "A Intelize representa a capacidade do Grupo JC para construir infraestrutura financeira relevante para o mercado.",
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
      need: "Simplificar o dia a dia financeiro de pessoas e empresas com operações digitais acessíveis, seguras e rápidas.",
      solutions: ["Carteira Digital", "Transferências", "Pagamentos", "Depósitos", "Levantamentos", "Pagamentos por QR Code"],
      audience: ["Particulares", "Comerciantes", "Empresas", "Utilizadores digitais"],
      differentiators: ["Carteira angolana", "Experiência simples", "Segurança", "Serviços num só lugar"],
      result: "Uma experiência financeira integrada que devolve às pessoas mais autonomia sobre o seu dinheiro.",
      relation: "A SóMoney materializa a visão do Grupo JC para serviços financeiros digitais simples, acessíveis e próximos.",
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
      need: "Transformar necessidades de negócio em produtos digitais claros, úteis e preparados para evoluir.",
      solutions: ["Software à medida", "Aplicações móveis", "Plataformas web", "Produto digital", "UI/UX Design"],
      audience: ["Empresas", "Startups", "Instituições", "Equipas de produto"],
      differentiators: ["Visão ponta a ponta", "Design orientado ao utilizador", "Execução técnica", "Conhecimento do mercado"],
      result: "Produtos digitais construídos da estratégia à implementação, com foco na experiência e no impacto real.",
      relation: "A ADA concentra competências de produto, design e desenvolvimento que também potenciam outras empresas do grupo.",
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
      need: "Apoiar empresas na modernização dos seus processos e na gestão segura das suas operações e infraestruturas.",
      solutions: ["ERP e Gestão empresarial", "Consultoria", "Redes", "Segurança informática", "Formação"],
      audience: ["Empresas", "Instituições", "Equipas de gestão", "Profissionais"],
      differentiators: ["Experiência local", "Soluções reconhecidas", "Acompanhamento técnico", "Formação certificada"],
      result: "Organizações com processos mais integrados, equipas capacitadas e tecnologia preparada para apoiar o negócio.",
      relation: "A ITAngola reforça o eixo empresarial do Grupo JC através de tecnologia, gestão e capacitação.",
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
      need: "Criar uma experiência de entretenimento digital próxima, dinâmica e adaptada aos hábitos do mercado nacional.",
      solutions: ["Eventos desportivos", "Apostas desportivas", "Casino online", "Aviator", "Campanhas promocionais"],
      audience: ["Público adulto", "Adeptos de desporto", "Utilizadores digitais"],
      differentiators: ["Experiência localizada", "Oferta diversificada", "Campanhas relevantes", "Plataforma digital"],
      result: "Uma marca de entretenimento com linguagem, produto e experiência desenhados para o contexto angolano.",
      relation: "A KwanzaBet expande o ecossistema do Grupo JC para experiências digitais de entretenimento e participação.",
    },
  ],
  en: [
    {
      slug: "pagaso",
      name: "PagaSó",
      category: "Pagamentos",
      tagline: "Essential services within everyone's reach, across the entire country.",
      description:
        "A vibrant platform connecting agents, businesses, and people through top-ups, utility payments, and simple, instant daily transactions.",
      logo: "/companies/pagaso.svg",
      website: "https://www.pagaso.ao/",
      accent: "#bf181d",
      heroKicker: "Digital Retail & Everyday Payments",
      role: {
        kicker: "Proximity & Convenience",
        title: "Simplifying everyday life wherever people are.",
        lead: "Paying electricity bills, topping up mobile phones, or subscribing to TV should not require long commutes or complex bureaucracy.",
        body: "PagaSó turns any local commercial outlet into an active digital services hub, making access to essential payments as natural and straightforward as buying bread in the neighborhood.",
        highlights: [
          { title: "Universal Access", desc: "Presence in local neighborhoods and urban hubs with hassle-free service." },
          { title: "Real Time", desc: "Instant confirmation on the terminal and on the customer's phone." },
          { title: "Zero Friction", desc: "Swift workflows saving time for both service agents and customers." },
        ],
      },
      audienceValue: {
        kicker: "The Value Triangle",
        title: "Three fronts. A continually growing network.",
        segments: [
          {
            label: "For Citizens",
            title: "Immediate Convenience",
            desc: "Mobile top-ups, television, electricity, and essential services paid at the doorstep, safely and queue-free.",
          },
          {
            label: "For Agents",
            title: "Income & Autonomy",
            desc: "A turnkey business model allowing merchants and entrepreneurs to monetize their spaces and grow daily revenues.",
          },
          {
            label: "For Enterprises",
            title: "Capillarity & Reach",
            desc: "Brands and service providers gain a vast distribution network bringing their products closer to millions of consumers.",
          },
        ],
      },
      ecosystem: {
        kicker: "Operations Catalog",
        title: "Everything daily routine requires in a single terminal.",
        intro: "A comprehensive range of services tailored to meet the most frequent needs of families and professionals.",
        items: [
          {
            title: "Telecom & Data",
            desc: "Voice top-ups and internet bundles for all mobile carriers in Angola.",
            tag: "Voice & Data",
          },
          {
            title: "Energy & Utilities",
            desc: "Prepaid electricity tokens and water bill settlements without traveling.",
            tag: "Utilities",
          },
          {
            title: "TV & Streaming",
            desc: "Instant subscription and renewal of major satellite TV and streaming packages.",
            tag: "Entertainment",
          },
          {
            title: "Digital Services & Gaming",
            desc: "Entertainment account reloads, digital cards, and consumer vouchers.",
            tag: "Digital",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Grassroots Entrepreneurship",
        title: "The Power of the Network: More than technology, a local income driver.",
        lead: "Every active PagaSó terminal represents a business gaining fresh momentum and an entrepreneur diversifying daily revenue with fast settlement and dedicated support.",
        points: [
          { title: "Practical Initial Training", desc: "Hands-on instruction for terminal operation and commercial best practices." },
          { title: "Agile Settlement & Support", desc: "Fast balance access and dedicated field technical assistance." },
          { title: "Resilient Technology", desc: "Hardware and software engineered to operate reliably even under variable connectivity." },
        ],
        highlightBox: {
          title: "Local Commerce Impact",
          desc: "Thousands of micro-merchants strengthen their sustainability through transparent commissions and increased store footfall.",
        },
      },
      relationDetail: {
        kicker: "Group Integration",
        title: "The retail and neighborhood channel of the JC ecosystem.",
        body: "At Grupo JC, we believe innovation only fulfills its purpose when it reaches everyone. PagaSó embodies this vision by bridging the group's digital infrastructure with the real economy, establishing daily direct engagement with families and small merchants across Angola.",
      },
      need: "Making top-ups and utility payments accessible while creating new income streams for local merchants and agents.",
      solutions: ["Mobile top-ups", "TV & Internet", "Electricity", "Betting", "Agent network"],
      audience: ["Agents", "Merchants", "Enterprises", "Consumers"],
      differentiators: ["Broad ecosystem", "Real-time processing", "National coverage", "Local support"],
      result: "A simple access point for digital services built to support thousands of daily operations across Angola.",
      relation: "PagaSó expands Grupo JC's digital retail footprint, bringing essential services closer to people and businesses.",
    },
    {
      slug: "intelize",
      name: "Intelize",
      category: "Pagamentos",
      tagline: "Seamless and secure payment solutions that accelerate business growth.",
      description:
        "We simplify payment acceptance and management across the Angolan market through robust APIs, multi-channel processing, and real-time reconciliation.",
      logo: "/companies/intelize.svg",
      website: "https://www.intelize.ao/",
      accent: "#FF8722",
      heroKicker: "Corporate Payment Infrastructure & Solutions",
      role: {
        kicker: "Financial Engineering",
        title: "Eliminating friction between buyers and sellers.",
        lead: "A company's growth hinges on its ability to collect payments swiftly, securely, and with total accounting transparency.",
        body: "Intelize removes operational barriers, allowing businesses of all sizes to integrate Angola's primary payment channels without technical hassle or reconciliation delays.",
        highlights: [
          { title: "Simplified Integration", desc: "Modern APIs and SDKs thoroughly documented for swift deployment across web and mobile platforms." },
          { title: "Automated Reconciliation", desc: "Transparent settlement reporting that streamlines daily accounting closure." },
          { title: "Bank-Grade Security", desc: "End-to-end encryption and active automated monitoring for fraud prevention." },
        ],
      },
      audienceValue: {
        kicker: "Segments Served",
        title: "Engineered to scale alongside your business maturity.",
        segments: [
          {
            label: "Startups & E-commerce",
            title: "Frictionless Checkout",
            desc: "Rapid onboarding and optimized conversion rates for digital businesses needing to sell online immediately.",
          },
          {
            label: "SMEs & Service Providers",
            title: "Automated Invoicing",
            desc: "Simplified reference generation for recurring invoices, cutting payment delays and collection overhead.",
          },
          {
            label: "Enterprises & Institutions",
            title: "High-Volume Architecture",
            desc: "High transaction throughput, fault tolerance, and deep integration with corporate ERP and management systems.",
          },
        ],
      },
      ecosystem: {
        kicker: "Channels & Methods",
        title: "Direct and unhindered access to the national payment ecosystem.",
        intro: "Direct connectivity to key rails within the Angolan interbank settlement infrastructure.",
        items: [
          {
            title: "Multicaixa References",
            desc: "Instant reference generation for payment settlement via ATM, online banking, and banking apps.",
            tag: "Multicaixa",
          },
          {
            title: "GPO Multicaixa Express",
            desc: "Mobile-initiated payments using phone numbers with direct biometric user confirmation.",
            tag: "Express",
          },
          {
            title: "REST APIs & Webhooks",
            desc: "Real-time payment webhooks for instantaneous order and shipment synchronization.",
            tag: "Technology",
          },
          {
            title: "Financial Management Portal",
            desc: "Centralized dashboard displaying processing volume, analytics graphs, and statement export.",
            tag: "Analytics",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Structural Connection",
        title: "Direct, uninterrupted access to the national payment ecosystem.",
        lead: "Intelize serves as the technological bridge between formal banking systems and digital platforms, ensuring rock-solid stability during peak commercial hours.",
        points: [
          { title: "Uptime & High Availability", desc: "Redundant architecture ensuring no transaction is ever dropped or lost." },
          { title: "Compliance & Regulation", desc: "Strict alignment with National Bank of Angola (BNA) and EMIS standards." },
          { title: "Local Technical Support", desc: "Hands-on engineering support based in Luanda throughout onboarding and live operation." },
        ],
        highlightBox: {
          title: "Corporate Trust",
          desc: "More than a payment gateway, we are the liquidity and transactional stability partner for Angolan businesses.",
        },
      },
      relationDetail: {
        kicker: "Position in the Group",
        title: "The backbone of Grupo JC's digital economy.",
        body: "Intelize embodies Grupo JC's capacity to engineer fundamental fintech infrastructure for the national market. By supplying critical rails to sister companies and external corporate clients, Intelize accelerates Angola's transition toward a digital, transparent economy.",
      },
      need: "Reducing integration hurdles and helping businesses receive payments safely across the Angolan ecosystem.",
      solutions: ["Multicaixa References", "GPO Multicaixa Express", "Payment APIs", "Management Portal"],
      audience: ["SMEs", "Large Enterprises", "Startups", "Digital Platforms"],
      differentiators: ["Simple integration", "Security & compliance", "Flexibility", "Expert local support"],
      result: "Scalable infrastructure that grows with business demands and streamlines access to national payment rails.",
      relation: "Intelize represents Grupo JC's capacity to build mission-critical financial infrastructure for the market.",
    },
    {
      slug: "somoney",
      name: "SóMoney",
      category: "Serviços financeiros",
      tagline: "Your money with greater freedom and zero complications.",
      description:
        "A digital wallet created in Angola to transfer, pay, save, and manage funds anytime, directly from your mobile phone.",
      logo: "/companies/somoney.svg",
      website: "https://www.somoney.ao/",
      accent: "#17CFDA",
      heroKicker: "Digital Wallet & Financial Inclusion",
      role: {
        kicker: "Financial Autonomy",
        title: "A simpler, more effortless relationship with your finances.",
        lead: "Money should move at the pace of your life, without artificial barriers or endless queues.",
        body: "SóMoney was built to demystify daily financial transactions, allowing anyone to transfer funds, pay bills, or receive payments effortlessly and securely.",
        highlights: [
          { title: "Instant Transactions", desc: "Transfers and bill payments executed in the same split second." },
          { title: "Safe & Reliable Every Day", desc: "Biometric authentication and protected verification on every operation." },
          { title: "100% Intuitive Interface", desc: "Designed from the ground up for seamless, barrier-free usage." },
        ],
      },
      audienceValue: {
        kicker: "Designed for You",
        title: "Freedom for individuals, agility for merchants.",
        segments: [
          {
            label: "Individuals",
            title: "Simplify Daily Life",
            desc: "Send money, pay for utilities, and track transactions easily, quickly, and without hidden fees.",
          },
          {
            label: "Merchants & Freelancers",
            title: "Receive Payments Simply",
            desc: "Accept customer payments via smartphone QR codes without relying on expensive physical POS terminals.",
          },
          {
            label: "Families & Youth",
            title: "Financial Freedom",
            desc: "Send, receive, and budget money autonomously to meet daily needs and family support.",
          },
        ],
      },
      ecosystem: {
        kicker: "Wallet Capabilities",
        title: "Everything your financial routine demands.",
        intro: "A full digital experience allowing you to manage your funds from anywhere.",
        items: [
          {
            title: "Instant P2P Transfers",
            desc: "Send money to contacts in seconds using only their phone number.",
            tag: "Transfers",
          },
          {
            title: "QR Code Checkout",
            desc: "Pay in restaurants and physical stores simply by pointing your camera.",
            tag: "QR Code",
          },
          {
            title: "Easy Cash-In & Cash-Out",
            desc: "Deposit or withdraw cash easily through authorized agent partners.",
            tag: "Operations",
          },
          {
            title: "Top-Ups & Bill Settlement",
            desc: "Recharge phone airtime, data bundles, TV, and electricity without leaving the app.",
            tag: "Services",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Lifestyle & Convenience",
        title: "The SóMoney Experience: Crafted for real moments.",
        lead: "From sharing coffee with friends to monthly grocery shopping, SóMoney eliminates the hassle of handling loose change or visiting bank branches.",
        points: [
          { title: "Simple Bill Splitting", desc: "Share dinner or trip expenses among friends with instant split notifications." },
          { title: "Visual Balance Tracking", desc: "Clean, categorized spending history to monitor monthly inflows and outflows." },
          { title: "Inclusive Access", desc: "Engineered to empower unbanked and underserved populations with modern digital tools." },
        ],
        highlightBox: {
          title: "Financial Citizenship",
          desc: "SóMoney is an instrument of inclusion granting more Angolans autonomy over their own resources.",
        },
      },
      relationDetail: {
        kicker: "Group Commitment",
        title: "Accelerating financial inclusion across Angola.",
        body: "SóMoney reflects Grupo JC's commitment to building solutions that connect Angolans with formal digital finance. Democratizing digital payments is essential for family empowerment and community economic dynamism.",
      },
      need: "Simplifying everyday financial life for individuals and merchants through accessible, fast, and secure digital operations.",
      solutions: ["Digital Wallet", "Transfers", "Payments", "Deposits", "Withdrawals", "QR Code Payments"],
      audience: ["Individuals", "Merchants", "Enterprises", "Digital Users"],
      differentiators: ["Angolan wallet", "Frictionless UX", "Security", "All-in-one hub"],
      result: "An integrated financial experience granting people true autonomy over their money.",
      relation: "SóMoney embodies Grupo JC's vision for accessible, user-friendly digital financial services.",
    },
    {
      slug: "ada",
      name: "ADA",
      category: "Tecnologia",
      tagline: "We design and build the digital products that shape tomorrow.",
      description:
        "We combine strategic thinking, human-centered design, and software engineering to create platforms, apps, and digital ecosystems that solve real business challenges.",
      logo: "/companies/ada.svg",
      website: "https://adas.ao/",
      accent: "#8858F9",
      heroKicker: "Strategy, Experience Design & Software Engineering",
      role: {
        kicker: "Product Philosophy",
        title: "Technology is only great when it is useful, intuitive, and enduring.",
        lead: "We never build software solely for code, nor design interfaces purely for visual aesthetics.",
        body: "ADA operates at the exact intersection of user needs and organizational strategy. Every solution we engineer stems from deep context research and is constructed with scalable architectures ready to evolve.",
        highlights: [
          { title: "End-to-End Vision", desc: "From initial concept strategy through launch and continuous lifecycle evolution." },
          { title: "Human-Centered Design", desc: "Intuitive user interfaces that facilitate rapid adoption and minimize learning curves." },
          { title: "Scalable Engineering", desc: "Modern architectures built to grow seamlessly alongside business maturity." },
        ],
      },
      audienceValue: {
        kicker: "Who We Build For",
        title: "Product partner for teams that demand uncompromising quality.",
        segments: [
          {
            label: "Transforming Enterprises",
            title: "Digital Modernization",
            desc: "Replacing legacy manual processes with agile, integrated, and intuitive cloud platforms.",
          },
          {
            label: "Startups & Ventures",
            title: "Concept to Market",
            desc: "Rapid prototyping, MVP validation, and robust engineering to accelerate market traction.",
          },
          {
            label: "Institutions & Corporations",
            title: "Mission-Critical Systems",
            desc: "Secure, high-availability platforms engineered to meet stringent regulatory compliance requirements.",
          },
        ],
      },
      ecosystem: {
        kicker: "Technical Capabilities",
        title: "Comprehensive solutions for demanding digital ecosystems.",
        intro: "A multidisciplinary team mastering every stage of the technology product lifecycle.",
        items: [
          {
            title: "Mobile & Web Applications",
            desc: "Responsive and native experiences focused on performance, smoothness, and visual fidelity.",
            tag: "Mobile & Web",
          },
          {
            title: "Custom Software & Platforms",
            desc: "Tailor-made systems built specifically for your organization's workflows and business rules.",
            tag: "Engineering",
          },
          {
            title: "UI/UX Design & Design Systems",
            desc: "Cohesive visual languages, accessible component libraries, and rigorous user testing.",
            tag: "Design",
          },
          {
            title: "API Architecture & Integrations",
            desc: "Secure, resilient connections across disparate software architectures and third-party services.",
            tag: "Infrastructure",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Delivery Methodology",
        title: "The Digital Product Cycle: How we translate vision into functional reality.",
        lead: "We employ agile methodologies and rapid iterations to ensure every release delivers tangible business and user value.",
        points: [
          { title: "01. Discovery & Strategy", desc: "Requirement mapping, user research, and technical product vision definition." },
          { title: "02. Prototyping & Validation", desc: "Wireframing, interactive prototypes, and usability validation before code is written." },
          { title: "03. Engineering & Quality", desc: "Clean code development, automated test suites, and security by default." },
          { title: "04. Launch & Continuous Evolution", desc: "Usage metrics monitoring, telemetry, and ongoing feature enhancement." },
        ],
        highlightBox: {
          title: "Group Digital Accelerator",
          desc: "ADA also serves as the creative engine designing and optimizing digital platforms across all Grupo JC companies.",
        },
      },
      relationDetail: {
        kicker: "Structural Role",
        title: "The digital accelerator of the entire JC ecosystem.",
        body: "Beyond delivering solutions for market clients and partners, ADA concentrates product, design, and engineering expertise that powers sister companies in Grupo JC, ensuring high standards of user experience and technological innovation.",
      },
      need: "Turning business goals into clear, durable, and scalable digital products.",
      solutions: ["Custom Software", "Mobile Apps", "Web Platforms", "Digital Product", "UI/UX Design"],
      audience: ["Enterprises", "Startups", "Institutions", "Product Teams"],
      differentiators: ["End-to-end vision", "User-centered design", "Technical rigor", "Market insight"],
      result: "Digital products built from strategy to deployment, focused on outstanding experience and real impact.",
      relation: "ADA concentrates product, design, and development capabilities that empower the entire group.",
    },
    {
      slug: "itangola",
      name: "ITAngola",
      category: "Tecnologia",
      tagline: "Reliable enterprise technology and management solutions for market leaders.",
      description:
        "We assist companies and institutions in modernizing operations, safeguarding mission-critical infrastructure, and training skilled teams.",
      logo: "/companies/itangola.svg",
      website: "https://it-angola.com/",
      accent: "#47BCD2",
      heroKicker: "Enterprise Technology, Infrastructure & Management",
      role: {
        kicker: "Operational Reliability",
        title: "The security of proven expertise in local market realities.",
        lead: "No organization can thrive without streamlined business processes and resilient IT infrastructure.",
        body: "ITAngola combines deep experience in the Angolan business landscape with international best practices to implement leading ERPs, deploy robust network backbones, and safeguard critical data assets.",
        highlights: [
          { title: "Proven Track Record", desc: "Years of active support to premier enterprises across diversified sectors." },
          { title: "Certified Solutions", desc: "Partnerships and certifications with premier global business technology providers." },
          { title: "Hands-On Support", desc: "Local engineering teams ready for prompt, accurate field intervention." },
        ],
      },
      audienceValue: {
        kicker: "Clients & Organizations",
        title: "Tailored responses for mission-critical operations.",
        segments: [
          {
            label: "Medium & Large Enterprises",
            title: "Control & Operational Efficiency",
            desc: "Unified ERP implementation connecting accounting, payroll, treasury, and inventory management.",
          },
          {
            label: "Public & Private Institutions",
            title: "Infrastructure & Networks",
            desc: "High-uptime connectivity, local data centers, and cybersecurity audits for sensitive asset protection.",
          },
          {
            label: "Executives & Professionals",
            title: "Continuous Upskilling",
            desc: "Practical corporate training to elevate technical fluency across day-to-day management tools.",
          },
        ],
      },
      ecosystem: {
        kicker: "Solutions Portfolio",
        title: "Integrated technology to modernize your organization.",
        intro: "Enterprise services and tools crafted to guarantee business continuity, governance, and transparency.",
        items: [
          {
            title: "ERP & Enterprise Management",
            desc: "Configuration, customization, and support for market-leading accounting and billing systems.",
            tag: "Systems",
          },
          {
            title: "Networks & IT Infrastructure",
            desc: "Structured cabling design, server farms, and secure enterprise communications.",
            tag: "Infrastructure",
          },
          {
            title: "Cybersecurity & Continuity",
            desc: "Next-gen firewalls, automated off-site backups, and disaster recovery planning.",
            tag: "Security",
          },
          {
            title: "IT Consulting & Auditing",
            desc: "Digital maturity assessments and strategic IT infrastructure modernization roadmaps.",
            tag: "Consulting",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Academy & Corporate Training",
        title: "Professional Enablement: Technology only creates value when teams master it.",
        lead: "We believe real productivity gains occur when professionals feel confident and qualified to leverage modern digital tools to their fullest potential.",
        points: [
          { title: "Hands-on ERP Training", desc: "Practical workshops adapted to the daily workflows of each corporate department." },
          { title: "IT Admin Upskilling", desc: "Advanced training for internal systems, network, and cybersecurity administrators." },
          { title: "Local Talent Certification", desc: "Fostering elite digital competencies that elevate national workforce value." },
        ],
        highlightBox: {
          title: "Guaranteed SLA & Support",
          desc: "Preventive and corrective maintenance agreements with rigorous response times to ensure business continuity.",
        },
      },
      relationDetail: {
        kicker: "Role in the Group",
        title: "The technological governance foundation of Grupo JC.",
        body: "ITAngola provides Grupo JC with the organizational rigor required to manage complex operations with discipline and compliance. It is the pillar ensuring that the group's innovation vision rests upon a secure, certified, and enterprise-grade foundation.",
      },
      need: "Supporting organizations in modernizing workflows and securing IT operations and infrastructure.",
      solutions: ["ERP & Management", "IT Consulting", "Networks", "Cybersecurity", "Corporate Training"],
      audience: ["Enterprises", "Institutions", "Management Teams", "IT Professionals"],
      differentiators: ["Local expertise", "Certified solutions", "Prompt technical support", "Certified training"],
      result: "Streamlined business processes, upskilled teams, and IT systems ready to drive business growth.",
      relation: "ITAngola anchors Grupo JC's enterprise backbone through technology, management, and training.",
    },
    {
      slug: "kwanzabet",
      name: "KwanzaBet",
      category: "Entretenimento",
      tagline: "The thrill of sports combined with digital speed and convenience.",
      description:
        "A vibrant digital platform tailored for Angola, bringing fans the finest sports betting and online entertainment with security, speed, and simplicity.",
      logo: "/companies/kwanzabet.svg",
      website: "https://www.kwanzabet.ao/pt/",
      accent: "#DDDC23",
      heroKicker: "Digital Entertainment & Interactive Sports",
      role: {
        kicker: "Passion & Proximity",
        title: "Built with the Angolan sports enthusiast in mind.",
        lead: "Sports thrive on passionate emotion and unforgettable moments shared among friends and supporters.",
        body: "KwanzaBet brings fans closer to their favorite clubs and tournaments via a seamless digital platform supporting local payment methods and a diverse catalog of responsible interactive entertainment.",
        highlights: [
          { title: "Extensive Sports Coverage", desc: "National and international championships with real-time match tracking." },
          { title: "Fast Local Payments", desc: "Instant deposits and withdrawals through Angola's most popular payment rails." },
          { title: "Optimized Navigation", desc: "Lightweight, responsive interface tailored for all mobile devices." },
        ],
      },
      audienceValue: {
        kicker: "User Experience",
        title: "Entertainment tailored to national sports passion.",
        segments: [
          {
            label: "Sports Fans",
            title: "Excitement Before & During the Game",
            desc: "Pre-match and in-play betting across top football, basketball, and world sports leagues.",
          },
          {
            label: "Mobile Users",
            title: "Speed in the Palm of Your Hand",
            desc: "Lightning-fast access from any smartphone with instant bet confirmations and live results.",
          },
          {
            label: "Adult Audience",
            title: "Safe Digital Leisure",
            desc: "Fast games, slots, and virtual casino in a regulated, secure, and transparent environment.",
          },
        ],
      },
      ecosystem: {
        kicker: "Entertainment Offering",
        title: "Complete gaming entertainment in a single digital destination.",
        intro: "A broad spectrum of games and markets designed to the latest interactive industry standards.",
        items: [
          {
            title: "Live Sports Betting",
            desc: "Competitive odds and granular markets for the world's greatest sporting tournaments.",
            tag: "Sports",
          },
          {
            title: "Fast Games & Crash Titles",
            desc: "Instant-decision titles like Aviator, featuring dynamic multiplayer rounds and immediate payouts.",
            tag: "Crash Games",
          },
          {
            title: "Virtual Casino & Slots",
            desc: "Dozens of certified games featuring contemporary graphics, diverse themes, and audited mechanics.",
            tag: "Casino",
          },
          {
            title: "Campaigns & Promotions",
            desc: "Seasonal bonuses and transparent loyalty rewards celebrating community participation.",
            tag: "Rewards",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Social Responsibility & Ethics",
        title: "Responsible Gaming: Entertainment is only valuable when safe and conscious.",
        lead: "KwanzaBet actively fosters a gaming culture dedicated strictly to adult leisure (+18), supported by transparent player balance controls.",
        points: [
          { title: "Deposit & Session Limits", desc: "Integrated player tools to manage personal gaming parameters responsibly." },
          { title: "Age & ID Verification", desc: "Strict verification procedures ensuring zero underage participation." },
          { title: "Self-Exclusion Tools", desc: "Straightforward options to pause or suspend account activity at any time." },
        ],
        highlightBox: {
          title: "Lightweight, Accessible Tech",
          desc: "Engineered specifically for local network realities, ensuring smooth performance even under low-bandwidth connections.",
        },
      },
      relationDetail: {
        kicker: "Position in the Group",
        title: "Grupo JC's presence in digital entertainment.",
        body: "The digital universe spans workplace productivity, payments, and leisure. KwanzaBet represents Grupo JC's venture into digital entertainment, proving our ability to build high-traffic consumer platforms deeply connected with Angolan culture.",
      },
      need: "Creating an engaging, dynamic digital entertainment experience tailored to local consumer habits.",
      solutions: ["Sports betting", "Live events", "Online casino", "Aviator", "Promotions"],
      audience: ["Adult audience (+18)", "Sports enthusiasts", "Digital gamers"],
      differentiators: ["Localized experience", "Diverse gaming catalog", "Relevant campaigns", "Mobile platform"],
      result: "An entertainment brand with product, tone, and experience crafted specifically for the Angolan market.",
      relation: "KwanzaBet expands Grupo JC's ecosystem into interactive digital entertainment and leisure experiences.",
    },
  ],
  fr: [
    {
      slug: "pagaso",
      name: "PagaSó",
      category: "Pagamentos",
      tagline: "Des services essentiels à la portée de tous, partout dans le pays.",
      description:
        "Une plateforme dynamique qui relie agents, entreprises et particuliers grâce à des recharges, des paiements de services et des transactions quotidiennes simples et immédiates.",
      logo: "/companies/pagaso.svg",
      website: "https://www.pagaso.ao/",
      accent: "#bf181d",
      heroKicker: "Commerce Digital & Paiements du Quotidien",
      role: {
        kicker: "Proximité & Commodité",
        title: "Faciliter le quotidien là où se trouvent les gens.",
        lead: "Payer l'électricité, recharger son téléphone ou s'abonner à la télévision ne doit plus nécessiter de longs déplacements ni de démarches complexes.",
        body: "PagaSó transforme n'importe quel commerce de proximité en centre actif de services digitaux, garantissant que l'accès aux paiements essentiels soit aussi simple et direct que d'acheter du pain dans son quartier.",
        highlights: [
          { title: "Accès Universel", desc: "Présence dans les quartiers et centres urbains avec un accueil convivial." },
          { title: "Temps Réel", desc: "Confirmation instantanée de l'opération sur le terminal et le téléphone du client." },
          { title: "Zéro Friction", desc: "Des processus fluides qui font gagner du temps à l'agent comme au client." },
        ],
      },
      audienceValue: {
        kicker: "Le Triangle de Valeur",
        title: "Trois fronts. Un réseau en constante expansion.",
        segments: [
          {
            label: "Pour les Citoyens",
            title: "Commodité Immédiate",
            desc: "Recharges, télévision, électricité et services essentiels réglés à proximité, en toute sécurité et sans file d'attente.",
          },
          {
            label: "Pour les Agents",
            title: "Revenus & Autonomie",
            desc: "Un modèle d'affaires clé en main permettant aux commerçants et entrepreneurs de rentabiliser leur espace et d'accroître leurs revenus.",
          },
          {
            label: "Pour les Entreprises",
            title: "Capillarité & Portée",
            desc: "Les marques et prestataires de services bénéficient d'un vaste réseau de distribution qui rapproche leurs offres de millions de consommateurs.",
          },
        ],
      },
      ecosystem: {
        kicker: "Catalogue d'Opérations",
        title: "Tout ce que le quotidien exige sur un seul terminal.",
        intro: "Une gamme complète d'opérations pensée pour répondre aux besoins les plus fréquents des familles et des professionnels.",
        items: [
          {
            title: "Télécoms & Données",
            desc: "Recharges de crédit et forfaits internet pour tous les opérateurs mobiles en Angola.",
            tag: "Voix & Données",
          },
          {
            title: "Énergie & Services Publics",
            desc: "Paiement prépayé et règlement des factures d'électricité et d'eau sans déplacement.",
            tag: "Services publics",
          },
          {
            title: "Télévision & Streaming",
            desc: "Abonnement et renouvellement immédiats des principaux bouquets satellite et streaming.",
            tag: "Divertissement",
          },
          {
            title: "Services Digitaux & Jeux",
            desc: "Recharges de comptes de loisirs, cartes cadeaux et bons d'achat digitaux.",
            tag: "Digital",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Entrepreneuriat de Proximité",
        title: "La Force du Réseau : Bien plus qu'une technologie, un générateur de revenus locaux.",
        lead: "Chaque terminal PagaSó actif représente un commerce dynamisé et un entrepreneur qui diversifie ses recettes quotidiennes avec un règlement rapide et un accompagnement permanent.",
        points: [
          { title: "Formation Pratique Initiale", desc: "Prise en main directe des terminaux et bonnes pratiques commerciales." },
          { title: "Règlement & Support Réactif", desc: "Accès rapide au solde et assistance technique dédiée sur le terrain." },
          { title: "Technologie Résiliente", desc: "Terminaux et applications conçus pour fonctionner même en conditions réseau variables." },
        ],
        highlightBox: {
          title: "Impact sur le Commerce Local",
          desc: "Des milliers de micro-commerçants renforcent leur viabilité grâce à des commissions transparentes et un flux accru de clients.",
        },
      },
      relationDetail: {
        kicker: "Intégration au Groupe",
        title: "Le canal de distribution et de proximité de l'écosystème JC.",
        body: "Au sein du Grupo JC, nous sommes convaincus que l'innovation n'a de sens que lorsqu'elle profite à tous. PagaSó concrétise cette vision en reliant l'infrastructure digitale du groupe à l'économie réelle, tissant un lien direct au quotidien avec les familles et les petits commerçants en Angola.",
      },
      need: "Rendre les recharges et paiements plus accessibles tout en créant de nouvelles sources de revenus pour les agents et points de vente.",
      solutions: ["Recharges téléphoniques", "TV et internet", "Électricité", "Paris sportifs", "Réseau d'agents"],
      audience: ["Agents", "Commerçants", "Entreprises", "Consommateurs"],
      differentiators: ["Écosystème étendu", "Opérations en temps réel", "Couverture nationale", "Support de proximité"],
      result: "Un point d'accès simple aux services digitaux, conçu pour traiter des milliers d'opérations quotidiennes.",
      relation: "PagaSó étend la présence du Grupo JC dans le commerce digital et rapproche les services essentiels des populations.",
    },
    {
      slug: "intelize",
      name: "Intelize",
      category: "Pagamentos",
      tagline: "Des paiements fluides et sécurisés qui propulsent la croissance des entreprises.",
      description:
        "Nous simplifions l'acceptation et la gestion des paiements sur le marché angolais grâce à des API robustes, de multiples canaux et une plateforme de contrôle en temps réel.",
      logo: "/companies/intelize.svg",
      website: "https://www.intelize.ao/",
      accent: "#FF8722",
      heroKicker: "Infrastructure & Solutions de Paiement d'Entreprise",
      role: {
        kicker: "Ingénierie Financière",
        title: "Réduire les frictions entre vendeurs et acheteurs.",
        lead: "La croissance d'une entreprise repose sur sa capacité à encaisser rapidement, en toute sécurité et avec une totale transparence comptable.",
        body: "Intelize élimine les barrières opérationnelles, permettant aux entreprises de toutes tailles d'intégrer les principaux canaux de paiement du pays sans complexité technique ni retard de réconciliation.",
        highlights: [
          { title: "Intégration Simplifiée", desc: "API et SDK modernes documentés pour une activation rapide sur plateformes web et mobiles." },
          { title: "Réconciliation Automatique", desc: "Rapports de règlement clairs facilitant la clôture comptable quotidienne." },
          { title: "Sécurité Bancaire", desc: "Cryptage de bout en bout et surveillance active pour la prévention de la fraude." },
        ],
      },
      audienceValue: {
        kicker: "Segments Desservis",
        title: "Conçue pour évoluer selon la maturité de votre activité.",
        segments: [
          {
            label: "Startups & E-commerce",
            title: "Tunnel d'Achat sans Friction",
            desc: "Mise en service rapide et taux de conversion optimisés pour les activités en ligne.",
          },
          {
            label: "PME & Prestataires de Services",
            title: "Facturation Automatisée",
            desc: "Génération simplifiée de références de paiement, réduisant les délais de règlement.",
          },
          {
            label: "Grandes Entreprises & Institutions",
            title: "Architecture Haute Capacité",
            desc: "Forte capacité de traitement, tolérance aux pannes et intégration avec les ERP d'entreprise.",
          },
        ],
      },
      ecosystem: {
        kicker: "Canaux & Méthodes",
        title: "Accès direct et fluide à l'écosystème national des paiements.",
        intro: "Connectivité directe aux principaux circuits du système interbancaire angolais.",
        items: [
          {
            title: "Références Multicaixa",
            desc: "Émission instantanée de références pour paiement via GAB, banque en ligne et applications.",
            tag: "Multicaixa",
          },
          {
            title: "GPO Multicaixa Express",
            desc: "Paiements mobiles initiés par numéro de téléphone avec validation biométrique.",
            tag: "Express",
          },
          {
            title: "API REST & Webhooks",
            desc: "Notifications de paiement en temps réel pour synchronisation immédiate des commandes.",
            tag: "Technologie",
          },
          {
            title: "Portail de Gestion Financière",
            desc: "Tableau de bord centralisé avec métriques de volume, graphiques et export d'extraits.",
            tag: "Analytics",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Connexion Structurelle",
        title: "Accès direct et fiable à l'écosystème de paiement national.",
        lead: "Intelize constitue la passerelle technologique entre le système financier formel et les plateformes digitales, garantissant une stabilité sans faille lors des pics d'activité.",
        points: [
          { title: "Disponibilité & Résilience", desc: "Infrastructure redondante garantissant qu'aucune transaction ne soit perdue." },
          { title: "Conformité & Régulation", desc: "Alignement rigoureux avec les normes de la Banque Nationale d'Angola et de l'EMIS." },
          { title: "Support Technique Local", desc: "Accompagnement par des experts à Luanda tout au long de l'intégration." },
        ],
        highlightBox: {
          title: "Confiance d'Entreprise",
          desc: "Plus qu'une passerelle de paiement, nous sommes le partenaire de liquidité et de stabilité des entreprises angolaises.",
        },
      },
      relationDetail: {
        kicker: "Position au sein du Groupe",
        title: "La colonne vertébrale de l'économie digitale du Grupo JC.",
        body: "Intelize illustre la capacité du Grupo JC à bâtir des technologies fondamentales pour le système financier national. En fournissant une infrastructure critique aux entreprises du groupe et aux partenaires externes, Intelize accélère la transition de l'Angola vers une économie plus digitale et transparente.",
      },
      need: "Réduire la complexité des intégrations et aider les entreprises à encaisser en toute sécurité en Angola.",
      solutions: ["Références Multicaixa", "GPO Multicaixa Express", "API de paiement", "Portail de gestion"],
      audience: ["PME", "Grandes entreprises", "Startups", "Plateformes digitales"],
      differentiators: ["Intégration simple", "Sécurité et conformité", "Flexibilité", "Support expert"],
      result: "Une infrastructure qui accompagne l'expansion des entreprises et simplifie l'accès aux paiements nationaux.",
      relation: "Intelize incarne l'expertise du Grupo JC dans la conception d'infrastructures financières structurantes.",
    },
    {
      slug: "somoney",
      name: "SóMoney",
      category: "Serviços financeiros",
      tagline: "Votre argent en toute liberté et sans complications.",
      description:
        "Un portefeuille digital créé en Angola pour transférer, payer, épargner et gérer ses fonds à tout moment, directement depuis son téléphone.",
      logo: "/companies/somoney.svg",
      website: "https://www.somoney.ao/",
      accent: "#17CFDA",
      heroKicker: "Portefeuille Digital & Inclusion Financière",
      role: {
        kicker: "Autonomie Financière",
        title: "Une relation plus sereine avec vos finances.",
        lead: "L'argent doit suivre le rythme de vos journées, sans contraintes ni files d'attente interminables.",
        body: "SóMoney est né pour simplifier les opérations financières quotidiennes, permettant à chacun d'envoyer de l'argent, de régler des factures ou d'encaisser des paiements en toute facilité et sécurité.",
        highlights: [
          { title: "Opérations Instantanées", desc: "Des transferts et des paiements exécutés dans la même seconde." },
          { title: "Sûr & Efficace au Quotidien", desc: "Accès biométrique et confirmation protégée pour chaque transaction." },
          { title: "100% Intuitif et Accessible", desc: "Une interface claire pensée pour que chacun l'utilise sans difficulté." },
        ],
      },
      audienceValue: {
        kicker: "Conçu pour Vous",
        title: "Liberté pour les particuliers, dynamisme pour les commerces.",
        segments: [
          {
            label: "Particuliers",
            title: "Simplifier le Quotidien",
            desc: "Transférez de l'argent, réglez vos services et suivez vos dépenses de façon simple et rapide.",
          },
          {
            label: "Commerçants & Indépendants",
            title: "Encaisser en toute Simplicité",
            desc: "Acceptez les paiements de vos clients par QR Code sur mobile, sans matériel coûteux.",
          },
          {
            label: "Familles & Jeunes",
            title: "Plus d'Autonomie",
            desc: "Envoyez, recevez et gérez vos ressources financières en toute indépendance.",
          },
        ],
      },
      ecosystem: {
        kicker: "Fonctionnalités du Portefeuille",
        title: "Tout ce dont votre routine financière a besoin.",
        intro: "Une expérience digitale complète pour piloter votre solde où que vous soyez.",
        items: [
          {
            title: "Transferts P2P Immédiats",
            desc: "Envoi d'argent entre contacts en quelques secondes grâce au numéro de téléphone.",
            tag: "Transferts",
          },
          {
            title: "Paiement par QR Code",
            desc: "Achats dans les commerces physiques et restaurants en scannant simplement un code.",
            tag: "QR Code",
          },
          {
            title: "Dépôts & Retraits Faciles",
            desc: "Alimentez votre portefeuille ou retirez des fonds auprès des partenaires agréés.",
            tag: "Opérations",
          },
          {
            title: "Recharges & Factures",
            desc: "Paiement de crédit téléphonique, internet, télévision et électricité depuis l'application.",
            tag: "Services",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Style de Vie & Commodité",
        title: "L'Expérience SóMoney : Faite pour les moments réels.",
        lead: "Du café entre amis aux courses du mois, SóMoney élimine les contraintes de monnaie physique et les déplacements inutiles en agence.",
        points: [
          { title: "Partage de Frais Simple", desc: "Partagez l'addition d'un repas ou d'une sortie avec notifications directes." },
          { title: "Suivi Visuel du Budget", desc: "Historique clair et catégorisé pour suivre vos entrées et sorties d'argent." },
          { title: "Accès Inclusif", desc: "Conçu pour donner accès aux outils financiers modernes à ceux qui étaient non bancarisés." },
        ],
        highlightBox: {
          title: "Citoyenneté Financière",
          desc: "SóMoney est un outil d'inclusion accordant à davantage d'Angolais la maîtrise de leurs propres ressources.",
        },
      },
      relationDetail: {
        kicker: "L'Engagement du Groupe",
        title: "Accélérer l'inclusion financière en Angola.",
        body: "SóMoney traduit l'engagement du Grupo JC à concevoir des solutions rapprochant les Angolais de la finance digitale formelle. Démocratiser l'accès aux outils de paiement numérique est fondamental pour l'autonomie des familles et l'essor économique des communautés.",
      },
      need: "Faciliter le quotidien financier des particuliers et des professionnels avec des opérations digitales accessibles et sécurisées.",
      solutions: ["Portefeuille Digital", "Transferts", "Paiements", "Dépôts", "Retraits", "Paiement QR Code"],
      audience: ["Particuliers", "Commerçants", "Entreprises", "Utilisateurs digitaux"],
      differentiators: ["Portefeuille angolais", "Expérience fluide", "Sécurité", "Services tout-en-un"],
      result: "Une expérience financière intégrée qui redonne aux citoyens une réelle autonomie sur leur argent.",
      relation: "SóMoney matérialise la vision du Grupo JC pour des services financiers simples, inclusifs et de proximité.",
    },
    {
      slug: "ada",
      name: "ADA",
      category: "Tecnologia",
      tagline: "Nous concevons et développons les produits digitaux qui façonnent l'avenir.",
      description:
        "Nous unissons vision stratégique, design centré sur l'humain et ingénierie logicielle pour créer des plateformes, des applications et des écosystèmes digitaux à fort impact.",
      logo: "/companies/ada.svg",
      website: "https://adas.ao/",
      accent: "#8858F9",
      heroKicker: "Stratégie, Design d'Expérience & Ingénierie Logicielle",
      role: {
        kicker: "Philosophie Produit",
        title: "La technologie n'est excellente que lorsqu'elle est utile, intuitive et durable.",
        lead: "Nous ne créons pas de logiciels uniquement pour le code, ni d'interfaces seulement pour l'esthétique.",
        body: "ADA opère à l'intersection exacte des besoins utilisateurs et des objectifs stratégiques de l'organisation. Chaque solution développée est issue d'une analyse approfondie du contexte et repose sur une architecture évolutive.",
        highlights: [
          { title: "Vision de Bout en Bout", desc: "De la stratégie initiale jusqu'au lancement et à la maintenance continue." },
          { title: "Design Centré sur l'Humain", desc: "Des interfaces claires qui facilitent l'adoption et réduisent le temps d'apprentissage." },
          { title: "Ingénierie Évolutive", desc: "Des architectures modernes prêtes à accompagner la croissance de l'entreprise." },
        ],
      },
      audienceValue: {
        kicker: "Pour Qui Nous Créons",
        title: "Partenaire produit pour les équipes qui exigent l'excellence.",
        segments: [
          {
            label: "Entreprises en Transformation",
            title: "Modernisation Digitale",
            desc: "Remplacement des processus historiques par des plateformes agiles, intégrées et intuitives.",
          },
          {
            label: "Startups & Nouveaux Projets",
            title: "Du Concept au Marché",
            desc: "Prototypage rapide, MVP et développement robuste pour accélérer l'acquisition d'utilisateurs.",
          },
          {
            label: "Institutions & Grands Comptes",
            title: "Systèmes Critiques",
            desc: "Plateformes sécurisées, hautement disponibles et conformes aux exigences réglementaires les plus strictes.",
          },
        ],
      },
      ecosystem: {
        kicker: "Compétences Techniques",
        title: "Des solutions complètes pour les écosystèmes digitaux exigeants.",
        intro: "Une équipe pluridisciplinaire maîtrisant l'ensemble du cycle de vie du produit technologique.",
        items: [
          {
            title: "Applications Mobiles & Web",
            desc: "Expériences réactives et fluides avec un accent mis sur la performance et la fidélité visuelle.",
            tag: "Mobile & Web",
          },
          {
            title: "Logiciels & Plateformes sur Mesure",
            desc: "Systèmes conçus sur mesure pour les besoins opérationnels spécifiques de votre organisation.",
            tag: "Ingénierie",
          },
          {
            title: "Design UI/UX & Design Systems",
            desc: "Langages visuels cohérents, bibliothèques de composants et tests d'ergonomie avancés.",
            tag: "Design",
          },
          {
            title: "Architecture d'API & Intégrations",
            desc: "Interconnexion sécurisée entre systèmes d'information multiples et services tiers.",
            tag: "Infrastructure",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Méthodologie de Réalisation",
        title: "Le Cycle du Produit Digital : Transformer une vision en réalité fonctionnelle.",
        lead: "Nous appliquons des méthodes agiles et des itérations courtes pour que chaque livraison apporte une valeur concrète.",
        points: [
          { title: "01. Découverte & Stratégie", desc: "Cartographie des besoins, recherche utilisateurs et définition de la vision produit." },
          { title: "02. Prototypage & Validation", desc: "Wireframes, prototypes interactifs et validation ergonomique." },
          { title: "03. Ingénierie & Qualité", desc: "Développement en code propre, tests automatisés et sécurité dès la conception." },
          { title: "04. Lancement & Évolution", desc: "Suivi des métriques d'usage et amélioration continue des fonctionnalités." },
        ],
        highlightBox: {
          title: "Accélérateur Digital du Groupe",
          desc: "ADA est également le pôle créatif qui conçoit et optimise les plateformes digitales de l'ensemble des filiales du Grupo JC.",
        },
      },
      relationDetail: {
        kicker: "Rôle Structurel",
        title: "L'accélérateur digital de tout l'écosystème JC.",
        body: "En plus de créer des solutions pour ses clients externes, ADA concentre des expertises de produit, de design et d'ingénierie qui renforcent les autres entités du Grupo JC, garantissant une cohérence et des standards d'expérience digitale élevés.",
      },
      need: "Transformer des enjeux d'affaires en produits digitaux clairs, utiles et pérennes.",
      solutions: ["Logiciels sur mesure", "Applications mobiles", "Plateformes web", "Produit digital", "Design UI/UX"],
      audience: ["Entreprises", "Startups", "Institutions", "Équipes produit"],
      differentiators: ["Vision globale", "Design axé utilisateur", "Rigueur technique", "Connaissance du marché"],
      result: "Des produits digitaux bâtis de la stratégie au déploiement, axés sur l'expérience et l'impact réel.",
      relation: "ADA concentre les expertises produit, design et développement qui dynamisent l'ensemble du groupe.",
    },
    {
      slug: "itangola",
      name: "ITAngola",
      category: "Tecnologia",
      tagline: "Une technologie fiable et des solutions de gestion pour les organisations leaders.",
      description:
        "Nous accompagnons entreprises et institutions dans la modernisation de leurs processus, la sécurisation de leurs infrastructures et la formation continue de leurs équipes.",
      logo: "/companies/itangola.svg",
      website: "https://it-angola.com/",
      accent: "#47BCD2",
      heroKicker: "Technologie d'Entreprise, Infrastructures & Gestion",
      role: {
        kicker: "Soutien Opérationnel",
        title: "La sérénité d'un partenaire qui maîtrise le marché local.",
        lead: "Aucune organisation ne peut prospérer sans processus de gestion clairs et infrastructures informatiques résilientes.",
        body: "ITAngola combine une longue expérience du tissu économique angolais avec les meilleures pratiques internationales pour déployer des ERP, concevoir des réseaux d'entreprise robustes et protéger les données critiques.",
        highlights: [
          { title: "Expérience Éprouvée", desc: "Des années d'accompagnement auprès d'entreprises de premier plan dans de multiples secteurs." },
          { title: "Solutions Certifiées", desc: "Partenariats et certifications avec les principaux éditeurs mondiaux de technologies de gestion." },
          { title: "Assistance Technique Locale", desc: "Des équipes sur place prêtes à intervenir avec rapidité et précision." },
        ],
      },
      audienceValue: {
        kicker: "Publics & Organisations",
        title: "Des réponses sur mesure pour le pilotage d'opérations critiques.",
        segments: [
          {
            label: "Moyennes & Grandes Entreprises",
            title: "Contrôle & Efficacité",
            desc: "Mise en œuvre d'ERP intégrés pour unifier comptabilité, ressources humaines, trésorerie et stocks.",
          },
          {
            label: "Institutions Publiques & Privées",
            title: "Infrastructures & Réseaux",
            desc: "Connectivité stable, datacenters locaux et audits de cybersécurité pour protéger les données sensibles.",
          },
          {
            label: "Cadres & Professionnels",
            title: "Montée en Compétences",
            desc: "Formations pratiques et certifiantes pour élever la maîtrise technique des équipes sur leurs outils.",
          },
        ],
      },
      ecosystem: {
        kicker: "Portefeuille de Solutions",
        title: "Des solutions intégrées pour moderniser votre organisation.",
        intro: "Services et outils conçus pour assurer la continuité opérationnelle et la transparence de votre entreprise.",
        items: [
          {
            title: "ERP & Gestion d'Entreprise",
            desc: "Paramétrage et maintenance des progiciels leaders de facturation, comptabilité et paie.",
            tag: "Systèmes",
          },
          {
            title: "Réseaux & Infrastructures IT",
            desc: "Conception et installation de câblages structurés, serveurs et télécommunications d'entreprise.",
            tag: "Infrastructure",
          },
          {
            title: "Cybersécurité & Continuité",
            desc: "Pare-feu, sauvegardes automatisées et plans de reprise d'activité après sinistre.",
            tag: "Sécurité",
          },
          {
            title: "Conseil & Audit Technologique",
            desc: "Diagnostics de maturité digitale et plans directeurs d'infrastructures informatiques.",
            tag: "Conseil",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Formation & Académie",
        title: "Montée en Compétences : La technologie ne crée de valeur que si les équipes la maîtrisent.",
        lead: "Nous pensons que le véritable gain de productivité survient lorsque les collaborateurs se sentent qualifiés et confiants dans l'utilisation des outils digitaux.",
        points: [
          { title: "Formation Pratique sur ERP", desc: "Ateliers adaptés aux flux de travail réels des différents départements." },
          { title: "Perfectionnement des Administrateurs IT", desc: "Entraînement avancé pour les équipes internes réseaux, serveurs et sécurité." },
          { title: "Valorisation du Talent Local", desc: "Développement de compétences de haut niveau valorisant les professionnels sur le marché." },
        ],
        highlightBox: {
          title: "Support & SLA Garanti",
          desc: "Contrats de maintenance préventive et corrective avec des délais d'intervention stricts pour assurer la continuité de service.",
        },
      },
      relationDetail: {
        kicker: "Rôle dans le Groupe",
        title: "Le socle de maturité technologique du Grupo JC.",
        body: "ITAngola confère au Grupo JC la solidité nécessaire pour gérer des opérations de grande envergure avec discipline et rigueur. C'est le maillon qui garantit que l'élan d'innovation du groupe s'appuie sur une base technique certifiée et sécurisée.",
      },
      need: "Accompagner les entreprises dans la modernisation de leurs processus et la sécurisation de leurs infrastructures.",
      solutions: ["ERP et Gestion d'entreprise", "Conseil IT", "Réseaux", "Cybersécurité", "Formation"],
      audience: ["Entreprises", "Institutions", "Équipes dirigeantes", "Professionnels IT"],
      differentiators: ["Expertise locale", "Solutions certifiées", "Support technique réactif", "Formations reconnues"],
      result: "Des organisations aux processus unifiés, des équipes formées et des technologies prêtes pour l'avenir.",
      relation: "ITAngola renforce le pôle d'entreprise du Grupo JC par la technologie, la gestion et la formation.",
    },
    {
      slug: "kwanzabet",
      name: "KwanzaBet",
      category: "Entretenimento",
      tagline: "L'émotion du sport alliée à la rapidité et la commodité du digital.",
      description:
        "Une plateforme dynamique conçue pour l'Angola, offrant aux passionnés la meilleure expérience de paris sportifs et de jeux en ligne, en toute sécurité, rapidité et simplicité.",
      logo: "/companies/kwanzabet.svg",
      website: "https://www.kwanzabet.ao/pt/",
      accent: "#DDDC23",
      heroKicker: "Divertissement Digital & Sport Interactif",
      role: {
        kicker: "Passion & Proximité",
        title: "Conçue pour les passionnés de sport et les utilisateurs angolais.",
        lead: "Le sport vit de l'intensité des émotions et du partage de moments uniques entre amis et supporters.",
        body: "KwanzaBet rapproche les supporters de leurs clubs et compétitions favoris grâce à une plateforme fluide, compatible avec les modes de paiement locaux et dotée d'une offre diversifiée de loisirs responsables.",
        highlights: [
          { title: "Large Couverture Sportive", desc: "Championnats nationaux et internationaux suivis à la seconde près." },
          { title: "Paiements Locaux Rapides", desc: "Dépôts et retraits instantanés via les canaux de paiement les plus populaires." },
          { title: "Navigation Optimisée", desc: "Interface fluide et légère adaptée à tous les types de téléphones." },
        ],
      },
      audienceValue: {
        kicker: "Expérience Utilisateur",
        title: "Un divertissement à la hauteur de la passion sportive nationale.",
        segments: [
          {
            label: "Passionnés de Sport",
            title: "L'Émotion Avant et Pendant le Match",
            desc: "Paris d'avant-match et en direct sur les plus grands championnats de football, basketball et sports mondiaux.",
          },
          {
            label: "Utilisateurs Mobiles",
            title: "La Vitesse au Bout des Doigts",
            desc: "Accès instantané depuis n'importe quel smartphone avec confirmation immédiate des tickets et résultats.",
          },
          {
            label: "Public Adulte (+18)",
            title: "Loisir Digital Sécurisé",
            desc: "Jeux instantanés, machines à sous et casino en ligne dans un environnement régulé et transparent.",
          },
        ],
      },
      ecosystem: {
        kicker: "Offre de Divertissement",
        title: "Un divertissement complet en une seule destination digitale.",
        intro: "Une variété de disciplines et de jeux conçus selon les standards les plus récents de l'industrie interactive.",
        items: [
          {
            title: "Paris Sportifs en Direct",
            desc: "Cotes compétitives et marchés détaillés pour les plus grands événements sportifs mondiaux.",
            tag: "Sport",
          },
          {
            title: "Jeux Rapides & Crash Games",
            desc: "Titres à décision instantanée comme Aviator, proposant des manches dynamiques et des gains immédiats.",
            tag: "Crash Games",
          },
          {
            title: "Casino Virtuel & Machines à Sous",
            desc: "Des dizaines de titres aux graphismes soignés, thématiques variées et mécaniques auditées.",
            tag: "Casino",
          },
          {
            title: "Campagnes & Avantages",
            desc: "Opérations promotionnelles régulières et récompenses transparentes pour fidéliser la communauté.",
            tag: "Avantages",
          },
        ],
      },
      exclusiveSection: {
        kicker: "Responsabilité Sociale & Éthique",
        title: "Jeu Responsable : Le divertissement n'a de valeur que s'il est conscient et encadré.",
        lead: "KwanzaBet promeut activement une culture du jeu dédiée exclusivement au loisir des adultes (+18 ans), avec des outils clairs de modération.",
        points: [
          { title: "Limites de Dépôt et de Temps", desc: "Outils intégrés permettant à chaque utilisateur de maîtriser son budget de jeu." },
          { title: "Contrôle d'Âge et d'Identité", desc: "Procédures de validation rigoureuses empêchant formellement l'accès aux mineurs." },
          { title: "Dispositifs d'Auto-Exclusion", desc: "Options simples pour suspendre temporairement ou définitivement son compte." },
        ],
        highlightBox: {
          title: "Technologie Légère et Accessible",
          desc: "Développée spécifiquement pour la réalité des réseaux angolais, garantissant une fluidité optimale même en bas débit.",
        },
      },
      relationDetail: {
        kicker: "Position au sein du Groupe",
        title: "La présence du Grupo JC dans le divertissement digital.",
        body: "L'univers numérique regroupe les outils de travail, les paiements et les loisirs. KwanzaBet matérialise l'engagement du Grupo JC dans le divertissement en ligne, démontrant sa capacité à créer des plateformes à fort trafic ancrées dans la culture locale.",
      },
      need: "Créer une expérience de divertissement digital conviviale, dynamique et adaptée aux usages du marché angolais.",
      solutions: ["Événements sportifs", "Paris sportifs", "Casino en ligne", "Aviator", "Promotions"],
      audience: ["Public adulte (+18)", "Supporters de sport", "Joueurs mobiles"],
      differentiators: ["Expérience localisée", "Offre riche", "Campagnes attractives", "Plateforme mobile"],
      result: "Une marque de divertissement avec un produit et une expérience conçus pour le contexte angolais.",
      relation: "KwanzaBet enrichit l'écosystème du Grupo JC avec des expériences digitales de loisirs et d'interactivité.",
    },
  ],
};
