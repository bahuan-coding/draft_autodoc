import { useTranslation } from "react-i18next";
import { Phone, MessageCircle, Lock, Shield, Clock, Fingerprint } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import DemoForm from "@/components/sections/DemoForm";

export default function Home() {
  const { t } = useTranslation("home");
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      
      <TrustBar />
      
      <FeaturesSection />

      <TestimonialsSection />

      <FAQSection />

      {/* ══════ SEGURANÇA E CERTIFICAÇÕES ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold font-display text-[#FB0047] uppercase tracking-wider">
                {t("security.sectionLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
                {t("security.title")} <span className="gradient-text">{t("security.titleHighlight")}</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: t("security.encryption"), desc: t("security.encryptionDesc") },
              { icon: Shield, title: t("security.lgpd"), desc: t("security.lgpdDesc") },
              { icon: Clock, title: t("security.sla"), desc: t("security.slaDesc") },
              { icon: Fingerprint, title: t("security.auth"), desc: t("security.authDesc") },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#FB0047]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-[#FB0047]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5D5D5D]" style={{ lineHeight: '150%' }}>{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <DemoForm />

      {/* ══════ CONTACT BAR ══════ */}
      <div className="bg-[#FB0047] py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-white font-bold font-display text-sm">{t("contactBar.cta")}</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+551150437900"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm px-1"
            >
              <Phone size={14} aria-hidden="true" />
              (11) 5043-7900
            </a>
            <a
              href="https://wa.me/551150437900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold font-display px-4 py-1.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <MessageCircle size={14} aria-hidden="true" />
              {t("contactBar.whatsapp")}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
