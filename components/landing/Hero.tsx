"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#BF932A]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#9E6200]/8 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-32 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#BF932A]/30 bg-[#BF932A]/10 text-[#DFC57B] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BF932A] animate-pulse" />
          Now serving Malaysian businesses
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FCFCF7] leading-[1.1] tracking-tight max-w-4xl">
          Your Business Deserves a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF932A] via-[#DFC57B] to-[#BF932A]">
            Professional Website
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#ECDCAB]/70 max-w-2xl leading-relaxed">
          We build fast, beautiful websites for Malaysian businesses — then manage everything for you. No tech headaches, no disappearing freelancers. Just results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-base hover:bg-[#DFC57B] transition-all duration-200 shadow-lg shadow-[#BF932A]/20"
          >
            Get Your Website →
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full border border-[#ECDCAB]/20 text-[#ECDCAB] font-medium text-base hover:border-[#BF932A]/50 hover:text-[#FCFCF7] transition-all duration-200"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof numbers */}
        <div className="flex items-center gap-8 mt-6 pt-8 border-t border-[#1A1A1A] w-full justify-center flex-wrap">
          {[
            { number: "7 Days", label: "Average delivery" },
            { number: "RM99/mo", label: "Starting price" },
            { number: "100%", label: "Mobile-friendly" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#BF932A]">{stat.number}</span>
              <span className="text-sm text-[#ECDCAB]/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
    </section>
  );
}
