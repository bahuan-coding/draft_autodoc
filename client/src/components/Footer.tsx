/*
 * AUTODOC® Design System V2 — Footer
 * Dark, clean, #FB0047 accents, Titillium Web headings
 */
import { Linkedin, Instagram, Youtube, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocaleLink from "./LocaleLink";

export default function Footer() {
  const { t } = useTranslation("common");
  const footerLinks = {
    solucoes: [
      { label: t("nav.projetos"), href: "/projetos" },
      { label: t("nav.workforce"), href: "/workforce" },
      { label: t("nav.agentes"), href: "/agentes-gd4" },
    ],
    empresa: [
      { label: t("footer.about"), href: "https://autodoc.com.br/sobre", external: true },
      { label: t("footer.careers"), href: "https://autodoc.com.br/carreiras", external: true },
      { label: t("footer.blog"), href: "https://autodoc.com.br/blog", external: true },
      { label: t("footer.successCases"), href: "https://autodoc.com.br/cases", external: true },
    ],
    suporte: [
      { label: t("footer.contactUs"), href: "https://wa.me/551150437900", external: true },
      { label: t("footer.helpCenter"), href: "https://autodoc.com.br/suporte", external: true },
      { label: t("footer.privacyPolicy"), href: "/privacidade" },
      { label: t("footer.cookiePolicy"), href: "/privacidade" },
    ],
  };
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <LocaleLink href="/">
              <span className="text-xl font-bold font-display tracking-tight text-white">
                AUTO<span className="text-[#FB0047]">DOC</span>
                <span className="text-[#FB0047] text-[10px] align-super ml-0.5">®</span>
              </span>
            </LocaleLink>
            <p className="text-sm text-[#5D5D5D] leading-relaxed max-w-sm" style={{ lineHeight: '180%' }}>
              {t("footer.description")}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/autodoc-tecnologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#FB0047]/15 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#5D5D5D] group-hover:text-[#FB0047] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/autodoc.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#FB0047]/15 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#5D5D5D] group-hover:text-[#FB0047] transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@AutodocTecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#FB0047]/15 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none group"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-[#5D5D5D] group-hover:text-[#FB0047] transition-colors" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-sm font-bold font-display text-white mb-5 uppercase tracking-wider">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <LocaleLink href={link.href} className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
                    <span className="text-sm text-[#5D5D5D] hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-bold font-display text-white mb-5 uppercase tracking-wider">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#5D5D5D] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block"
                      aria-label={`${link.label} (${t("footer.opensNewTab")})`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <LocaleLink href={link.href} className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
                      <span className="text-sm text-[#5D5D5D] hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </LocaleLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-sm font-bold font-display text-white mb-5 uppercase tracking-wider">
              {t("footer.support")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#5D5D5D] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block"
                      aria-label={`${link.label} (${t("footer.opensNewTab")})`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <LocaleLink href={link.href} className="focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-sm px-1 -mx-1 inline-block">
                      <span className="text-sm text-[#5D5D5D] hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </LocaleLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <p className="text-xs text-[#5D5D5D] uppercase tracking-wider font-display">{t("footer.salesCenter")}</p>
              <a
                href="tel:+551150437900"
                className="flex items-center gap-2 text-sm text-white font-semibold hover:text-[#FB0047] transition-colors"
                aria-label={t("footer.callPhone")}
              >
                <Phone size={14} />
                (11) 5043-7900
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5D5D5D]">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-xs text-[#5D5D5D]">{t("footer.ecosystem")}</span>
            <span className="text-xs text-[#CCCCCC] font-semibold font-display">Ambar</span>
            <span className="text-xs text-[#5D5D5D]">|</span>
            <span className="text-xs text-[#CCCCCC] font-semibold font-display">Polar</span>
            <span className="text-xs text-[#5D5D5D]">|</span>
            <span className="text-xs text-[#CCCCCC] font-semibold font-display">Simple Wall</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
