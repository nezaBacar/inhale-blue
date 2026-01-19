// app/i18n/provider.tsx
'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { sl } from './locales/sl';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      sl,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}