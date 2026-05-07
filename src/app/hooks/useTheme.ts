import { THEME, type TTheme } from "@/lib/theme";
import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme();
  const theme: TTheme =
    resolvedTheme === THEME.DARK || resolvedTheme === THEME.LIGHT
      ? resolvedTheme
      : typeof document !== "undefined" &&
          document.documentElement.classList.contains(THEME.DARK)
        ? THEME.DARK
        : THEME.LIGHT;

  return {
    theme,
    setTheme: (nextTheme: TTheme) => setTheme(nextTheme),
    toggleTheme: () =>
      setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK),
  };
};

export default useTheme;
