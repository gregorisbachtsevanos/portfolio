import { defaultLocale, messagesByLocale } from "@/lang";
import { I18nContext } from "@/lib/i18n";
import { useContext } from "react";

const useI18n = () => {
	const context = useContext(I18nContext);
	if (!context) {
		return {
			locale: defaultLocale,
			setLocale: () => {},
			messages: messagesByLocale[defaultLocale],
		};
	}

	return context;
};

export default useI18n;
