import { lazy, Suspense, useEffect } from "react";
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

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center" role="status" aria-label="Carregando">
      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Carregando...</span>
    </div>
  );
}

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
            <Route path={"/"} component={Home} />
            <Route path={"/projetos"} component={Projetos} />
            <Route path={"/workforce"} component={Workforce} />
            <Route path={"/agentes-gd4"} component={AgentesGD4} />
            <Route path={"/privacidade"} component={lazy(() => import("./pages/Privacidade"))} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Pular para o conteúdo
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
