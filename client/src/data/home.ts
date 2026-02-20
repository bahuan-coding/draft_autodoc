import type { LucideIcon } from "lucide-react";
import {
  Shield, Clock, FolderOpen, Users, Bot, Building2,
  Star, HardHat, Ruler, Briefcase,
  Lock, Fingerprint,
} from "lucide-react";

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "anos no mercado", icon: Star },
  { value: 3500, suffix: "+", label: "clientes no Brasil", icon: Building2 },
  { value: 195, suffix: " mil+", label: "usuários ativos", icon: Users },
  { value: 60, suffix: "", label: "das 100 maiores construtoras", icon: Shield },
];

export interface ClientLogo {
  name: string;
  logo?: string;
}

export const clients: ClientLogo[] = [
  { name: "CYRELA", logo: "/logos/cyrela-logo.svg" },
  { name: "MRV", logo: "/logos/mrv-logo.png" },
  { name: "DIRECIONAL", logo: "/logos/direcional-logo.png" },
  { name: "TENDA", logo: "/logos/tenda-logo.png" },
  { name: "CURY", logo: "/logos/cury-logo.png" },
  { name: "EVEN", logo: "/logos/even-logo.svg" },
  { name: "TEGRA", logo: "/logos/tegra-logo.png" },
  { name: "PATRIMAR", logo: "/logos/patrimar-logo.svg" },
  { name: "KALLAS", logo: "/logos/kallas-logo.png" },
  { name: "GAFISA", logo: "/logos/gafisa-logo.svg" },
];

export interface Persona {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
  color: "blue" | "amber" | "teal";
}

export const personas: Persona[] = [
  {
    icon: Building2,
    title: "Incorporador",
    desc: "Simplifique a gestão de seus empreendimentos. Visão consolidada de projetos, documentos e compliance em todo o portfólio.",
    link: "/projetos",
    color: "blue",
  },
  {
    icon: HardHat,
    title: "Construtor",
    desc: "Controle o ciclo de vida, a produtividade e a qualidade da obra. Do planejamento à entrega, tudo em uma plataforma.",
    link: "/workforce",
    color: "amber",
  },
  {
    icon: Ruler,
    title: "Projetista",
    desc: "Coordene os projetos da obra e as entregas com softwares em BIM. Controle de revisões e distribuição automática.",
    link: "/projetos",
    color: "teal",
  },
  {
    icon: Briefcase,
    title: "Empreiteiro",
    desc: "Gerencie equipes de forma digital. Documentação de trabalhadores, ASOs, NRs e EPIs sempre em dia.",
    link: "/workforce",
    color: "amber",
  },
];

