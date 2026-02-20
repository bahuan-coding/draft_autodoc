import type { LucideIcon } from "lucide-react";
import {
  FolderOpen, GitBranch, Share2, ClipboardCheck, Layers,
  Eye, Search, Lock, BarChart3, Smartphone,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const features: Feature[] = [
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

export const disciplines = [
  "Arquitetônico", "Estrutural", "Hidráulico", "Elétrico", "Fundações",
  "Climatização (HVAC)", "Paisagismo", "Incêndio", "Instalações Especiais",
  "Topografia", "Geotécnico", "Acústico",
];
