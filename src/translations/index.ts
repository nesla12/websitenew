import { en } from './en';
import { de } from './de';
import { it } from './it';

export const translations = {
  en,
  de,
  it,
} as const;

export type TranslationKey = keyof typeof en;
export type NestedTranslationKey = string;