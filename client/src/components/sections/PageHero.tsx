import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  badges?: string[];
  ctaText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  icon: Icon,
  iconColor = "text-[#FB0047]",
  title,
  subtitle,
  description,
  bgImage,
  badges,
  ctaText,
  ctaHref = "/#demonstracao",
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" role="presentation" aria-hidden="true" className="w-full h-full object-cover opacity-15" loading="eager" decoding="async" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      <div className="container relative z-10">
        <Link href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-md">
          <span className="inline-flex items-center gap-2 text-sm text-[#5D5D5D] hover:text-white transition-colors font-display">
            <ArrowLeft size={16} aria-hidden="true" />
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
            <div className="w-14 h-14 rounded-2xl bg-[#FB0047]/10 flex items-center justify-center">
              <Icon size={28} className="text-[#FB0047]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">{title}</h1>
              <span className="text-sm text-[#5D5D5D] uppercase tracking-wider font-display">{subtitle}</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-[#CCCCCC] leading-relaxed mb-6 max-w-2xl" style={{ lineHeight: '150%' }}>
            {description}
          </p>

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span key={badge} className="text-xs font-semibold font-display text-[#CCCCCC] px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  {badge}
                </span>
              ))}
            </div>
          )}

          {children}

          {ctaText && (
            <Link href={ctaHref} className="inline-block focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl">
              <span className="inline-flex items-center gap-2 font-bold font-display px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] bg-[#FB0047] hover:bg-[#FF1A5E] text-white hover:shadow-[#FB0047]/25">
                {ctaText}
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
