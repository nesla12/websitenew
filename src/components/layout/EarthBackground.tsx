import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

export const EarthBackground: React.FC = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80';

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
    return () => {
      img.onload = null;
    };
  }, []);
  
  return (
    <>
      <div 
        className={`
          fixed inset-0 w-full h-full -z-20 transition-opacity duration-1000 transform-gpu
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: `brightness(${isDark ? '0.3' : '0.4'}) saturate(1.2)`,
          willChange: 'transform, opacity'
        }}
      />
      {!isLoaded && (
        <div className="fixed inset-0 w-full h-full -z-20 bg-background-dark" />
      )}
      <div 
        className={`
          fixed inset-0 w-full h-full -z-10
          bg-gradient-to-b from-transparent pointer-events-none transform-gpu
          ${isDark 
            ? 'via-background-dark/95 to-background-dark' 
            : 'via-background-light/95 to-background-light'
          }
        `}
      />
    </>
  );
};