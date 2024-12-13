import { create } from 'zustand';
import { Theme } from '../types';

export const useThemeStore = create<Theme>((set) => ({
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));