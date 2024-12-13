import { useContext, useCallback } from 'react';
import { TranslationContext } from '../contexts/TranslationContext';
import type { TranslationContextType } from '../contexts/TranslationContext';

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }

  const t = useCallback((key: string, options?: any) => {
    return context.t(key, options);
  }, [context]);

  return {
    t,
    currentLanguage: context.currentLanguage,
    changeLanguage: context.changeLanguage
  };
};