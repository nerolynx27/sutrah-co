"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#1A1A1A]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#FCFCF7] tracking-tight">
            Sutrah<span className="text-[#BF932A]">.co</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#ECDCAB]/70 hover:text-[#FCFCF7] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-semibold hover:bg-[#DFC57B] transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FCFCF7] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#1A1A1A] px-6 py-4 flex flex-col gap-4">
          {["Services", "How It Works", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#ECDCAB]/70 hover:text-[#FCFCF7] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-semibold text-center hover:bg-[#DFC57B] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
