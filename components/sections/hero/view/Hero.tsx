"use client";
import Image from "next/image";
import { useApp } from "@/lib/AppContext";
import { stats } from "../utils/helpers.utils";

export default function Hero() {
  const { t } = useApp();
  return (
    <section className="relative min-h-screen bg-bg flex flex-col pt-14 overflow-hidden">
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'%3E%3Canimate attributeName='baseFrequency' dur='1.5s' values='0.9;0.92;0.88;0.9' repeatCount='indefinite'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Cinematic flicker overlay */}
      <div className="pointer-events-none absolute inset-0 z-[5] flicker-overlay" />
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="z-10">
            <p className="section-label mb-6 reveal">{t.hero.label}</p>
            <h1
              className="reveal reveal-delay-1 font-extrabold text-text leading-[1.04] tracking-tight text-[clamp(2rem,6vw,4.5rem)] mb-6"
              style={{ textShadow: "0px 0px 25px var(--bg)" }}
            >
              {t.hero.headline}
            </h1>
            <p className="reveal reveal-delay-2 text-muted-2 text-[15px] leading-relaxed max-w-md mb-10 font-mono">
              {t.hero.sub}
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                {t.hero.cta_primary}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-text transition-colors font-medium"
              >
                {t.hero.cta_secondary}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="reveal reveal-delay-4 flex gap-8 mt-14 pt-8 border-t border-border">
              {stats(t).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-text">{s.value}</div>
                  <div className="text-[12px] text-muted-2 mt-0.5 font-mono">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo collage */}
          <div className="relative hidden lg:block h-[520px] z-0">
            <div className="img-zoom absolute top-0 right-0 w-[58%] h-[320px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="img-zoom absolute bottom-0 left-0 w-[50%] h-[240px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="img-zoom absolute bottom-4 right-0 w-[38%] h-[180px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                alt="Meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[200px] left-[5%] bg-surface border border-border-2 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[12px] text-text font-medium">
                  {t.hero.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
