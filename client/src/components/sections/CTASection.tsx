import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionReveal from "@/components/SectionReveal";
import LocaleLink from "@/components/LocaleLink";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  phone?: string;
  glow?: "blue" | "amber";
  id?: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaHref = "/#demonstracao",
  phone = "(11) 5043-7900",
  glow = "blue",
  id,
}: CTASectionProps) {
  const { t } = useTranslation("common");
  const resolvedCtaText = ctaText ?? t("scheduleDemo");
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-32 bg-black">
      <div className="container">
        <SectionReveal>
          <div className="glass-card glow-blue gradient-border p-6 sm:p-8 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">{title}</h2>
            <p className="text-[#CCCCCC] text-lg mb-8 max-w-xl mx-auto" style={{ lineHeight: '150%' }}>{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink href={ctaHref} className="inline-block focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl">
                <span className="inline-flex items-center justify-center gap-2 font-bold font-display px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] bg-[#FB0047] hover:bg-[#FF1A5E] text-white hover:shadow-[#FB0047]/25">
                  {resolvedCtaText}
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </LocaleLink>
              <a
                href="tel:+551150437900"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold font-display px-8 py-4 rounded-xl border border-white/10 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                {phone}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
