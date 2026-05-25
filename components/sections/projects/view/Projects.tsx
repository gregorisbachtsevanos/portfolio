"use client";
import { useApp } from "@/lib/AppContext";
import Image from "next/image";
import { structureProjects } from "../utils/projects.utils";

export default function Projects() {
  const { t } = useApp();
  const projects = structureProjects(t);

  return (
    <section
      id="projects"
      className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4 reveal">{t.projects.label}</p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-tight mb-4">
            {t.projects.heading}
          </h2>
          <p className="reveal reveal-delay-2 text-[var(--muted-2)] text-[14px] max-w-sm mx-auto font-mono leading-relaxed">
            {t.projects.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-2)] transition-colors`}
            >
              <div className="img-zoom relative h-48">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-[var(--muted-2)] text-[13px] leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--accent)] hover:gap-2.5 transition-all"
                >
                  {t.projects.view_project}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[var(--border-2)] text-[13px] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted-3)] transition-all px-6 py-2.5 rounded-full"
          >
            {t.projects.view_all}
          </a>
        </div>
      </div>
    </section>
  );
}
