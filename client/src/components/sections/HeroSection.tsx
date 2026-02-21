import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, MessageCircle } from "lucide-react";
import { IMAGES } from "@/lib/images";

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

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const typedText = useTypingEffect(typingPhrases);
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">
      <div className="mesh-gradient" aria-hidden="true" />
      <Particles />

      <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
        <img
          src={IMAGES.hero}
          alt="Vista aérea de um canteiro de obras"
          role="presentation"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
      </motion.div>

      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold font-display text-[#FB0047] mb-6 px-4 py-1.5 rounded-full border border-[#FB0047]/20 bg-[#FB0047]/5">
              <Zap size={14} aria-hidden="true" />
              Uma empresa Ambar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold font-display leading-[1.06] tracking-tight mb-6"
          >
            Gestão inteligente de
            <br />
            <span className="text-[#FB0047]">{typedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[3px] h-[1em] bg-[#FB0047] ml-1 align-middle"
              aria-hidden="true"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#CCCCCC] leading-relaxed mb-10 max-w-2xl"
            style={{ lineHeight: '150%' }}
          >
            Do CDE ao compliance de fornecedores, do controle de acesso à validação por IA.{" "}
            <span className="text-white font-semibold">Tudo o que a sua obra precisa. Onde você estiver.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#demonstracao"
              className="group inline-flex items-center gap-2 bg-[#FB0047] hover:bg-[#FF1A5E] text-white font-bold font-display px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FB0047]/25 text-base hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Agendar Demonstração
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/551150437900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold font-display px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 text-base hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <MessageCircle size={16} aria-hidden="true" />
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
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FB0047]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
