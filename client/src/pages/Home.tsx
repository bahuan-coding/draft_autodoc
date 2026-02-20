import { Phone, MessageCircle, Lock, Shield, Clock, Fingerprint } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import DemoForm from "@/components/sections/DemoForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      
      <TrustBar />
      
      <FeaturesSection />

      <TestimonialsSection />

      <FAQSection />

      {/* ══════ SEGURANÇA E CERTIFICAÇÕES ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Segurança
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Seus dados <span className="gradient-text">protegidos</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: "Criptografia", desc: "Dados criptografados em trânsito e em repouso (AES-256)" },
              { icon: Shield, title: "LGPD", desc: "Em conformidade com a Lei Geral de Proteção de Dados" },
              { icon: Clock, title: "SLA 99.9%", desc: "Alta disponibilidade com backup automático diário" },
              { icon: Fingerprint, title: "Autenticação", desc: "Autenticação multifator e controle granular de permissões" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-400">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <DemoForm />

      {/* ══════ CONTACT BAR ══════ */}
      <div className="bg-blue-500 py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-white font-semibold text-sm">Fale com um especialista:</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+551150437900"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm px-1"
            >
              <Phone size={14} aria-hidden="true" />
              (11) 5043-7900
            </a>
            <a
              href="https://wa.me/551150437900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <MessageCircle size={14} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
