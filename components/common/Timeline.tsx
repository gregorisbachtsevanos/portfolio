'use client'
import Image from 'next/image'
import { useApp } from '@/lib/AppContext'

const TIMELINE_IMAGES: (string | null)[] = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
  null,
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
  null,
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80',
]

export default function Timeline() {
  const { t } = useApp()
  return (
    <section id="timeline" className="bg-[var(--bg)] border-t border-[var(--border)] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">

          {/* Sticky left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label mb-5 reveal">{t.timeline.label}</p>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-tight mb-6">
              {t.timeline.heading}
            </h2>
            <p className="reveal reveal-delay-2 text-[var(--muted-2)] text-[14px] leading-relaxed font-mono">
              {t.timeline.sub}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]"/>
            <div className="space-y-14 pl-8">
              {t.timeline.items.map((item, i) => (
                <div key={item.year} className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative`}>
                  <div className="absolute -left-[34px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]"/>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[var(--accent)] font-mono text-sm font-medium">{item.year}</span>
                        <span className="text-[var(--border-2)] text-[12px]">·</span>
                        <span className="text-[var(--muted-2)] text-[12px] font-mono">{item.company}</span>
                      </div>
                      <h3 className="text-[var(--text)] font-bold text-lg mb-2">{item.role}</h3>
                      <p className="text-[var(--muted-2)] text-[13px] leading-relaxed">{item.description}</p>
                    </div>
                    {TIMELINE_IMAGES[i] && (
                      <div className="img-zoom w-full sm:w-32 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[var(--border)]">
                        <Image src={TIMELINE_IMAGES[i]!} alt={item.company} width={128} height={96} className="object-cover w-full h-full"/>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
