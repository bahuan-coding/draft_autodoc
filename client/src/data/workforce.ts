import type { LucideIcon } from "lucide-react";
import {
  UserCheck, FileSearch, Fingerprint, ShieldCheck, HeartPulse,
  HardHat, Bell, Smartphone, BarChart3, Bot,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const features: Feature[] = [
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

export interface PainPoint {
  before: string;
  after: string;
}

export const painPoints: PainPoint[] = [
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

export const complianceChecklist = [
  {
    title: "Empresa",
    color: "blue" as const,
    docs: ["CNPJ ativo", "CND Federal", "CND Estadual", "CND Municipal", "CRF/FGTS", "CNDT", "Contrato Social", "Alvará"],
  },
  {
    title: "Trabalhador",
    color: "amber" as const,
    docs: ["ASO (NR-7)", "NR-18 Construção", "NR-35 Altura", "NR-10 Eletricidade", "NR-33 Confinados", "Ficha de EPI", "CTPS", "Integração"],
  },
  {
    title: "Técnico",
    color: "teal" as const,
    docs: ["ART (CREA)", "RRT (CAU)", "Alvará de Construção", "Licença Ambiental", "Matrícula CEI/CNO", "PCMSO", "PGR"],
  },
  {
    title: "Fiscal",
    color: "blue" as const,
    docs: ["GFIP/SEFIP", "GPS", "NFS-e", "Guias de ISS", "DARF", "Retenções INSS", "Retenções IR/CSLL"],
  },
];
