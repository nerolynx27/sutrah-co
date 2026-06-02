"use client";
import { useState, useEffect } from "react";

export default function HBNavbar({ config }: { config: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#1A1A1A]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-[#FCFCF7] tracking-tight">
          {config.business.name.split(" ")[0]}<span className="text-[#BF932A]"> {config.business.name.split(" ").slice(1).join(" ")}</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Location"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#ECDCAB]/70 hover:text-[#FCFCF7] transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href={`https://wa.me/${config.business.whatsapp}`} target="_blank" rel="noopener noreferrer"
          className="hidden md:block px-5 py-2.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-semibold text-sm hover:bg-[#DFC57B] transition-colors">
          Book Now
        </a>

        <button className="md:hidden text-[#FCFCF7] p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#1A1A1A] px-6 py-4 flex flex-col gap-4">
          {["Services", "About", "Location"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#ECDCAB]/70 hover:text-[#FCFCF7] transition-colors py-1" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href={`https://wa.me/${config.business.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="text-sm px-5 py-2.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-semibold text-center hover:bg-[#DFC57B] transition-colors">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
