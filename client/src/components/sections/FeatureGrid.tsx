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

export default function FeatureGrid({ features, iconColor = "text-[#FB0047]" }: FeatureGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feat, i) => (
        <SectionReveal key={i} delay={i * 0.06}>
          <div className="glass-card glass-card-hover gradient-border p-6 h-full">
            <div className="w-10 h-10 rounded-xl bg-[#FB0047]/10 flex items-center justify-center mb-4">
              <feat.icon size={20} className="text-[#FB0047]" />
            </div>
            <h3 className="text-base font-bold font-display text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-[#5D5D5D] leading-relaxed" style={{ lineHeight: '150%' }}>{feat.desc}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
