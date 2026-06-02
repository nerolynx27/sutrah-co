export default function HBFooter({ config }: { config: any }) {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold text-[#FCFCF7]">
            {config.business.name.split(" ")[0]}<span className="text-[#BF932A]"> {config.business.name.split(" ").slice(1).join(" ")}</span>
          </span>
          <span className="text-[#ECDCAB]/40 text-xs">{config.business.tagline}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#ECDCAB]/50">
          {["Services", "About", "Location"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FCFCF7] transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[#ECDCAB]/30 text-xs">© {new Date().getFullYear()} {config.business.name}</p>
          <p className="text-[#ECDCAB]/20 text-xs">
            Website by <a href="https://sutrah.co" className="text-[#BF932A]/50 hover:text-[#BF932A] transition-colors">Sutrah.co</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
