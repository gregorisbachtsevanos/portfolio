"use client";
import Image from "next/image";
import { useApp } from "@/lib/AppContext";

export default function TechnicalExpertise() {
  const { t } = useApp();
  return (
    <section id="expertise" className="bg-bg border-t border-border py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4 reveal">{t.expertise.label}</p>
          <h2 className="reveal reveal-delay-1 text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-text tracking-tight mb-4">
            {t.expertise.heading}
          </h2>
          <p className="reveal reveal-delay-2 text-muted-2 text-[14px] max-w-md mx-auto font-mono leading-relaxed">
            {t.expertise.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {/* Card 1 */}
          <div className="bg-bg-alt p-7 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-text font-bold text-xl leading-snug mb-3">
                {t.expertise.card1_title}
              </h3>
              <p className="text-muted-2 text-[13px] leading-relaxed">
                {t.expertise.card1_desc}
              </p>
            </div>
            <a
              href="#"
              className="mt-6 text-[12px] text-accent font-medium hover:underline"
            >
              {t.expertise.learn_more}
            </a>
          </div>

          {/* Card 2 — image */}
          <div className="relative bg-bg-alt min-h-[280px] overflow-hidden img-zoom">
            <Image
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=600&q=80"
              alt="Node"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <h3 className="text-white font-bold text-xl leading-snug">
                {t.expertise.card2_title}
              </h3>
              <div>
                <p className="text-[#bbb] text-[13px] leading-relaxed mb-4">
                  {t.expertise.card2_desc}
                </p>
                <a
                  href="#"
                  className="text-[12px] text-white font-medium hover:underline"
                >
                  {t.expertise.learn_more}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-bg-alt p-7 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-text font-bold text-xl leading-snug mb-3">
                {t.expertise.card3_title}
              </h3>
              <p className="text-muted-2 text-[13px] leading-relaxed">
                {t.expertise.card3_desc}
              </p>
            </div>
            <a
              href="#"
              className="mt-6 text-[12px] text-accent font-medium hover:underline"
            >
              {t.expertise.learn_more}
            </a>
          </div>

          {/* Card 4 — image */}
          <div className="relative bg-bg-alt min-h-[240px] overflow-hidden img-zoom">
            <Image
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80"
              alt="DB"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <h3 className="text-white font-bold text-lg leading-snug">
                {t.expertise.card4_title}
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-bg-alt p-7 flex flex-col justify-between min-h-[240px]">
            <div>
              <h3 className="text-text font-bold text-xl leading-snug mb-3">
                {t.expertise.card5_title}
              </h3>
              <p className="text-muted-2 text-[13px] leading-relaxed">
                {t.expertise.card5_desc}
              </p>
            </div>
          </div>

          {/* Card 6 — image */}
          <div className="relative bg-bg-alt min-h-[240px] overflow-hidden img-zoom">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              alt="Analytics"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <h3 className="text-white font-bold text-lg leading-snug">
                {t.expertise.card6_title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
