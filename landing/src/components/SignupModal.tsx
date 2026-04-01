"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const SignupCtx = createContext<{
  open: () => void;
}>({ open: () => {} });

export const useSignup = () => useContext(SignupCtx);

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const open = useCallback(() => setShow(true), []);

  return (
    <SignupCtx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {show && <SignupOverlay onClose={() => setShow(false)} />}
      </AnimatePresence>
    </SignupCtx.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

function SignupOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] bg-white rounded-[24px] p-8 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface flex items-center justify-center hover:bg-border transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3l8 8M11 3l-8 8" stroke="#686763" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Content */}
        <h3 className="font-inter-tight font-bold text-[24px] text-text-primary mb-2">
          Welcome to Kino
        </h3>
        <p className="font-instrument text-[14px] text-text-secondary mb-6">
          Create your free account to start directing AI videos.
        </p>

        {/* Social buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-3 w-full h-12 rounded-full bg-text-primary text-white font-medium text-[14px] hover:opacity-90 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full h-12 rounded-full bg-text-primary text-white font-medium text-[14px] hover:opacity-90 transition-opacity">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M13.1 9.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.7-1.8-3.3-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8C3.9 4.3 2.5 5.2 1.7 6.6c-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.3 2.8 2.3 1.1 0 1.6-.7 2.9-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.3-3.7zM11 3.3c.6-.7 1-1.7.9-2.7-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2.1-.5 2.9-1.4z" fill="white"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="font-instrument text-[12px] text-text-tertiary">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Email */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 rounded-full border border-border px-5 text-[14px] font-instrument text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-coral transition-colors"
          />
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-coral hover:bg-coral-hover text-white font-semibold text-[14px] transition-colors"
          >
            Get Started Free
          </button>
        </form>

        <p className="font-instrument text-[12px] text-text-tertiary text-center mt-4">
          3 free videos. No credit card required.
        </p>
      </motion.div>
    </motion.div>
  );
}
