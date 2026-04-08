"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";

import {
  defaultLocale,
  messagesByLocale,
  type TLocale,
  type IMessages,
} from "@/lang";

const STORAGE_KEY = "locale";

interface I18nContextValue {
  locale: TLocale;
  setLocale: (locale: TLocale) => void;
  messages: IMessages;
}

export const I18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);

export const I18nProvider = ({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: TLocale;
}) => {
  const [locale, setLocale] = useState<TLocale>(initialLocale);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as TLocale | null;
    if (saved && saved !== locale) {
      setLocale(saved);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "gr" ? "el" : locale;
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        messages: messagesByLocale[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
