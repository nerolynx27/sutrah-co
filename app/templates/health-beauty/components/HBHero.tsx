export default function HBHero({ config }: { config: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#BF932A]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#BF932A]/30 bg-[#BF932A]/10 text-[#DFC57B] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BF932A] animate-pulse" />
          {config.business.hours}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FCFCF7] leading-[1.1] tracking-tight">
          {config.business.name}
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#BF932A] via-[#DFC57B] to-[#BF932A]">
          {config.business.tagline}
        </p>

        <p className="text-lg text-[#ECDCAB]/70 max-w-xl leading-relaxed">
          {config.business.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a href={`https://wa.me/${config.business.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-base hover:bg-[#DFC57B] transition-all shadow-lg shadow-[#BF932A]/20">
            📅 Book Appointment
          </a>
          <a href="#services"
            className="px-8 py-3.5 rounded-full border border-[#ECDCAB]/20 text-[#ECDCAB] font-medium text-base hover:border-[#BF932A]/50 hover:text-[#FCFCF7] transition-all">
            View Services
          </a>
        </div>

        <div className="flex items-center gap-8 mt-6 pt-8 border-t border-[#1A1A1A] w-full justify-center flex-wrap">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5,000+", label: "Patients Served" },
            { number: "4.9★", label: "Google Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#BF932A]">{stat.number}</span>
              <span className="text-sm text-[#ECDCAB]/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
    </section>
  );
}
