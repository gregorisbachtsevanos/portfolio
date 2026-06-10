"use client";
import Image from "next/image";
import { useApp } from "@/lib/AppContext";

export default function CTABanner() {
  const { t } = useApp();
  return (
    <section className="bg-bg-alt border-t border-border py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-5 reveal">{t.cta.label}</p>
            <h2 className="reveal reveal-delay-1 text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-text tracking-tight leading-tight mb-6">
              {t.cta.heading}
            </h2>
            <p className="reveal reveal-delay-2 text-muted-2 text-[15px] leading-relaxed mb-10 max-w-sm font-mono">
              {t.cta.sub}
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-white text-[13px] font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t.cta.primary}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border-2 text-[13px] text-muted hover:text-text hover:border-muted-3 transition-all px-6 py-3 rounded-full"
              >
                {t.cta.secondary}
              </a>
            </div>
          </div>

          <div className="relative h-[340px] rounded-2xl overflow-hidden img-zoom border border-border reveal reveal-delay-2">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="CTA"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-overlay-bg-alt-70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
