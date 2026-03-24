import useI18n from "@/hooks/useI18n";
import { locales } from "@/lang";

const LanguageSwitcher = () => {
  const { locale, setLocale, messages } = useI18n();
  const { navigation } = messages;

  return (
    <div
      className="flex items-center rounded-full border border-border/70 bg-secondary/40 p-1"
      aria-label={navigation.languageLabel}
    >
      {locales.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:px-3 sm:text-xs ${
            locale === option
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={locale === option}
        >
          {navigation.languages[option]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
