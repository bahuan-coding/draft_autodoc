import { useTranslation } from "react-i18next";
import { FolderOpen } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { getFeatures, getDisciplines } from "@/data/projetos";

export default function Projetos() {
  const { t } = useTranslation("projetos");
  const features = getFeatures(t);
  const disciplines = getDisciplines(t);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        icon={FolderOpen}
        iconColor="text-[#FB0047]"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        bgImage={IMAGES.projetos}
        ctaText={t("common:requestDemo")}
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {disciplines.slice(0, 6).map((disc) => (
            <span
              key={disc}
              className="text-xs font-semibold font-display text-[#CCCCCC] px-3 py-1.5 rounded-full bg-white/5 border border-white/5"
            >
              {disc}
            </span>
          ))}
          <span className="text-xs font-bold font-display text-[#FB0047] px-3 py-1.5 rounded-full bg-[#FB0047]/10 border border-[#FB0047]/20">
            {t("hero.moreDisciplines", { count: disciplines.length - 6 })}
          </span>
        </div>
      </PageHero>

      {/* Disciplines */}
      <section className="py-16 bg-[#0A0A0A] border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold font-display text-white mb-2">{t("disciplines.title")}</h2>
              <p className="text-[#5D5D5D] text-sm">{t("disciplines.subtitle")}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {disciplines.map((disc) => (
                <span
                  key={disc}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white/5 text-[#CCCCCC] border border-white/5 hover:border-[#FB0047]/30 hover:text-white hover:bg-[#FB0047]/5 transition-all duration-300"
                >
                  {disc}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">{t("howItWorks.title")}</h2>
              <p className="text-[#5D5D5D] text-lg">{t("howItWorks.subtitle")}</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: t("howItWorks.step1Title"), desc: t("howItWorks.step1Desc") },
              { step: "02", title: t("howItWorks.step2Title"), desc: t("howItWorks.step2Desc") },
              { step: "03", title: t("howItWorks.step3Title"), desc: t("howItWorks.step3Desc") },
              { step: "04", title: t("howItWorks.step4Title"), desc: t("howItWorks.step4Desc") },
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

      {/* Features Grid */}
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
        glow="blue"
      />
    </div>
  );
}
