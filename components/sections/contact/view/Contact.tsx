"use client";
import { useApp } from "@/lib/AppContext";
import { PinIcon } from "../utils/icons.utils";
import { structureItems } from "../utils/items.utils";

export default function Contact() {
  const { t } = useApp();
  const items = structureItems(t);

  return (
    <section
      id="contact"
      className="bg-[var(--bg)] border-t border-[var(--border)] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-5 reveal">{t.contact.label}</p>
            <h2 className="reveal reveal-delay-1 text-4xl font-extrabold text-[var(--text)] tracking-tight mb-4">
              {t.contact.heading}
            </h2>
            <p className="reveal reveal-delay-2 text-[var(--muted-2)] text-[14px] font-mono leading-relaxed mb-12">
              {t.contact.sub}
            </p>

            <div className="space-y-8">
              {items.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal reveal-delay-${Math.min(i + 2, 4)} flex items-start gap-4`}
                >
                  <div className="mt-0.5 text-[var(--muted-2)]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--muted-3)] font-mono uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-[var(--text)] font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-[var(--border)]">
              <a
                href="mailto:graig@example.com"
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-h)] text-white text-[13px] font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t.contact.send}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[440px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] reveal reveal-delay-2">
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 440"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 24}
                  x2="800"
                  y2={i * 24}
                  stroke="var(--accent)"
                  strokeWidth="0.5"
                />
              ))}
              {Array.from({ length: 34 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 24}
                  y1="0"
                  x2={i * 24}
                  y2="440"
                  stroke="var(--accent)"
                  strokeWidth="0.5"
                />
              ))}
              <circle
                cx="400"
                cy="220"
                r="80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="220"
                r="40"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="220"
                r="10"
                fill="var(--accent)"
                opacity="0.5"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-[var(--surface)]/90 backdrop-blur border border-[var(--border-2)] rounded-2xl px-8 py-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mx-auto mb-3">
                  <PinIcon />
                </div>
                <p className="text-[var(--text)] font-semibold mb-1">
                  {t.contact.location_value}
                </p>
                <p className="text-[var(--muted-2)] text-[12px] font-mono">
                  {t.contact.remote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
