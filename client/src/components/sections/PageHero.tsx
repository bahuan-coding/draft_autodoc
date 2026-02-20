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
  iconColor = "text-blue-400",
  title,
  subtitle,
  description,
  bgImage,
  badges,
  ctaText,
  ctaHref = "/#demonstracao",
  children,
}: PageHeroProps) {
  const iconBg = iconColor.includes("amber") ? "bg-amber-500/10" : "bg-blue-500/10";
  const ctaBg = iconColor.includes("amber")
    ? "bg-amber-500 hover:bg-amber-400 text-navy-950 hover:shadow-amber-500/25"
    : "bg-blue-500 hover:bg-blue-400 text-white hover:shadow-blue-500/25";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" role="presentation" aria-hidden="true" className="w-full h-full object-cover opacity-25" loading="eager" decoding="async" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
      </div>

      <div className="container relative z-10">
        <Link href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md">
          <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors">
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
            <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center`}>
              <Icon size={28} className={iconColor} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{title}</h1>
              <span className="text-sm text-navy-400 uppercase tracking-wider">{subtitle}</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span key={badge} className="text-xs font-medium text-navy-300 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  {badge}
                </span>
              ))}
            </div>
          )}

          {children}

          {ctaText && (
            <Link href={ctaHref} className="inline-block focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl">
              <span className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${ctaBg}`}>
                {ctaText}
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
