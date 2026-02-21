import { Star, Building2, Users, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { clients } from "@/data/home";

const logoSet = clients.map((client) =>
  client.logo ? (
    <div key={client.name} className="shrink-0 flex items-center justify-center w-[120px] lg:w-[140px]">
      <img
        src={client.logo}
        alt={client.name}
        className="h-6 lg:h-7 w-auto max-w-full object-contain opacity-40 hover:opacity-70 transition-opacity duration-500 select-none brightness-0 invert"
        loading="lazy"
        decoding="async"
      />
    </div>
  ) : (
    <div key={client.name} className="shrink-0 flex items-center justify-center w-[120px] lg:w-[140px]">
      <span className="text-sm lg:text-base font-bold text-white/25 hover:text-white/50 tracking-[0.15em] transition-colors duration-500 select-none uppercase">
        {client.name}
      </span>
    </div>
  )
);

export default function TrustBar() {
  return (
    <>
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

      <section className="py-10 bg-navy-900/20 overflow-hidden">
        <div className="container">
          <p className="text-center text-xs text-navy-500 uppercase tracking-widest font-medium mb-8">
            Confiado pelas maiores construtoras e incorporadoras do Brasil
          </p>
        </div>
        <div className="relative" aria-hidden="true">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
          <div
            className="flex w-max"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            <div className="flex shrink-0 items-center gap-10 lg:gap-14 px-5 lg:px-7">
              {logoSet}
            </div>
            <div className="flex shrink-0 items-center gap-10 lg:gap-14 px-5 lg:px-7">
              {logoSet}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
