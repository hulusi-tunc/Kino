"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useSignup } from "./SignupModal";


/* ------------------------------------------------------------------ */
/*  Floating thumbnail positions                                       */
/* ------------------------------------------------------------------ */

const thumbnails = [
  {
    src: "/images/BG-1.png",
    className: "top-[40px] left-[60px] w-[180px] h-[110px] -rotate-6",
    yRange: [120, -60] as [number, number],
  },
  {
    src: "/images/BG-2.png",
    className: "top-[30px] right-[80px] w-[160px] h-[100px] rotate-3",
    yRange: [140, -40] as [number, number],
  },
  {
    src: "/images/BG-1.png",
    className: "bottom-[60px] left-[140px] w-[140px] h-[88px] rotate-2",
    yRange: [80, -80] as [number, number],
  },
  {
    src: "/images/BG-2.png",
    className: "bottom-[40px] right-[160px] w-[130px] h-[82px] -rotate-3",
    yRange: [100, -60] as [number, number],
  },
];

/* ------------------------------------------------------------------ */
/*  Thumbnail with scroll parallax + hover scale                       */
/* ------------------------------------------------------------------ */

function FloatingThumb({
  src,
  className,
  yRange,
  progress,
}: {
  src: string;
  className: string;
  yRange: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], yRange);
  const opacity = useTransform(progress, [0, 0.15, 0.4], [0, 0.5, 0.7]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`hidden md:block absolute cursor-pointer ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full rounded-xl overflow-hidden shadow-lg"
      >
        <Image src={src} alt="" fill className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FinalCTA() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { open: openSignup } = useSignup();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream">
      {/* Background image at 12% opacity */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/images/BG-2.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Floating thumbnail cards with parallax + hover */}
      {thumbnails.map((thumb, i) => (
        <FloatingThumb
          key={i}
          src={thumb.src}
          className={thumb.className}
          yRange={thumb.yRange}
          progress={scrollYProgress}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-24 py-[80px] md:py-[120px]">
        {/* Headline */}
        <h2 className="font-sans font-semibold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.5px] text-text-primary text-left md:text-center">
          Your next video starts with a sentence.
        </h2>

        {/* Body */}
        <p className="font-sans text-[18px] leading-[28px] text-text-secondary text-left md:text-center max-w-[525px] mt-4">
          No learning curve. No editing software. Just your imagination and a
          sentence.
        </p>

        {/* Gap */}
        <div className="h-10 md:h-[71px]" />

        {/* Glassmorphism prompt input */}
        <div className="w-full max-w-[620px] bg-white/70 backdrop-blur-xl border border-border rounded-[26px] px-5 pt-4 pb-3 flex flex-col gap-3">
          <textarea
            rows={1}
            placeholder="Describe your video..."
            className="w-full font-sans text-[15px] leading-[22px] text-text-primary placeholder:text-text-tertiary bg-transparent resize-none focus:outline-none"
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); openSignup(); } }}
          />
          <div className="flex items-center justify-between">
            {/* Left icons */}
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="#686763"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="2"
                    y="3"
                    width="8"
                    height="10"
                    rx="1"
                    stroke="#686763"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M10 6l3-2v8l-3-2V6z"
                    stroke="#686763"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* Right: settings + send */}
            <div className="flex items-center gap-3">
              <span className="bg-surface rounded-full px-4 py-2 text-[14px] text-text-secondary font-sans">
                16:9 &middot; 4k
              </span>
              <button onClick={openSignup} className="w-8 h-8 rounded-full bg-coral flex items-center justify-center hover:bg-coral-hover transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Buttons — stack on mobile */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-8 w-full md:w-auto">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white font-semibold text-[16px] rounded-full px-8 py-4 transition-colors"
          >
            Start Free Now
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-text-primary text-text-primary font-medium text-[16px] rounded-full px-8 py-4 hover:bg-text-primary/5 transition-colors"
          >
            Explore Examples
          </a>
        </div>
      </div>
    </section>
  );
}