export interface WhyItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const whyAutodoc: WhyItem[] = [
  {
    icon: Shield,
    title: "Compliance Automático",
    desc: "Validação contínua de FGTS, INSS, CNDT, ASOs, NRs e certidões. Alertas automáticos antes do vencimento. Zero risco de multa por documentação irregular.",
  },
  {
    icon: Clock,
    title: "80% Menos Tempo",
    desc: "Validações que levavam 30-60 minutos por documento agora são concluídas em 2-5 minutos pelos Agentes GD4. Sua equipe foca na obra, não em papel.",
  },
  {
    icon: FolderOpen,
    title: "CDE + Workforce + IA",
    desc: "Projetos, plantas, documentos técnicos, fornecedores, trabalhadores e validação por IA em uma única plataforma. Do escritório ao canteiro.",
  },
  {
    icon: Users,
    title: "Portal do Fornecedor",
    desc: "Ambiente self-service onde fornecedores enviam documentos, acompanham status e recebem feedback em tempo real. Menos ligações, mais produtividade.",
  },
  {
    icon: Bot,
    title: "21 Agentes de IA",
    desc: "Cada agente especializado em um tipo de documento: CNPJ, CND, CRF, CNDT, ASO, NRs, ART, RRT, GFIP, NFS-e. Validação 24/7 com precisão superior a 97%.",
  },
  {
    icon: Building2,
    title: "Escalável",
    desc: "Da obra única ao portfólio de 200+ empreendimentos simultâneos. A plataforma cresce com sua operação, mantendo performance e controle.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  video?: string;
  photo?: string;
  inMemoriam?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: "O Autodoc Projetos é uma plataforma onde a gente consegue encontrar todos os arquivos. Isso foi organizando o trabalho, não só para mim, mas para toda a equipe.",
    name: "Paula Dias Frassini",
    role: "CEO",
    company: "Qu4ttro Arquitetos Associados",
    video: "https://www.youtube.com/watch?v=1AHWDr61QJ0",
    photo: "/testimonials/paula-dias.png",
  },
  {
    quote: "O GD4 nos atende em todas as nossas necessidades. É uma ferramenta de fácil uso, intuitiva e que atende todas as nossas áreas de apoio.",
    name: "Thiago Sanches",
    role: "Vice-presidente",
    company: "P4 Engenharia",
    video: "https://www.youtube.com/watch?v=9PyJOeXnjRQ",
    photo: "/testimonials/thiago-sanches.webp",
  },
  {
    quote: "A Kallas não poderia deixar de ter uma ferramenta de última geração que consiga controlar a entrada das pessoas e suas documentações dentro das nossas obras. O sistema GD4 é essencial para isso.",
    name: "Davi Fratel",
    role: "Diretor Executivo",
    company: "Kallas Construtora",
    video: "https://www.youtube.com/watch?v=EOYG0ZY4G-Y",
    photo: "/testimonials/david-fratel.png",
  },
  {
    quote: "Já passei por outras empresas e trabalhei em obras com 950 profissionais. O controle era visual e o risco era grande pela falta de controle. O GD4 foi uma melhoria muito grande para as construtoras porque garante a integridade dos funcionários e controle em obras.",
    name: "Francisco Wanderley",
    role: "Administrador",
    company: "Tegra Incorporadora",
    video: "https://www.youtube.com/watch?v=6HuId6FqcEc",
    photo: "/testimonials/francisco-wanderley.png",
    inMemoriam: true,
  },
  {
    quote: "Projeto é produtividade. Você não pode perder tempo com coisas operacionais. O Autodoc tem algumas artimanhas por trás, algumas tecnologias. Para subir um documento é muito rápido. E tem também a questão do controle por e-mail. Ele cerca tudo.",
    name: "Alexandre Barbas",
    role: "Sócio-Diretor",
    company: "GP&D Consultoria e Projetos",
    video: "https://www.youtube.com/watch?v=ZknPfqo5fhQ",
    photo: "/testimonials/alexandre-barbas.png",
  },
  {
    quote: "Uso a Autodoc há mais de 15 anos. É uma ferramenta bem completa que traz para a gente uma bagagem histórica muito boa e nos permite replicar modelos. Usamos muito a Autodoc para dividir conhecimento com outras áreas internas da Lavvi.",
    name: "Marina Gabrieli",
    role: "Gerente de Projetos",
    company: "LAVVI",
    video: "https://www.youtube.com/watch?v=rzEXiyAAapk",
    photo: "/testimonials/marina-gabrieli.png",
  },
  {
    quote: "Com a catraca torniquete temos maior assertividade na condução do controle de acesso e na certeza de que as pessoas que estão entrando no canteiro estão realmente autorizadas.",
    name: "Marcelo Moraes",
    role: "Diretor Executivo de Operações",
    company: "Even Construtora",
    video: "https://www.youtube.com/watch?v=Vsbou6y7qYo",
    photo: "/testimonials/marcelo-moraes.png",
  },
  {
    quote: "O Diário de Obras do Autodoc chegou para otimizar a forma de fazermos os registros diários. Antes de implementarmos a ferramenta, tínhamos que utilizar papel e caneta para fazer o campo, anotando para, depois, atualizarmos em uma planilha de Excel.",
    name: "Ana Carolina Bonifacio",
    role: "Coordenadora",
    company: "P4 Engenharia",
    photo: "/testimonials/ana-carolina.png",
  },
];

export interface FAQEntry {
  question: string;
  answer: string;
}

