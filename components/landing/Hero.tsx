"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#FAFAF0", padding: "0 32px" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 0",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
          <Image src="/logo/sutrah-logo.svg" alt="Sutrah" width={52} height={52} />
          <span style={{
            fontFamily: "var(--font-frank-ruhl)",
            color: "#7A5C2A",
            fontSize: "19px",
            fontWeight: 500,
            lineHeight: 1,
          }}>
            Sutrah.co
          </span>
        </div>

        {/* Nav pills */}
        <nav style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {["Work", "Pricing", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 500,
              backgroundColor: "#BF932A",
              color: "#FCF7DD",
              padding: "10px 24px",
              borderRadius: "65px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* HERO CARD */}
      <motion.div
        style={{
          backgroundColor: "#FCF7DD",
          borderRadius: "65px",
          margin: "16px 0",
          padding: "120px 80px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Heading */}
        <motion.h1
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "88px",
            fontWeight: 700,
            color: "#7A5C2A",
            lineHeight: 1.1,
            margin: 0,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          We build. We run.
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "88px",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#BF932A",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: "48px",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          You grow.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "16px",
            color: "#7A5C2A",
            maxWidth: "640px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Professional websites for Malaysian businesses — built fast, managed fully, zero headaches.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#work"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "16px",
            color: "#7A5C2A",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
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
