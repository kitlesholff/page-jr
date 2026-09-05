const {
  useState,
  useEffect,
  useRef
} = React;
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav-header",
    "aria-label": "Navegação principal",
    onKeyDown: e => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        e.currentTarget.querySelector('button').focus();
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-content"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    className: "nav-logo-area",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo jr.jpg",
    alt: "",
    className: "nav-logo-img"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-logo-text"
  }, "JB Pinturas")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "menu-toggle",
    "aria-expanded": menuOpen,
    "aria-controls": "menu-principal",
    onClick: () => setMenuOpen(!menuOpen)
  }, menuOpen ? 'Fechar ✕' : 'Menu ☰'), /*#__PURE__*/React.createElement("div", {
    id: "menu-principal",
    className: 'nav-links' + (menuOpen ? ' is-open' : ''),
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio"
  }, "Antes e depois"), /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "Serviços"), /*#__PURE__*/React.createElement("a", {
    href: "#processo"
  }, "Como funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "Dúvidas"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "nav-contact"
  }, "Pedir orçamento ↗"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-chip"
  }, "Pintor Profissional • Junior Figueiredo"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "Uma nova cor.", /*#__PURE__*/React.createElement("br", null), "Um novo ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "ambiente.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "Pintura residencial, comercial e decorativa com cuidado em cada detalhe. Da preparação ao acabamento, seu espaço em boas mãos."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-group"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "btn-primary"
  }, "Solicitar Orçamento"), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    className: "btn-secondary"
  }, "Ver Galeria Antes e Depois")), /*#__PURE__*/React.createElement("div", {
    className: "hero-kpis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-item"
  }, /*#__PURE__*/React.createElement("h4", null, "Cuidado"), /*#__PURE__*/React.createElement("p", null, "Com o seu espaço")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-item"
  }, /*#__PURE__*/React.createElement("h4", null, "15+"), /*#__PURE__*/React.createElement("p", null, "Anos de experiência")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-item"
  }, /*#__PURE__*/React.createElement("h4", null, "Capricho"), /*#__PURE__*/React.createElement("p", null, "Em cada acabamento")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("figure", {
    className: "hero-visual-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "WhatsApp Image 2026-08-29 at 21.27.59 (2).jpeg",
    alt: "Ambiente interno com pintura branca e acabamento realizado pela JB Pinturas",
    fetchPriority: "high"
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Do preparo ao último detalhe"), /*#__PURE__*/React.createElement("h3", null, "Seu espaço, renovado."), /*#__PURE__*/React.createElement("p", null, "Um dos nossos trabalhos. Veja a transformação completa na galeria."), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio"
  }, "Conhecer o antes e depois ↗"))))));
}
function Marquee() {
  const keywords = ["Pintura Residencial", "Acabamentos Finos", "Texturas Decorativas", "Pintura Comercial", "Pintura Externa", "Efeito Cimento Queimado", "Pintura Artística"];
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, keywords.concat(keywords).map((kw, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "marquee-item"
  }, /*#__PURE__*/React.createElement("span", null, "•"), " ", kw))));
}

