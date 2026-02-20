import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

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
  ctaText = "Agendar Demonstração",
  ctaHref = "/#demonstracao",
  phone = "(11) 5043-7900",
  glow = "blue",
  id,
}: CTASectionProps) {
  const ctaBg = glow === "amber"
    ? "bg-amber-500 hover:bg-amber-400 text-navy-950"
    : "bg-blue-500 hover:bg-blue-400 text-white";

  return (
    <section id={id} className="py-16 sm:py-20 lg:py-32">
      <div className="container">
        <SectionReveal>
          <div className={`glass-card p-6 sm:p-8 lg:p-16 text-center glow-${glow}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ctaHref} className="inline-block focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl">
                <span className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${ctaBg}`}>
                  {ctaText}
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:+551150437900"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl border border-white/10 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
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
