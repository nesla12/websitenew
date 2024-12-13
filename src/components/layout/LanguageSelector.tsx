import React, { useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';
import { Globe, Check } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
];

export const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl relative z-50"
        aria-label={t('common.selectLanguage')}
      >
        <Globe className="w-5 h-5" />
        <span className="hidden md:inline">{languages.find(l => l.code === currentLanguage)?.name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`${
              isMobile 
                ? 'fixed inset-x-4 bottom-4'
                : 'absolute right-0 mt-2'
            } z-50 py-2 w-auto min-w-[200px] bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50`}
            style={{ 
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>{lang.name}</span>
              {currentLanguage === lang.code && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};