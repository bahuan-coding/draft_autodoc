import { useTranslation } from "react-i18next";
import LocaleLink from "@/components/LocaleLink";
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
  const { t } = useTranslation("home");

  return (
    <>
      {/* ══════ PRODUTO 1: PROJETOS ══════ */}
      <div className="section-divider" />
      <section id="solucoes" className="py-16 sm:py-20 lg:py-32 overflow-hidden bg-black">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#FB0047]/10 border border-[#FB0047]/20">
                  <FolderOpen size={16} className="text-[#FB0047]" />
                  <span className="text-sm font-bold font-display text-[#FB0047]">{t("features.projetos.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-display leading-tight mb-5" style={{ lineHeight: '120%' }}>
                  {t("features.projetos.title")}{" "}
                  <span className="gradient-text">{t("features.projetos.titleHighlight")}</span>
                </h2>

                <p className="text-[#CCCCCC] text-lg leading-relaxed mb-8" style={{ lineHeight: '150%' }}>
                  {t("features.projetos.desc")}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: FolderOpen, key: "feat1", labelKey: "features.projetos.feat1" },
                    { icon: GitBranch, key: "feat2", labelKey: "features.projetos.feat2" },
                    { icon: Send, key: "feat3", labelKey: "features.projetos.feat3" },
                    { icon: ClipboardCheck, key: "feat4", labelKey: "features.projetos.feat4" },
                    { icon: Layers, key: "feat5", labelKey: "features.projetos.feat5" },
                    { icon: Eye, key: "feat6", labelKey: "features.projetos.feat6" },
                  ].map((feat) => (
                    <div key={feat.key} className="flex items-center gap-2.5 text-sm text-[#CCCCCC]">
                      <feat.icon size={15} className="text-[#FB0047] shrink-0" />
                      {t(feat.labelKey)}
                    </div>
                  ))}
                </div>

                <LocaleLink href="/projetos" className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-md inline-block">
                  <span className="inline-flex items-center gap-2 text-[#FB0047] font-bold font-display text-base hover:gap-3 transition-all duration-300 group">
                    {t("features.projetos.cta")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </LocaleLink>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#FB0047]/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.projetos}
                      alt={t("features.projetos.imgAlt")}
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
      <section className="py-16 sm:py-20 lg:py-32 overflow-hidden bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#FB0047]/10 border border-[#FB0047]/20">
                  <Users size={16} className="text-[#FB0047]" />
                  <span className="text-sm font-bold font-display text-[#FB0047]">{t("features.workforce.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-display leading-tight mb-5" style={{ lineHeight: '120%' }}>
                  {t("features.workforce.title")}{" "}
                  <span className="gradient-text">{t("features.workforce.titleHighlight")}</span>
                </h2>

                <p className="text-[#CCCCCC] text-lg leading-relaxed mb-8" style={{ lineHeight: '150%' }}>
                  {t("features.workforce.desc")}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: UserCheck, key: "feat1", labelKey: "features.workforce.feat1" },
                    { icon: Fingerprint, key: "feat2", labelKey: "features.workforce.feat2" },
                    { icon: FileCheck, key: "feat3", labelKey: "features.workforce.feat3" },
                    { icon: Shield, key: "feat4", labelKey: "features.workforce.feat4" },
                    { icon: AlertTriangle, key: "feat5", labelKey: "features.workforce.feat5" },
                    { icon: BarChart3, key: "feat6", labelKey: "features.workforce.feat6" },
                  ].map((feat) => (
                    <div key={feat.key} className="flex items-center gap-2.5 text-sm text-[#CCCCCC]">
                      <feat.icon size={15} className="text-[#FB0047] shrink-0" />
                      {t(feat.labelKey)}
                    </div>
                  ))}
                </div>

                <LocaleLink href="/workforce" className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-md inline-block">
                  <span className="inline-flex items-center gap-2 text-[#FB0047] font-bold font-display text-base hover:gap-3 transition-all duration-300 group">
                    {t("features.workforce.cta")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </LocaleLink>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#FB0047]/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.workforce}
                      alt={t("features.workforce.imgAlt")}
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
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={IMAGES.aiAgents}
            alt=""
            role="presentation"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-8"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="container relative z-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#FB0047]/10 border border-[#FB0047]/20">
                  <Bot size={16} className="text-[#FB0047]" />
                  <span className="text-sm font-bold font-display text-[#FB0047]">{t("features.ai.badge")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-display leading-tight mb-5" style={{ lineHeight: '120%' }}>
                  <span className="gradient-text">{t("features.ai.title1")}</span>{" "}
                  {t("features.ai.title2")}
                </h2>

                <p className="text-[#CCCCCC] text-lg leading-relaxed mb-6" style={{ lineHeight: '150%' }}>
                  {t("features.ai.desc")}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { key: "company", labelKey: "features.ai.catCompany", docsKey: "features.ai.catCompanyDocs" },
                    { key: "worker", labelKey: "features.ai.catWorker", docsKey: "features.ai.catWorkerDocs" },
                    { key: "technical", labelKey: "features.ai.catTechnical", docsKey: "features.ai.catTechnicalDocs" },
                    { key: "fiscal", labelKey: "features.ai.catFiscal", docsKey: "features.ai.catFiscalDocs" },
                  ].map((cat) => (
                    <div key={cat.key} className="glass-card gradient-border p-3.5">
                      <p className="text-xs font-bold font-display uppercase tracking-wider mb-1 text-[#FB0047]">{t(cat.labelKey)}</p>
                      <p className="text-xs text-[#5D5D5D] leading-relaxed">{t(cat.docsKey)}</p>
                    </div>
                  ))}
                </div>

                <LocaleLink href="/agentes-gd4" className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-xl inline-block">
                  <span className="inline-flex items-center gap-2 bg-[#FB0047] hover:bg-[#FF1A5E] text-white font-bold font-display px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FB0047]/25 hover:scale-[1.02] active:scale-[0.98]">
                    {t("features.ai.cta")}
                    <ArrowRight size={18} />
                  </span>
                </LocaleLink>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="glass-card p-6 glow-blue gradient-border">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#FB0047]/15 flex items-center justify-center">
                      <Bot size={16} className="text-[#FB0047]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display text-white">{t("features.ai.agentTitle")}</p>
                      <p className="text-xs text-[#5D5D5D]">{t("features.ai.agentProcessing")}</p>
                    </div>
                    <span className="ml-auto text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-semibold">
                      {t("features.ai.agentActive")}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { stepKey: "features.ai.step1", status: "done" },
                      { stepKey: "features.ai.step2", status: "done" },
                      { stepKey: "features.ai.step3", status: "done" },
                      { stepKey: "features.ai.step4", status: "done" },
                      { stepKey: "features.ai.step5", status: "done" },
                      { stepKey: "features.ai.step6", status: "active" },
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
                            className="w-4 h-4 border-2 border-[#FB0047] border-t-transparent rounded-full shrink-0"
                          />
                        )}
                        <span className={`text-sm ${item.status === "done" ? "text-[#CCCCCC]" : "text-white font-semibold"}`}>
                          {t(item.stepKey)}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#5D5D5D]">{t("features.ai.time")}</span>
                    <span className="text-xs text-emerald-400 font-semibold">{t("features.ai.precision")}</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ ATORES DA CONSTRUÇÃO ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold font-display text-[#FB0047] uppercase tracking-wider">
                {t("features.personas.sectionLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
                {t("features.personas.title")}{" "}
                <span className="gradient-text">{t("features.personas.titleHighlight")}</span>
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                {t("features.personas.desc")}
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                titleKey: "features.personas.developer",
                descKey: "features.personas.developerDesc",
                link: "/projetos",
              },
              {
                icon: HardHat,
                titleKey: "features.personas.builder",
                descKey: "features.personas.builderDesc",
                link: "/workforce",
              },
              {
                icon: Ruler,
                titleKey: "features.personas.designer",
                descKey: "features.personas.designerDesc",
                link: "/projetos",
              },
              {
                icon: Briefcase,
                titleKey: "features.personas.contractor",
                descKey: "features.personas.contractorDesc",
                link: "/workforce",
              },
            ].map((persona, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <LocaleLink href={persona.link} className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-xl block h-full">
                  <div className="glass-card glass-card-hover gradient-border p-7 h-full cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#FB0047]/10">
                      <persona.icon size={24} className="text-[#FB0047]" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-3">{t(persona.titleKey)}</h3>
                    <p className="text-sm text-[#5D5D5D] leading-relaxed mb-4" style={{ lineHeight: '150%' }}>{t(persona.descKey)}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-[#FB0047] font-bold font-display group-hover:gap-2 transition-all">
                      {t("common:learnMore")} <ArrowRight size={14} />
                    </span>
                  </div>
                </LocaleLink>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPLIANCE RIBBON ══════ */}
      <div className="section-divider" />
      <section className="py-14 bg-[#0A0A0A] border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <p className="text-center text-xs text-[#5D5D5D] uppercase tracking-widest font-semibold font-display mb-6">
              {t("features.compliance.label")}
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
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#CCCCCC] border border-white/5 hover:border-[#FB0047]/30 hover:text-white hover:bg-[#FB0047]/5 transition-all duration-300"
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
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold font-display text-[#FB0047] uppercase tracking-wider">
                {t("features.journey.sectionLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
                {t("features.journey.title")}{" "}<span className="gradient-text">{t("features.journey.titleHighlight")}</span>
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                {t("features.journey.desc")}
              </p>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto">
            {[
              { yearKey: "features.journey.era1Year", titleKey: "features.journey.era1Title", descKey: "features.journey.era1Desc", color: "#5D5D5D" },
              { yearKey: "features.journey.era2Year", titleKey: "features.journey.era2Title", descKey: "features.journey.era2Desc", color: "#CCCCCC" },
              { yearKey: "features.journey.era3Year", titleKey: "features.journey.era3Title", descKey: "features.journey.era3Desc", color: "#FB0047" },
              { yearKey: "features.journey.era4Year", titleKey: "features.journey.era4Title", descKey: "features.journey.era4Desc", color: "#FB0047" },
            ].map((era, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 bg-black shrink-0 z-10" style={{ borderColor: era.color }} />
                    {i < 3 && <div className="w-0.5 flex-1 bg-white/5" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-bold font-display uppercase tracking-wider" style={{ color: era.color }}>{t(era.yearKey)}</span>
                    <h3 className="text-lg font-bold font-display text-white mt-1 mb-1">{t(era.titleKey)}</h3>
                    <p className="text-sm text-[#5D5D5D] leading-relaxed" style={{ lineHeight: '150%' }}>{t(era.descKey)}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POR QUE AUTODOC ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-black">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold font-display text-[#FB0047] uppercase tracking-wider">
                {t("features.whyAutodoc.sectionLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
                {t("features.whyAutodoc.title")}{" "}
                <span className="gradient-text">{t("features.whyAutodoc.titleHighlight")}</span>
                {" "}{t("features.whyAutodoc.titleEnd")}
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                {t("features.whyAutodoc.desc")}
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                titleKey: "features.whyAutodoc.compliance",
                descKey: "features.whyAutodoc.complianceDesc",
              },
              {
                icon: Clock,
                titleKey: "features.whyAutodoc.time",
                descKey: "features.whyAutodoc.timeDesc",
              },
              {
                icon: FolderOpen,
                titleKey: "features.whyAutodoc.platform",
                descKey: "features.whyAutodoc.platformDesc",
              },
              {
                icon: Users,
                titleKey: "features.whyAutodoc.supplier",
                descKey: "features.whyAutodoc.supplierDesc",
              },
              {
                icon: Bot,
                titleKey: "features.whyAutodoc.agents",
                descKey: "features.whyAutodoc.agentsDesc",
              },
              {
                icon: Building2,
                titleKey: "features.whyAutodoc.scalable",
                descKey: "features.whyAutodoc.scalableDesc",
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card glass-card-hover gradient-border p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#FB0047]/10 flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-[#FB0047]" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-3">{t(item.titleKey)}</h3>
                  <p className="text-sm text-[#5D5D5D] leading-relaxed" style={{ lineHeight: '150%' }}>{t(item.descKey)}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPARATIVO DE PRODUTOS ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold font-display text-[#FB0047] uppercase tracking-wider">
                {t("features.products.sectionLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
                {t("features.products.title")}{" "}<span className="gradient-text">{t("features.products.titleHighlight")}</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                nameKey: "nav.projetos",
                icon: FolderOpen,
                audienceKey: "features.products.projetosAudience",
                highlightKeys: ["features.products.projetosH1", "features.products.projetosH2", "features.products.projetosH3", "features.products.projetosH4", "features.products.projetosH5"],
                link: "/projetos",
              },
              {
                nameKey: "nav.workforce",
                icon: Users,
                audienceKey: "features.products.workforceAudience",
                highlightKeys: ["features.products.workforceH1", "features.products.workforceH2", "features.products.workforceH3", "features.products.workforceH4", "features.products.workforceH5"],
                link: "/workforce",
              },
              {
                nameKey: "nav.agentes",
                icon: Bot,
                audienceKey: "features.products.agentesAudience",
                highlightKeys: ["features.products.agentesH1", "features.products.agentesH2", "features.products.agentesH3", "features.products.agentesH4", "features.products.agentesH5"],
                link: "/agentes-gd4",
              },
            ].map((product, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <LocaleLink href={product.link} className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-xl block h-full">
                  <div className="glass-card gradient-border p-7 h-full flex flex-col cursor-pointer group hover:border-[#FB0047]/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#FB0047]/10">
                      <product.icon size={24} className="text-[#FB0047]" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-1">{t(product.nameKey, { ns: "common" })}</h3>
                    <p className="text-xs text-[#5D5D5D] mb-5 font-display">{t(product.audienceKey)}</p>
                    <ul className="space-y-2.5 flex-1">
                      {product.highlightKeys.map((hKey) => (
                        <li key={hKey} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          {t(hKey)}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm text-[#FB0047] font-bold font-display mt-6 group-hover:gap-2 transition-all">
                      {t("common:viewDetails")} <ArrowRight size={14} />
                    </span>
                  </div>
                </LocaleLink>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
