import type { LucideIcon } from "lucide-react";
import type { TFunction } from "i18next";
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

const categoryMeta: { color: "blue" | "amber" | "teal"; icons: LucideIcon[] }[] = [
  { color: "blue", icons: [FileSearch, FileCheck, Landmark, Scale, FileText] },
  { color: "amber", icons: [HeartPulse, HardHat, AlertTriangle, Zap, Lock, Shield, Fingerprint] },
  { color: "teal", icons: [ClipboardCheck, Briefcase, Building, Globe] },
  { color: "blue", icons: [FileSpreadsheet, CreditCard, Receipt, BarChart3] },
  { color: "amber", icons: [Wrench] },
];

const agentTimes = [
  ["2 min", "3 min", "2 min", "2 min", "5 min"],
  ["3 min", "4 min", "3 min", "3 min", "4 min", "2 min", "2 min"],
  ["3 min", "3 min", "4 min", "5 min"],
  ["4 min", "3 min", "2 min", "4 min"],
  ["1 min"],
];

const agentPrecisions = [
  ["99.8%", "99.5%", "99.6%", "99.4%", "97.8%"],
  ["99.1%", "98.5%", "98.7%", "98.9%", "98.3%", "99.2%", "99.0%"],
  ["99.1%", "99.0%", "98.5%", "97.8%"],
  ["98.6%", "99.0%", "99.4%", "98.2%"],
  ["99.9%"],
];

export const getAgentCategories = (t: TFunction): AgentCategory[] => {
  const categories = t("agentes:agents.categories", { returnObjects: true }) as { category: string; agents: { name: string; desc: string }[] }[];
  return categories.map((cat, ci) => ({
    category: cat.category,
    color: categoryMeta[ci].color,
    agents: cat.agents.map((a, ai) => ({
      icon: categoryMeta[ci].icons[ai],
      name: a.name,
      desc: a.desc,
      time: agentTimes[ci][ai],
      precision: agentPrecisions[ci][ai],
    })),
  }));
};
