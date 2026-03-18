import { ThemeContext } from "@/lib/theme";
import { useContext } from "react";

const useTheme = () => {
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
};

export default useTheme;
