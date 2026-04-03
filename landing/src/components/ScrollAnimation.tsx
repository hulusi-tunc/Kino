"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

function useRange(
  mv: MotionValue<number>,
  input: number[],
  output: number[]
) {
  return useTransform(mv, input, output);
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ================================================================ */
  /*  SCROLL-LINKED TRANSFORMS — one continuous timeline               */
  /* ================================================================ */

  /* --- Video frame (persists entire section) --- */
  const videoFrameOpacity = useRange(p, [0, 0.06], [0, 1]);
  // Width: 800 centered → 580 left-aligned → 800 centered
  const videoWidth = useRange(
    p,
    [0, 0.30, 0.38, 0.70, 0.78],
    [800, 800, 580, 580, 800]
  );
  // Horizontal offset: 0 centered → shift left → 0 centered
  const videoLeftOffset = useRange(
    p,
    [0, 0.30, 0.38, 0.70, 0.78],
    [0, 0, -150, -150, 0]
  );

  /* --- Shimmer (fades in at stage 3, stays — image layers on top naturally cover it) --- */
  const shimmerOpacity = useRange(
    p,
    [0, 0.30, 0.36],
    [0, 0, 1]
  );

  /* --- Video content: overlay image (stages 4-5) --- */
  const overlayOpacity = useRange(p, [0.50, 0.58], [0, 1]);
  const overlayBlur = useRange(p, [0.55, 0.70], [20, 0]);
  const overlayBlurFilter = useTransform(
    overlayBlur,
    (v) => `blur(${v}px)`
  );

  /* --- Final sharp image (stage 5 — crossfades over the blur) --- */
  const finalImageOpacity = useRange(p, [0.70, 0.76], [0, 1]);

  /* --- Prompt card: ONE persistent element that moves from center → right panel --- */
  // Slide in from bottom, then hold, then move to right panel
  const promptCardOpacity = useRange(
    p,
    [0, 0.08, 0.14, 0.70, 0.77],
    [0, 0, 1, 1, 0]
  );
  const promptCardSlideY = useRange(
    p,
    [0, 0.08, 0.16],
    [80, 80, 0]
  );
  // Position: centered over video → right panel
  // Left offset (px from natural centered position)
  const promptCardLeft = useRange(
    p,
    [0, 0.30, 0.38],
    [240, 240, 640]
  );
  const promptCardTop = useRange(
    p,
    [0, 0.30, 0.38],
    [380, 380, 310]
  );
  const promptCardWidth = useRange(
    p,
    [0, 0.30, 0.38],
    [480, 480, 300]
  );
  // Inside backdrop-blur, opacity doesn't visually hide — use visibility + state
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showChips, setShowChips] = useState(false);

  useMotionValueEvent(p, "change", (v) => {
    setShowTypewriter(v >= 0.12 && v <= 0.36);
    setShowPlaceholder(v >= 0.34 && v <= 0.70);
    setShowChips(v >= 0.12 && v <= 0.35);
  });

  // Visibility: hide when opacity < 0.01 (fixes backdrop-blur compositing bug)
  const promptCardVisibility = useTransform(promptCardOpacity, (v) =>
    v < 0.01 ? "hidden" as const : "visible" as const
  );

  /* --- Typewriter (finishes BEFORE button click) --- */
  const typewriterProgress = useRange(p, [0.14, 0.26], [0, 1]);

  /* --- Send button click animation (26-30%): scale down→up + ring pulse --- */
  const sendBtnScale = useRange(
    p,
    [0, 0.26, 0.27, 0.285, 0.30],
    [1, 1, 0.82, 1.1, 1]
  );
  const sendRingScale = useRange(
    p,
    [0, 0.26, 0.27, 0.30],
    [1, 1, 1, 1.8]
  );
  const sendRingOpacity = useRange(
    p,
    [0, 0.26, 0.27, 0.30],
    [0, 0, 0.5, 0]
  );

  /* --- Right panel container (stages 3-4, fades out in 5) --- */
  const rightPanelOpacity = useRange(
    p,
    [0, 0.32, 0.38, 0.70, 0.77],
    [0, 0, 1, 1, 0]
  );
  const rightPanelVisibility = useTransform(rightPanelOpacity, (v) =>
    v < 0.01 ? "hidden" as const : "visible" as const
  );
  const rightPanelX = useRange(
    p,
    [0.32, 0.38, 0.70, 0.77],
    [30, 0, 0, 30]
  );

  /* --- Reasoning steps (staggered entrance within 35-50%) --- */
  const step1Opacity = useRange(p, [0.35, 0.38], [0, 1]);
  const step2Opacity = useRange(p, [0.38, 0.41], [0, 1]);
  const step3Opacity = useRange(p, [0.41, 0.44], [0, 1]);
  const step4Opacity = useRange(p, [0.44, 0.47], [0, 1]);

  /* --- Steps 1-2 get green checks immediately, 3-4 start gray → green in stage 4 --- */
  const step3CheckProgress = useRange(p, [0.54, 0.58], [0, 1]);
  const step4CheckProgress = useRange(p, [0.58, 0.62], [0, 1]);

  /* --- Agent message (appears in stage 4) --- */
  const agentMsgOpacity = useRange(p, [0.60, 0.65], [0, 1]);
  const agentMsgY = useRange(p, [0.60, 0.65], [12, 0]);

  /* (chat input is now the same prompt card — no separate element) */

  /* --- Action buttons (stage 5 only) --- */
  const actionsOpacity = useRange(p, [0.82, 0.88], [0, 1]);
  const actionsY = useRange(p, [0.82, 0.88], [20, 0]);

  /* --- Prompt label below video (stage 5) --- */
  const labelOpacity = useRange(p, [0.80, 0.85], [0, 1]);

  /* --- Subtitle text --- */
  const subtitleIndex = useRange(
    p,
    [0, 0.15, 0.35, 0.55, 0.75],
    [0, 1, 2, 3, 4]
  );
  const subtitles = [
    "Describe a scene. Watch your vision become cinematic video.",
    "Describe a scene. Watch your vision become cinematic video.",
    "Type your vision. Kino takes it from here.",
    "Kino understands context, motion, and style.",
    "Your video is ready to share with the world.",
  ];

  const promptText =
    "A cinematic flyover of lavender fields at golden hour, soft wind mov";

  return (
    <div ref={containerRef} id="scroll-scene" className="relative hidden md:block" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center bg-cream">
        {/* ---- Header ---- */}
        <div className="flex flex-col items-center pt-24 pb-6 px-6">
          <span className="inline-block font-instrument font-medium text-[11px] text-text-secondary uppercase tracking-[2.5px] bg-[#EEEDEA] rounded-full px-3 py-1.5 mb-4">
            How It Works
          </span>
          <h2 className="font-inter-tight font-bold text-[40px] text-text-primary text-center mb-3">
            From words to worlds.
          </h2>
          <SubtitleText progress={subtitleIndex} subtitles={subtitles} />
        </div>

        {/* ---- Scene ---- */}
        <div className="relative flex-1 w-full max-w-[960px] 2xl:max-w-[1100px] mx-auto px-6 xl:px-0">
          {/* ======== PERSISTENT VIDEO FRAME ======== */}
          <motion.div
            style={{
              opacity: videoFrameOpacity,
              width: videoWidth,
              x: videoLeftOffset,
            }}
            className="absolute top-4 left-0 right-0 mx-auto h-[450px] rounded-lg overflow-hidden bg-text-primary"
          >
            {/* Shimmer — AI generating effect */}
            <motion.div
              style={{ opacity: shimmerOpacity }}
              className="absolute inset-0 shimmer-overlay"
            />
            {/* Blurred overlay image (fades in during stage 4) */}
            <motion.div
              style={{ opacity: overlayOpacity, filter: overlayBlurFilter }}
              className="absolute inset-0"
            >
              <Image
                src="/images/BG-2.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Sharp final image (crossfades over blur in stage 5) */}
            <motion.div
              style={{ opacity: finalImageOpacity }}
              className="absolute inset-0"
            >
              <Image
                src="/images/BG-2.png"
                alt="Final video"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* ======== PROMPT CARD — ONE element: center → right panel ======== */}
          <motion.div
            style={{
              opacity: promptCardOpacity,
              visibility: promptCardVisibility,
              left: promptCardLeft,
              top: promptCardTop,
              width: promptCardWidth,
              y: promptCardSlideY,
            }}
            className="absolute z-10"
          >
            <div
              className="border-[0.5px] border-white/40 rounded-[26px] px-4 pt-4 pb-3 flex flex-col gap-3 relative shadow-lg shadow-black/5"
              style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            >
              {/* Typewriter text (stage 2) */}
              <div className="min-h-[44px]" style={{ visibility: showTypewriter ? "visible" : "hidden" }}>
                <TypewriterText text={promptText} progress={typewriterProgress} />
              </div>
              {/* Placeholder text (stages 3-4) */}
              <p
                className="absolute top-4 left-4 right-4 font-sans text-[15px] leading-[22px] text-text-tertiary pointer-events-none"
                style={{ visibility: showPlaceholder ? "visible" : "hidden" }}
              >
                Describe your video...
              </p>
              {/* Chips (stage 2 only) */}
              <div className="flex items-center gap-1.5" style={{ visibility: showChips ? "visible" : "hidden" }}>
                <span className="inline-flex items-center gap-1 bg-[#EEEDEA] rounded-full px-2 py-1 text-[12px] text-text-secondary font-instrument">
                  <span className="text-[13px]">🌅</span> Golden hour
                </span>
                <span className="inline-flex items-center gap-1 bg-[#EEEDEA] rounded-full px-2 py-1 text-[12px] text-text-secondary font-instrument">
                  <span className="text-[13px]">🎥</span> Drone
                </span>
              </div>
              {/* Toolbar (always visible) */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IconButton icon="plus" />
                  <IconButton icon="video" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-surface rounded-full px-4 py-2 text-[14px] text-text-secondary font-sans">
                    16:9 &middot; 4k
                  </span>
                  <div className="relative">
                    {/* Pulse ring */}
                    <motion.div
                      style={{
                        scale: sendRingScale,
                        opacity: sendRingOpacity,
                      }}
                      className="absolute inset-0 rounded-full bg-coral"
                    />
                    {/* Button */}
                    <motion.div
                      style={{ scale: sendBtnScale }}
                      className="relative w-8 h-8 rounded-full bg-coral flex items-center justify-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======== RIGHT PANEL (stages 3-4) ======== */}
          <motion.div
            style={{
              opacity: rightPanelOpacity,
              visibility: rightPanelVisibility,
              x: rightPanelX,
            }}
            className="absolute top-4 right-[20px] w-[300px] flex flex-col gap-4 pt-2"
          >
            {/* Reasoning steps */}
            <div className="flex flex-col gap-3">
              <motion.div style={{ opacity: step1Opacity }}>
                <Step done text="Understanding your scene..." />
              </motion.div>
              <motion.div style={{ opacity: step2Opacity }}>
                <Step done text="Composing camera path..." />
              </motion.div>
              <motion.div style={{ opacity: step3Opacity }}>
                <AnimatedStep text="Selecting visual style..." checkProgress={step3CheckProgress} />
              </motion.div>
              <motion.div style={{ opacity: step4Opacity }}>
                <AnimatedStep text="Rendering frames..." checkProgress={step4CheckProgress} />
              </motion.div>
            </div>

            {/* Agent message */}
            <motion.div
              style={{ opacity: agentMsgOpacity, y: agentMsgY }}
              className="flex items-start gap-2"
            >
              <div className="w-[18px] h-[18px] rounded-full border border-[#C8C7C3] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#54D96B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[12px] font-sans text-text-secondary leading-[18px]">
                Your video is ready! 🎬 I created a 10s cinematic drone shot
                with golden hour lighting. Want me to adjust anything?
              </p>
            </motion.div>

            {/* Chat input is now the moving prompt card — no duplicate here */}
          </motion.div>

          {/* ======== STAGE 5: LABEL + ACTIONS (below video) ======== */}
          <motion.div
            style={{ opacity: labelOpacity }}
            className="absolute top-[470px] left-0 right-0 mx-auto w-[800px]"
          >
            <p className="font-instrument italic text-[14px] text-text-tertiary">
              cinematic drone flyover of lavender fields at golden hour
            </p>
          </motion.div>
          <motion.div
            style={{ opacity: actionsOpacity, y: actionsY }}
            className="absolute top-[500px] left-0 right-0 mx-auto w-[800px]"
          >
            <div className="flex items-center gap-3">
              <button className="bg-coral hover:bg-coral-hover text-white font-semibold text-[14px] rounded-full px-5 py-3 transition-colors">
                Download HD
              </button>
              <button className="border border-border text-text-primary font-medium text-[14px] rounded-full px-5 py-3 hover:bg-surface transition-colors">
                Regenerate
              </button>
              <button className="border border-border text-text-primary font-medium text-[14px] rounded-full px-5 py-3 hover:bg-surface transition-colors">
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

/** Static step — always shows green check */
function Step({ done, text }: { done: boolean; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {done ? (
        <span className="text-[#54D96B] font-instrument font-medium text-[13px] w-[14px] text-center">
          &#10003;
        </span>
      ) : (
        <span className="w-[14px] h-[14px] rounded-full border border-[#C8C7C3] flex-shrink-0" />
      )}
      <span className={`font-instrument text-[13px] ${done ? "text-text-tertiary" : "text-[#C8C7C3]"}`}>
        {text}
      </span>
    </div>
  );
}

/** Step that transitions gray circle → green check driven by scroll */
function AnimatedStep({
  text,
  checkProgress,
}: {
  text: string;
  checkProgress: MotionValue<number>;
}) {
  const checkOpacity = useRange(checkProgress, [0, 0.5, 0.5, 1], [0, 0, 1, 1]);
  const circleOpacity = useRange(checkProgress, [0, 0.5, 0.5, 1], [1, 1, 0, 0]);
  const textColor = useTransform(checkProgress, (v) =>
    v > 0.5 ? "#A8A7A3" : "#C8C7C3"
  );

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-[14px] h-[14px] flex-shrink-0">
        <motion.span
          style={{ opacity: checkOpacity }}
          className="absolute inset-0 text-[#54D96B] font-instrument font-medium text-[13px] text-center leading-[14px]"
        >
          &#10003;
        </motion.span>
        <motion.span
          style={{ opacity: circleOpacity }}
          className="absolute inset-0 rounded-full border border-[#C8C7C3]"
        />
      </div>
      <motion.span style={{ color: textColor }} className="font-instrument text-[13px]">
        {text}
      </motion.span>
    </div>
  );
}

