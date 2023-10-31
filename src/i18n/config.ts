import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { DateTime } from 'luxon';
import { initReactI18next } from 'react-i18next';

import deNs from './locales/de/translation.json'
import enNs from './locales/en/translation.json'
import esNs from './locales/es/translation.json'
import frNs from './locales/fr/translation.json'
import itNs from './locales/it/translation.json'

export const defaultNS = 'common';
export const resources = {
  en: { common: enNs },
  de: { common: deNs },
  it: { common: itNs },
  fr: { common: frNs },
  es: { common: esNs },
};

i18next
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .use(resourcesToBackend((language: any, namespace: any, callback: (arg0: null, arg1: null) => void) => {
    import(`./${language}/${namespace}.json`)
      .then((resources) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  }))
  .use(LanguageDetector)
  .use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS,
  resources,
  interpolation: {
    
    escapeValue: false,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
i18next.services.formatter?.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value).setLocale(lng as string).toLocaleString(DateTime.DATE_HUGE)
});

export default i18next;