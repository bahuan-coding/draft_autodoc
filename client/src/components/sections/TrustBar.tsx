import { Star, Building2, Users, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { clients } from "@/data/home";
import { motion } from "framer-motion";

export default function TrustBar() {
  return (
    <>
      {/* ══════ TRUST BAR ══════ */}
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
                  <stat.icon size={18} className="text-blue-400" aria-hidden="true" />
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
        <div className="relative" aria-hidden="true">
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
                      decoding="async"
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
    </>
  );
}
