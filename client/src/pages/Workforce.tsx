/*
 * DESIGN: Liquid Glass — Fintech Premium
 * AUDIT: Engenharia Civil — Documentos reais, NRs, terminologia técnica
 * Workforce page: Gestão de mão de obra e fornecedores deep-dive
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  ShieldCheck,
  FileSearch,
  UserCheck,
  ClipboardList,
  Fingerprint,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  HeartPulse,
  HardHat,
  FileCheck,
  Bell,
  Smartphone,
  Lock,
  Bot,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/images";

const features = [
  {
    icon: UserCheck,
    title: "Homologação de Fornecedores",
    desc: "Processo completo de qualificação com checklist automático de documentos obrigatórios: CNPJ, CND Federal/Estadual/Municipal, CRF/FGTS, CNDT, Contrato Social, Alvará e registro CREA/CAU.",
  },
  {
    icon: FileSearch,
    title: "Gestão Documental Centralizada",
    desc: "Controle centralizado de toda documentação de fornecedores e trabalhadores. Histórico completo, versionamento e rastreabilidade de cada documento recebido.",
  },
  {
    icon: Fingerprint,
    title: "Controle de Acesso ao Canteiro",
    desc: "Gestão de entrada e saída de trabalhadores com validação biométrica. Bloqueio automático de acesso quando documentação está irregular ou vencida.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Trabalhista",
    desc: "Validação automática de FGTS (CRF), INSS (GPS), GFIP/SEFIP, folha de pagamento e demais obrigações trabalhistas. Monitoramento contínuo de regularidade.",
  },
  {
    icon: HeartPulse,
    title: "Saúde e Segurança — NRs",
    desc: "Validação de ASOs (NR-7), certificados NR-18 (Construção), NR-35 (Altura), NR-10 (Eletricidade), NR-33 (Espaços Confinados), PCMSO e PGR.",
  },
  {
    icon: HardHat,
    title: "Controle de EPIs",
    desc: "Gestão de fichas de EPI (NR-6) com validação de entrega, assinatura e CA (Certificado de Aprovação). Alertas de substituição por desgaste ou validade.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    desc: "Notificações automáticas 30, 15 e 7 dias antes do vencimento de cada documento. Escalação para gestores quando o fornecedor não regulariza a tempo.",
  },
  {
    icon: Smartphone,
    title: "Portal do Fornecedor",
    desc: "Ambiente self-service via web e app (GD4 Obra) para fornecedores enviarem documentos, acompanharem status de qualificação e receberem feedback em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Conformidade",
    desc: "Visão consolidada de compliance por obra, fornecedor e tipo de documento. Score de risco, indicadores de conformidade e relatórios gerenciais exportáveis.",
  },
  {
    icon: Bot,
    title: "Validação por IA — Agentes GD4",
    desc: "21 agentes de IA especializados validam automaticamente cada documento: CNPJ, CND, CRF, CNDT, ASO, NRs, ART, RRT, GFIP, NFS-e. De horas para minutos.",
  },
];

const painPoints = [
  {
    before: "30-60 min validando cada documento manualmente",
    after: "2-5 min com validação automática por Agentes GD4",
  },
  {
    before: "Planilhas Excel desatualizadas e desconectadas",
    after: "Dashboard em tempo real com score de conformidade",
  },
  {
    before: "Risco de multas por ASO vencido ou NR irregular",
    after: "Alertas automáticos 30/15/7 dias antes do vencimento",
  },
  {
    before: "Fornecedores ligando para saber status",
    after: "Portal self-service com status em tempo real",
  },
  {
    before: "Trabalhador sem NR-35 entrando em obra de altura",
    after: "Bloqueio biométrico automático por documentação irregular",
  },
  {
    before: "Auditoria manual de FGTS, INSS e CNDT",
    after: "Compliance contínuo com validação 24/7 por IA",
  },
];

export default function Workforce() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.workforce} alt="" className="w-full h-full object-cover opacity-25" loading="eager" />
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
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <Users size={28} className="text-amber-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Autodoc Workforce</h1>
                <span className="text-sm text-navy-400 uppercase tracking-wider">Gestão de Fornecedores e Canteiro</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-6 max-w-2xl">
              Homologação de fornecedores, compliance trabalhista e controle de acesso
              ao canteiro em uma única plataforma. Validação automática de CNPJ, CND, CRF,
              CNDT, ASO, NRs, EPIs, ART, GFIP e mais — com 21 Agentes de IA.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "CNPJ", "CND", "CRF/FGTS", "CNDT", "ASO", "NR-18", "NR-35", "ART", "GFIP",
              ].map((doc) => (
                <span
                  key={doc}
                  className="text-xs font-medium text-navy-300 px-3 py-1.5 rounded-full bg-white/5 border border-white/5"
                >
                  {doc}
                </span>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Solicitar Demonstração
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 lg:py-32 bg-navy-900/30">
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
      <section className="py-24 lg:py-32">
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
            {[
              {
                title: "Empresa",
                color: "blue",
                docs: ["CNPJ ativo", "CND Federal", "CND Estadual", "CND Municipal", "CRF/FGTS", "CNDT", "Contrato Social", "Alvará"],
              },
              {
                title: "Trabalhador",
                color: "amber",
                docs: ["ASO (NR-7)", "NR-18 Construção", "NR-35 Altura", "NR-10 Eletricidade", "NR-33 Confinados", "Ficha de EPI", "CTPS", "Integração"],
              },
              {
                title: "Técnico",
                color: "teal",
                docs: ["ART (CREA)", "RRT (CAU)", "Alvará de Construção", "Licença Ambiental", "Matrícula CEI/CNO", "PCMSO", "PGR"],
              },
              {
                title: "Fiscal",
                color: "blue",
                docs: ["GFIP/SEFIP", "GPS", "NFS-e", "Guias de ISS", "DARF", "Retenções INSS", "Retenções IR/CSLL"],
              },
            ].map((cat, i) => (
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

      {/* Features */}
      <section className="py-24 lg:py-32 bg-navy-900/30">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="glass-card glass-card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <feat.icon size={20} className="text-amber-400" />
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
            <div className="glass-card p-12 lg:p-16 text-center glow-amber">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pronto para controlar sua mão de obra?
              </h2>
              <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
                Agende uma demonstração e veja como o Autodoc Workforce pode
                transformar a gestão de fornecedores e o compliance do canteiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://autodoc.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
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
