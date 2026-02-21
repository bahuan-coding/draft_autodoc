import LocaleLink from "@/components/LocaleLink";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft, Bot, Zap, Shield, Clock, CheckCircle2, Timer } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { getAgentCategories } from "@/data/agentes";

export default function AgentesGD4() {
  const { t } = useTranslation("agentes");
  const agentCategories = getAgentCategories(t);
  const roadmap = t("roadmap.items", { returnObjects: true }) as { label: string; title: string; desc: string }[];
  const impactMetrics = t("impact.metrics", { returnObjects: true }) as { label: string; desc: string }[];
  const environmentalImpact = t("environmental.items", { returnObjects: true }) as { value: string; label: string; desc: string }[];
  const totalAgents = agentCategories.reduce((sum, cat) => sum + cat.agents.length, 0);

  const impactValues = [
    { value: 50, suffix: "%" },
    { value: 12, suffix: " docs/h" },
    { value: 97, suffix: "%+" },
    { value: 24, suffix: "/7" },
  ];
  const roadmapStatuses: ("live" | "beta" | "planned")[] = ["live", "live", "beta", "planned", "planned"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.aiAgents} alt="" role="presentation" aria-hidden="true" className="w-full h-full object-cover opacity-20" loading="eager" decoding="async" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        </div>

        <div className="container relative z-10">
          <LocaleLink href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md">
            <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors">
              <ArrowLeft size={16} aria-hidden="true" />
              {t("common:backHome")}
            </span>
          </LocaleLink>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 mb-6 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5">
              <Bot size={14} />
              {t("hero.badge")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              {t("hero.title")} <span className="gradient-text-amber">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-6 max-w-2xl">
              {t("hero.desc", { count: totalAgents })}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Bot, label: t("hero.badgeAgents", { count: totalAgents }) },
                { icon: Zap, label: t("hero.badgeFaster") },
                { icon: Shield, label: t("hero.badgePrecision") },
                { icon: Clock, label: t("hero.badgeAvailable") },
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
              {t("hero.cta")}
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
                {t("what.title")} <span className="gradient-text-amber">{t("what.titleHighlight")}</span>?
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed text-lg">
                <p>{t("what.p1")}</p>
                <p>
                  {t("what.p2text")}{" "}
                  <strong className="text-white">{t("what.p2company")}</strong>,{" "}
                  <strong className="text-white">{t("what.p2worker")}</strong>,{" "}
                  <strong className="text-white">{t("what.p2technical")}</strong>{" "}
                  {t("what.p2and")}{" "}
                  <strong className="text-white">{t("what.p2fiscal")}</strong>.{" "}
                  {t("what.p2end")}
                </p>
              </div>

              <div className="glass-card p-6 mt-8 glow-amber">
                <h3 className="text-white font-bold mb-2">{t("what.boxTitle")}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {t("what.boxDesc")}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("howItWorks.title")}</h2>
              <p className="text-navy-400 text-lg">{t("howItWorks.subtitle")}</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: t("howItWorks.step1Title"), desc: t("howItWorks.step1Desc"), icon: "📤" },
              { step: "02", title: t("howItWorks.step2Title"), desc: t("howItWorks.step2Desc"), icon: "🧠" },
              { step: "03", title: t("howItWorks.step3Title"), desc: t("howItWorks.step3Desc"), icon: "🔍" },
              { step: "04", title: t("howItWorks.step4Title"), desc: t("howItWorks.step4Desc"), icon: "✅" },
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
                {t("agents.title")} <span className="gradient-text-amber">{t("agents.titleHighlight", { count: totalAgents })}</span>{" "}{t("agents.titleEnd")}
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                {t("agents.subtitle")}
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
                      {cat.agents.length} {cat.agents.length === 1 ? t("agents.agentSingular") : t("agents.agentPlural")}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("impact.title")}</h2>
              <p className="text-navy-400 text-lg">{t("impact.subtitle")}</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center glow-amber">
                  <AnimatedCounter
                    end={impactValues[i]?.value ?? 0}
                    suffix={impactValues[i]?.suffix ?? ""}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("environmental.title")}</h2>
              <p className="text-navy-400 text-lg">{t("environmental.subtitle")}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("roadmap.title")}</h2>
              <p className="text-navy-400 text-lg">{t("roadmap.subtitle")}</p>
            </div>
          </SectionReveal>

          <div className="max-w-2xl mx-auto space-y-6">
            {roadmap.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                    roadmapStatuses[i] === "live"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : roadmapStatuses[i] === "beta"
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
        title={t("cta.title")}
        description={t("cta.description", { count: totalAgents })}
        ctaText={t("cta.button")}
        glow="amber"
      />

    </div>
  );
}
