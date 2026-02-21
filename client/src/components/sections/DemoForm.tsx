import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/images";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  role: z.string().optional(),
  obras: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const inputClasses =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#5D5D5D] focus:outline-none focus:border-[#FB0047]/50 focus:ring-2 focus:ring-[#FB0047]/30 transition-colors";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (_data: FormValues) => {
    setSubmitted(true);
  };

  return (
    <section id="demonstracao" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={IMAGES.construction}
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
          role="presentation"
          aria-hidden="true"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
                Sua obra no controle{" "}
                <span className="gradient-text">começa aqui.</span>
              </h2>
              <p className="text-[#CCCCCC] text-lg" style={{ lineHeight: '150%' }}>
                Junte-se a mais de 3.500 empresas. Agende uma demonstração personalizada.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 text-center"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold font-display text-white mb-2">Solicitação enviada!</h3>
                <p className="text-[#CCCCCC]">Nossa equipe entrará em contato em até 24 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 sm:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">Nome *</label>
                    <input
                      id="demo-name"
                      {...register("name")}
                      type="text"
                      className={inputClasses}
                      placeholder="Seu nome completo"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-[#FB0047] text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-company" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">Empresa *</label>
                    <input
                      id="demo-company"
                      {...register("company")}
                      type="text"
                      className={inputClasses}
                      placeholder="Nome da empresa"
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="text-[#FB0047] text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">E-mail *</label>
                    <input
                      id="demo-email"
                      {...register("email")}
                      type="email"
                      className={inputClasses}
                      placeholder="seu@email.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-[#FB0047] text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">Telefone</label>
                    <input
                      id="demo-phone"
                      {...register("phone")}
                      type="tel"
                      className={inputClasses}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-role" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">Cargo</label>
                    <input
                      id="demo-role"
                      {...register("role")}
                      type="text"
                      className={inputClasses}
                      placeholder="Diretor de Engenharia"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-obras" className="block text-sm font-semibold font-display text-[#CCCCCC] mb-1.5">Nº de obras</label>
                    <select
                      id="demo-obras"
                      {...register("obras")}
                      defaultValue=""
                      className={`${inputClasses} [&:has(option[value='']:checked)]:text-[#5D5D5D]`}
                    >
                      <option value="" disabled className="bg-black text-[#5D5D5D]">Selecione</option>
                      <option value="1-5" className="bg-black">1 a 5</option>
                      <option value="6-20" className="bg-black">6 a 20</option>
                      <option value="21-50" className="bg-black">21 a 50</option>
                      <option value="51-100" className="bg-black">51 a 100</option>
                      <option value="100+" className="bg-black">Mais de 100</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FB0047] hover:bg-[#FF1A5E] text-white font-bold font-display py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FB0047]/25 hover:scale-[1.01] active:scale-[0.99] text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Agendar Demonstração Gratuita
                </button>
                <p className="text-xs text-[#5D5D5D] text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <Link href="/privacidade"><span className="text-[#FB0047] hover:underline">Política de Privacidade</span></Link>.
                </p>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
