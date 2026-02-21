import type { LucideIcon } from "lucide-react";
import type { TFunction } from "i18next";
import {
  UserCheck, FileSearch, Fingerprint, ShieldCheck, HeartPulse,
  HardHat, Bell, Smartphone, BarChart3, Bot,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const featureIcons: LucideIcon[] = [
  UserCheck, FileSearch, Fingerprint, ShieldCheck, HeartPulse,
  HardHat, Bell, Smartphone, BarChart3, Bot,
];

export const getFeatures = (t: TFunction): Feature[] =>
  featureIcons.map((icon, i) => ({
    icon,
    title: t(`workforce:features.f${i + 1}Title`),
    desc: t(`workforce:features.f${i + 1}Desc`),
  }));
