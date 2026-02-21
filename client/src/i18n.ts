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

import esCommon from "./locales/es/common.json";
import esHome from "./locales/es/home.json";
import esProjetos from "./locales/es/projetos.json";
import esWorkforce from "./locales/es/workforce.json";
import esAgentes from "./locales/es/agentes.json";
import esPrivacidade from "./locales/es/privacidade.json";

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
      es: {
        common: esCommon,
        home: esHome,
        projetos: esProjetos,
        workforce: esWorkforce,
        agentes: esAgentes,
        privacidade: esPrivacidade,
      },
    },
    fallbackLng: "pt",
    supportedLngs: ["pt", "en", "es"],
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
