"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#FAFAF5",
      display: "flex",
      flexDirection: "column",
      padding: "24px",
      gap: "16px",
      boxSizing: "border-box",
    }}>

      {/* Navbar */}
      <motion.div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
          <Image src="/logo/sutrah-logo.svg" alt="Sutrah" width={52} height={52} />
          <span style={{
            fontFamily: "var(--font-frank-ruhl)",
            color: "#7A5C2A",
            fontSize: "19px",
            fontWeight: 500,
          }}>
            Sutrah.co
          </span>
        </div>

        {/* Nav pills */}
        <nav style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {["Work", "Pricing", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "#BF932A",
              color: "#FCF7DD",
              padding: "10px 28px",
              borderRadius: "65px",
              fontSize: "16px",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Hero card */}
      <motion.div
        style={{
          flex: 1,
          minHeight: 0,
          borderRadius: "65px",
          backgroundColor: "#FCF7DD",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "72px 80px 60px 80px",
          textAlign: "left",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(64px, 9vw, 110px)",
              lineHeight: 1.05,
              fontWeight: 700,
              margin: 0,
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <span style={{ color: "#7A5C2A" }}>We build. We run.</span>
            <br />
            <span style={{ color: "#BF932A", fontStyle: "italic" }}>You grow.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "#7A5C2A",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: 0,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Professional websites for Malaysian businesses — built fast, managed fully, zero headaches.
          </motion.p>
        </div>

        {/* Explore */}
        <motion.a
          href="#work"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "#7A5C2A",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>Explore</span>
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
