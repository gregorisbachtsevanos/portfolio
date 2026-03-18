"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

import {
	defaultLocale,
	locales,
	type Locale,
	type Messages,
	messagesByLocale,
} from "@/lang";

const STORAGE_KEY = "locale";

interface I18nContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	messages: Messages;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(defaultLocale);

	useEffect(() => {
		const savedLocale = localStorage.getItem(STORAGE_KEY);
		if (savedLocale && locales.includes(savedLocale as Locale)) {
			setLocale(savedLocale as Locale);
			return;
		}

		const browserLocale = navigator.language.toLowerCase().startsWith("el")
			? "gr"
			: defaultLocale;
		setLocale(browserLocale);
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
}

export function useI18n() {
	const context = useContext(I18nContext);
	if (!context) {
		return {
			locale: defaultLocale,
			setLocale: () => {},
			messages: messagesByLocale[defaultLocale],
		};
	}

	return context;
}
