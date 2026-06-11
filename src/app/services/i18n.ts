import i18next from "i18next";

import { locales } from '../constants/locales'

i18next.init({
  lng: locales.default,
  fallbackLng: locales.default,
  resources: {
    en: {
      translation: locales.en
    },
    fr: {
        translation: locales.fr
    },
    ar: {
        translation: locales.ar
    },
  }
});

export default i18next;