export const faq: FAQEntry[] = [
  {
    question: "O que é o Autodoc?",
    answer: "O Autodoc é uma plataforma de gestão digital para construção civil que integra projetos, documentos, fornecedores e mão de obra em um único ambiente. Com dois produtos — Autodoc Projetos (CDE) e Autodoc Workforce (gestão de fornecedores e canteiro) — e 21 agentes de IA para validação automática de documentos, a plataforma automatiza processos, reduz riscos e aumenta a produtividade da sua obra. A Autodoc é uma empresa Ambar, com mais de 20 anos no mercado.",
  },
  {
    question: "Qual a diferença entre Autodoc Projetos e Autodoc Workforce?",
    answer: "O Autodoc Projetos é um CDE (Common Data Environment) para gestão de projetos arquitetônicos, estruturais, hidráulicos e elétricos, com controle de revisões, workflow de aprovação e distribuição automática. O Autodoc Workforce é focado em gestão de fornecedores e canteiro: homologação, validação de documentos (CNPJ, CND, CRF, CNDT, ASO, NRs, EPIs), controle de acesso biométrico e compliance trabalhista. Juntos, cobrem todo o ciclo da construção.",
  },
  {
    question: "O que são os Agentes GD4 e quais documentos eles validam?",
    answer: "Os Agentes GD4 são 21 sistemas de inteligência artificial especializados em validação automática de documentos. Eles cobrem 4 categorias: Empresa (CNPJ, CND Federal, CRF/FGTS, CNDT, Contrato Social), Trabalhador (ASO, NR-18, NR-35, NR-10, NR-33, Ficha de EPI), Técnico (ART, RRT, Alvará de Construção, Licença Ambiental) e Fiscal (GFIP/SEFIP, GPS, NFS-e, Retenções). Cada agente extrai dados, valida conformidade e gera parecer automático.",
  },
  {
    question: "Quais construtoras usam o Autodoc?",
    answer: "O Autodoc é utilizado por mais de 3.500 empresas, incluindo 60 das 100 maiores construtoras do Brasil — MRV, Direcional, Tenda, Cury, Cyrela, Even e Patrimar, entre outras. São mais de 195 mil usuários ativos na plataforma.",
  },
  {
    question: "O Autodoc é compatível com BIM?",
    answer: "Sim. O Autodoc Projetos possui visualizador BIM integrado, compatível com os principais softwares de modelagem (Revit, ArchiCAD, Tekla). Você pode fazer upload de modelos IFC, visualizá-los na plataforma e vinculá-los aos projetos e documentos correspondentes.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação é rápida e assistida. Nossa equipe de Customer Success acompanha onboarding, migração de dados e treinamento. A maioria dos clientes está operando em menos de 2 semanas. Para operações maiores (100+ obras), o prazo típico é de 4-6 semanas com suporte dedicado.",
  },
];

export const securityItems = [
  { icon: Lock, title: "Criptografia", desc: "Dados criptografados em trânsito e em repouso (AES-256)" },
  { icon: Shield, title: "LGPD", desc: "Em conformidade com a Lei Geral de Proteção de Dados" },
  { icon: Clock, title: "SLA 99.9%", desc: "Alta disponibilidade com backup automático diário" },
  { icon: Fingerprint, title: "Autenticação", desc: "Autenticação multifator e controle granular de permissões" },
];

export const journeyEras = [
  { year: "Era 1.0", title: "Papel", desc: "Pastas físicas, cópias heliográficas e arquivos em estantes. Risco de extravio e versões desatualizadas.", color: "navy-400" },
  { year: "Era 2.0", title: "Digital", desc: "Digitalização de documentos, PDFs e planilhas Excel. Arquivos locais sem controle de versão.", color: "navy-300" },
  { year: "Era 3.0", title: "Nuvem", desc: "Plataformas cloud com CDE, controle de revisões e distribuição automática. A era do Autodoc Projetos.", color: "blue-400" },
  { year: "Era 4.0", title: "Inteligência Artificial", desc: "21 Agentes GD4 validando documentos automaticamente. Gestão de Documentos 4.0 — de minutos para segundos.", color: "amber-400" },
];

export const complianceDocs = [
  "CNPJ", "CND Federal", "CRF/FGTS", "CNDT", "Contrato Social",
  "ASO", "NR-18", "NR-35", "NR-10", "NR-33", "Ficha de EPI",
  "ART", "RRT", "Alvará", "GFIP/SEFIP", "GPS", "NFS-e",
  "PCMSO", "PGR", "Seguro de Vida",
];
