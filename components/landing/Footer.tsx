export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold text-[#FCFCF7] tracking-tight">
            Sutrah<span className="text-[#BF932A]">.co</span>
          </span>
          <span className="text-[#ECDCAB]/40 text-xs">Professional websites for Malaysian businesses</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-[#ECDCAB]/50">
          {["Services", "How It Works", "Pricing", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-[#FCFCF7] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#ECDCAB]/30 text-xs">
          © {new Date().getFullYear()} Sutrah.co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
