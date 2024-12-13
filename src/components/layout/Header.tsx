import React, { useState, useEffect } from 'react';
import { Book, Users, Workflow, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { useThemeStore } from '../../store/themeStore';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-background-dark/80 border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Automation Coach
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link to="/about" className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300">
              About
            </Link>
            
            <Link to="/services/make-automation" className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300">
              AI Automations
            </Link>
            
            <Link to="/workshops" className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300">
              Team Training
            </Link>

            <Link to="/guides" className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300">
              Free Guides
            </Link>

            <Link to="/assessment">
              <Button size="sm" className="animate-pulse hover:animate-none font-bold">
                Free Assessment
              </Button>
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="lg:hidden py-4 space-y-4"
            >
            <div className="space-y-4 px-2">
              <div className="flex items-center justify-between px-3 py-2">
                <LanguageSelector />
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              >
                About
              </Link>
              <Link
                to="/services/make-automation"
                className="block px-3 py-2 rounded-md text-base font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              >
                AI Automations
              </Link>
              <Link
                to="/workshops"
                className="block px-3 py-2 rounded-md text-base font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              >
                Team Training
              </Link>
              <Link
                to="/guides"
                className="block px-3 py-2 rounded-md text-base font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              >
                Free Guides
              </Link>
              <Link
                to="/assessment"
                className="block px-3 py-2 rounded-md text-base font-bold text-primary hover:text-primary-dark"
              >
                Free Assessment
              </Link>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};