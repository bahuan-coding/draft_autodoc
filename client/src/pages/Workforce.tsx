import { useTranslation } from "react-i18next";
import { Users, Fingerprint, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { getFeatures } from "@/data/workforce";

export default function Workforce() {
  const { t } = useTranslation("workforce");
  const features = getFeatures(t);
  const painPoints = t("beforeAfter.items", { returnObjects: true }) as { before: string; after: string }[];
  const complianceChecklist = t("compliance.categories", { returnObjects: true }) as { title: string; docs: string[] }[];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        icon={Users}
        iconColor="text-[#FB0047]"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        bgImage={IMAGES.workforce}
        badges={["CNPJ", "CND", "CRF/FGTS", "CNDT", "ASO", "NR-18", "NR-35", "ART", "GFIP"]}
        ctaText={t("common:requestDemo")}
      />

      {/* Before/After */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                {t("beforeAfter.title")}{" "}
                <span className="gradient-text">{t("beforeAfter.titleHighlight")}</span>
              </h2>
              <p className="text-[#5D5D5D] text-lg">{t("beforeAfter.subtitle")}</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {painPoints.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card gradient-border p-5 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-[10px]">✕</span>
                    </div>
                    <p className="text-sm text-[#5D5D5D] line-through">{item.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                    </div>
                    <p className="text-sm text-white font-semibold">{item.after}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                {t("compliance.title")}{" "}
                <span className="gradient-text">{t("compliance.titleHighlight")}</span>
                {" "}{t("compliance.titleEnd")}
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                {t("compliance.subtitle")}
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {complianceChecklist.map((cat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-5 h-full">
                  <h3 className="text-sm font-bold font-display uppercase tracking-wider mb-4 text-[#FB0047]">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.docs.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
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
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#FB0047]/10 border border-[#FB0047]/20">
                  <Fingerprint size={16} className="text-[#FB0047]" />
                  <span className="text-sm font-bold font-display text-[#FB0047]">{t("catraca.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight mb-5" style={{ lineHeight: '120%' }}>
                  {t("catraca.title")}{" "}
                  <span className="gradient-text">{t("catraca.titleHighlight")}</span>
                </h2>

                <p className="text-[#CCCCCC] text-lg leading-relaxed mb-6" style={{ lineHeight: '150%' }}>
                  {t("catraca.desc")}
                </p>

                <div className="space-y-3 mb-8">
                  {[t("catraca.feat1"), t("catraca.feat2"), t("catraca.feat3"), t("catraca.feat4"), t("catraca.feat5")].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#CCCCCC]">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 max-w-md">
                <div className="glass-card gradient-border p-6 glow-blue">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#FB0047]/10 flex items-center justify-center mx-auto mb-3">
                      <Fingerprint size={32} className="text-[#FB0047]" />
                    </div>
                    <p className="text-white font-bold font-display">{t("catraca.flowTitle")}</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: t("catraca.flow1") },
                      { step: "02", text: t("catraca.flow2") },
                      { step: "03", text: t("catraca.flow3") },
                      { step: "04", text: t("catraca.flow4") },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <span className="text-xs font-bold font-display text-[#FB0047] bg-[#FB0047]/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                          {item.step}
                        </span>
                        <span className="text-sm text-[#CCCCCC]">{item.text}</span>
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
      <section className="py-16 bg-[#0A0A0A] border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {[
                { value: "50%", label: t("metrics.m1Label") },
                { value: t("metrics.m2Value"), label: t("metrics.m2Label") },
                { value: t("metrics.m3Value"), label: t("metrics.m3Label") },
                { value: "99.5%", label: t("metrics.m4Label") },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-2xl lg:text-3xl font-bold font-display text-[#FB0047]">{m.value}</p>
                  <p className="text-xs text-[#5D5D5D] mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Features */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                {t("featuresGrid.title")}{" "}
                <span className="gradient-text">{t("featuresGrid.titleHighlight")}</span>
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                {t("featuresGrid.subtitle")}
              </p>
            </div>
          </SectionReveal>

          <FeatureGrid features={features} iconColor="text-[#FB0047]" />
        </div>
      </section>

      <CTASection
        id="contato"
        title={t("cta.title")}
        description={t("cta.description")}
        glow="amber"
      />
    </div>
  );
}
