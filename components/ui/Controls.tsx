"use client";

import type { Locale } from "@/lib/utils/i18n";

interface ControlsProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: string;
  toggleTheme: () => void;
  availableLabel: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
  locale,
  setLocale,
  theme,
  toggleTheme,
  availableLabel,
  menuOpen,
  setMenuOpen,
}: ControlsProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Locale toggle */}
      <div className="flex items-center gap-1 bg-card border border-border rounded-full px-1 py-1">
        {(["en", "el"] as Locale[]).map((lng) => (
          <button
            key={lng}
            onClick={() => setLocale(lng)}
            className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full transition-all ${
              locale === lng
                ? "bg-accent text-white"
                : "text-muted hover:text-text"
            }`}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border text-muted hover:text-text transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Available badge */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 text-[12px] font-medium text-text bg-card border border-border px-3 py-1.5 rounded-full hover:border-border-2 transition-colors"
      >
        {availableLabel}
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </a>

      {/* Hamburger */}
      <button
        className="md:hidden text-muted hover:text-text"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