// SEÇÃO DE ANTES E DEPOIS COM AS FOTOS REAIS DO CLIENTE
function PortfolioBeforeAfter() {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [selected !== null]);
  const openPhoto = (event, project, phase) => {
    openerRef.current = event.currentTarget;
    setSelected({
      project,
      phase
    });
  };
  const cases = [{
    beforeImg: "WhatsApp Image 2026-08-29 at 21.27.59 (1).jpeg",
    afterImg: "WhatsApp Image 2026-08-29 at 21.27.59 (2).jpeg",
    title: "Ambiente Interno / Cozinha e Sala",
    desc: "Transformação completa: de paredes brutas com iluminação de obra para acabamento impecável, pintura branca uniforme e integração de ambientes limpa e refinada."
  }, {
    beforeImg: "WhatsApp Image 2026-08-29 at 21.27.59.jpeg",
    afterImg: "WhatsApp Image 2026-08-29 at 21.28.00.jpeg",
    title: "Tratamento de Infiltração e Pintura Final",
    desc: "Recuperação estrutural de parede danificada por umidade, seguida de blindagem, aplicação de massa fina e pintura de alto padrão com acabamento aveludado."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    className: "section-padding",
    style: {
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header",
    style: {
      textAlign: 'center',
      margin: '0 auto 60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Provas Reais de Execução"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Galeria Antes & Depois"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Veja a transformação dos nossos projetos. Toque nas fotos para ampliar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '60px'
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "project-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '8px',
      textAlign: 'center'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto 24px'
    }
  }, c.desc), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-card"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gallery-img-container",
    onClick: e => openPhoto(e, i, 'before'),
    "aria-label": 'Ampliar antes: ' + c.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "gallery-badge badge-before"
  }, "Antes"), /*#__PURE__*/React.createElement("img", {
    src: c.beforeImg,
    alt: 'Antes — ' + c.title,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "photo-hint"
  }, "Ampliar ↗")), /*#__PURE__*/React.createElement("div", {
    className: "gallery-content"
  }, /*#__PURE__*/React.createElement("h4", null, "Estado Inicial"), /*#__PURE__*/React.createElement("p", null, "Superfície bruta, desgastada ou com necessidade de correção estrutural profunda."))), /*#__PURE__*/React.createElement("div", {
    className: "gallery-card"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gallery-img-container",
    onClick: e => openPhoto(e, i, 'after'),
    "aria-label": 'Ampliar depois: ' + c.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "gallery-badge badge-after"
  }, "Depois"), /*#__PURE__*/React.createElement("img", {
    src: c.afterImg,
    alt: 'Depois — ' + c.title,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "photo-hint"
  }, "Ampliar ↗")), /*#__PURE__*/React.createElement("div", {
    className: "gallery-content"
  }, /*#__PURE__*/React.createElement("h4", null, "Resultado Final"), /*#__PURE__*/React.createElement("p", null, "Acabamento profissional entregue com perfeição, limpeza e requinte pela JB Pinturas.")))))))), /*#__PURE__*/React.createElement("dialog", {
    ref: dialogRef,
    className: "photo-dialog",
    "aria-labelledby": "photo-title",
    onCancel: () => setSelected(null),
    onClick: e => {
      if (e.target === e.currentTarget) setSelected(null);
    },
    onKeyDown: e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        setSelected(s => ({
          ...s,
          phase: s.phase === 'before' ? 'after' : 'before'
        }));
      }
    }
  }, selected && /*#__PURE__*/React.createElement("div", {
    className: "photo-dialog-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-dialog-header"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "photo-title"
  }, cases[selected.project].title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "photo-close",
    autoFocus: true,
    onClick: () => setSelected(null),
    "aria-label": "Fechar imagem"
  }, "✕")), /*#__PURE__*/React.createElement("img", {
    src: selected.phase === 'before' ? cases[selected.project].beforeImg : cases[selected.project].afterImg,
    alt: (selected.phase === 'before' ? 'Antes — ' : 'Depois — ') + cases[selected.project].title
  }), /*#__PURE__*/React.createElement("div", {
    className: "photo-switch",
    "aria-label": "Etapa do projeto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected.phase === 'before',
    onClick: () => setSelected({
      ...selected,
      phase: 'before'
    })
  }, "Antes"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected.phase === 'after',
    onClick: () => setSelected({
      ...selected,
      phase: 'after'
    })
  }, "Depois")))));
}
function Arguments() {
  const args = [{
    title: "Acabamento Fino Impecável",
    lede: "Superfícies totalmente niveladas e lixadas.",
    corpo: "Correção rigorosa de trincas e imperfeições antes da pintura final. O resultado visual é um toque aveludado e uniforme.",
    statNum: "+100%",
    statLabel: "Lisura e Uniformidade"
  }, {
    title: "Rapidez e Cumprimento de Prazos",
    lede: "Seu negócio ou rotina sem interrupções prolongadas.",
    corpo: "Cronograma de execução rigorosamente planejado para garantir que o espaço seja liberado no dia combinado.",
    statNum: "0 Dias",
    statLabel: "Atrasos Registrados"
  }, {
    title: "Proteção Total do Mobiliário",
    lede: "Zero preocupação com sujeira ou danos.",
    corpo: "Isolamento profissional de pisos, portas, rodapés e móveis com lonas e fitas especiais antes de qualquer demão.",
    statNum: "100%",
    statLabel: "Segurança de Bens"
  }, {
    title: "Durabilidade Estendida",
    lede: "Proteção contra infiltrações e desbotamento.",
    corpo: "Aplicação de fundos seladores e tintas com tecnologia avançada contra raios UV e umidade, garantindo anos de beleza.",
    statNum: "3x",
    statLabel: "Maior Durabilidade"
  }, {
    title: "Pinturas Artísticas e Decorativas",
    lede: "Personalização exclusiva para ambientes de destaque.",
    corpo: "Efeitos especiais como cimento queimado, paredes geométricas, texturas e pinturas artísticas sob medida.",
    statNum: "Exclusivo",
    statLabel: "Design Personalizado"
  }, {
    title: "Atendimento Direto com o Especialista",
    lede: "Sem intermediários ou surpresas no orçamento.",
    corpo: "Você negocia e planeja diretamente com o Junior Figueiredo, garantindo alinhamento técnico perfeito do início ao fim.",
    statNum: "1 a 1",
    statLabel: "Suporte Dedicado"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "argumentos",
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Diferenciais Técnicos"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Cuidado que aparece no resultado.")), /*#__PURE__*/React.createElement("div", {
    className: "arguments-grid"
  }, args.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "arg-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, item.lede), " ", item.corpo)), /*#__PURE__*/React.createElement("div", {
    className: "arg-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, item.statNum), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, item.statLabel)))))));
}
function PullBand() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pull-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", null, "\"Um ambiente bem pintado eleva a percepção de valor do seu negócio e traz paz para o seu lar.\"")));
}
function WhyNow() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Momento Ideal"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Por que renovar sua pintura agora?")), /*#__PURE__*/React.createElement("div", {
    className: "whynow-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whynow-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Valorização Imediata do Imóvel"), /*#__PURE__*/React.createElement("p", null, "Seja para atrair mais clientes na sua empresa ou para valorizar sua residência no mercado local, a pintura nova é o investimento com maior retorno visual instantâneo.")), /*#__PURE__*/React.createElement("div", {
    className: "whynow-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Prevenção de Danos Estruturais"), /*#__PURE__*/React.createElement("p", null, "Corrigir pequenas fissuras e aplicar impermeabilizantes evita infiltrações futuras que geram custos altíssimos de alvenaria e reforma pesada.")), /*#__PURE__*/React.createElement("div", {
    className: "whynow-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Renovação de Energias e Ambiente"), /*#__PURE__*/React.createElement("p", null, "Cores e acabamentos profissionais transformam a atmosfera do espaço, trazendo mais conforto, modernidade e bem-estar para quem frequenta.")))));
}
function ServiceSection() {
  const frentes = [{
    title: "Pintura Residencial",
    desc: "Casas e apartamentos com foco em estética e aconchego."
  }, {
    title: "Pintura Comercial",
    desc: "Lojas e escritórios que precisam impressionar clientes."
  }, {
    title: "Acabamentos Especiais",
    desc: "Efeitos decorativos modernos, texturas e pátinas."
  }, {
    title: "Pintura Externa e Fachadas",
    desc: "Proteção resistente contra sol, chuva e intempéries."
  }, {
    title: "Tratamento de Trincas",
    desc: "Correção profunda e preparação estrutural da parede."
  }, {
    title: "Consultoria de Cores",
    desc: "Orientação profissional para harmonização dos ambientes."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "servico",
    className: "section-padding",
    style: {
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container service-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Frentes de Trabalho"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Soluções completas em pinturas artísticas e decorativas."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '24px'
    }
  }, "O serviço da JB Pinturas foi desenhado sob medida para pequenos empresários e moradores locais que não aceitam meio-termo quando o assunto é o visual do seu patrimônio."), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "btn-primary"
  }, "Agendar Visita Técnica")), /*#__PURE__*/React.createElement("div", {
    className: "service-features-grid"
  }, frentes.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "service-feature-card"
  }, /*#__PURE__*/React.createElement("h4", null, f.title), /*#__PURE__*/React.createElement("p", null, f.desc))))));
}
function ProcessSection() {
  const steps = [{
    step: "01",
    title: "Contato Inicial & Alinhamento",
    deliverable: "Briefing Direto"
  }, {
    step: "02",
    title: "Visita Técnica & Orçamento",
    deliverable: "Proposta Transparente"
  }, {
    step: "03",
    title: "Proteção & Preparação de Superfícies",
    deliverable: "Lixamento e Isolamento"
  }, {
    step: "04",
    title: "Execução Fina & Aplicação",
    deliverable: "Acabamento Superior"
  }, {
    step: "05",
    title: "Limpeza Completa do Espaço",
    deliverable: "Ambiente Pronto"
  }, {
    step: "06",
    title: "Entrega Final & Garantia",
    deliverable: "Satisfação Total"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "processo",
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header",
    style: {
      textAlign: 'center',
      margin: '0 auto 60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Metodologia Passo a Passo"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Como o trabalho é executado com precisão.")), /*#__PURE__*/React.createElement("div", {
    className: "process-timeline"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "process-item"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "process-step-num"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "process-content"
  }, /*#__PURE__*/React.createElement("h4", null, s.title), /*#__PURE__*/React.createElement("p", null, "Executado pessoalmente por Junior Figueiredo."))), /*#__PURE__*/React.createElement("span", {
    className: "process-deliverable"
  }, s.deliverable))))));
}
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [{
    q: "Qual é a área de atendimento da JB Pinturas?",
    a: "Atendemos moradores locais e pequenos empresários na região e arredores, garantindo agilidade no deslocamento e orçamento."
  }, {
    q: "Preciso retirar os móveis do ambiente antes da pintura?",
    a: "Não é necessário se preocupar com isso. Nós realizamos todo o serviço de proteção de móveis, pisos e rodapés com lonas e fitas especiais antes de iniciar."
  }, {
    q: "O Junior Figueiredo executa o trabalho pessoalmente?",
    a: "Sim! Todo o projeto conta com a supervisão e execução direta do Junior, garantindo o padrão de acabamento exigido."
  }, {
    q: "Como é calculado o orçamento do serviço?",
    a: "O orçamento é feito mediante avaliação técnica do estado das paredes, metragem quadrada e complexidade dos acabamentos decorativos desejados."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "section-padding",
    style: {
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header",
    style: {
      textAlign: 'center',
      margin: '0 auto 60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-eyebrow"
  }, "Dúvidas Frequentes"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Tudo o que você precisa saber.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-accordion"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `faq-item ${openIndex === i ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "faq-question",
    "aria-expanded": openIndex === i,
    "aria-controls": 'faq-answer-' + i,
    onClick: () => setOpenIndex(openIndex === i ? null : i)
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, openIndex === i ? '−' : '+')), openIndex === i && /*#__PURE__*/React.createElement("div", {
    id: 'faq-answer-' + i,
    className: "faq-answer"
  }, f.a))))));
}
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    className: "final-cta-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "final-cta-box"
  }, /*#__PURE__*/React.createElement("h2", null, "Pronto para transformar o visual do seu espaço com padrão profissional?"), /*#__PURE__*/React.createElement("p", null, "Garanta um atendimento especializado com Junior Figueiredo e dê o acabamento que sua empresa ou residência merecem."), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      fontSize: '1.1rem',
      padding: '16px 36px'
    }
  }, "Conversar pelo WhatsApp"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo-area",
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo jr.jpg",
    alt: "JB Pinturas Logo",
    className: "nav-logo-img"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-logo-text"
  }, "JB Pinturas")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.9rem',
      maxWidth: '300px'
    }
  }, "Pinturas artísticas e decorativas internas e externas de altíssima qualidade para pequenos empresários e moradores locais.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Navegação"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio"
  }, "Antes & Depois")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#argumentos"
  }, "Benefícios")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "O Serviço")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#processo"
  }, "Processo")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Serviços"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "Residencial")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "Comercial")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "Fachadas")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servico"
  }, "Acabamentos Finos")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contato"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contato"
  }, "Orçamento Direto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "Dúvidas Frequentes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Junior Pintor Profissional"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("p", null, "© 2026 JB Pinturas - Pinturas Artísticas e Decorativas. Todos os direitos reservados."), /*#__PURE__*/React.createElement("p", null, "Desenvolvido com excelência operacional."))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navigation, null), /*#__PURE__*/React.createElement("main", {
    id: "inicio"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(PortfolioBeforeAfter, null), /*#__PURE__*/React.createElement(Arguments, null), /*#__PURE__*/React.createElement(PullBand, null), /*#__PURE__*/React.createElement(WhyNow, null), /*#__PURE__*/React.createElement(ServiceSection, null), /*#__PURE__*/React.createElement(ProcessSection, null), /*#__PURE__*/React.createElement(FaqSection, null), /*#__PURE__*/React.createElement(FinalCta, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
