'use client'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

let savedLanguage = 'ru';
if (typeof window !== 'undefined') {
  savedLanguage = localStorage.getItem('i18nextLng') || 'ru';
}

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: savedLanguage,
      fallbackLng: savedLanguage,
      defaultNS: "mainNavMenu",
      ns: ["mainNavMenu"],
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
      },
      detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage']
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });
}

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);

  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lng);
  }
};

export default i18n;