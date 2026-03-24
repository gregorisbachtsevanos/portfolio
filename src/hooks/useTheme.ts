import type { TTheme } from "@/lib/theme";
import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme();
  const theme: TTheme =
    resolvedTheme === "dark" || resolvedTheme === "light"
      ? resolvedTheme
      : typeof document !== "undefined" &&
          document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";

  return {
    theme,
    setTheme: (nextTheme: TTheme) => setTheme(nextTheme),
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
};

export default useTheme;
