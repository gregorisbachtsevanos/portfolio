"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};
export const themes = Object.values(THEME);

export type TTheme = (typeof themes)[number];

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      themes={themes}
    >
      {children}
    </NextThemesProvider>
  );
};
