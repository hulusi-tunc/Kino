"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useSignup } from "./SignupModal";

/* ------------------------------------------------------------------ */
/*  Data for 3 rotating hero states                                    */
/* ------------------------------------------------------------------ */

interface HeroState {
  /** The underlined keyword (dynamic part 1) */
  keyword: string;
  /** Second line: connector + subject (dynamic part 2) */
  secondLine: string;
  bg: string;
  prompt: string;
  chips: { emoji: string; label: string }[];
  reasoning: string[];
  promptLabel: string;
  tab: string;
}

const states: HeroState[] = [
  {
    keyword: "social reel",
    secondLine: "for a street food vlog",
    bg: "/images/BG-1.png",
    prompt:
      "Create a social reel for a street food vlog, close-up shots, sizzling, steam rising",
    chips: [
      { emoji: "\ud83c\udf5c", label: "Context" },
      { emoji: "\ud83c\udfac", label: "close-up" },
    ],
    reasoning: [
      "Understood food photography context",
      "Composing close-up sequence",
      "Selected street food aesthetic",
    ],
    promptLabel: "social reel for a street food vlog,",
    tab: "Social Reel",
  },
  {
    keyword: "product ad",
    secondLine: "for a luxury perfume",
    bg: "/images/BG-2.png",
    prompt:
      "Create a product ad for a luxury perfume, slow-motion reveal, golden light refractions",
    chips: [
      { emoji: "\ud83c\udfac", label: "Cinematic" },
      { emoji: "\ud83d\udce6", label: "Product" },
    ],
    reasoning: [
      "Understood product context",
      "Composing slow-motion reveal",
      "Selected commercial style",
    ],
    promptLabel: "product ad for a luxury perfume,",
    tab: "Product Ad",
  },
  {
    keyword: "cinematic shot",
    secondLine: "of a mountain lake",
    bg: "/images/BG-1.png",
    prompt:
      "Create a cinematic drone shot of a mountain lake at golden hour, slow pull-back reveal",
    chips: [
      { emoji: "\ud83c\udfd4\ufe0f", label: "Landscape" },
      { emoji: "\ud83c\udfa5", label: "Drone" },
    ],
    reasoning: [
      "Understood landscape composition",
      "Composing drone pull-back path",
      "Selected golden hour color grade",
    ],
    promptLabel: "cinematic drone shot of a mountain lake,",
    tab: "Cinematic Shot",
  },
];

const tabs = ["Social Reel", "Product Ad", "Cinematic Shot"];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const wordFade = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.3, ease: [0.55, 0.06, 0.68, 0.19] },
  },
} as const;

