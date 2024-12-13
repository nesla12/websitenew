import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

// Get browser language or default to English
const getBrowserLanguage = () => {
  const lang = navigator.language.slice(0, 2);
  return ['en', 'de', 'it'].includes(lang) ? lang : 'en';
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: getBrowserLanguage(),
      setLanguage: (lang: string) => set({ currentLanguage: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);