/** Typewriter driven by scroll position */
function TypewriterText({
  text,
  progress,
}: {
  text: string;
  progress: MotionValue<number>;
}) {
  const [displayed, setDisplayed] = useState("");

  useMotionValueEvent(progress, "change", (v) => {
    const count = Math.round(Math.min(1, Math.max(0, v)) * text.length);
    setDisplayed(text.slice(0, count));
  });

  return (
    <p className="font-instrument text-[15px] leading-[22px] text-text-primary min-h-[44px]">
      {displayed}
      <motion.span
        className="inline-block w-[2px] h-[16px] bg-coral ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
    </p>
  );
}

/** Subtitle that updates per stage */
function SubtitleText({
  progress,
  subtitles,
}: {
  progress: MotionValue<number>;
  subtitles: string[];
}) {
  const [text, setText] = useState(subtitles[0]);

  useMotionValueEvent(progress, "change", (v) => {
    const i = Math.min(Math.floor(Math.max(0, v)), subtitles.length - 1);
    setText(subtitles[i]);
  });

  return (
    <p className="font-instrument text-[14px] text-text-secondary text-center max-w-[500px]">
      {text}
    </p>
  );
}

/** Small icon button used in prompt inputs */
function IconButton({ icon }: { icon: "plus" | "video" }) {
  return (
    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
      {icon === "plus" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8h10" stroke="#686763" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="8" height="10" rx="1" stroke="#686763" strokeWidth="1.3" />
          <path d="M10 6l3-2v8l-3-2V6z" stroke="#686763" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}
