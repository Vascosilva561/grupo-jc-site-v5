# Design system — Grupo JC

Este documento descreve os padrões visuais e de interação atualmente usados no
site. A Home (`home-v2`) é a principal referência visual; as páginas internas
reutilizam a mesma base através de `app/globals.css`.

Antes de criar CSS novo, reutilize os tokens e as classes globais existentes.
Quando uma regra se repetir em mais de uma página, transforme-a num token ou
componente partilhado em vez de duplicar valores.

## Fundamentos

### Cores

- Texto principal: `--ink` (`#111827`).
- Texto secundário: `--muted` (`#667085`).
- Texto/interação intermédia: `#475467`.
- Superfície principal: `--paper` (`#ffffff`).
- Superfície secundária: `--paper-2` (`#f7f8fa`).
- Cor de destaque: `--lime` (`#b9dcff`). Apesar do nome histórico, é o azul-claro da marca atual.
- Destaque forte/interação: `--lime-deep` (`#3ba3ff`).
- Divisórias: `--line` (`#e0e1e3`).
- Divisórias em fundos escuros: `--dark-line` (`rgba(255, 255, 255, .15)`).
- Fundos escuros: `--ink` ou `#101827`/`#111827` conforme o contexto existente.

Não introduza novas cores neutras para bordas, texto ou superfícies sem uma
necessidade concreta. As cores específicas das empresas são uma exceção
controlada e vivem em `app/data.ts` (`accent`, `companyChipThemes` e
`companyCardTints`).

### Tipografia

- A família única do sistema é Poppins, carregada em `app/layout.tsx` e exposta como `var(--display)` e `var(--body)`.
- Pesos disponíveis: 300, 400, 500, 600 e 700.
- Texto corrido: `--body-size` (`16px`) e `--body-leading` (`1.45`) por padrão.
- Títulos de secção: `--heading-size` (`clamp(42px, 4.5vw, 56px)` no desktop; até 44px em ecrãs pequenos).
- Títulos grandes da Home podem usar a escala específica de `home-v2`; não reduzir títulos hero para a escala de texto corrido.
- Use `letter-spacing` negativo apenas na tipografia de display, mantendo rótulos e texto auxiliar com espaçamento positivo.

### Layout e espaçamento

- Use `.shell` como contentor único: `1320px` de largura máxima, com gutters de 24px no desktop e 16px até 820px.
- Espaçamento vertical padrão: `--space-section` (`120px`) e `--space-section-mobile` (`80px`).
- Grelhas de informação usam divisórias de `1px var(--line)` e devem evitar margens internas que criem linhas desalinhadas.
- Breakpoints oficiais: `1100px` para trocar a navegação desktop, `820px` para reorganizar layouts e reduzir gutters, e `560px` para a composição de uma coluna.
- O header tem aproximadamente 86–90px no desktop e 72px em mobile. A Home v2 usa 90px; as páginas partilhadas usam 86px.

### Raios e formas

- Pílulas, botões, chips e filtros: `--button-radius` (`999px`).
- Cards da Home e páginas internas: normalmente 24–28px; banners maiores podem usar 34–40px.
- O modal de liderança usa raio de 24px; o botão de fechar é circular.
- Imagens editoriais quadradas e blocos de conteúdo da página “Sobre o Grupo” permanecem sem raio quando essa composição exigir uma linguagem mais editorial.

## Rótulos, links e botões

### Eyebrow

- Para páginas partilhadas, use `className="eyebrow"`.
- O bullet azul é criado automaticamente por `::before`; não adicione bolinhas, ícones ou marcadores alternativos.
- Em fundos escuros, acrescente `eyebrow--light`.
- O rótulo é uppercase, 12px, peso 600, line-height 1.4 e letter-spacing `0.033em`.
- A Home v2 mantém uma cópia visualmente equivalente chamada `home-v2-eyebrow`, incluindo `home-v2-eyebrow--light`. Use essa classe apenas dentro da Home v2 até existir uma consolidação global.

### Botões

- Fora da Home: `.button`.
- Home v2: `.home-v2-button`.
- Altura padrão: 64px; em mobile: 56px; peso 600; raio total.
- Primário escuro: `.button--dark` ou `.home-v2-button--dark` (`#475467`, hover `--ink`).
- Destaque: `.button--lime` ou `.home-v2-button--blue` (`--lime`, hover `--lime-deep`).
- Secundário: `.button--ghost` ou `.home-v2-button--outline`.
- Em fundos escuros, use `.button--outline-light` quando for necessário preservar contraste.
- Ícones de seta devem reutilizar `ArrowUpRight`/`ArrowRight`; no hover avançam ligeiramente para reforçar a ação.

### Links de texto

- Use `.text-link` nas páginas partilhadas e `.home-v2-text-link` na Home v2.
- O link usa sublinhado de 1px, padding inferior de 5px e seta com movimento subtil no hover.
- Não substituir links de texto por botões arredondados quando a ação for secundária/editorial.

## Componentes e padrões de interface

### Header e navegação

- O `.site-header` é fixo, com fundo translúcido e blur de 14px.
- Estados disponíveis: normal, `.site-header--dark`, `.site-header--transparent` e `.site-header--mobile-open`.
- A navegação desktop usa underline animado; o item atual usa `is-active` e `aria-current="page"`.
- A partir de 1100px, a navegação passa para menu móvel de ecrã completo. O menu bloqueia o scroll do body e fecha com `Escape`.
- O CTA do header é `.header-cta`; não usar `.button` para este CTA compacto.

