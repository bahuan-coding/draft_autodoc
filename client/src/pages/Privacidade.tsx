import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { motion } from "framer-motion";
export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="mesh-gradient" />

        <div className="container relative z-10">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} />
              Voltar para Home
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Shield size={28} className="text-blue-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Política de Privacidade</h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <div className="glass-card p-8 sm:p-12 space-y-8 text-navy-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Informações Gerais</h2>
              <p>
                A Autodoc Processamento de Dados Ltda. (CNPJ: 04.714.448/0001-28) está comprometida com a proteção
                dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Dados Coletados</h2>
              <p>Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nome, e-mail, telefone e empresa (formulários de contato)</li>
                <li>Dados de navegação (cookies, IP, tipo de navegador)</li>
                <li>Dados de uso da plataforma (para clientes ativos)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Finalidade</h2>
              <p>Os dados coletados são utilizados para:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Responder solicitações de contato e demonstração</li>
                <li>Melhorar a experiência de navegação no site</li>
                <li>Enviar comunicações relacionadas aos nossos serviços</li>
                <li>Garantir a segurança e performance da plataforma</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Compartilhamento</h2>
              <p>
                Seus dados não são vendidos a terceiros. Podem ser compartilhados com empresas do grupo Ambar
                exclusivamente para fins de prestação de serviço, sempre em conformidade com a LGPD.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
              <p>
                Utilizamos cookies essenciais para funcionamento do site e cookies analíticos para melhorar sua experiência.
                Você pode gerenciar suas preferências de cookies a qualquer momento através do banner de consentimento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Seus Direitos</h2>
              <p>Conforme a LGPD, você pode solicitar:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação de consentimento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{" "}
                <a href="mailto:privacidade@autodoc.com.br" className="text-blue-400 hover:underline">
                  privacidade@autodoc.com.br
                </a>{" "}
                ou pelo telefone{" "}
                <a href="tel:+551150437900" className="text-blue-400 hover:underline">(11) 5043-7900</a>.
              </p>
            </div>

            <p className="text-xs text-navy-500 pt-4 border-t border-white/5">
              Última atualização: Fevereiro de 2026
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
