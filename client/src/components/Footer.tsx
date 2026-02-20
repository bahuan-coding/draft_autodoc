/*
 * DESIGN: Liquid Glass — Fintech Premium + Conta Azul Positioning
 * Footer: Dark navy, clean grid, subtle borders, social icons
 */
import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Phone, Mail } from "lucide-react";

const footerLinks = {
  solucoes: [
    { label: "Autodoc Projetos", href: "/projetos" },
    { label: "Autodoc Workforce", href: "/workforce" },
    { label: "Agentes GD4", href: "/agentes-gd4" },
  ],
  empresa: [
    { label: "Sobre a Autodoc", href: "#" },
    { label: "Carreira", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Cases de Sucesso", href: "#" },
  ],
  suporte: [
    { label: "Fale Conosco", href: "#contato" },
    { label: "Central de Ajuda", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight text-white">
                AUTO<span className="text-blue-400">DOC</span>
              </span>
            </Link>
            <p className="text-sm text-navy-400 leading-relaxed max-w-sm">
              A evolução digital da construção civil. Plataforma líder em gestão
              de projetos, documentos e mão de obra para as maiores construtoras do Brasil.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-navy-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-500/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-navy-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-navy-400" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Soluções
            </h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-navy-400 hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Suporte
            </h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <p className="text-xs text-navy-500 uppercase tracking-wider">Central de Vendas</p>
              <a
                href="tel:+551150437900"
                className="flex items-center gap-2 text-sm text-white font-medium hover:text-blue-400 transition-colors"
              >
                <Phone size={14} />
                (11) 5043-7900
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} Autodoc Processamento de Dados Ltda. CNPJ: 04.714.448/0001-28
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-navy-600">Ecossistema</span>
            <span className="text-xs text-navy-400 font-medium">Ambar</span>
            <span className="text-xs text-navy-500">|</span>
            <span className="text-xs text-navy-400 font-medium">Polar</span>
            <span className="text-xs text-navy-500">|</span>
            <span className="text-xs text-navy-400 font-medium">Simple Wall</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
