"use client";
import { useApp } from "@/lib/AppContext";

export default function Footer() {
  const { t } = useApp();

  const cols = [
    {
      heading: t.footer.nav,
      links: ["Projects", "About", "Timeline", "Contact"],
    },
    {
      heading: t.footer.social,
      links: ["GitHub", "LinkedIn", "Twitter", "Dribbble"],
    },
    {
      heading: t.footer.legal,
      links: ["Privacy policy", "Terms of use", "Cookie policy"],
    },
  ];

  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-[var(--text)] font-extrabold text-xl mb-3">
              Graig.
            </div>
            <p className="text-[var(--muted-3)] text-[12px] font-mono leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] text-[var(--muted-3)] font-mono uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[var(--muted-2)] hover:text-[var(--text)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted-3)] text-[12px] font-mono">
            © {new Date().getFullYear()} Graig. All rights reserved.
          </p>
          <p className="text-[var(--muted-3)] text-[12px] font-mono">
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
}
