"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#FCFCF7] overflow-hidden">

      {/* Navbar row */}
      <motion.div
        className="flex items-center justify-between px-8 md:px-16 pt-10"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo + wordmark */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/sutrah-logo.svg"
            alt="Sutrah"
            width={32}
            height={32}
          />
          <span
            className="text-[#2A1A00] text-base font-medium tracking-wide"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Sutrah.co
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[#7A5C2A] text-sm hover:text-[#BF932A] transition-colors duration-200"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-[#BF932A] text-[#BF932A] text-sm font-medium hover:bg-[#BF932A] hover:text-[#FCFCF7] transition-all duration-200"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Get Started
          </a>
        </nav>
      </motion.div>

      {/* Main content — vertically centered */}
      <div className="flex-1 flex flex-col items-start justify-center px-8 md:px-16 pb-24">

        {/* Slogan */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#2A1A00] leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            We build.{" "}
            <span className="text-[#BF932A] italic">We run.</span>
            <br />
            You grow.
          </motion.h1>
        </div>

        {/* Subline */}
        <motion.p
          className="mt-6 text-[#7A5C2A] text-base md:text-lg max-w-md leading-relaxed"
          style={{ fontFamily: "var(--font-epilogue)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Professional websites for Malaysian businesses — built fast, managed fully, zero headaches.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          className="mt-16 flex flex-col items-start gap-2 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a href="#about" className="flex flex-col items-center gap-2">
            <span
              className="text-xs text-[#BF932A] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              About us
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="text-[#BF932A] text-lg"
            >
              ↓
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-[#DFC57B]/40" />
    </section>
  );
}
