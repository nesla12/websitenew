import React, { createContext, ReactNode, useEffect, useState } from 'react';
import i18next, { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useLanguageStore } from '../store/languageStore';
import { en } from '../translations/en';
import { de } from '../translations/de';
import { it } from '../translations/it';

export interface TranslationContextType {
  t: (key: string, options?: any) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => Promise<void>;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const [isInitialized, setIsInitialized] = useState(false);
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null);

  useEffect(() => {
    const initI18n = async () => {
      const instance = await i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources: {
            en: { translation: en },
            de: { translation: de },
            it: { translation: it }
          },
          fallbackLng: 'en',
          supportedLngs: ['en', 'de', 'it'],
          interpolation: {
            escapeValue: false
          },
          detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
          }
        });

      setI18nInstance(instance);
      setIsInitialized(true);
    };

    initI18n();
  }, []);

  useEffect(() => {
    if (isInitialized && i18nInstance && currentLanguage) {
      i18nInstance.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, isInitialized, i18nInstance]);

  const changeLanguage = async (lang: string) => {
    if (i18nInstance) {
      await i18nInstance.changeLanguage(lang);
    }
    setLanguage(lang);
  };

  const t = (key: string, options?: any) => {
    return i18nInstance ? i18nInstance.t(key, options) : key;
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};