import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { testimonialMeta } from "@/data/home";

export default function TestimonialsSection() {
  const { t } = useTranslation("home");
  const translatedQuotes = t("testimonials.quotes", { returnObjects: true }) as { quote: string; name: string; role: string; company: string }[];
  const testimonials = translatedQuotes.map((q, i) => ({ ...q, ...testimonialMeta[i] }));
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [current, paused]);

  const cur = testimonials[current];
  const prev = testimonials[(current - 1 + total) % total];
  const next = testimonials[(current + 1) % total];

  return (
    <section
      className="py-16 sm:py-20 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t("testimonials.ariaLabel")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-6">
            <span className="text-xs text-[#5D5D5D] uppercase tracking-widest font-semibold font-display">
              {t("testimonials.sectionLabel")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-5">
              {t("testimonials.title")}{" "}
              <span className="gradient-text">{t("testimonials.titleHighlight")}</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-[#FB0047]/10 border border-white/10 hover:border-[#FB0047]/30 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none"
              aria-label={t("testimonials.prevLabel")}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <div className="flex-1 relative min-h-[240px] sm:min-h-[280px]" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card gradient-border p-8 sm:p-10"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={t("testimonials.slideLabel", { current: current + 1, total })}
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    {cur.photo && (
                      <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/10">
                        <img
                          src={cur.photo}
                          alt={cur.name}
                          className="w-full h-full object-cover grayscale"
                          width={96}
                          height={96}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex gap-1 mb-4" aria-hidden="true">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={14} className="text-[#FB0047] fill-[#FB0047]" />
                        ))}
                      </div>
                      <blockquote className="text-[#CCCCCC] text-base sm:text-lg leading-relaxed mb-5 italic" style={{ lineHeight: '150%' }}>
                        "{cur.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-white font-bold font-display">
                            {cur.name}
                            {cur.inMemoriam && (
                              <span className="text-[#5D5D5D] text-xs font-normal ml-2">{t("testimonials.inMemoriam")}</span>
                            )}
                          </p>
                          <p className="text-[#5D5D5D] text-sm">
                            {cur.role} — {cur.company}
                          </p>
                        </div>
                        {cur.video && (
                          <a
                            href={cur.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold font-display text-[#FB0047] hover:text-[#FF1A5E] bg-[#FB0047]/10 hover:bg-[#FB0047]/20 px-4 py-2.5 rounded-full border border-[#FB0047]/20 transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                          >
                            <Play size={14} className="fill-[#FB0047]" aria-hidden="true" />
                            {t("testimonials.watchVideo")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-[#FB0047]/10 border border-white/10 hover:border-[#FB0047]/30 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none"
              aria-label={t("testimonials.nextLabel")}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-full"
                aria-label={t("testimonials.goToSlide", { num: i + 1 })}
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#FB0047]" : "w-2 bg-white/20 hover:bg-white/40"
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
            {[prev, cur, next].map((item, i) => (
              <button
                key={`preview-${item.name}`}
                type="button"
                onClick={() => {
                  if (i === 0) paginate(-1);
                  if (i === 2) paginate(1);
                }}
                aria-label={i === 0 ? t("testimonials.prevLabel") : i === 2 ? t("testimonials.nextLabel") : t("testimonials.currentSlide", { name: item.name })}
                className={`p-4 rounded-xl border transition-all duration-300 text-left focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none ${
                  i === 1
                    ? "bg-white/5 border-[#FB0047]/30"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-pointer"
                }`}
              >
                <p className="text-xs text-[#CCCCCC] line-clamp-2 leading-relaxed mb-2 italic">
                  "{item.quote}"
                </p>
                <p className={`text-xs font-bold font-display ${i === 1 ? "text-white" : "text-[#5D5D5D]"}`}>
                  {item.name}
                </p>
                <p className="text-[10px] text-[#5D5D5D]">{item.company}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
