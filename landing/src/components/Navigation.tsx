"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-2 px-6 xl:px-0">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-[22px] font-bold text-text-primary tracking-tight font-inter-tight">
            <span className="inline-block bg-text-primary text-cream px-[5px] py-[1px] rounded-[4px] mr-[1px] leading-none">
              K
            </span>
            ino
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-instrument text-[14px] text-text-secondary leading-[20px]">
          <a href="#features" className="hover:text-text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-text-primary transition-colors">
            Pricing
          </a>
        </div>

        {/* CTA Button — desktop */}
        <a
          href="#get-started"
          className="hidden md:inline-flex bg-text-primary text-white font-instrument font-medium text-[14px] rounded-full px-5 py-2 hover:bg-[#333] transition-colors"
        >
          Get started
        </a>

        {/* Hamburger — mobile */}
        <button className="md:hidden w-6 h-6 flex items-center justify-center" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#1C1B18" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
