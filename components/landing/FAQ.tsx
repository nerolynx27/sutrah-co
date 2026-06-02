"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most websites are delivered within 7 days after we receive your content (logo, photos, business info). Complex projects may take up to 14 days.",
  },
  {
    q: "What does the monthly retainer include?",
    a: "Hosting, SSL certificate, security updates, content updates (up to 2 per month on Starter, unlimited on Premium), and technical support.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — the website and all its content belong to you. If you ever want to stop the retainer, we'll hand over all files.",
  },
  {
    q: "Can I use my own domain name?",
    a: "Absolutely. We'll help you connect your existing domain (e.g. from Namecheap or GoDaddy) or help you purchase a new one.",
  },
  {
    q: "What if I want changes after the site is launched?",
    a: "Small content updates (text, photos, prices) are included in your monthly plan. Bigger changes like adding new pages are quoted separately.",
  },
  {
    q: "Do you work with businesses outside Malaysia?",
    a: "We currently focus on Malaysian businesses, but we're open to regional clients. Contact us to discuss your needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
            Common questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-[#BF932A]/40 bg-[#1A1A1A]" : "border-[#FCFCF7]/5 bg-[#1A1A1A]"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#FCFCF7] text-sm md:text-base">{faq.q}</span>
                <span className={`text-[#BF932A] text-xl transition-transform duration-200 flex-shrink-0 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#ECDCAB]/60 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
