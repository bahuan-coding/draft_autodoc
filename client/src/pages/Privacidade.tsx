import LocaleLink from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacidade() {
  const { t } = useTranslation("privacidade");

  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="mesh-gradient" />

        <div className="container relative z-10">
          <LocaleLink href="/" className="inline-block mb-8 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md">
            <span className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors">
              <ArrowLeft size={16} aria-hidden="true" />
              {t("common:backHome")}
            </span>
          </LocaleLink>

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
              <h1 className="text-3xl sm:text-4xl font-semibold">{t("title")}</h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <div className="glass-card p-8 sm:p-12 space-y-8 text-navy-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s1Title")}</h2>
              <p>{t("s1Text")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s2Title")}</h2>
              <p>{t("s2Text")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {(t("s2Items", { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s3Title")}</h2>
              <p>{t("s3Text")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {(t("s3Items", { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s4Title")}</h2>
              <p>{t("s4Text")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s5Title")}</h2>
              <p>{t("s5Text")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s6Title")}</h2>
              <p>{t("s6Text")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {(t("s6Items", { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t("s7Title")}</h2>
              <p>
                {t("s7Text")}{" "}
                <a href="mailto:privacidade@autodoc.com.br" className="text-blue-400 hover:underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm">
                  privacidade@autodoc.com.br
                </a>{" "}
                {t("s7TextEnd")}{" "}
                <a href="tel:+551150437900" className="text-blue-400 hover:underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm">(11) 5043-7900</a>.
              </p>
            </div>

            <p className="text-xs text-navy-500 pt-4 border-t border-white/5">
              {t("lastUpdate")}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
