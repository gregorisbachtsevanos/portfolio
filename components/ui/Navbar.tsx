"use client";
import { useState, useEffect } from "react";
import { useApp } from "@/lib/AppContext";
import type { Locale } from "@/lib/utils/i18n";
import MobileMenu from "./MobileMenu";
import Controls from "./Controls";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const { t, locale, setLocale, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-overlay-bg-50 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-text font-extrabold text-base tracking-tight hover:opacity-60 transition-opacity"
        >
          Graig.
        </a>

        <DesktopMenu navLinks={navLinks} onClose={() => setMenuOpen(false)} />

        <Controls
          locale={locale}
          setLocale={setLocale}
          theme={theme}
          toggleTheme={toggleTheme}
          availableLabel={t.nav.available}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>

      {menuOpen && (
        <MobileMenu navLinks={navLinks} onClose={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
