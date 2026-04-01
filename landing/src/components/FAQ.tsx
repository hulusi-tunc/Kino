"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "How is my content kept private and secure?",
    a: "All content is encrypted and stored securely. We never use your videos for training.",
  },
  {
    q: "How do credits work?",
    a: "Each plan includes a monthly video allowance. Credits refresh every billing cycle.",
  },
  {
    q: "Can I use generated videos commercially?",
    a: "Yes, all plans include commercial usage rights for generated content.",
  },
  {
    q: "Is attribution required?",
    a: "No attribution is required for any content created with Kino.",
  },
  {
    q: "What legal protections do I have?",
    a: "You retain full ownership of all videos you create with Kino.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel anytime from your account settings. No penalties.",
  },
];

/* ------------------------------------------------------------------ */
/*  Accordion Item                                                     */
/* ------------------------------------------------------------------ */

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-sans font-medium text-[16px] text-text-primary pr-4">
          {question}
        </span>
        <span className="font-sans text-[20px] text-text-secondary shrink-0 leading-none select-none">
          {open ? "\u2212" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[15px] leading-[24px] text-text-secondary pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream py-24">
      <div className="max-w-[880px] mx-auto px-6 xl:px-0">
        {/* Headline */}
        <h2 className="font-sans font-semibold text-[32px] leading-[40px] tracking-[-0.3px] text-text-primary text-left md:text-center">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
