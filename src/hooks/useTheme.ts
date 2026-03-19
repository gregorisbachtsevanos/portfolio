import type { Theme } from "@/lib/theme";
import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
	const { resolvedTheme, setTheme } = useNextTheme();
	const theme: Theme =
		resolvedTheme === "dark" || resolvedTheme === "light"
			? resolvedTheme
			: typeof document !== "undefined" &&
				  document.documentElement.classList.contains("dark")
				? "dark"
				: "light";

	return {
		theme,
		setTheme: (nextTheme: Theme) => setTheme(nextTheme),
		toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
	};
};

export default useTheme;
