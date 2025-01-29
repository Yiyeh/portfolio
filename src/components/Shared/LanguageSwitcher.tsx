import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <div className="flex gap-2">
  {/* Español Button */}
  <button
    onClick={() => {
      changeLanguage("es");
 
    }}
    className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 hover:text-blue-700 flex items-center justify-center gap-2"
  >
    <img
      src="https://flagicons.lipis.dev/flags/4x3/es.svg"
      alt="Español"
      className="w-4 h-4"
    />
    <p className="hidden lg:block">Español</p>
  </button>

  {/* English Button */}
  <button
    onClick={() => {
      changeLanguage("en");
    
    }}
    className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded hover:bg-green-200 hover:text-green-700 flex items-center gap-2 justify-center"
  >
    <img
      src="https://flagicons.lipis.dev/flags/4x3/um.svg"
      alt="English"
      className="w-4 h-4"
    />
    <p className="hidden lg:block">English</p>
  </button>
</div>

  );
};