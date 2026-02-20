/*
 * DESIGN: Liquid Glass — Fintech Premium + Conta Azul Positioning
 * Footer: Dark navy, clean grid, subtle borders, social icons
 */
import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Phone } from "lucide-react";

const footerLinks = {
  solucoes: [
    { label: "Autodoc Projetos", href: "/projetos" },
    { label: "Autodoc Workforce", href: "/workforce" },
    { label: "Agentes GD4", href: "/agentes-gd4" },
  ],
  empresa: [
    { label: "Sobre a Autodoc", href: "https://autodoc.com.br/sobre", external: true },
    { label: "Carreira", href: "https://autodoc.com.br/carreiras", external: true },
    { label: "Blog", href: "https://autodoc.com.br/blog", external: true },
    { label: "Cases de Sucesso", href: "https://autodoc.com.br/cases", external: true },
  ],
  suporte: [
    { label: "Fale Conosco", href: "https://wa.me/551150437900", external: true },
    { label: "Central de Ajuda", href: "https://autodoc.com.br/suporte", external: true },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Política de Cookies", href: "/privacidade" },
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
                href="https://www.linkedin.com/company/autodoc-tecnologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-blue-500/20 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-navy-400 hover:text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com/autodoc.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-pink-500/20 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-navy-400" />
              </a>
              <a
                href="https://www.youtube.com/@AutodocTecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
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
                  <Link href={link.href} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
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
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-navy-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block"
                      aria-label={`${link.label} (abre em nova aba)`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
                      <span className="text-sm text-navy-400 hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  )}
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
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-navy-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block"
                      aria-label={`${link.label} (abre em nova aba)`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
                      <span className="text-sm text-navy-400 hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <p className="text-xs text-navy-500 uppercase tracking-wider">Central de Vendas</p>
              <a
                href="tel:+551150437900"
                className="flex items-center gap-2 text-sm text-white font-medium hover:text-blue-400 transition-colors"
                aria-label="Ligar para (11) 5043-7900"
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
          <div className="flex items-center gap-6 flex-wrap">
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
