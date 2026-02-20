/*
 * DESIGN: Liquid Glass — Fintech Premium
 * AUDIT: Engenharia Civil — CDE, disciplinas técnicas, terminologia real
 * Projetos page: CDE product deep-dive
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  FolderOpen,
  FileCheck,
  GitBranch,
  Share2,
  ClipboardCheck,
  BarChart3,
  Layers,
  Lock,
  Workflow,
  Eye,
  Search,
  Download,
  Smartphone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/images";

const features = [
  {
    icon: FolderOpen,
    title: "Gestão de Projetos e Plantas",
    desc: "Organize projetos arquitetônicos, estruturais, hidráulicos, elétricos e de fundações em uma estrutura hierárquica por empreendimento, bloco e disciplina.",
  },
  {
    icon: GitBranch,
    title: "Controle de Revisões",
    desc: "Histórico completo de revisões com rastreabilidade total. Cada versão registrada com autor, data, comentários e aprovação. Nunca mais trabalhe com arquivo desatualizado.",
  },
  {
    icon: Share2,
    title: "Distribuição Automática",
    desc: "Distribua projetos e plantas automaticamente para projetistas, equipes de campo e fornecedores. Notificações em tempo real quando uma nova revisão é publicada.",
  },
  {
    icon: ClipboardCheck,
    title: "Workflow de Aprovação",
    desc: "Fluxos de aprovação configuráveis com múltiplos níveis: projetista → coordenador → gerente. Status em tempo real: em análise, aprovado, reprovado com comentários.",
  },
  {
    icon: Layers,
    title: "Visualizador BIM Integrado",
    desc: "Compatível com Revit, ArchiCAD e Tekla. Faça upload de modelos IFC, visualize em 3D na plataforma e vincule ao projeto correspondente.",
  },
  {
    icon: Eye,
    title: "RDO — Registro Diário de Obra",
    desc: "Registro digital com fotos, anotações, condições climáticas e acompanhamento de atividades. Tudo documentado, rastreável e exportável.",
  },
  {
    icon: Search,
    title: "Busca Inteligente",
    desc: "Encontre qualquer projeto, planta ou documento em segundos. Busca por nome, disciplina, revisão, autor, data ou tag. Filtros avançados por empreendimento.",
  },
  {
    icon: Lock,
    title: "Segurança e Controle de Acesso",
    desc: "Criptografia de ponta a ponta, controle de acesso granular por perfil e backup automático. Defina quem pode ver, editar, aprovar ou distribuir cada documento.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Indicadores",
    desc: "Dashboards com métricas de produtividade, prazos de aprovação, documentos pendentes e conformidade. Relatórios exportáveis para reuniões de coordenação.",
  },
  {
    icon: Smartphone,
    title: "Acesso Mobile",
    desc: "Acesse projetos e plantas diretamente do canteiro via app mobile. Visualize, comente e aprove documentos de qualquer lugar, online ou offline.",
  },
];

const disciplines = [
  "Arquitetônico", "Estrutural", "Hidráulico", "Elétrico", "Fundações",
  "Climatização (HVAC)", "Paisagismo", "Incêndio", "Instalações Especiais",
  "Topografia", "Geotécnico", "Acústico",
];

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.projetos} alt="" className="w-full h-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        </div>

        <div className="container relative z-10">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} />
              Voltar para Home
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <FolderOpen size={28} className="text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Autodoc Projetos</h1>
                <span className="text-sm text-navy-400 uppercase tracking-wider">CDE — Common Data Environment</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-6 max-w-2xl">
              O Ambiente Comum de Dados (CDE) que centraliza projetos arquitetônicos,
              estruturais, hidráulicos e elétricos. Controle de revisões, workflow de aprovação
              e distribuição automática para equipes de campo e escritório.
            </p>

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

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Solicitar Demonstração
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="glass-card glass-card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <feat.icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{feat.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="glass-card p-12 lg:p-16 text-center glow-blue">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pronto para organizar seus projetos?
              </h2>
              <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
                Agende uma demonstração e veja como o Autodoc Projetos pode
                transformar a gestão de projetos e plantas da sua obra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://autodoc.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Agendar Demonstração
                  <ArrowRight size={18} />
                </a>
                <a
                  href="tel:+551150437900"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl border border-white/10 transition-all"
                >
                  (11) 5043-7900
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
