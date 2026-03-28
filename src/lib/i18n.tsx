"use client";

import {
	createContext,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";

import {
	defaultLocale,
	detectLocaleFromEnvironment,
	locales,
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

export const I18nProvider = ({ children }: { children: ReactNode }) => {
	const [locale, setLocale] = useState<TLocale>(defaultLocale);
	const initialized = useRef(false);

	useEffect(() => {
		if (!initialized.current) {
			initialized.current = true;

			const savedLocale = localStorage.getItem(STORAGE_KEY);
			const initialLocale =
				savedLocale && locales.includes(savedLocale as TLocale)
					? (savedLocale as TLocale)
					: detectLocaleFromEnvironment();

			if (initialLocale !== locale) {
				setLocale(initialLocale);
				return;
			}
		}

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
