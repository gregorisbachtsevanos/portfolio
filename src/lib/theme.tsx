"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const themes = ["light", "dark"] as const;

export type Theme = (typeof themes)[number];

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			enableColorScheme
			disableTransitionOnChange
			themes={[...themes]}
		>
			{children}
		</NextThemesProvider>
	);
};
