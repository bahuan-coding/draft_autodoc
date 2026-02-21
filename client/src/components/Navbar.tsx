import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import LocaleLink from "./LocaleLink";

export default function Navbar() {
  const { t, i18n } = useTranslation("common");
  const [location, setLocation] = useLocation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "pt";
  const basePath = currentLang === "en" ? location.replace(/^\/en\/?/, "/").replace(/\/$/, "") || "/" : location;
  const toggleLang = () => {
    const next = currentLang === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
    const path = window.location.pathname;
    if (next === "en") {
      const clean = path.startsWith("/en") ? path : `/en${path === "/" ? "" : path}`;
      setLocation(clean);
    } else {
      const clean = path.replace(/^\/en/, "") || "/";
      setLocation(clean);
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/projetos", label: t("nav.projetos") },
    { href: "/workforce", label: t("nav.workforce") },
    { href: "/agentes-gd4", label: t("nav.agentes") },
  ];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/80 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <LocaleLink href="/" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md inline-block">
            <span className="text-xl font-bold tracking-tight text-white group relative inline-block">
              AUTO<span className="text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_12px_oklch(0.70_0.22_18.8)]">DOC</span>
            </span>
          </LocaleLink>

          <nav className="hidden lg:flex items-center gap-1" aria-label={t("nav.mainNav")}>
            {navLinks.map((link) => (
                <LocaleLink key={link.href} href={link.href} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                  <span
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    basePath === link.href
                      ? "text-white bg-white/10"
                      : "text-navy-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {basePath === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </LocaleLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-300 hover:text-white transition-colors px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label={currentLang === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <Globe size={14} />
              {currentLang === "pt" ? "EN" : "PT"}
            </button>
            <a
              href="https://autodoc.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy-300 hover:text-white transition-colors px-4 py-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md"
            >
              {t("nav.login")}
            </a>
            <LocaleLink href="/#demonstracao" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg inline-block">
              <span className="text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.97] block">
                {t("nav.freeTrial")}
              </span>
            </LocaleLink>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            >
              <nav aria-label={t("nav.mobileMenu")} className="container py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <LocaleLink key={link.href} href={link.href} className="block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                    <span
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        basePath === link.href
                          ? "text-white bg-white/10"
                          : "text-navy-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </LocaleLink>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={toggleLang}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-navy-300 hover:text-white transition-colors py-3 rounded-lg border border-white/10 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <Globe size={14} />
                    {currentLang === "pt" ? "English" : "Português"}
                  </button>
                  <a
                    href="https://autodoc.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm font-medium text-navy-300 hover:text-white transition-colors py-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md block"
                  >
                    {t("nav.login")}
                  </a>
                  <LocaleLink href="/#demonstracao" className="block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                    <span className="block text-center text-sm font-semibold bg-blue-500 text-white px-5 py-3 rounded-lg">
                      {t("nav.freeTrial")}
                    </span>
                  </LocaleLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
