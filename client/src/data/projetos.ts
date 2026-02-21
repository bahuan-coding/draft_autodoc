import type { LucideIcon } from "lucide-react";
import type { TFunction } from "i18next";
import {
  FolderOpen, GitBranch, Share2, ClipboardCheck, Layers,
  Eye, Search, Lock, BarChart3, Smartphone,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const featureIcons: LucideIcon[] = [
  FolderOpen, GitBranch, Share2, ClipboardCheck, Layers,
  Eye, Search, Lock, BarChart3, Smartphone,
];

export const getFeatures = (t: TFunction): Feature[] =>
  featureIcons.map((icon, i) => ({
    icon,
    title: t(`projetos:features.f${i + 1}Title`),
    desc: t(`projetos:features.f${i + 1}Desc`),
  }));

export const getDisciplines = (t: TFunction): string[] =>
  t("projetos:disciplines.items", { returnObjects: true }) as string[];
