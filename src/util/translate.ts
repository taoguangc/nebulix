interface Locale {
  [key: string]: string;
}
import nl from "@locales/nl.json";
import en from "@locales/en.json";
import de from "@locales/de.json";
import es from "@locales/es.json";
import hr from "@locales/hr.json";
import zh from "@locales/zh.json";

const lang = import.meta.env.WEBSITE_LANGUAGE;
export const t = (field: string): string => {
  const translations: Record<string, Locale> = {
    en: en,
    nl: nl,
    es: es,
    de: de,
    hr: hr,
    zh: zh,
  };

  if (translations[lang] && translations[lang][field]) {
    return translations[lang][field];
  }

  if (translations["en"] && translations["en"][field]) {
    return translations["en"][field];
  }

  return field;
};
