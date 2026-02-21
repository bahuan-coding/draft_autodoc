import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptCommon from "./locales/pt/common.json";
import ptHome from "./locales/pt/home.json";
import ptProjetos from "./locales/pt/projetos.json";
import ptWorkforce from "./locales/pt/workforce.json";
import ptAgentes from "./locales/pt/agentes.json";
import ptPrivacidade from "./locales/pt/privacidade.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enProjetos from "./locales/en/projetos.json";
import enWorkforce from "./locales/en/workforce.json";
import enAgentes from "./locales/en/agentes.json";
import enPrivacidade from "./locales/en/privacidade.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        common: ptCommon,
        home: ptHome,
        projetos: ptProjetos,
        workforce: ptWorkforce,
        agentes: ptAgentes,
        privacidade: ptPrivacidade,
      },
      en: {
        common: enCommon,
        home: enHome,
        projetos: enProjetos,
        workforce: enWorkforce,
        agentes: enAgentes,
        privacidade: enPrivacidade,
      },
    },
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    defaultNS: "common",
    ns: ["common", "home", "projetos", "workforce", "agentes", "privacidade"],
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
