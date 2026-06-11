import { useEffect } from "react";
import i18n from "../services/i18n";
import { locales } from "../constants/locales";

export function useDirection() {
  useEffect(() => {
    const update = (lang: Language) => {
      document.documentElement.lang = lang as Language;
      document.documentElement.dir = locales.isRTL(lang) ? "rtl" : "ltr";
    };

    update(i18n.language as Language);

    i18n.on("languageChanged", update);

    return () => {
      i18n.off("languageChanged", update);
    };
  }, []);
}