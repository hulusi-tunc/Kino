"use client";

import { useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Plan data                                                          */
/* ------------------------------------------------------------------ */

interface Feature {
  label: string;
}

interface Plan {
  name: string;
  price: string;
  period?: string;
  annualPrice?: string;
  subtitle: string;
  cta: string;
  highlight: string;
  features: Feature[];
  featured?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$19",
    annualPrice: "$15",
    period: "/mo",
    subtitle: "Billed monthly",
    cta: "Start creating",
    highlight: "30 videos / month",
    features: [
      { label: "30 videos / month" },
      { label: "Standard queue" },
      { label: "1080p max resolution" },
      { label: "15s max duration" },
      { label: "Watermark on export" },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    annualPrice: "$39",
    period: "/mo",
    subtitle: "Billed monthly",
    cta: "Go Pro",
    highlight: "100 videos / month",
    featured: true,
    badge: "Most popular",
    features: [
      { label: "100 videos / month" },
      { label: "Priority queue" },
      { label: "4K max resolution" },
      { label: "60s max duration" },
      { label: "No watermark" },
      { label: "Style Memory + Scene Edit" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Check icon                                                         */
/* ------------------------------------------------------------------ */

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-[2px]"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 5"
        stroke="#686763"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing Card                                                       */
/* ------------------------------------------------------------------ */

function PricingCard({
  plan,
  annual,
}: {
  plan: Plan;
  annual: boolean;
}) {
  const displayPrice =
    annual && plan.annualPrice ? plan.annualPrice : plan.price;

  return (
    <div
      className={`flex flex-col rounded-[20px] px-7 py-8 flex-1 min-w-0 ${
        plan.featured
          ? "bg-cream"
          : "bg-[rgba(250,249,247,0.55)] backdrop-blur-[28px]"
      }`}
    >
      {/* Name + Badge */}
      <div className="flex items-center gap-2">
        <span className="font-inter-tight font-semibold text-[18px] text-text-primary">
          {plan.name}
        </span>
        {plan.badge && (
          <span className="bg-coral text-white text-[12px] font-semibold rounded-full px-3 py-1 leading-none">
            {plan.badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-4 flex items-baseline">
        <span className="font-inter-tight font-bold text-[44px] leading-none tracking-[-1px] text-text-primary">
          {displayPrice}
        </span>
        {plan.period && (
          <span className="font-instrument text-[16px] text-text-secondary ml-0.5">
            {plan.period}
          </span>
        )}
      </div>

      {/* Subtitle */}
      <span className="font-instrument text-[13px] text-text-secondary mt-1">
        {annual && plan.annualPrice ? "Billed annually" : plan.subtitle}
      </span>

      {/* CTA */}
      <button
        className={`w-full rounded-full py-3.5 mt-6 text-[15px] font-semibold transition-colors ${
          plan.featured
            ? "bg-coral hover:bg-coral-hover text-white"
            : "bg-cream hover:bg-surface text-text-primary"
        }`}
      >
        {plan.cta}
      </button>

      {/* Highlight */}
      <span className="font-instrument font-medium text-[14px] text-[#D97300] mt-6">
        {plan.highlight}
      </span>

      {/* Divider */}
      <div
        className={`h-px my-4 ${
          plan.featured ? "bg-border" : "bg-[rgba(250,249,247,0.26)]"
        }`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-start gap-2">
            <Check />
            <span className="font-instrument text-[14px] text-text-secondary leading-[20px]">
              {f.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Toggle Switch                                                      */
/* ------------------------------------------------------------------ */

function Toggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center gap-3 mt-6">
      <span
        className={`font-instrument text-[14px] transition-colors ${
          !annual ? "text-text-primary" : "text-text-secondary"
        }`}
      >
        Monthly
      </span>

      <button
        onClick={onChange}
        className="relative w-[44px] h-[24px] rounded-full bg-cream border border-border transition-colors flex items-center shrink-0"
        aria-label="Toggle annual billing"
      >
        <div
          className={`absolute top-[2px] w-5 h-5 rounded-full bg-text-primary transition-transform ${
            annual ? "left-[22px]" : "left-[2px]"
          }`}
        />
      </button>

      <span
        className={`font-instrument text-[14px] transition-colors ${
          annual ? "text-text-primary" : "text-text-secondary"
        }`}
      >
        Annual
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="px-3 mt-2">
      <div className="relative w-full rounded-2xl overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/BG-2.png"
          alt=""
          fill
          className="object-cover"
        />
        {/* Overlay to soften background */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-10 p-6 py-10 md:p-16">
          {/* Left column */}
          <div className="md:w-[340px] shrink-0 flex flex-col">
            <h2 className="font-inter-tight font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.5px] text-text-primary">
              Simple pricing,
              <br />
              powerful results.
            </h2>
            <Toggle annual={annual} onChange={() => setAnnual(!annual)} />
          </div>

          {/* Right column: cards — stack vertically on mobile */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 flex-1 min-w-0">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} annual={annual} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