const contentFade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.55, 0.06, 0.68, 0.19] },
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/* Collect unique BG paths for preloading */
const bgImages = Array.from(new Set(states.map((s) => s.bg)));

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { open: openSignup } = useSignup();

  const next = useCallback(
    () => setActive((i) => (i + 1) % states.length),
    []
  );

  /* Preload all background images on mount */
  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const s = states[active];

  return (
    <section
      className="relative pt-[72px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ---- Top: Headline + Subtext ---- */}
      <div className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between py-10 2xl:py-14">
          {/* Headline + CTA */}
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-5 max-w-[680px] 2xl:max-w-[800px]">
            <h1 className="font-inter-tight font-bold text-[32px] leading-[38px] md:text-[60px] md:leading-[68px] 2xl:text-[72px] 2xl:leading-[82px] tracking-[-1.5px] text-text-primary">
              {/* Line 1: "Create a" + animated keyword */}
              <span>Create a </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`kw-${active}`}
                  variants={wordFade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block underline decoration-2 underline-offset-4"
                >
                  {s.keyword}
                </motion.span>
              </AnimatePresence>
              <br />
              {/* Line 2: animated connector + subject */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`line2-${active}`}
                  variants={wordFade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block"
                >
                  {s.secondLine}
                </motion.span>
              </AnimatePresence>
            </h1>
            {/* Subtext — below headline on mobile, hidden here on desktop */}
            <p className="font-instrument text-[14px] leading-[20px] text-text-secondary md:hidden">
              Describe your vision in plain language. Kino directs the scene,
              selects the style, and delivers your video. Ready to share.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white font-semibold text-[15px] rounded-full px-5 py-3 w-fit transition-colors"
            >
              Create Now
            </a>
          </div>

          {/* Subtext — desktop only */}
          <div className="hidden lg:flex items-center w-[355px] 2xl:w-[420px] py-3">
            <p className="font-instrument text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] text-text-primary">
              Describe your vision in plain language. Kino directs the scene,
              selects the style, and delivers your video. Ready to share.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Bottom: Product Preview Card ---- */}
      <div className="px-3">
        <div className="relative w-full rounded-2xl overflow-hidden h-[507px] md:h-[737px] 2xl:h-[860px]">
          {/* Background images — all rendered, crossfade via opacity */}
          {bgImages.map((src) => (
            <motion.div
              key={src}
              animate={{ opacity: s.bg === src ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
            </motion.div>
          ))}

          {/* Category Tabs */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-3 py-2 text-[14px] font-medium transition-colors ${
                  i === active
                    ? "text-white border-b border-white/40"
                    : "text-white/50 hover:text-white/70"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="hidden md:flex items-center gap-2 px-3 py-2 text-[14px] font-medium text-white/50 hover:text-white/70 transition-colors">
              Explore All
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-60"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Browser Frame / Product UI — LIGHT MODE */}
          <div className="absolute top-[94px] md:top-[99px] 2xl:top-[110px] left-1/2 -translate-x-1/2 w-[calc(100%-0px)] md:w-auto md:translate-x-0 md:left-[71px] md:right-[71px] 2xl:left-[5%] 2xl:right-[5%] bottom-0 bg-cream border border-border rounded-t-[10px] md:rounded-t-[17px] shadow-[0_5px_26px_rgba(0,0,0,0.12)] md:shadow-[0_9px_43px_rgba(0,0,0,0.12)] overflow-hidden flex">
            {/* Left: Video Area (60% on desktop, full on mobile) */}
            <div className="flex-1 md:flex-[6] bg-border overflow-hidden relative">
              {/* Video Preview */}
              <div className="absolute top-[20px] md:top-[45px] left-[24px] md:left-[46px] right-[24px] md:right-[46px] h-[319px] md:h-[427px] 2xl:h-[540px] rounded-lg overflow-hidden">
                <Image
                  src="/images/BG-2.png"
                  alt="Video preview"
                  fill
                  className="object-cover"
                />
                {/* Duration badge */}
                <div className="absolute bottom-[10px] right-[10px] bg-black/60 rounded px-2 py-0.5">
                  <span className="font-instrument font-medium text-[11px] text-white">
                    0:06
                  </span>
                </div>
              </div>

              {/* Prompt label — desktop only */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  variants={contentFade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="hidden md:block absolute top-[496px] 2xl:top-[610px] left-[43px] font-instrument text-[13px] text-text-secondary"
                >
                  {s.promptLabel}
                </motion.p>
              </AnimatePresence>

              {/* Filmstrip Timeline — hidden on mobile, positions are desktop-specific */}
              <div className="hidden md:block absolute top-[532px] 2xl:top-[646px] left-[46px] right-[46px] h-[65px] 2xl:h-[80px] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#d9d9d9] relative">
                  <Image
                    src="/images/BG-2.png"
                    alt=""
                    fill
                    className="object-cover opacity-65"
                  />
                </div>
              </div>

              {/* Active frame highlight — desktop only */}
              <div className="hidden md:block absolute top-[524px] 2xl:top-[636px] left-[340px] 2xl:left-[40%] w-[137px] 2xl:w-[160px] h-[82px] 2xl:h-[100px] rounded-lg border-2 border-coral shadow-[0_4px_15px_rgba(0,0,0,0.15)] overflow-hidden">
                <Image
                  src="/images/BG-2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Playhead — desktop only */}
              <div className="hidden md:block absolute top-[515px] 2xl:top-[627px] left-[407px] 2xl:left-[43%] w-[2px] h-[102px] 2xl:h-[120px] bg-coral" />
            </div>

            {/* Right: Chat Panel (40%) — hidden on mobile */}
            <div className="hidden md:flex flex-[4] bg-cream flex-col overflow-hidden">
              {/* Chat Header */}
              <div className="px-5 py-4 flex items-center">
                <span className="font-instrument font-medium text-[14px] text-text-secondary">
                  Kino Agent
                </span>
              </div>
              <div className="h-px bg-border" />

              {/* Messages area */}
              <div className="flex-1 flex flex-col justify-between px-5 py-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    variants={contentFade}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col gap-4"
                  >
                    {/* User Prompt Bubble */}
                    <div className="flex justify-end">
                      <div className="bg-surface rounded-xl px-4 py-3 max-w-[85%] relative">
                        <p className="font-instrument text-[14px] leading-[22px] text-text-secondary">
                          {s.prompt}
                        </p>
                        {/* Chips */}
                        <div className="flex items-center gap-1.5 mt-2">
                          {s.chips.map((chip) => (
                            <span
                              key={chip.label}
                              className="inline-flex items-center gap-1 bg-cream rounded-lg px-1.5 py-1 text-[12px] text-text-secondary font-instrument border border-border"
                            >
                              <span className="text-[14px]">{chip.emoji}</span>
                              {chip.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Reasoning Steps */}
                    <div className="flex flex-col gap-2 pl-1">
                      {s.reasoning.map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.3 + i * 0.15, duration: 0.35 },
                          }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-[#54D96B] font-instrument font-medium text-[13px]">
                            &#10003;
                          </span>
                          <span className="font-instrument text-[13px] text-text-secondary">
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Prompt Input — light glassmorphism */}
                <div className="bg-white border border-border rounded-[26px] px-4 pt-4 pb-3 flex flex-col gap-3 mt-4">
                  <textarea
                    rows={1}
                    placeholder="Describe your video..."
                    className="w-full font-sans text-[15px] leading-[22px] text-text-primary placeholder:text-text-tertiary bg-transparent resize-none focus:outline-none"
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); openSignup(); } }}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#686763" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="8" height="10" rx="1" stroke="#686763" strokeWidth="1.3" /><path d="M10 6l3-2v8l-3-2V6z" stroke="#686763" strokeWidth="1.3" strokeLinejoin="round" /></svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-surface rounded-full px-4 py-2 text-[14px] text-text-secondary font-sans">16:9 &middot; 4k</span>
                      <button onClick={openSignup} className="w-8 h-8 rounded-full bg-coral flex items-center justify-center hover:bg-coral-hover transition-colors">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
