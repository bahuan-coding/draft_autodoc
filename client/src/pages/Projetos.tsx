import { Link } from "wouter";
import { ArrowRight, FolderOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";
import { features, disciplines } from "@/data/projetos";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        icon={FolderOpen}
        iconColor="text-blue-400"
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
              className="text-xs font-medium text-navy-300 px-3 py-1.5 rounded-full bg-white/5 border border-white/5"
            >
              {disc}
            </span>
          ))}
          <span className="text-xs font-medium text-blue-400 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            +{disciplines.length - 6} disciplinas
          </span>
        </div>
      </PageHero>

      {/* Disciplines */}
      <section className="py-16 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Todas as Disciplinas em Um Só Lugar</h2>
              <p className="text-navy-400 text-sm">Organize por empreendimento, bloco e disciplina</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {disciplines.map((disc) => (
                <span
                  key={disc}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-navy-300 border border-white/5 hover:border-blue-400/30 hover:text-white transition-all duration-300"
                >
                  {disc}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Como funciona</h2>
              <p className="text-navy-400 text-lg">Do upload à distribuição em 4 passos</p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Upload", desc: "Projetista faz upload de plantas, projetos e documentos técnicos na plataforma", icon: "📤" },
              { step: "02", title: "Organização", desc: "A plataforma organiza automaticamente por empreendimento, disciplina e revisão", icon: "📂" },
              { step: "03", title: "Aprovação", desc: "Workflow configurável: projetista → coordenador → gerente, com comentários", icon: "✅" },
              { step: "04", title: "Distribuição", desc: "Distribuição automática para equipes de campo, fornecedores e parceiros", icon: "📡" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <span className="text-xs text-blue-400 font-bold">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-400">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tudo que você precisa para{" "}
                <span className="gradient-text">gerenciar projetos</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Funcionalidades pensadas para o dia a dia da construção civil,
                do escritório ao canteiro de obras.
              </p>
            </div>
          </SectionReveal>

          <FeatureGrid features={features} iconColor="text-blue-400" />
        </div>
      </section>

      <CTASection
        id="contato"
        title="Pronto para organizar seus projetos?"
        description="Agende uma demonstração e veja como o Autodoc Projetos pode transformar a gestão de projetos e plantas da sua obra."
        glow="blue"
      />

      <Footer />
    </div>
  );
}
