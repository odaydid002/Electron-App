import en from '../../assets/locales/en/common.json' with { type: 'json' };
import fr from '../../assets/locales/fr/common.json' with { type: 'json' };
import ar from '../../assets/locales/ar/common.json' with { type: 'json' };

const rtlLanguages = ["ar", "he", "fa", "ur"];

export const locales = {
    default: 'en',
    en: en,
    fr: fr,
    ar: ar,
    name: {
        'ar': 'العربية',
        'fr': 'Français',
        'en': 'English',
    },
    isRTL: (lang: Language):boolean => {
        return rtlLanguages.includes(lang)
    }
}