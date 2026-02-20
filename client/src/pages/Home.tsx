import { useState, useEffect, useId } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  FolderOpen,
  Users,
  Bot,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Building2,
  Zap,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Phone,
  MessageCircle,
  FileCheck,
  GitBranch,
  Send,
  ClipboardCheck,
  UserCheck,
  Lock,
  BarChart3,
  Layers,
  Eye,
  Fingerprint,
  AlertTriangle,
  FileSearch,
  HardHat,
  Ruler,
  Briefcase,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IMAGES } from "@/lib/images";
import { testimonials, clients } from "@/data/home";

const typingPhrases = [
  "projetos e plantas.",
  "documentos de obra.",
  "fornecedores.",
  "compliance do canteiro.",
  "validação por IA.",
];

function useTypingEffect(phrases: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 2200) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-btn-${id}`;

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-navy-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-navy-300 text-sm sm:text-base leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demonstracao" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.construction}
          alt=""
          className="w-full h-full object-cover opacity-12"
          loading="lazy"
          role="presentation"
          aria-hidden="true"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Sua obra no controle{" "}
                <span className="gradient-text">começa aqui.</span>
              </h2>
              <p className="text-navy-300 text-lg">
                Junte-se a mais de 3.500 empresas. Agende uma demonstração personalizada.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 text-center"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Solicitação enviada!</h3>
                <p className="text-navy-300">Nossa equipe entrará em contato em até 24 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-medium text-navy-300 mb-1.5">Nome *</label>
                    <input id="demo-name" name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="demo-company" className="block text-sm font-medium text-navy-300 mb-1.5">Empresa *</label>
                    <input id="demo-company" name="company" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-navy-300 mb-1.5">E-mail *</label>
                    <input id="demo-email" name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-navy-300 mb-1.5">Telefone</label>
                    <input id="demo-phone" name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-role" className="block text-sm font-medium text-navy-300 mb-1.5">Cargo</label>
                    <input id="demo-role" name="role" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors" placeholder="Diretor de Engenharia" />
                  </div>
                  <div>
                    <label htmlFor="demo-obras" className="block text-sm font-medium text-navy-300 mb-1.5">Nº de obras</label>
                    <select id="demo-obras" name="obras" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors">
                      <option value="" className="bg-navy-950">Selecione</option>
                      <option value="1-5" className="bg-navy-950">1 a 5</option>
                      <option value="6-20" className="bg-navy-950">6 a 20</option>
                      <option value="21-50" className="bg-navy-950">21 a 50</option>
                      <option value="51-100" className="bg-navy-950">51 a 100</option>
                      <option value="100+" className="bg-navy-950">Mais de 100</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] text-base"
                >
                  Agendar Demonstração Gratuita
                </button>
                <p className="text-xs text-navy-500 text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <Link href="/privacidade"><span className="text-blue-400 hover:underline">Política de Privacidade</span></Link>.
                </p>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];
  const prev = testimonials[(current - 1 + total) % total];
  const next = testimonials[(current + 1) % total];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30 overflow-hidden">
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
              onClick={() => paginate(-1)}
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex-1 relative min-h-[240px] sm:min-h-[280px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card gradient-border p-8 sm:p-10"
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
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex gap-1 mb-4">
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
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2.5 rounded-full border border-blue-500/20 transition-all min-h-[44px]"
                          >
                            <Play size={14} className="fill-blue-400" />
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
              onClick={() => paginate(1)}
              className="shrink-0 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                onClick={() => {
                  if (i === 0) paginate(-1);
                  if (i === 2) paginate(1);
                }}
                aria-label={i === 0 ? "Depoimento anterior" : i === 2 ? "Próximo depoimento" : `Depoimento atual: ${item.name}`}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
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

export default function Home() {
  const typedText = useTypingEffect(typingPhrases);
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="mesh-gradient" />
        <Particles />

        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src={IMAGES.hero}
            alt=""
            role="presentation"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/70 to-navy-950" />
        </motion.div>

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 mb-6 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5">
                <Zap size={14} />
                Uma empresa Ambar
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.06] tracking-tight mb-6"
            >
              Gestão inteligente de
              <br />
              <span className="gradient-text">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[1em] bg-blue-400 ml-1 align-middle"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-10 max-w-2xl"
            >
              Do CDE ao compliance de fornecedores, do controle de acesso à validação por IA.{" "}
              <span className="text-white font-medium">Tudo o que a sua obra precisa. Onde você estiver.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#demonstracao"
                className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                Agendar Demonstração
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/551150437900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                Fale com um Especialista
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ TRUST BAR ══════ */}
      <div className="section-divider" />
      <section className="relative z-10 bg-navy-900/50 border-y border-white/5 backdrop-blur-sm">
        <div className="container py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {[
              { value: 20, suffix: "+", label: "anos no mercado", icon: Star },
              { value: 3500, suffix: "+", label: "clientes no Brasil", icon: Building2 },
              { value: 195, suffix: " mil+", label: "usuários ativos", icon: Users },
              { value: 60, suffix: "", label: "das 100 maiores construtoras", icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <stat.icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-xl lg:text-2xl font-bold text-white"
                  />
                  <p className="text-xs text-navy-400 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SOCIAL PROOF — MARQUEE ══════ */}
      <section className="py-12 bg-navy-900/20 overflow-hidden">
        <div className="container">
          <p className="text-center text-xs text-navy-500 uppercase tracking-widest font-medium mb-6">
            Confiado pelas maiores construtoras e incorporadoras do Brasil
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-16 items-center">
                {clients.map((client) => (
                  client.logo ? (
                    <img
                      key={`${setIdx}-${client.name}`}
                      src={client.logo}
                      alt={client.name}
                      className="h-6 lg:h-8 w-auto opacity-30 hover:opacity-60 transition-opacity duration-500 select-none brightness-0 invert"
                      width={120}
                      height={32}
                      loading="lazy"
                    />
                  ) : (
                    <span key={`${setIdx}-${client.name}`} className="text-xl lg:text-2xl font-extrabold text-white/20 hover:text-white/50 tracking-[0.2em] transition-colors duration-500 select-none">
                      {client.name}
                    </span>
                  )
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ PRODUTO 1: PROJETOS ══════ */}
      <div className="section-divider" />
      <section id="solucoes" className="py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <FolderOpen size={16} className="text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">Autodoc Projetos</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  O CDE que organiza{" "}
                  <span className="gradient-text">projetos, plantas e documentos</span>
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-8">
                  Ambiente Comum de Dados (CDE) para centralizar projetos arquitetônicos, estruturais, hidráulicos e elétricos. Controle de versões, workflow de aprovação e distribuição automática para equipes de campo e escritório.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: FolderOpen, label: "Gestão de Projetos e Plantas" },
                    { icon: GitBranch, label: "Controle de Revisões" },
                    { icon: Send, label: "Distribuição Automática" },
                    { icon: ClipboardCheck, label: "Workflow de Aprovação" },
                    { icon: Layers, label: "Visualizador BIM Integrado" },
                    { icon: Eye, label: "RDO — Registro Diário de Obra" },
                  ].map((feat) => (
                    <div key={feat.label} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <feat.icon size={15} className="text-blue-400 shrink-0" />
                      {feat.label}
                    </div>
                  ))}
                </div>

                <Link href="/projetos">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-base hover:gap-3 transition-all duration-300 group">
                    Conheça o Autodoc Projetos
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.projetos}
                      alt="Autodoc Projetos - CDE"
                      className="w-full rounded-xl"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ PRODUTO 2: WORKFORCE ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 overflow-hidden bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Users size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">Autodoc Workforce</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  Qualificação de fornecedores e{" "}
                  <span className="gradient-text-amber">compliance do canteiro</span>
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-8">
                  Homologação de fornecedores com checklist de documentos obrigatórios — CNPJ, CND, CRF, CNDT, ASO, NRs, FGTS, INSS. Controle de acesso biométrico ao canteiro e validação automática por IA via Agentes GD4.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    { icon: UserCheck, label: "Homologação de Fornecedores" },
                    { icon: Fingerprint, label: "Controle de Acesso Biométrico" },
                    { icon: FileCheck, label: "Validação de ASO, NRs, EPIs" },
                    { icon: Shield, label: "Compliance FGTS, INSS, CNDT" },
                    { icon: AlertTriangle, label: "Alertas de Vencimento" },
                    { icon: BarChart3, label: "Dashboard de Conformidade" },
                  ].map((feat) => (
                    <div key={feat.label} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <feat.icon size={15} className="text-amber-400 shrink-0" />
                      {feat.label}
                    </div>
                  ))}
                </div>

                <Link href="/workforce">
                  <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-base hover:gap-3 transition-all duration-300 group">
                    Conheça o Autodoc Workforce
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card gradient-border p-3 rounded-2xl overflow-hidden">
                    <img
                      src={IMAGES.workforce}
                      alt="Autodoc Workforce"
                      className="w-full rounded-xl"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ PRODUTO 3: AGENTES GD4 ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.aiAgents}
            alt=""
            role="presentation"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-12"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
        </div>

        <div className="container relative z-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Bot size={16} className="text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">Inteligência Artificial</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                  <span className="gradient-text-amber">21 Agentes de IA</span>{" "}
                  validando documentos da sua obra
                </h2>

                <p className="text-navy-300 text-lg leading-relaxed mb-6">
                  Os Agentes GD4 validam automaticamente CNPJ na Receita Federal, Certidões Negativas de Débitos, CRF do FGTS, CNDT trabalhista, ASOs, certificados NR-18, NR-35, NR-10, ARTs no CREA, RRTs no CAU, GFIP/SEFIP e Notas Fiscais. Cada agente é especialista em um tipo de documento.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: "Empresa", docs: "CNPJ, CND, CRF, CNDT, Contrato Social", color: "blue" },
                    { label: "Trabalhador", docs: "ASO, NR-18, NR-35, NR-10, Ficha EPI", color: "amber" },
                    { label: "Técnico", docs: "ART, RRT, Alvará, Licença Ambiental", color: "teal" },
                    { label: "Fiscal", docs: "GFIP, GPS, NFS-e, Retenções INSS/IR", color: "blue" },
                  ].map((cat) => (
                    <div key={cat.label} className="glass-card gradient-border p-3.5">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                        cat.color === "amber" ? "text-amber-400" : cat.color === "teal" ? "text-teal-400" : "text-blue-400"
                      }`}>{cat.label}</p>
                      <p className="text-xs text-navy-400 leading-relaxed">{cat.docs}</p>
                    </div>
                  ))}
                </div>

                <Link href="/agentes-gd4">
                  <span className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]">
                    Conheça os 21 Agentes
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="glass-card p-6 glow-amber gradient-border">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Bot size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Agente GD4 — Validador de CRF/FGTS</p>
                      <p className="text-xs text-navy-400">Processando Certidão de Regularidade...</p>
                    </div>
                    <span className="ml-auto text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      Ativo
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { step: "Extraindo dados da CRF — Caixa Econômica", status: "done" },
                      { step: "Validando CNPJ do fornecedor na Receita", status: "done" },
                      { step: "Verificando regularidade FGTS", status: "done" },
                      { step: "Cruzando com base de débitos trabalhistas", status: "done" },
                      { step: "Checando data de validade da certidão", status: "done" },
                      { step: "Gerando parecer de conformidade", status: "active" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        {item.status === "done" ? (
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full shrink-0"
                          />
                        )}
                        <span className={`text-sm ${item.status === "done" ? "text-navy-300" : "text-white font-medium"}`}>
                          {item.step}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-navy-400">Tempo: 1 min 47s</span>
                    <span className="text-xs text-emerald-400 font-medium">Precisão: 99.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ ATORES DA CONSTRUÇÃO ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Para cada ator da construção
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Uma solução para cada{" "}
                <span className="gradient-text">papel na obra</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Incorporadores, construtores, projetistas e empreiteiros — todos encontram
                na Autodoc as ferramentas certas para sua operação.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Incorporador",
                desc: "Simplifique a gestão de seus empreendimentos. Visão consolidada de projetos, documentos e compliance em todo o portfólio.",
                link: "/projetos",
                color: "blue",
              },
              {
                icon: HardHat,
                title: "Construtor",
                desc: "Controle o ciclo de vida, a produtividade e a qualidade da obra. Do planejamento à entrega, tudo em uma plataforma.",
                link: "/workforce",
                color: "amber",
              },
              {
                icon: Ruler,
                title: "Projetista",
                desc: "Coordene os projetos da obra e as entregas com softwares em BIM. Controle de revisões e distribuição automática.",
                link: "/projetos",
                color: "teal",
              },
              {
                icon: Briefcase,
                title: "Empreiteiro",
                desc: "Gerencie equipes de forma digital. Documentação de trabalhadores, ASOs, NRs e EPIs sempre em dia.",
                link: "/workforce",
                color: "amber",
              },
            ].map((persona, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={persona.link}>
                  <div className="glass-card glass-card-hover gradient-border p-7 h-full cursor-pointer group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      persona.color === "amber" ? "bg-amber-500/10" : persona.color === "teal" ? "bg-teal-500/10" : "bg-blue-500/10"
                    }`}>
                      <persona.icon size={24} className={
                        persona.color === "amber" ? "text-amber-400" : persona.color === "teal" ? "text-teal-400" : "text-blue-400"
                      } />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{persona.title}</h3>
                    <p className="text-sm text-navy-400 leading-relaxed mb-4">{persona.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPLIANCE RIBBON ══════ */}
      <div className="section-divider" />
      <section className="py-14 bg-navy-900/40 border-y border-white/5">
        <div className="container">
          <SectionReveal>
            <p className="text-center text-xs text-navy-500 uppercase tracking-widest font-medium mb-6">
              Documentos validados automaticamente pelos Agentes GD4
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                "CNPJ", "CND Federal", "CRF/FGTS", "CNDT", "Contrato Social",
                "ASO", "NR-18", "NR-35", "NR-10", "NR-33", "Ficha de EPI",
                "ART", "RRT", "Alvará", "GFIP/SEFIP", "GPS", "NFS-e",
                "PCMSO", "PGR", "Seguro de Vida",
              ].map((doc) => (
                <span
                  key={doc}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-navy-300 border border-white/5 hover:border-amber-400/30 hover:text-white transition-all duration-300"
                >
                  {doc}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ JORNADA DA CONSTRUÇÃO INTELIGENTE ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Nossa história
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Jornada da <span className="gradient-text">construção inteligente</span>
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                Líderes em soluções digitais para redução de riscos e aumento de produtividade na construção civil.
              </p>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "Era 1.0", title: "Papel", desc: "Pastas físicas, cópias heliográficas e arquivos em estantes. Risco de extravio e versões desatualizadas.", color: "navy-400" },
              { year: "Era 2.0", title: "Digital", desc: "Digitalização de documentos, PDFs e planilhas Excel. Arquivos locais sem controle de versão.", color: "navy-300" },
              { year: "Era 3.0", title: "Nuvem", desc: "Plataformas cloud com CDE, controle de revisões e distribuição automática. A era do Autodoc Projetos.", color: "blue-400" },
              { year: "Era 4.0", title: "Inteligência Artificial", desc: "21 Agentes GD4 validando documentos automaticamente. Gestão de Documentos 4.0 — de minutos para segundos.", color: "amber-400" },
            ].map((era, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 border-${era.color} bg-navy-950 shrink-0 z-10`} />
                    {i < 3 && <div className="w-0.5 flex-1 bg-white/5" />}
                  </div>
                  <div className="pb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider text-${era.color}`}>{era.year}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-1">{era.title}</h3>
                    <p className="text-sm text-navy-400 leading-relaxed">{era.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POR QUE AUTODOC ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Por que a Autodoc
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                A plataforma que as{" "}
                <span className="gradient-text">maiores construtoras</span> escolheram
              </h2>
              <p className="text-navy-400 text-lg max-w-2xl mx-auto">
                +20 anos de experiência em tecnologia para construção civil.
                Uma empresa Ambar, ao lado de Polar e Simple Wall.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Compliance Automático",
                desc: "Validação contínua de FGTS, INSS, CNDT, ASOs, NRs e certidões. Alertas automáticos antes do vencimento. Zero risco de multa por documentação irregular.",
              },
              {
                icon: Clock,
                title: "80% Menos Tempo",
                desc: "Validações que levavam 30-60 minutos por documento agora são concluídas em 2-5 minutos pelos Agentes GD4. Sua equipe foca na obra, não em papel.",
              },
              {
                icon: FolderOpen,
                title: "CDE + Workforce + IA",
                desc: "Projetos, plantas, documentos técnicos, fornecedores, trabalhadores e validação por IA em uma única plataforma. Do escritório ao canteiro.",
              },
              {
                icon: Users,
                title: "Portal do Fornecedor",
                desc: "Ambiente self-service onde fornecedores enviam documentos, acompanham status e recebem feedback em tempo real. Menos ligações, mais produtividade.",
              },
              {
                icon: Bot,
                title: "21 Agentes de IA",
                desc: "Cada agente especializado em um tipo de documento: CNPJ, CND, CRF, CNDT, ASO, NRs, ART, RRT, GFIP, NFS-e. Validação 24/7 com precisão superior a 97%.",
              },
              {
                icon: Building2,
                title: "Escalável",
                desc: "Da obra única ao portfólio de 200+ empreendimentos simultâneos. A plataforma cresce com sua operação, mantendo performance e controle.",
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card glass-card-hover gradient-border p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPARATIVO DE PRODUTOS ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Nossas soluções
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Três produtos, uma <span className="gradient-text">plataforma</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Autodoc Projetos",
                icon: FolderOpen,
                color: "blue",
                audience: "Projetistas, Coordenadores",
                highlights: ["CDE — Ambiente Comum de Dados", "Controle de revisões", "Workflow de aprovação", "Visualizador BIM integrado", "Distribuição automática"],
                link: "/projetos",
              },
              {
                name: "Autodoc Workforce",
                icon: Users,
                color: "amber",
                audience: "Suprimentos, RH, Compliance",
                highlights: ["Homologação de fornecedores", "Compliance trabalhista (FGTS, INSS)", "Controle de acesso biométrico", "Portal do fornecedor", "Alertas de vencimento"],
                link: "/workforce",
              },
              {
                name: "Agentes GD4",
                icon: Bot,
                color: "amber",
                audience: "Toda a operação",
                highlights: ["21 agentes de IA", "Validação automática de documentos", "Precisão >97%", "Disponível 24/7", "Orquestrador inteligente"],
                link: "/agentes-gd4",
              },
            ].map((product, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={product.link}>
                  <div className="glass-card gradient-border p-7 h-full flex flex-col cursor-pointer group hover:border-white/10 transition-colors">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      product.color === "amber" ? "bg-amber-500/10" : "bg-blue-500/10"
                    }`}>
                      <product.icon size={24} className={product.color === "amber" ? "text-amber-400" : "text-blue-400"} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-xs text-navy-500 mb-5">{product.audience}</p>
                    <ul className="space-y-2.5 flex-1">
                      {product.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-navy-300">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium mt-6 group-hover:gap-2 transition-all">
                      Ver detalhes <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <div className="section-divider" />
      <TestimonialsSection />

      {/* ══════ FAQ ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container max-w-3xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Perguntas{" "}
                <span className="gradient-text">frequentes</span>
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="glass-card p-6 sm:p-8">
              <FAQItem
                question="O que é o Autodoc?"
                answer="O Autodoc é uma plataforma de gestão digital para construção civil que integra projetos, documentos, fornecedores e mão de obra em um único ambiente. Com dois produtos — Autodoc Projetos (CDE) e Autodoc Workforce (gestão de fornecedores e canteiro) — e 21 agentes de IA para validação automática de documentos, a plataforma automatiza processos, reduz riscos e aumenta a produtividade da sua obra. A Autodoc é uma empresa Ambar, com mais de 20 anos no mercado."
              />
              <FAQItem
                question="Qual a diferença entre Autodoc Projetos e Autodoc Workforce?"
                answer="O Autodoc Projetos é um CDE (Common Data Environment) para gestão de projetos arquitetônicos, estruturais, hidráulicos e elétricos, com controle de revisões, workflow de aprovação e distribuição automática. O Autodoc Workforce é focado em gestão de fornecedores e canteiro: homologação, validação de documentos (CNPJ, CND, CRF, CNDT, ASO, NRs, EPIs), controle de acesso biométrico e compliance trabalhista. Juntos, cobrem todo o ciclo da construção."
              />
              <FAQItem
                question="O que são os Agentes GD4 e quais documentos eles validam?"
                answer="Os Agentes GD4 são 21 sistemas de inteligência artificial especializados em validação automática de documentos. Eles cobrem 4 categorias: Empresa (CNPJ, CND Federal, CRF/FGTS, CNDT, Contrato Social), Trabalhador (ASO, NR-18, NR-35, NR-10, NR-33, Ficha de EPI), Técnico (ART, RRT, Alvará de Construção, Licença Ambiental) e Fiscal (GFIP/SEFIP, GPS, NFS-e, Retenções). Cada agente extrai dados, valida conformidade e gera parecer automático."
              />
              <FAQItem
                question="Quais construtoras usam o Autodoc?"
                answer="O Autodoc é utilizado por mais de 3.500 empresas, incluindo 60 das 100 maiores construtoras do Brasil — MRV, Direcional, Tenda, Cury, Cyrela, Even e Patrimar, entre outras. São mais de 195 mil usuários ativos na plataforma."
              />
              <FAQItem
                question="O Autodoc é compatível com BIM?"
                answer="Sim. O Autodoc Projetos possui visualizador BIM integrado, compatível com os principais softwares de modelagem (Revit, ArchiCAD, Tekla). Você pode fazer upload de modelos IFC, visualizá-los na plataforma e vinculá-los aos projetos e documentos correspondentes."
              />
              <FAQItem
                question="Quanto tempo leva para implementar?"
                answer="A implementação é rápida e assistida. Nossa equipe de Customer Success acompanha onboarding, migração de dados e treinamento. A maioria dos clientes está operando em menos de 2 semanas. Para operações maiores (100+ obras), o prazo típico é de 4-6 semanas com suporte dedicado."
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══════ SEGURANÇA E CERTIFICAÇÕES ══════ */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 lg:py-32 bg-navy-900/30">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Segurança
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                Seus dados <span className="gradient-text">protegidos</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: "Criptografia", desc: "Dados criptografados em trânsito e em repouso (AES-256)" },
              { icon: Shield, title: "LGPD", desc: "Em conformidade com a Lei Geral de Proteção de Dados" },
              { icon: Clock, title: "SLA 99.9%", desc: "Alta disponibilidade com backup automático diário" },
              { icon: Fingerprint, title: "Autenticação", desc: "Autenticação multifator e controle granular de permissões" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-400">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FORMULÁRIO DE DEMONSTRAÇÃO ══════ */}
      <div className="section-divider" />
      <DemoForm />

      {/* ══════ CONTACT BAR ══════ */}
      <div className="bg-blue-500 py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-white font-semibold text-sm">Fale com um especialista:</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+551150437900"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              (11) 5043-7900
            </a>
            <a
              href="https://wa.me/551150437900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
