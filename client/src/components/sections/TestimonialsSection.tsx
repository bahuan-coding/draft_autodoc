import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { testimonials } from "@/data/home";

export default function TestimonialsSection() {
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

  const t = testimonials[current];
  const prev = testimonials[(current - 1 + total) % total];
  const next = testimonials[(current + 1) % total];

  return (
    <section
      className="py-16 sm:py-20 lg:py-32 bg-navy-900/30 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Depoimentos de clientes"
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
            <span className="text-xs text-navy-500 uppercase tracking-widest font-medium">
              Opinião de quem usa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
              A plataforma das maiores{" "}
              <span className="gradient-text">construtoras do Brasil</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Depoimento anterior"
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
                  aria-label={`Depoimento ${current + 1} de ${total}`}
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    {t.photo && (
                      <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/10">
                        <img
                          src={t.photo}
                          alt={t.name}
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
                          <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <blockquote className="text-navy-200 text-base sm:text-lg leading-relaxed mb-5 italic">
                        "{t.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-white font-semibold">
                            {t.name}
                            {t.inMemoriam && (
                              <span className="text-navy-500 text-xs font-normal ml-2">in memoriam</span>
                            )}
                          </p>
                          <p className="text-navy-400 text-sm">
                            {t.role} — {t.company}
                          </p>
                        </div>
                        {t.video && (
                          <a
                            href={t.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2.5 rounded-full border border-blue-500/20 transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                          >
                            <Play size={14} className="fill-blue-400" aria-hidden="true" />
                            Assistir depoimento
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
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Próximo depoimento"
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
                className="min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-full"
                aria-label={`Ir para depoimento ${i + 1}`}
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-blue-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
            {[prev, t, next].map((item, i) => (
              <button
                key={`preview-${item.name}`}
                type="button"
                onClick={() => {
                  if (i === 0) paginate(-1);
                  if (i === 2) paginate(1);
                }}
                aria-label={i === 0 ? "Depoimento anterior" : i === 2 ? "Próximo depoimento" : `Depoimento atual: ${item.name}`}
                className={`p-4 rounded-xl border transition-all duration-300 text-left focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                  i === 1
                    ? "bg-white/5 border-blue-500/30"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-pointer"
                }`}
              >
                <p className="text-xs text-navy-300 line-clamp-2 leading-relaxed mb-2 italic">
                  "{item.quote}"
                </p>
                <p className={`text-xs font-semibold ${i === 1 ? "text-white" : "text-navy-400"}`}>
                  {item.name}
                </p>
                <p className="text-[10px] text-navy-500">{item.company}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
