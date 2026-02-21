import { Link } from "wouter";
import { ArrowRight, FolderOpen } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { features, disciplines } from "@/data/projetos";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        icon={FolderOpen}
        iconColor="text-[#FB0047]"
        title="Autodoc Projetos"
        subtitle="CDE — Common Data Environment"
        description="O Ambiente Comum de Dados (CDE) que centraliza projetos arquitetônicos, estruturais, hidráulicos e elétricos. Controle de revisões, workflow de aprovação e distribuição automática para equipes de campo e escritório."
        bgImage={IMAGES.projetos}
        ctaText="Solicitar Demonstração"
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
            +{disciplines.length - 6} disciplinas
          </span>
        </div>
      </PageHero>

      {/* Disciplines */}
      <section className="py-16 bg-[#0A0A0A] border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold font-display text-white mb-2">Todas as Disciplinas em Um Só Lugar</h2>
              <p className="text-[#5D5D5D] text-sm">Organize por empreendimento, bloco e disciplina</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Como funciona</h2>
              <p className="text-[#5D5D5D] text-lg">Do upload à distribuição em 4 passos</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Upload", desc: "Projetista faz upload de plantas, projetos e documentos técnicos na plataforma" },
              { step: "02", title: "Organização", desc: "A plataforma organiza automaticamente por empreendimento, disciplina e revisão" },
              { step: "03", title: "Aprovação", desc: "Workflow configurável: projetista → coordenador → gerente, com comentários" },
              { step: "04", title: "Distribuição", desc: "Distribuição automática para equipes de campo, fornecedores e parceiros" },
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
                Tudo que você precisa para{" "}
                <span className="gradient-text">gerenciar projetos</span>
              </h2>
              <p className="text-[#5D5D5D] text-lg max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                Funcionalidades pensadas para o dia a dia da construção civil,
                do escritório ao canteiro de obras.
              </p>
            </div>
          </SectionReveal>

          <FeatureGrid features={features} iconColor="text-[#FB0047]" />
        </div>
      </section>

      <CTASection
        id="contato"
        title="Pronto para organizar seus projetos?"
        description="Agende uma demonstração e veja como o Autodoc Projetos pode transformar a gestão de projetos e plantas da sua obra."
        glow="blue"
      />
    </div>
  );
}
