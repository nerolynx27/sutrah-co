"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FCFCF7] flex flex-col px-6 md:px-10 py-6 overflow-hidden">

      {/* Navbar */}
      <motion.div
        className="flex items-start justify-between"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex flex-col items-start gap-1">
          <Image
            src="/logo/sutrah-logo.svg"
            alt="Sutrah"
            width={52}
            height={52}
          />
          <span
            className="text-[#2A1A00] text-sm font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Sutrah.co
          </span>
        </div>

        {/* Nav pills */}
        <nav className="flex items-center gap-3 mt-1">
          {[
            { label: "Work", href: "#work" },
            { label: "Pricing", href: "#pricing" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-6 py-2.5 rounded-full bg-[#BF932A] text-[#FCFCF7] text-sm font-medium italic hover:bg-[#9E6200] transition-colors duration-200"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Hero card */}
      <motion.div
        className="flex-1 mt-5 rounded-3xl bg-[#ECDCAB]/50 flex flex-col justify-between px-10 md:px-16 py-14"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Headline */}
        <div>
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl text-[#1A1200] leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            We build. We run.
            <br />
            <span className="text-[#BF932A] italic">You grow.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 text-[#5C3D00] text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-epilogue)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Professional websites for Malaysian businesses — built fast, managed fully, zero headaches.
          </motion.p>
        </div>

        {/* Explore cue */}
        <motion.a
          href="#work"
          className="flex items-center gap-2 text-[#BF932A] text-sm w-fit"
          style={{ fontFamily: "var(--font-epilogue)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="tracking-widest uppercase text-xs">Explore</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-base"
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>

    </section>
  );
}
