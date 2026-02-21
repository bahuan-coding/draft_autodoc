import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Workforce = lazy(() => import("./pages/Workforce"));
const AgentesGD4 = lazy(() => import("./pages/AgentesGD4"));
const Privacidade = lazy(() => import("./pages/Privacidade"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return null;
}

function LanguageSync() {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location.startsWith("/en")) {
      if (!i18n.language?.startsWith("en")) i18n.changeLanguage("en");
    } else if (i18n.language?.startsWith("en")) {
      setLocation(`/en${location === "/" ? "" : location}`, { replace: true });
    }
  }, [location]);

  useEffect(() => {
    const lang = i18n.language?.startsWith("en") ? "en" : "pt";
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "pt" ? "pt_BR" : "en_US");
  }, [i18n.language]);

  return null;
}

function PageLoader() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-background flex items-center justify-center" role="status" aria-label={t("loading")}>
      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">{t("loadingText")}</span>
    </div>
  );
}

const routes = [
  { path: "/", component: Home },
  { path: "/projetos", component: Projetos },
  { path: "/workforce", component: Workforce },
  { path: "/agentes-gd4", component: AgentesGD4 },
  { path: "/privacidade", component: Privacidade },
  { path: "/404", component: NotFound },
];

function Router() {
  const [location] = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Switch location={location}>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} component={r.component} />
            ))}
            {routes.map((r) => (
              <Route key={`en${r.path}`} path={`/en${r.path === "/" ? "" : r.path}`} component={r.component} />
            ))}
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  const { t } = useTranslation("common");
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <LanguageSync />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            {t("skipToContent")}
          </a>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main id="main-content">
            <Router />
          </main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
