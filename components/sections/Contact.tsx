"use client";
import { useApp } from "@/lib/AppContext";
import type { ReactNode } from "react";

interface ContactItem {
  label: string;
  value: string;
  href: string | null;
  icon: ReactNode;
}

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useApp();

  const items: ContactItem[] = [
    {
      label: t.contact.email_label,
      value: "graig@example.com",
      href: "mailto:graig@example.com",
      icon: <EmailIcon />,
    },
    {
      label: t.contact.linkedin_label,
      value: "/in/graig-engineer",
      href: "https://linkedin.com",
      icon: <LinkedInIcon />,
    },
    {
      label: t.contact.github_label,
      value: "github.com/graig",
      href: "https://github.com",
      icon: <GitHubIcon />,
    },
    {
      label: t.contact.location_label,
      value: t.contact.location_value,
      href: null,
      icon: <PinIcon />,
    },
  ];

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
