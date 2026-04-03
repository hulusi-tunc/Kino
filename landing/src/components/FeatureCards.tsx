"use client";

import { useRef } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const cards = [
  {
    title:
      "Your visual signature stays consistent across every clip you create.",
    tags: ["Consistency", "Brand · Style"],
  },
  {
    title:
      "24+ cinematic presets: drone spiral, tracking shot, slow orbit, and more.",
    tags: ["Camera", "Preset Motions"],
  },
  {
    title:
      "Kino reasons through your scene, from composition to lighting to mood, before rendering.",
    tags: ["Shot planning"],
  },
  {
    title:
      "Cinema-grade resolution with no watermark. Download-ready for any platform.",
    tags: ["4K", "Dual Ratio"],
  },
  {
    title:
      "Point at any element in your video. Describe what to change. Kino adjusts precisely.",
    tags: ["Touch edit", "Precision"],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeatureCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 341, behavior: "smooth" });
  };

  return (
    <section className="px-3">
      <div className="bg-dark-bg rounded-2xl py-6 md:py-24 overflow-hidden">
        {/* Header */}
        <div className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10">
          <div>
            <span className="block font-instrument font-medium text-[11px] text-text-secondary uppercase tracking-[2.5px] mb-3">
              Features
            </span>
            <h2 className="font-inter-tight font-bold text-[32px] md:text-[40px] text-white leading-tight mb-2">
              Video, beyond generation
            </h2>
            <p className="font-instrument text-[14px] text-[#94979C]">
              AI output is just the starting point. You direct what comes next.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 pb-1">
            <button
              onClick={() => scroll(-1)}
              className="w-[44px] h-[44px] rounded-full bg-[#13161B] flex items-center justify-center hover:bg-[#1a1e25] transition-colors"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11 5l-4 4 4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-[44px] h-[44px] rounded-full bg-[#13161B] flex items-center justify-center hover:bg-[#1a1e25] transition-colors"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7 5l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel — left edge aligned with header text */}
        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-9 overflow-x-auto pr-4 pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ paddingLeft: "max(24px, calc((100% - 1200px) / 2 + 32px))" }}
        >
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col gap-2 flex-shrink-0 snap-start">
              {/* Card */}
              <div className="relative w-[268px] md:w-[305px] h-[430px] rounded-[26px] overflow-hidden bg-[#13161B]">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/BG-2.png"
                    alt=""
                    fill
                    className="object-cover"
                    style={{ opacity: 0.35 + i * 0.08 }}
                  />
                </div>
                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.89) 0%, rgba(0,0,0,0.4) 45%, transparent 100%)",
                  }}
                />
                {/* Title */}
                <p className="relative z-10 p-5 font-sans text-[15px] text-white leading-[22px]">
                  {card.title}
                </p>
                {/* Filmstrip at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="relative h-[65px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/BG-2.png"
                      alt=""
                      fill
                      className="object-cover opacity-60"
                    />
                    {/* Active frame */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-full border-2 border-[#346AEA] rounded-lg overflow-hidden">
                      <Image
                        src="/images/BG-2.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Playhead */}
                    <div className="absolute top-0 left-1/2 w-[2px] h-full bg-[#346AEA]" />
                  </div>
                </div>
              </div>

              {/* Tags below card */}
              <div className="flex items-center gap-2 mt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1A1E25] text-[#94979C] font-sans text-[14px] rounded-full px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
