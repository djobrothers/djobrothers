import { ref, computed } from 'vue';
import en from './translations/en.js';
import es from './translations/es.js';
import ru from './translations/ru.js';
import de from './translations/de.js';
import zh from './translations/zh.js';

const translations = { en, es, ru, de, zh };

export const availableLocales = [
  { code: 'en', name: 'English', flag: 'GB' },
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'de', name: 'Deutsch', flag: 'DE' },
  { code: 'zh', name: '中文', flag: 'CN' }
];

function detectLocale() {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('djo_language');
  if (saved && translations[saved]) {
    return saved;
  }
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

export const currentLocale = ref(detectLocale());

export function setLocale(code) {
  if (translations[code]) {
    currentLocale.value = code;
    if (typeof window !== 'undefined') {
      localStorage.setItem('djo_language', code);
    }
  }
}

export function t(key) {
  const dict = translations[currentLocale.value] || translations.en;
  const keys = key.split('.');
  let result = dict;
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Fallback to English if missing
      let fallback = translations.en;
      for (const fk of keys) {
        if (fallback && fallback[fk] !== undefined) {
          fallback = fallback[fk];
        } else {
          return key;
        }
      }
      return fallback;
    }
  }
  return result;
}

export function useI18n() {
  return {
    locale: currentLocale,
    setLocale,
    t,
    availableLocales
  };
}
