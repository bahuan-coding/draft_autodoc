import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="mesh-gradient" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#FB0047]/10 border border-[#FB0047]/20 flex items-center justify-center mx-auto mb-8">
              <SearchX size={36} className="text-[#FB0047]" />
            </div>

            <h1 className="text-7xl sm:text-8xl font-bold font-display gradient-text mb-4">404</h1>

            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-4">
              Página não encontrada
            </h2>

            <p className="text-[#CCCCCC] text-base leading-relaxed mb-10" style={{ lineHeight: '150%' }}>
              A página que você procura não existe ou foi movida.
              <br />
              Volte para o início e explore nossas soluções.
            </p>

            <Link href="/" className="inline-block focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl">
              <span className="inline-flex items-center gap-2 bg-[#FB0047] hover:bg-[#FF1A5E] text-white font-bold font-display px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FB0047]/25 hover:scale-[1.02] active:scale-[0.98]">
                <ArrowLeft size={18} aria-hidden="true" />
                Voltar para Home
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
