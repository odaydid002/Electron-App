import { useEffect, useState, useCallback } from "react";
import i18n from "../services/i18n";
import { locales } from "../constants/locales";
import { Storage } from "../services/storage";

const storage = new Storage()

const getStoredLanguage = async (): Promise<Language> => {
  return (await storage.get("language")) as Language;
}

export function useTranslation() {

  const [language, setLanguageState] = useState<Language>(() => i18n.language as Language);

  useEffect(() => {
    const loadStoredLanguage = async () => {
      const storedLang = await getStoredLanguage();

      if (!storedLang) return;

      i18n.changeLanguage(storedLang);
      setLanguageState(storedLang);

      document.documentElement.lang = storedLang;
      document.documentElement.dir = locales.isRTL(storedLang) ? "rtl" : "ltr";
    };

    loadStoredLanguage();
  }, []);

  // Apply language change (core logic)
  const setLanguage = useCallback(async (lang: Language) => {
    if (!lang || lang === language) return;

    i18n.changeLanguage(lang);
    await storage.set({key: 'language', value: lang})

    setLanguageState(lang);

    // Update DOM direction
    document.documentElement.lang = lang;
    document.documentElement.dir = locales.isRTL(lang) ? "rtl" : "ltr";
  }, [language]);

  // Sync with i18n external changes
  useEffect(() => {
    const handleChange = (lang: Language) => {
      setLanguageState(lang);

      storage.set({key: 'language', value: lang});

      document.documentElement.lang = lang;
      document.documentElement.dir = locales.isRTL(lang) ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  // Init direction + sync on first load
  useEffect(() => {
    const currentLang = language;

    i18n.changeLanguage(currentLang);

    document.documentElement.lang = currentLang;
    document.documentElement.dir = locales.isRTL(currentLang)
      ? "rtl"
      : "ltr";
  }, []);

  return {
    language,
    setLanguage,
    t: i18n.t.bind(i18n)
  };
}