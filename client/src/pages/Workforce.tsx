import { Users, Fingerprint, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { features, painPoints, complianceChecklist } from "@/data/workforce";

export default function Workforce() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        icon={Users}
        iconColor="text-amber-400"
        title="Autodoc Workforce"
        subtitle="Gestão de Fornecedores e Canteiro"
        description="Homologação de fornecedores, compliance trabalhista e controle de acesso ao canteiro em uma única plataforma. Validação automática de CNPJ, CND, CRF, CNDT, ASO, NRs, EPIs, ART, GFIP e mais — com 21 Agentes de IA."
        bgImage={IMAGES.workforce}
        badges={["CNPJ", "CND", "CRF/FGTS", "CNDT", "ASO", "NR-18", "NR-35", "ART", "GFIP"]}
        ctaText="Solicitar Demonstração"
      />

      {/* Before/After */}
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Antes vs. <span className="gradient-text-amber">Depois</span>
              </h2>
              <p className="text-navy-400 text-lg">A transformação que o Autodoc Workforce traz para sua operação</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {painPoints.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-5 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-[10px]">✕</span>
                    </div>
                    <p className="text-sm text-navy-500 line-through">{item.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                    </div>
                    <p className="text-sm text-white font-medium">{item.after}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Checklist de <span className="gradient-text-amber">Compliance</span> Completo
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Todos os documentos obrigatórios da construção civil, organizados por categoria,
                validados automaticamente pelos Agentes GD4.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {complianceChecklist.map((cat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-5 h-full">
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                    cat.color === "amber" ? "text-amber-400" : cat.color === "teal" ? "text-teal-400" : "text-blue-400"
                  }`}>{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.docs.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-sm text-navy-300">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integração Catraca + GD4 */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Fingerprint size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">Autodoc Catraca</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
                  Controle de acesso com{" "}
                  <span className="gradient-text-amber">reconhecimento facial</span>
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-6">
                  A integração entre o GD4 e a Autodoc Catraca valida automaticamente a documentação
                  do trabalhador no momento do acesso ao canteiro. Reconhecimento facial, QR Code
                  ou catraca virtual — o acesso só é liberado se toda a documentação estiver em dia.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Reconhecimento facial integrado à base de documentos",
                    "QR Code dinâmico para acesso via smartphone",
                    "Catraca virtual sem hardware dedicado",
                    "Bloqueio automático por ASO vencido ou NR irregular",
                    "Registro de ponto digital com geolocalização",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-navy-200">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 max-w-md">
                <div className="glass-card p-6 glow-amber">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                      <Fingerprint size={32} className="text-amber-400" />
                    </div>
                    <p className="text-white font-bold">Fluxo de Acesso Inteligente</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "Trabalhador se identifica (facial/QR)" },
                      { step: "02", text: "GD4 verifica ASO, NRs e EPIs em tempo real" },
                      { step: "03", text: "Documentação OK → acesso liberado" },
                      { step: "04", text: "Documentação irregular → acesso bloqueado + alerta" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <span className="text-xs font-bold text-amber-400 bg-amber-500/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                          {item.step}
                        </span>
                        <span className="text-sm text-navy-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="py-16 bg-navy-900/40 border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {[
                { value: "50%", label: "Redução de passivo trabalhista" },
                { value: "R$ 50M", label: "Economia potencial/ano" },
                { value: "180/mês", label: "Documentos analisados por agente" },
                { value: "99.5%", label: "Precisão na validação" },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-2xl lg:text-3xl font-extrabold text-amber-400">{m.value}</p>
                  <p className="text-xs text-navy-400 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Funcionalidades <span className="gradient-text-amber">completas</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Tudo para gerenciar fornecedores, trabalhadores e documentação
                com segurança e eficiência — do escritório ao canteiro.
              </p>
            </div>
          </SectionReveal>

          <FeatureGrid features={features} iconColor="text-amber-400" />
        </div>
      </section>

      <CTASection
        id="contato"
        title="Pronto para controlar sua mão de obra?"
        description="Agende uma demonstração e veja como o Autodoc Workforce pode transformar a gestão de fornecedores e o compliance do canteiro."
        glow="amber"
      />

    </div>
  );
}
