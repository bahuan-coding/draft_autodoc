import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const COOKIE_CONSENT_KEY = "autodoc_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
          role="dialog"
          aria-label="Política de cookies"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="glass-card border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm text-navy-300 flex-1">
                Utilizamos cookies para melhorar sua experiência de navegação.
                Ao continuar, você concorda com nossa{" "}
                <Link href="/privacidade">
                  <span className="text-blue-400 hover:underline">Política de Privacidade</span>
                </Link>.
              </p>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleReject}
                  className="text-sm font-medium text-navy-400 hover:text-white px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors min-h-[44px]"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAccept}
                  className="text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-lg transition-colors min-h-[44px]"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
