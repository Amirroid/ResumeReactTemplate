import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  backend: {
    loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;