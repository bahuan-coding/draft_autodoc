import type { LucideIcon } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  features: Feature[];
  iconColor?: string;
}

export default function FeatureGrid({ features, iconColor = "text-blue-400" }: FeatureGridProps) {
  const iconBg = iconColor.includes("amber") ? "bg-amber-500/10" : "bg-blue-500/10";

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feat, i) => (
        <SectionReveal key={i} delay={i * 0.06}>
          <div className="glass-card glass-card-hover p-6 h-full">
            <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
              <feat.icon size={20} className={iconColor} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-navy-400 leading-relaxed">{feat.desc}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
