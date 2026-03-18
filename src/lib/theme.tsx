"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

const STORAGE_KEY = "theme";

export const themes = ["light", "dark"] as const;

export type Theme = (typeof themes)[number];

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
	isReady: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function resolveInitialTheme(): Theme {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("dark");
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem(STORAGE_KEY);
		const initialTheme =
			savedTheme === "light" || savedTheme === "dark"
				? savedTheme
				: resolveInitialTheme();

		setThemeState(initialTheme);
		applyTheme(initialTheme);
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!isReady) {
			return;
		}

		localStorage.setItem(STORAGE_KEY, theme);
		applyTheme(theme);
	}, [theme, isReady]);

	const setTheme = (nextTheme: Theme) => {
		setThemeState(nextTheme);
	};

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
				isReady,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		return {
			theme: "dark" as const,
			setTheme: () => {},
			toggleTheme: () => {},
			isReady: false,
		};
	}

	return context;
}
