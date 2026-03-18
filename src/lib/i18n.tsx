"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";

import {
	defaultLocale,
	detectLocaleFromLanguage,
	locales,
	messagesByLocale,
	type Locale,
	type Messages,
} from "@/lang";

const STORAGE_KEY = "locale";

interface I18nContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	messages: Messages;
}

export const I18nContext = createContext<I18nContextValue | undefined>(
	undefined,
);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
	const [locale, setLocale] = useState<Locale>(defaultLocale);

	useEffect(() => {
		const savedLocale = localStorage.getItem(STORAGE_KEY);
		if (savedLocale && locales.includes(savedLocale as Locale)) {
			setLocale(savedLocale as Locale);
			return;
		}

		setLocale(detectLocaleFromLanguage(navigator.language));
	}, []);

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
