import axios from 'axios';

const API_KEY = '145e13b8-9808-4db0-8351-6b2757d8946e:fx';
const API_URL = 'https://api-free.deepl.com/v2/translate';

// Cache translations in memory
const translationCache: { [key: string]: { [lang: string]: string } } = {};

export async function translateText(text: string, targetLang: string): Promise<string> {
  try {
    // Check cache first
    if (translationCache[text]?.[targetLang]) {
      return translationCache[text][targetLang];
    }

    const response = await axios.post(
      API_URL,
      new URLSearchParams({
        auth_key: API_KEY,
        text,
        target_lang: targetLang.toUpperCase(),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const translatedText = response.data.translations[0].text;

    // Cache the translation
    if (!translationCache[text]) {
      translationCache[text] = {};
    }
    translationCache[text][targetLang] = translatedText;

    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text
  }
}