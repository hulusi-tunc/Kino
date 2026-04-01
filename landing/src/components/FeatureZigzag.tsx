"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function AgentMessage({ text, chip }: { text: string; chip?: string }) {
  return (
    <div
      className="rounded-[16px] px-3.5 py-3 flex items-start gap-2.5"
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Kino icon — film clapper style */}
      <div className="w-[22px] h-[22px] flex-shrink-0 mt-0.5">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="6" width="12" height="10" rx="2" stroke="#1A1A1A" strokeWidth="1.3" />
          <path d="M7 6V4.5a1 1 0 011-1h2a1 1 0 011 1V6" stroke="#1A1A1A" strokeWidth="1.2" />
          <rect x="5" y="9" width="3" height="2" rx="0.5" fill="#1A1A1A" />
          <rect x="10" y="9" width="3" height="2" rx="0.5" fill="#1A1A1A" />
        </svg>
      </div>
      <div>
        <p className="text-[12px] font-sans text-text-secondary leading-[18px]">
          {text}
          {chip && (
            <>
              {" "}
              <span className="inline-flex items-center gap-1 bg-coral text-white text-[11px] font-instrument rounded-full px-2 py-0.5 align-middle">
                <span className="text-[12px]">🍜</span> {chip}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function ChipRow({ chips, icon, reverse }: { chips: string[]; icon: "video" | "palette"; reverse?: boolean }) {
  const doubled = [...chips, ...chips];
  return (
    <div
      className="rounded-[16px] px-3 py-2.5 flex items-center gap-2.5 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Icon */}
      <Image
        src={icon === "video" ? "/images/icon-scene-edit.png" : "/images/icon-style-memory.png"}
        alt=""
        width={40}
        height={32}
        className="flex-shrink-0"
      />
      {/* Chips — infinite marquee with edge fade */}
      <div className="overflow-hidden flex-1 chip-marquee-mask">
        <div className={`flex items-center gap-1.5 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
          {doubled.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="flex-shrink-0 bg-[#EEEDEA] text-text-primary text-[13px] font-instrument rounded-full px-3.5 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-surface rounded-2xl p-4 flex flex-col gap-3 flex-1">
      <div className="text-text-secondary">{icon}</div>
      <span className="font-sans font-medium text-[14px] text-text-primary">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo panels                                                        */
/* ------------------------------------------------------------------ */

function SceneEditDemo() {
  return (
    <div className="relative w-full md:w-[603px] aspect-[603/340] md:h-[321px]">
      {/* Video frame */}
      <div className="absolute top-0 left-0 w-full md:w-[540px] h-full md:h-[321px] rounded overflow-hidden">
        <Image
          src="/images/BG-2.png"
          alt="Scene edit demo"
          fill
          className="object-cover"
        />
      </div>
      {/* Agent message — top right overlapping (hidden mobile) */}
      <div className="hidden md:block absolute top-0 right-0 w-[274px]">
        <AgentMessage text="Your video is ready! 🎬 I created a 10s cinematic drone shot with golden hour lighting. Want me to adjust anything?" />
      </div>
      {/* Chip row — bottom right overlapping (hidden mobile) */}
      <div className="hidden md:block absolute bottom-[-19px] right-[-10px] w-[274px]">
        <ChipRow
          icon="video"
          chips={["Wide angle", "Drone spiral", "Close up", "Pan left", "Orbit"]}
        />
      </div>
    </div>
  );
}

function StyleMemoryDemo() {
  return (
    <div className="relative w-full md:w-[603px] aspect-[603/340] md:h-[321px]">
      {/* Video frame */}
      <div className="absolute top-0 right-0 w-full md:w-[540px] h-full md:h-[321px] rounded overflow-hidden">
        <Image
          src="/images/BG-2.png"
          alt="Style memory demo"
          fill
          className="object-cover"
        />
      </div>
      {/* Agent message — top left overlapping (hidden mobile) */}
      <div className="hidden md:block absolute top-0 left-0 w-[274px]">
        <AgentMessage
          text="Your video is ready! 🎬 I created a 10s cinematic drone shot with golden hour lighting. Want me to adjust anything?"
          chip="Context"
        />
      </div>
      {/* Chip row — bottom left overlapping (hidden mobile) */}
      <div className="hidden md:block absolute bottom-[-19px] left-[-10px] w-[274px]">
        <ChipRow
          icon="palette"
          chips={["Lightining", "Color grad", "Style", "Mood", "Framing"]}
          reverse
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function FeatureZigzag() {
  return (
    <section className="bg-cream py-[100px] md:py-[150px]">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col gap-24 md:gap-[200px]">
        {/* ---- Section A: Scene Edit (text LEFT, demo RIGHT) ---- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
        >
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-inter-tight font-bold text-[32px] md:text-[40px] text-text-primary leading-tight mb-4">
              Scene edit
            </h2>
            <p className="font-instrument text-[14px] text-text-secondary leading-[22px] mb-8 max-w-[470px]">
              Point at any element in your video, describe what to change. Kino
              preserves everything else and adjusts precisely what you ask.
            </p>
            <div className="flex gap-3">
              <FeaturePill
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                label="Natural language editing"
              />
              <FeaturePill
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 9.5l4.5-3v11l-4.5-3v-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                }
                label="24+ camera presets"
              />
            </div>
          </div>
          {/* Demo */}
          <SceneEditDemo />
        </motion.div>

        {/* ---- Section B: Style Memory (demo LEFT, text RIGHT → text first on mobile) ---- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16"
        >
          {/* Demo */}
          <StyleMemoryDemo />
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-inter-tight font-bold text-[32px] md:text-[40px] text-text-primary leading-tight mb-4">
              Style memory
            </h2>
            <p className="font-instrument text-[14px] text-text-secondary leading-[22px] mb-8 max-w-[470px]">
              Kino remembers your visual style across projects. Same color grade,
              same camera behavior, same cinematic signature whether you&apos;re
              creating one clip or a hundred.
            </p>
            <div className="flex gap-3">
              <FeaturePill
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                }
                label="Consistent color grading"
              />
              <FeaturePill
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 10h18M8 10v8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                }
                label="Brand style profiles"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
