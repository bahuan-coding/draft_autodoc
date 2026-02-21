import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "/projetos", label: "Autodoc Projetos" },
  { href: "/workforce", label: "Autodoc Workforce" },
  { href: "/agentes-gd4", label: "Agentes GD4" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
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
          <Link href="/" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md inline-block">
            <span className="text-xl font-bold tracking-tight text-white group relative inline-block">
              AUTO<span className="text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_12px_oklch(0.70_0.22_18.8)]">DOC</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                  <span
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location === link.href
                      ? "text-white bg-white/10"
                      : "text-navy-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://autodoc.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy-300 hover:text-white transition-colors px-4 py-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md"
            >
              Entrar
            </a>
            <Link href="/#demonstracao" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg inline-block">
              <span className="text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.97] block">
                Teste Grátis
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
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
              <nav aria-label="Menu mobile" className="container py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                    <span
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location === link.href
                          ? "text-white bg-white/10"
                          : "text-navy-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="https://autodoc.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm font-medium text-navy-300 hover:text-white transition-colors py-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md block"
                  >
                    Entrar
                  </a>
                  <Link href="/#demonstracao" className="block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
                    <span className="block text-center text-sm font-semibold bg-blue-500 text-white px-5 py-3 rounded-lg">
                      Teste Grátis
                    </span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
