import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { EarthBackground } from './EarthBackground';
import { useThemeStore } from '../../store/themeStore';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <EarthBackground />
      <div className="relative min-h-screen flex flex-col backdrop-blur-[2px] overflow-x-hidden">
        <Header />
        <main className="flex-grow bg-transparent text-text-light dark:text-text-dark relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};