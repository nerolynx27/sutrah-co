"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FCFCF7] flex flex-col p-5 md:p-8 gap-4">

      {/* Navbar */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo top left */}
        <div className="flex flex-col items-start gap-0.5">
          <Image src="/logo/sutrah-logo.svg" alt="Sutrah" width={48} height={48} />
          <span
            className="text-[#2A1A00] text-sm font-bold"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Sutrah.co
          </span>
        </div>

        {/* Pill nav top right */}
        <nav className="flex items-center gap-3">
          {["Work", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-7 py-2.5 rounded-full bg-[#BF932A] text-[#FCFCF7] text-sm italic font-medium hover:bg-[#9E6200] transition-colors duration-200"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Hero card — fills remaining height */}
      <motion.div
        className="flex-1 rounded-3xl bg-[#EDE8C8] flex flex-col justify-between p-10 md:p-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Headline block */}
        <div className="flex flex-col gap-6 mt-8">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-[88px] text-[#1A1200] leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            We build. We run.
            <br />
            <span className="text-[#BF932A] italic">You grow.</span>
          </motion.h1>

          <motion.p
            className="text-[#5C3D00] text-base md:text-lg max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-epilogue)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Professional websites for Malaysian businesses — built fast, managed fully, zero headaches.
          </motion.p>
        </div>

        {/* Explore cue — anchored bottom */}
        <motion.a
          href="#work"
          className="flex items-center gap-2 text-[#BF932A] w-fit"
          style={{ fontFamily: "var(--font-epilogue)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>

    </section>
  );
}
