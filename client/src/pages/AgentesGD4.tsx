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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.aiAgents} alt="" role="presentation" aria-hidden="true" className="w-full h-full object-cover opacity-20" loading="eager" decoding="async" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        </div>

        <div className="container relative z-10">
          <Link href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md">
            <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors">
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
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 mb-6 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5">
              <Bot size={14} />
              Inteligência Artificial para Construção Civil
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              Agentes <span className="gradient-text-amber">GD4</span>
            </h1>
            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-6 max-w-2xl">
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
                  className="inline-flex items-center gap-2 text-sm text-navy-200 px-4 py-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <badge.icon size={14} className="text-amber-400" />
                  {badge.label}
                </span>
              ))}
            </div>

            <a
              href="#agentes"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Ver Todos os Agentes
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What are GD4 */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                O que são os Agentes <span className="gradient-text-amber">GD4</span>?
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed text-lg">
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

              <div className="glass-card p-6 mt-8 glow-amber">
                <h3 className="text-white font-bold mb-2">GD4 = Gestão de Documentos 4.0</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Representa a quarta evolução em gestão documental: do <strong className="text-navy-200">papel</strong> para
                  o <strong className="text-navy-200">digital</strong>, do digital para a <strong className="text-navy-200">nuvem</strong>,
                  da nuvem para a <strong className="text-navy-200">automação</strong>, e da automação para a
                  <strong className="text-amber-400"> inteligência artificial autônoma</strong>.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Como Funciona</h2>
              <p className="text-navy-400 text-lg">Do upload à validação em 4 etapas</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Upload", desc: "Fornecedor envia o documento via plataforma web ou app GD4 Obra", icon: "📤" },
              { step: "02", title: "Classificação", desc: "O Orquestrador identifica o tipo e aciona o agente especializado", icon: "🧠" },
              { step: "03", title: "Validação", desc: "O agente extrai dados, cruza com bases oficiais e valida conformidade", icon: "🔍" },
              { step: "04", title: "Parecer", desc: "Aprovado ou reprovado com justificativa técnica em tempo real", icon: "✅" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <span className="text-xs text-amber-400 font-bold">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-400">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 21 Agents by Category */}
      <section id="agentes" className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Os <span className="gradient-text-amber">{totalAgents} Agentes</span> Especializados
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
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
                    <div className={`w-1.5 h-8 rounded-full ${
                      cat.color === "amber" ? "bg-amber-500" : cat.color === "teal" ? "bg-teal-500" : "bg-blue-500"
                    }`} />
                    <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                    <span className="text-xs text-navy-500 bg-white/5 px-2.5 py-0.5 rounded-full">
                      {cat.agents.length} {cat.agents.length === 1 ? "agente" : "agentes"}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.agents.map((agent, i) => (
                      <div key={i} className="glass-card glass-card-hover p-5 flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          cat.color === "amber" ? "bg-amber-500/10" : cat.color === "teal" ? "bg-teal-500/10" : "bg-blue-500/10"
                        }`}>
                          <agent.icon size={18} className={
                            cat.color === "amber" ? "text-amber-400" : cat.color === "teal" ? "text-teal-400" : "text-blue-400"
                          } />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-white mb-1">{agent.name}</h4>
                          <p className="text-xs text-navy-400 leading-relaxed mb-2">{agent.desc}</p>
                          <div className="flex items-center gap-4 text-xs text-navy-500">
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
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impacto Mensurável</h2>
              <p className="text-navy-400 text-lg">Resultados reais em clientes que usam os Agentes GD4</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center glow-amber">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    className="text-4xl lg:text-5xl font-extrabold text-amber-400"
                  />
                  <p className="text-white font-semibold mt-2">{metric.label}</p>
                  <p className="text-xs text-navy-400 mt-1">{metric.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Ambiental */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impacto Ambiental</h2>
              <p className="text-navy-400 text-lg">A digitalização que faz bem para o planeta</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {environmentalImpact.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center">
                  <p className="text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-1">{item.value}</p>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-navy-400 mt-1">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Roadmap de Evolução</h2>
              <p className="text-navy-400 text-lg">O futuro dos Agentes GD4</p>
            </div>
          </SectionReveal>

          <div className="max-w-2xl mx-auto space-y-6">
            {roadmap.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === "live"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : item.status === "beta"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {item.label}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-400">{item.desc}</p>
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