### Hero e páginas internas

- Hero partilhado: `.page-hero-wrap` + `.page-hero` + `.page-hero-meta`.
- Hero de empresas: `.empresas-hero-wrap` + `.empresas-hero`.
- Conteúdo interno usa `.content-section`, `.content-grid`, `.content-main` e, quando necessário, `.dark-section`.
- O padrão de índice lateral é `.section-aside` + `.section-number`.

### Cards, grelhas e dados

- Cards de métricas, impacto, valores, empresas e notícias usam grelha com divisórias de 1px; não criar bordas duplas entre células.
- Cards interativos devem ter uma mudança subtil de fundo ou elevação no hover, sem sombras pesadas.
- Categorias e filtros usam `.chip`, `.chip-list`, `.filter-bar` ou `.empresas-filter-capsule`; todos são pill-shaped e reutilizam `--button-radius`.
- A página de empresas usa dados centralizados em `app/data.ts`; novos cards devem consumir esses dados e respeitar `accent`, `companyChipThemes` e `companyCardTints`.
- O carrossel da Home usa `CompanyCarousel`; reutilize o componente em vez de criar outro padrão de navegação.

### Home v2

- A Home está isolada pelo namespace `.home-v2`.
- Secções principais: hero, métricas, introdução, faixa de logos, ecossistema/carrossel, áreas, visão, impacto, carreiras e footer.
- Métricas: `.home-v2-metrics`; áreas: `.home-v2-area-grid` e `.home-v2-area`.
- A área de pagamentos é o cartão de destaque com `.home-v2-area--payments`; tecnologia e entretenimento permanecem em fundo escuro.
- A área `.home-v2-story` pode usar Spline através de `LazySpline`; deve existir fallback visual para falha ou ausência do recurso.
- A faixa de logos e outros marquees usam 28s linear; devem pausar no hover quando houver interação disponível.

### Modal e formulários

- O modal de liderança usa `.leadership-modal-root`, `.leadership-modal-backdrop`, `.leadership-modal-dialog` e `.leadership-modal-scroll`.
- Modal: largura máxima de 1040px, altura máxima de 90vh, padding interno de 48px e layout em duas colunas; passa a uma coluna em mobile.
- Formulários usam `.contact-form`, `.field-grid`, campos com underline e `.form-note`.
- Estados de sucesso devem usar `.form-success` e manter a hierarquia do CTA principal.

## Motion e interação

- Entrada de hero: `textLift`, `titleLift` e `stageIn`; devem ser suaves e não competir com o conteúdo.
- Reveals de scroll são aplicados por `MotionController` com `.reveal`/`.motion-item`, `IntersectionObserver` e atraso incremental curto.
- Hover de cards: elevação máxima aproximada de 4–5px e mudança de fundo subtil.
- O botão “Voltar ao topo” aparece depois de 500px de scroll, adapta-se a fundos escuros com `is-over-dark` e usa `focus-visible`.
- Todas as novas animações devem respeitar `@media (prefers-reduced-motion: reduce)`. Nesse modo, remova deslocamentos, loops e transições prolongadas.
- Prefira `transform`/`translate`, opacity e filtros leves; evite animações que alterem o layout.

## Acessibilidade e conteúdo

- O documento raiz usa `lang="pt-AO"`; manter português angolano consistente no conteúdo.
- Use landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`) e `aria-label` apenas quando o conteúdo visível não for suficiente.
- Imagens informativas precisam de `alt` descritivo; imagens decorativas devem usar `alt=""` e, quando apropriado, `aria-hidden="true"`.
- Estados ativos devem ser comunicados por `aria-current`; botões de menu e modal devem expor `aria-expanded`, `aria-controls` e/ou `aria-modal`.
- Toda interação nova deve ser utilizável por teclado. Preservar o fecho por `Escape`, o bloqueio de scroll durante o menu/modal e um estado `:focus-visible` perceptível.

## Assets e organização

- Logos do grupo: `public/brand/`.
- Logos das empresas: `public/companies/`.
- Ícones e ilustrações de impacto: `public/assets/`.
- Componentes reutilizáveis: `app/components/`; dados de conteúdo e temas: `app/data.ts`.
- Não embutir SVGs ou imagens repetidos diretamente em páginas quando o asset ou componente já existir.

## Critério de criação

1. Reutilize primeiro uma classe partilhada (`eyebrow`, `button`, `chip`, `text-link`, `.shell`).
2. Dentro da Home v2, use o namespace `home-v2-*` de forma consistente.
3. Se a regra aparecer em mais de uma página, crie/amplie um token global em vez de duplicar valores.
4. Novas cores, tipos de letra, raios e escalas só entram quando forem necessários para uma marca de empresa ou uma necessidade funcional específica.
5. Antes de concluir, valide desktop, tablet e mobile nos breakpoints oficiais e confirme o estado `prefers-reduced-motion`.

## Lacunas a resolver numa próxima iteração

- Consolidar `eyebrow`/`home-v2-eyebrow` e `button`/`home-v2-button` quando a Home puder consumir os componentes partilhados sem perda de fidelidade.
- Transformar as cores repetidas (`#475467`, `#f5f5f5`, `#f1faff` e estados de foco) em tokens globais para reduzir valores hardcoded em `globals.css`.
- Adicionar um estado `:focus-visible` global para links, botões, filtros e campos; atualmente o tratamento explícito está concentrado no botão “Voltar ao topo” e nos campos do formulário.
