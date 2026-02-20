import type { LucideIcon } from "lucide-react";
import {
  FileSearch, FileCheck, Landmark, Scale, FileText,
  HeartPulse, HardHat, AlertTriangle, Zap, Lock, Shield, Fingerprint,
  ClipboardCheck, Briefcase, Building, Globe,
  FileSpreadsheet, CreditCard, Receipt, BarChart3,
  Wrench,
} from "lucide-react";

export interface Agent {
  icon: LucideIcon;
  name: string;
  desc: string;
  time: string;
  precision: string;
}

export interface AgentCategory {
  category: string;
  color: "blue" | "amber" | "teal";
  agents: Agent[];
}

export const agentCategories: AgentCategory[] = [
  {
    category: "Validação de Empresa",
    color: "blue",
    agents: [
      { icon: FileSearch, name: "Validador de CNPJ", desc: "Consulta Receita Federal, verifica situação cadastral, CNAE e quadro societário", time: "2 min", precision: "99.8%" },
      { icon: FileCheck, name: "CND Federal", desc: "Valida Certidão Negativa de Débitos junto à Receita Federal e Procuradoria-Geral", time: "3 min", precision: "99.5%" },
      { icon: Landmark, name: "CRF / FGTS", desc: "Verifica Certidão de Regularidade do FGTS na Caixa Econômica Federal", time: "2 min", precision: "99.6%" },
      { icon: Scale, name: "CNDT Trabalhista", desc: "Valida Certidão Negativa de Débitos Trabalhistas no Tribunal Superior do Trabalho", time: "2 min", precision: "99.4%" },
      { icon: FileText, name: "Contrato Social", desc: "Extrai dados do contrato social, verifica objeto social compatível com a atividade", time: "5 min", precision: "97.8%" },
    ],
  },
  {
    category: "Validação de Trabalhador",
    color: "amber",
    agents: [
      { icon: HeartPulse, name: "ASO — Atestado de Saúde", desc: "Verifica Atestado de Saúde Ocupacional (NR-7), aptidão e data de validade", time: "3 min", precision: "99.1%" },
      { icon: HardHat, name: "NR-18 — Segurança", desc: "Valida certificado de treinamento de Segurança na Construção Civil", time: "4 min", precision: "98.5%" },
      { icon: AlertTriangle, name: "NR-35 — Trabalho em Altura", desc: "Verifica certificado de trabalho em altura, carga horária e validade", time: "3 min", precision: "98.7%" },
      { icon: Zap, name: "NR-10 — Eletricidade", desc: "Valida certificado de Segurança em Instalações e Serviços em Eletricidade", time: "3 min", precision: "98.9%" },
      { icon: Lock, name: "NR-33 — Espaços Confinados", desc: "Verifica certificado de trabalho em espaços confinados e autorização", time: "4 min", precision: "98.3%" },
      { icon: Shield, name: "Ficha de EPI", desc: "Valida entrega e assinatura de Equipamentos de Proteção Individual (NR-6)", time: "2 min", precision: "99.2%" },
      { icon: Fingerprint, name: "Integração do Trabalhador", desc: "Verifica certificado de integração na obra e treinamento admissional", time: "2 min", precision: "99.0%" },
    ],
  },
  {
    category: "Validação Técnica",
    color: "teal",
    agents: [
      { icon: ClipboardCheck, name: "ART — CREA", desc: "Valida Anotação de Responsabilidade Técnica, responsável e escopo no CREA", time: "3 min", precision: "99.1%" },
      { icon: Briefcase, name: "RRT — CAU", desc: "Verifica Registro de Responsabilidade Técnica de arquitetos no CAU", time: "3 min", precision: "99.0%" },
      { icon: Building, name: "Alvará de Construção", desc: "Valida alvará emitido pela prefeitura, escopo da obra e data de validade", time: "4 min", precision: "98.5%" },
      { icon: Globe, name: "Licença Ambiental", desc: "Verifica licença ambiental (LP, LI, LO), condicionantes e órgão emissor", time: "5 min", precision: "97.8%" },
    ],
  },
  {
    category: "Validação Fiscal",
    color: "blue",
    agents: [
      { icon: FileSpreadsheet, name: "GFIP / SEFIP", desc: "Analisa Guia de Recolhimento do FGTS e Informações à Previdência Social", time: "4 min", precision: "98.6%" },
      { icon: CreditCard, name: "GPS — Previdência", desc: "Verifica Guia da Previdência Social, valores e competência", time: "3 min", precision: "99.0%" },
      { icon: Receipt, name: "NFS-e — Notas Fiscais", desc: "Valida Notas Fiscais de Serviço eletrônicas, ISS e retenções", time: "2 min", precision: "99.4%" },
      { icon: BarChart3, name: "Retenções Fiscais", desc: "Verifica comprovantes de retenção de INSS 11%, IR, CSLL, PIS e COFINS", time: "4 min", precision: "98.2%" },
    ],
  },
  {
    category: "Orquestração",
    color: "amber",
    agents: [
      { icon: Wrench, name: "Orquestrador GD4", desc: "Coordena todos os 20 agentes, gera relatório consolidado de compliance e score de risco", time: "1 min", precision: "99.9%" },
    ],
  },
];

export interface RoadmapItem {
  status: "live" | "beta" | "planned";
  label: string;
  title: string;
  desc: string;
}

export const roadmap: RoadmapItem[] = [
  { status: "live", label: "AO VIVO", title: "Validação Automática de Documentos", desc: "21 agentes validando CNPJ, CND, CRF, CNDT, ASO, NRs, ART, RRT, GFIP, NFS-e e mais." },
  { status: "live", label: "AO VIVO", title: "Alertas Inteligentes de Vencimento", desc: "Notificações automáticas 30, 15 e 7 dias antes do vencimento de cada documento." },
  { status: "beta", label: "EM BETA", title: "Aprendizado Contínuo", desc: "Agentes que aprendem com cada validação, melhorando precisão e reduzindo falsos positivos." },
  { status: "planned", label: "Q3 2026", title: "Análise Preditiva de Risco", desc: "Previsão de não-conformidades antes que aconteçam, baseada em padrões históricos de fornecedores." },
  { status: "planned", label: "Q4 2026", title: "Agentes Conversacionais", desc: "Interação via chat com fornecedores para solicitar documentos faltantes automaticamente." },
];

export const impactMetrics = [
  { value: 50, suffix: "%", label: "Redução de Passivo", desc: "Até R$ 50 milhões/ano evitados" },
  { value: 12, suffix: " docs/h", label: "Capacidade por Hora", desc: "180 documentos analisados/mês" },
  { value: 97, suffix: "%+", label: "Precisão Média", desc: "Superior à análise manual" },
  { value: 24, suffix: "/7", label: "Disponibilidade", desc: "Validações a qualquer hora" },
];

export const environmentalImpact = [
  { value: "3,7 ton", label: "Papel evitado", desc: "Toneladas de papel não impressas" },
  { value: "7,3 ton", label: "CO₂ evitado", desc: "Toneladas de emissões reduzidas" },
  { value: "2M L", label: "Água economizada", desc: "Litros de água poupados na produção" },
];
