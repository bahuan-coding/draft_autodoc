import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  FolderOpen, Users, Bot, Shield, CheckCircle2, Building2,
  AlertTriangle, FileCheck, GitBranch, Send, ClipboardCheck,
  UserCheck, BarChart3, Layers, Eye, Fingerprint, HardHat,
  Ruler, Briefcase, Clock, ArrowRight
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/images";

export default function FeaturesSection() {
  return (
    <>
      {/* ══════ PRODUTO 1: PROJETOS ══════ */}
      <div className="section-divider" />
      <section id="solucoes" className="py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <FolderOpen size={16} className="text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">Autodoc Projetos</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  O CDE que organiza{" "}
                  <span className="gradient-text">projetos, plantas e documentos</span>
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-8">
                  Ambiente Comum de Dados (CDE) para centralizar projetos arquitetônicos, estruturais, hidráulicos e elétricos. Controle de versões, workflow de aprovação e distribuição automática para equipes de campo e escritório.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: FolderOpen, label: "Gestão de Projetos e Plantas" },
                    { icon: GitBranch, label: "Controle de Revisões" },
                    { icon: Send, label: "Distribuição Automática" },
                    { icon: ClipboardCheck, label: "Workflow de Aprovação" },
                    { icon: Layers, label: "Visualizador BIM Integrado" },
                    { icon: Eye, label: "RDO — Registro Diário de Obra" },
                  ].map((feat) => (
                    <div key={feat.label} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <feat.icon size={15} className="text-blue-400 shrink-0" />
                      {feat.label}
                    </div>
                  ))}
                </div>

                <Link href="/projetos" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md inline-block">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-base hover:gap-3 transition-all duration-300 group">
                    Conheça o Autodoc Projetos
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.projetos}
                      alt="Interface do Autodoc Projetos"
                      className="w-full rounded-xl"
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ PRODUTO 2: WORKFORCE ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 overflow-hidden bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Users size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">Autodoc Workforce</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  Qualificação de fornecedores e{" "}
                  <span className="gradient-text-amber">compliance do canteiro</span>
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-8">
                  Homologação de fornecedores com checklist de documentos obrigatórios — CNPJ, CND, CRF, CNDT, ASO, NRs, FGTS, INSS. Controle de acesso biométrico ao canteiro e validação automática por IA via Agentes GD4.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: UserCheck, label: "Homologação de Fornecedores" },
                    { icon: Fingerprint, label: "Controle de Acesso Biométrico" },
                    { icon: FileCheck, label: "Validação de ASO, NRs, EPIs" },
                    { icon: Shield, label: "Compliance FGTS, INSS, CNDT" },
                    { icon: AlertTriangle, label: "Alertas de Vencimento" },
                    { icon: BarChart3, label: "Dashboard de Conformidade" },
                  ].map((feat) => (
                    <div key={feat.label} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <feat.icon size={15} className="text-amber-400 shrink-0" />
                      {feat.label}
                    </div>
                  ))}
                </div>

                <Link href="/workforce" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md inline-block">
                  <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-base hover:gap-3 transition-all duration-300 group">
                    Conheça o Autodoc Workforce
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.workforce}
                      alt="Interface do Autodoc Workforce"
                      className="w-full rounded-xl"
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ PRODUTO 3: AGENTES GD4 ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.aiAgents}
            alt=""
            role="presentation"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-12"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
        </div>

        <div className="container relative z-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Bot size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">Inteligência Artificial</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  <span className="gradient-text-amber">21 Agentes de IA</span>{" "}
                  validando documentos da sua obra
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-6">
                  Os Agentes GD4 validam automaticamente CNPJ na Receita Federal, Certidões Negativas de Débitos, CRF do FGTS, CNDT trabalhista, ASOs, certificados NR-18, NR-35, NR-10, ARTs no CREA, RRTs no CAU, GFIP/SEFIP e Notas Fiscais. Cada agente é especialista em um tipo de documento.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: "Empresa", docs: "CNPJ, CND, CRF, CNDT, Contrato Social", color: "blue" },
                    { label: "Trabalhador", docs: "ASO, NR-18, NR-35, NR-10, Ficha EPI", color: "amber" },
                    { label: "Técnico", docs: "ART, RRT, Alvará, Licença Ambiental", color: "teal" },
                    { label: "Fiscal", docs: "GFIP, GPS, NFS-e, Retenções INSS/IR", color: "blue" },
                  ].map((cat) => (
                    <div key={cat.label} className="glass-card gradient-border p-3.5">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                        cat.color === "amber" ? "text-amber-400" : cat.color === "teal" ? "text-teal-400" : "text-blue-400"
                      }`}>{cat.label}</p>
                      <p className="text-xs text-navy-400 leading-relaxed">{cat.docs}</p>
                    </div>
                  ))}
                </div>

                <Link href="/agentes-gd4" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-xl inline-block">
                  <span className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]">
                    Conheça os 21 Agentes
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="glass-card p-6 glow-amber gradient-border">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Bot size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Agente GD4 — Validador de CRF/FGTS</p>
                      <p className="text-xs text-navy-400">Processando Certidão de Regularidade...</p>
                    </div>
                    <span className="ml-auto text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      Ativo
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { step: "Extraindo dados da CRF — Caixa Econômica", status: "done" },
                      { step: "Validando CNPJ do fornecedor na Receita", status: "done" },
                      { step: "Verificando regularidade FGTS", status: "done" },
                      { step: "Cruzando com base de débitos trabalhistas", status: "done" },
                      { step: "Checando data de validade da certidão", status: "done" },
                      { step: "Gerando parecer de conformidade", status: "active" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        {item.status === "done" ? (
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full shrink-0"
                          />
                        )}
                        <span className={`text-sm ${item.status === "done" ? "text-navy-300" : "text-white font-medium"}`}>
                          {item.step}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-navy-400">Tempo: 1 min 47s</span>
                    <span className="text-xs text-emerald-400 font-medium">Precisão: 99.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ ATORES DA CONSTRUÇÃO ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Para cada ator da construção
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Uma solução para cada{" "}
                <span className="gradient-text">papel na obra</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Incorporadores, construtores, projetistas e empreiteiros — todos encontram
                na Autodoc as ferramentas certas para sua operação.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Incorporador",
                desc: "Simplifique a gestão de seus empreendimentos. Visão consolidada de projetos, documentos e compliance em todo o portfólio.",
                link: "/projetos",
                color: "blue",
              },
              {
                icon: HardHat,
                title: "Construtor",
                desc: "Controle o ciclo de vida, a produtividade e a qualidade da obra. Do planejamento à entrega, tudo em uma plataforma.",
                link: "/workforce",
                color: "amber",
              },
              {
                icon: Ruler,
                title: "Projetista",
                desc: "Coordene os projetos da obra e as entregas com softwares em BIM. Controle de revisões e distribuição automática.",
                link: "/projetos",
                color: "teal",
              },
              {
                icon: Briefcase,
                title: "Empreiteiro",
                desc: "Gerencie equipes de forma digital. Documentação de trabalhadores, ASOs, NRs e EPIs sempre em dia.",
                link: "/workforce",
                color: "amber",
              },
            ].map((persona, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={persona.link} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-xl block h-full">
                  <div className="glass-card glass-card-hover gradient-border p-7 h-full cursor-pointer group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      persona.color === "amber" ? "bg-amber-500/10" : persona.color === "teal" ? "bg-teal-500/10" : "bg-blue-500/10"
                    }`}>
                      <persona.icon size={24} className={
                        persona.color === "amber" ? "text-amber-400" : persona.color === "teal" ? "text-teal-400" : "text-blue-400"
                      } />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{persona.title}</h3>
                    <p className="text-sm text-navy-400 leading-relaxed mb-4">{persona.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPLIANCE RIBBON ══════ */}
      <div className="section-divider" />
      <section className="py-14 bg-navy-900/40 border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <p className="text-center text-xs text-navy-500 uppercase tracking-widest font-medium mb-6">
              Documentos validados automaticamente pelos Agentes GD4
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                "CNPJ", "CND Federal", "CRF/FGTS", "CNDT", "Contrato Social",
                "ASO", "NR-18", "NR-35", "NR-10", "NR-33", "Ficha de EPI",
                "ART", "RRT", "Alvará", "GFIP/SEFIP", "GPS", "NFS-e",
                "PCMSO", "PGR", "Seguro de Vida",
              ].map((doc) => (
                <span
                  key={doc}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-navy-300 border border-white/5 hover:border-amber-400/30 hover:text-white transition-all duration-300"
                >
                  {doc}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ JORNADA DA CONSTRUÇÃO INTELIGENTE ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Nossa história
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Jornada da <span className="gradient-text">construção inteligente</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Líderes em soluções digitais para redução de riscos e aumento de produtividade na construção civil.
              </p>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "Era 1.0", title: "Papel", desc: "Pastas físicas, cópias heliográficas e arquivos em estantes. Risco de extravio e versões desatualizadas.", color: "navy-400" },
              { year: "Era 2.0", title: "Digital", desc: "Digitalização de documentos, PDFs e planilhas Excel. Arquivos locais sem controle de versão.", color: "navy-300" },
              { year: "Era 3.0", title: "Nuvem", desc: "Plataformas cloud com CDE, controle de revisões e distribuição automática. A era do Autodoc Projetos.", color: "blue-400" },
              { year: "Era 4.0", title: "Inteligência Artificial", desc: "21 Agentes GD4 validando documentos automaticamente. Gestão de Documentos 4.0 — de minutos para segundos.", color: "amber-400" },
            ].map((era, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 border-${era.color} bg-navy-950 shrink-0 z-10`} />
                    {i < 3 && <div className="w-0.5 flex-1 bg-white/5" />}
                  </div>
                  <div className="pb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider text-${era.color}`}>{era.year}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-1">{era.title}</h3>
                    <p className="text-sm text-navy-400 leading-relaxed">{era.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POR QUE AUTODOC ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Por que a Autodoc
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                A plataforma que as{" "}
                <span className="gradient-text">maiores construtoras</span> escolheram
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                +20 anos de experiência em tecnologia para construção civil.
                Uma empresa Ambar, ao lado de Polar e Simple Wall.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Compliance Automático",
                desc: "Validação contínua de FGTS, INSS, CNDT, ASOs, NRs e certidões. Alertas automáticos antes do vencimento. Zero risco de multa por documentação irregular.",
              },
              {
                icon: Clock,
                title: "80% Menos Tempo",
                desc: "Validações que levavam 30-60 minutos por documento agora são concluídas em 2-5 minutos pelos Agentes GD4. Sua equipe foca na obra, não em papel.",
              },
              {
                icon: FolderOpen,
                title: "CDE + Workforce + IA",
                desc: "Projetos, plantas, documentos técnicos, fornecedores, trabalhadores e validação por IA em uma única plataforma. Do escritório ao canteiro.",
              },
              {
                icon: Users,
                title: "Portal do Fornecedor",
                desc: "Ambiente self-service onde fornecedores enviam documentos, acompanham status e recebem feedback em tempo real. Menos ligações, mais produtividade.",
              },
              {
                icon: Bot,
                title: "21 Agentes de IA",
                desc: "Cada agente especializado em um tipo de documento: CNPJ, CND, CRF, CNDT, ASO, NRs, ART, RRT, GFIP, NFS-e. Validação 24/7 com precisão superior a 97%.",
              },
              {
                icon: Building2,
                title: "Escalável",
                desc: "Da obra única ao portfólio de 200+ empreendimentos simultâneos. A plataforma cresce com sua operação, mantendo performance e controle.",
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card glass-card-hover gradient-border p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPARATIVO DE PRODUTOS ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Nossas soluções
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Três produtos, uma <span className="gradient-text">plataforma</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Autodoc Projetos",
                icon: FolderOpen,
                color: "blue",
                audience: "Projetistas, Coordenadores",
                highlights: ["CDE — Ambiente Comum de Dados", "Controle de revisões", "Workflow de aprovação", "Visualizador BIM integrado", "Distribuição automática"],
                link: "/projetos",
              },
              {
                name: "Autodoc Workforce",
                icon: Users,
                color: "amber",
                audience: "Suprimentos, RH, Compliance",
                highlights: ["Homologação de fornecedores", "Compliance trabalhista (FGTS, INSS)", "Controle de acesso biométrico", "Portal do fornecedor", "Alertas de vencimento"],
                link: "/workforce",
              },
              {
                name: "Agentes GD4",
                icon: Bot,
                color: "amber",
                audience: "Toda a operação",
                highlights: ["21 agentes de IA", "Validação automática de documentos", "Precisão >97%", "Disponível 24/7", "Orquestrador inteligente"],
                link: "/agentes-gd4",
              },
            ].map((product, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={product.link} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-xl block h-full">
                  <div className="glass-card gradient-border p-7 h-full flex flex-col cursor-pointer group hover:border-white/10 transition-colors">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      product.color === "amber" ? "bg-amber-500/10" : "bg-blue-500/10"
                    }`}>
                      <product.icon size={24} className={product.color === "amber" ? "text-amber-400" : "text-blue-400"} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-xs text-navy-500 mb-5">{product.audience}</p>
                    <ul className="space-y-2.5 flex-1">
                      {product.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-navy-300">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium mt-6 group-hover:gap-2 transition-all">
                      Ver detalhes <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
