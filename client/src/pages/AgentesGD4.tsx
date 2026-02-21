import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Bot, Zap, Shield, Clock, CheckCircle2, Timer } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { agentCategories, roadmap, impactMetrics, environmentalImpact } from "@/data/agentes";

export default function AgentesGD4() {
  const totalAgents = agentCategories.reduce((sum, cat) => sum + cat.agents.length, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src={IMAGES.aiAgents} alt="" role="presentation" aria-hidden="true" className="w-full h-full object-cover opacity-15" loading="eager" decoding="async" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="container relative z-10">
          <Link href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-md">
            <span className="inline-flex items-center gap-2 text-sm text-[#5D5D5D] hover:text-white transition-colors font-display">
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar para Home
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold font-display text-[#FB0047] mb-6 px-4 py-1.5 rounded-full border border-[#FB0047]/20 bg-[#FB0047]/5">
              <Bot size={14} />
              Inteligência Artificial para Construção Civil
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Agentes <span className="gradient-text">GD4</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#CCCCCC] leading-relaxed mb-6 max-w-2xl" style={{ lineHeight: '150%' }}>
              {totalAgents} agentes de IA especializados em validação de documentos da construção civil.
              De CNPJ a NR-35, de ART a GFIP — cada agente é treinado para um tipo específico de documento.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Bot, label: `${totalAgents} Agentes` },
                { icon: Zap, label: "80% Mais Rápido" },
                { icon: Shield, label: "Precisão >97%" },
                { icon: Clock, label: "24/7 Disponível" },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-sm text-[#CCCCCC] font-display px-4 py-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <badge.icon size={14} className="text-[#FB0047]" />
                  {badge.label}
                </span>
              ))}
            </div>

            <a
              href="#agentes"
              className="inline-flex items-center gap-2 bg-[#FB0047] hover:bg-[#FF1A5E] text-white font-bold font-display px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FB0047]/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Ver Todos os Agentes
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What are GD4 */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                O que são os Agentes <span className="gradient-text">GD4</span>?
              </h2>
              <div className="space-y-4 text-[#CCCCCC] leading-relaxed text-lg" style={{ lineHeight: '150%' }}>
                <p>
                  Os Agentes GD4 são sistemas de inteligência artificial especializados
                  que automatizam a validação de documentos obrigatórios na construção civil.
                  Cada agente é treinado para analisar um tipo específico de documento —
                  desde certidões da Receita Federal até certificados de NR-35 — e validar
                  se está completo, correto e em conformidade com a legislação vigente.
                </p>
                <p>
                  Eles cobrem as 4 categorias fundamentais de compliance na construção:
                  documentos de <strong className="text-white">empresa/fornecedor</strong>,
                  de <strong className="text-white">trabalhador</strong>,
                  <strong className="text-white"> técnicos</strong> e
                  <strong className="text-white"> fiscais</strong>.
                  Um agente orquestrador coordena todos os demais e gera um score
                  consolidado de conformidade.
                </p>
              </div>

              <div className="glass-card gradient-border p-6 mt-8 glow-blue">
                <h3 className="text-white font-bold font-display mb-2">GD4 = Gestão de Documentos 4.0</h3>
                <p className="text-[#CCCCCC] text-sm leading-relaxed" style={{ lineHeight: '150%' }}>
                  Representa a quarta evolução em gestão documental: do <strong className="text-white">papel</strong> para
                  o <strong className="text-white">digital</strong>, do digital para a <strong className="text-white">nuvem</strong>,
                  da nuvem para a <strong className="text-white">automação</strong>, e da automação para a
                  <strong className="text-[#FB0047]"> inteligência artificial autônoma</strong>.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Como Funciona</h2>
              <p className="text-[#5D5D5D] text-lg">Do upload à validação em 4 etapas</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Upload", desc: "Fornecedor envia o documento via plataforma web ou app GD4 Obra" },
              { step: "02", title: "Classificação", desc: "O Orquestrador identifica o tipo e aciona o agente especializado" },
              { step: "03", title: "Validação", desc: "O agente extrai dados, cruza com bases oficiais e valida conformidade" },
              { step: "04", title: "Parecer", desc: "Aprovado ou reprovado com justificativa técnica em tempo real" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-6 text-center h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#FB0047]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold font-display text-[#FB0047]">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5D5D5D]" style={{ lineHeight: '150%' }}>{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 21 Agents by Category */}
      <div className="section-divider" />
      <section id="agentes" className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                Os <span className="gradient-text">{totalAgents} Agentes</span> Especializados
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                Organizados por categoria de documento. Cada agente é um especialista
                treinado para validar um tipo específico de documento da construção civil.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-12">
            {agentCategories.map((cat, catIdx) => (
              <SectionReveal key={catIdx} delay={catIdx * 0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-8 rounded-full bg-[#FB0047]" />
                    <h3 className="text-xl font-bold font-display text-white">{cat.category}</h3>
                    <span className="text-xs text-[#5D5D5D] bg-white/5 px-2.5 py-0.5 rounded-full font-display">
                      {cat.agents.length} {cat.agents.length === 1 ? "agente" : "agentes"}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.agents.map((agent, i) => (
                      <div key={i} className="glass-card glass-card-hover gradient-border p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#FB0047]/10">
                          <agent.icon size={18} className="text-[#FB0047]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold font-display text-white mb-1">{agent.name}</h4>
                          <p className="text-xs text-[#5D5D5D] leading-relaxed mb-2">{agent.desc}</p>
                          <div className="flex items-center gap-4 text-xs text-[#5D5D5D]">
                            <span className="flex items-center gap-1">
                              <Timer size={10} /> {agent.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <CheckCircle2 size={10} className="text-emerald-500" /> {agent.precision}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Impacto Mensurável</h2>
              <p className="text-[#5D5D5D] text-lg">Resultados reais em clientes que usam os Agentes GD4</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-6 text-center glow-blue">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    className="text-4xl lg:text-5xl font-bold font-display text-[#FB0047]"
                  />
                  <p className="text-white font-bold font-display mt-2">{metric.label}</p>
                  <p className="text-xs text-[#5D5D5D] mt-1">{metric.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Ambiental */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Impacto Ambiental</h2>
              <p className="text-[#5D5D5D] text-lg">A digitalização que faz bem para o planeta</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {environmentalImpact.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-6 text-center">
                  <p className="text-3xl lg:text-4xl font-bold font-display text-emerald-400 mb-1">{item.value}</p>
                  <p className="text-white font-bold font-display text-sm">{item.label}</p>
                  <p className="text-xs text-[#5D5D5D] mt-1">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Roadmap de Evolução</h2>
              <p className="text-[#5D5D5D] text-lg">O futuro dos Agentes GD4</p>
            </div>
          </SectionReveal>

          <div className="max-w-2xl mx-auto space-y-6">
            {roadmap.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-6 flex items-start gap-4">
                  <div className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold font-display ${
                    item.status === "live"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : item.status === "beta"
                      ? "bg-[#FB0047]/20 text-[#FB0047]"
                      : "bg-white/10 text-[#CCCCCC]"
                  }`}>
                    {item.label}
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-display mb-1">{item.title}</h3>
                    <p className="text-sm text-[#5D5D5D]" style={{ lineHeight: '150%' }}>{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        id="demo"
        title="Veja os Agentes GD4 em ação"
        description={`Agende uma demonstração e descubra como ${totalAgents} agentes de IA podem automatizar a validação de documentos da sua construtora.`}
        ctaText="Agendar Demo ao Vivo"
        glow="amber"
      />
    </div>
  );
}
