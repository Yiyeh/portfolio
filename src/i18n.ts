import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Carga traducciones desde archivos JSON
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Conecta i18next con React
  .init({
    fallbackLng: "es", // Idioma predeterminado (español)
    debug: true, // Desactiva esto en producción
    interpolation: {
      escapeValue: false, // React ya escapa valores automáticamente
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta de los archivos de traducción
    },
  });

export default i18n;
