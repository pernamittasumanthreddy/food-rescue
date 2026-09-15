import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, translations, TranslationDictionary } from '../i18n/translations.js';

export type CallableTranslationDictionary = TranslationDictionary & ((keyPath: string) => string);

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: CallableTranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function createSafeTranslationProxy(target: any, fallback: any): any {
  const fn = function (keyPath: string): string {
    if (typeof keyPath !== 'string') return '';
    const parts = keyPath.split('.');

    function resolve(root: any): string | undefined {
      let curr = root;
      for (const p of parts) {
        if (curr && typeof curr === 'object' && p in curr) {
          curr = curr[p];
        } else {
          return undefined;
        }
      }
      return typeof curr === 'string' ? curr : undefined;
    }

    const res = resolve(target) ?? resolve(fallback);
    return res !== undefined ? res : keyPath;
  };

  const handler: ProxyHandler<any> = {
    get(obj, prop: string | symbol) {
      if (typeof prop === 'symbol' || prop === 'then' || prop === 'toJSON') {
        return Reflect.get(obj, prop);
      }
      const targetVal = target?.[prop];
      const fallbackVal = fallback?.[prop];
      const val = targetVal !== undefined ? targetVal : fallbackVal;

      if (typeof val === 'object' && val !== null) {
        return createSafeTranslationProxy(targetVal || {}, fallbackVal || {});
      }
      if (val !== undefined) {
        return val;
      }
      return String(prop);
    },
    has(obj, prop: string | symbol) {
      return prop in obj || (target && prop in target) || (fallback && prop in fallback);
    },
    ownKeys(obj) {
      const fnKeys = Reflect.ownKeys(obj);
      const tKeys = Object.keys(target || {});
      const fKeys = Object.keys(fallback || {});
      return Array.from(new Set([...fnKeys, ...tKeys, ...fKeys]));
    },
    getOwnPropertyDescriptor(obj, prop: string | symbol) {
      if (Reflect.has(obj, prop)) {
        return Reflect.getOwnPropertyDescriptor(obj, prop);
      }
      if ((target && prop in target) || (fallback && prop in fallback)) {
        return {
          configurable: true,
          enumerable: true,
          value: handler.get!(obj, prop, obj),
          writable: false
        };
      }
      return undefined;
    }
  };

  return new Proxy(fn, handler);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('foodrescue_lang') as Language;
      return saved && ['en', 'te', 'hi'].includes(saved) ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    if (['en', 'te', 'hi'].includes(lang)) {
      setLanguageState(lang);
      try {
        localStorage.setItem('foodrescue_lang', lang);
      } catch {
        // LocalStorage fallback
      }
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const safeT = useMemo<CallableTranslationDictionary>(() => {
    const currentDict = translations[language] || translations.en;
    return createSafeTranslationProxy(currentDict, translations.en);
  }, [language]);

  const value = useMemo<LanguageContextType>(() => ({
    language,
    setLanguage,
    t: safeT
  }), [language, safeT]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
