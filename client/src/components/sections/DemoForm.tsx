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
    <section id="demonstracao" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.construction}
          alt=""
          className="w-full h-full object-cover opacity-12"
          loading="lazy"
          decoding="async"
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
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white mb-2">Solicitação enviada!</h3>
                <p className="text-navy-300">Nossa equipe entrará em contato em até 24 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 sm:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-medium text-navy-300 mb-1.5">Nome *</label>
                    <input
                      id="demo-name"
                      {...register("name")}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors"
                      placeholder="Seu nome completo"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-company" className="block text-sm font-medium text-navy-300 mb-1.5">Empresa *</label>
                    <input
                      id="demo-company"
                      {...register("company")}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors"
                      placeholder="Nome da empresa"
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-navy-300 mb-1.5">E-mail *</label>
                    <input
                      id="demo-email"
                      {...register("email")}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors"
                      placeholder="seu@email.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-navy-300 mb-1.5">Telefone</label>
                    <input
                      id="demo-phone"
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="demo-role" className="block text-sm font-medium text-navy-300 mb-1.5">Cargo</label>
                    <input
                      id="demo-role"
                      {...register("role")}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-navy-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors"
                      placeholder="Diretor de Engenharia"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-obras" className="block text-sm font-medium text-navy-300 mb-1.5">Nº de obras</label>
                    <select
                      id="demo-obras"
                      {...register("obras")}
                      defaultValue=""
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-colors [&:has(option[value='']:checked)]:text-navy-500 text-white"
                    >
                      <option value="" disabled className="bg-navy-950 text-navy-500">Selecione</option>
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
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
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
