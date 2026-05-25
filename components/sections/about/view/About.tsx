"use client";
import Image from "next/image";
import { useApp } from "@/lib/AppContext";
import { CURRENT, SKILLS } from "../constants/about.consts";

export default function About() {
  const { t } = useApp();
  return (
    <section
      id="about"
      className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-5 reveal">{t.about.label}</p>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold text-[var(--text)] leading-tight tracking-tight mb-8">
              {t.about.heading}
            </h2>
            <p className="reveal reveal-delay-2 text-[var(--muted-2)] text-[15px] leading-relaxed mb-4">
              {t.about.p1}
            </p>
            <p className="reveal reveal-delay-2 text-[var(--muted-3)] text-[14px] leading-relaxed mb-8">
              {t.about.p2}
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-2 mb-10">
              {SKILLS.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <div className="reveal reveal-delay-4 flex items-center gap-6">
              <a
                href="#projects"
                className="text-[13px] font-semibold text-[var(--text)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
              >
                {t.about.cta_projects}
              </a>
              <a
                href="#contact"
                className="text-[13px] font-semibold text-[var(--muted-2)] hover:text-[var(--text)] transition-colors"
              >
                {t.about.cta_more}
              </a>
            </div>
          </div>

          <div className="relative h-[460px] lg:h-[540px] reveal reveal-delay-1">
            <div className="img-zoom absolute inset-0 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                alt="About"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 bg-[var(--bg-alt)]/90 backdrop-blur border border-[var(--border-2)] rounded-xl px-5 py-3">
              <div className="text-[11px] text-[var(--muted-3)] font-mono mb-1">
                {t.about.currently}
              </div>
              <div className="flex gap-2 flex-wrap">
                {CURRENT.map((s) => (
                  <span
                    key={s}
                    className="text-[12px] text-[var(--text)] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
