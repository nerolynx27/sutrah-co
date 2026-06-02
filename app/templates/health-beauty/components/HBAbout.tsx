export default function HBAbout({ config }: { config: any }) {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
                {config.about.title}
              </h2>
            </div>
            <p className="text-[#ECDCAB]/70 text-lg leading-relaxed">{config.about.body}</p>

            <div className="flex flex-col gap-3">
              {[
                { icon: "📍", label: config.business.address },
                { icon: "⏰", label: config.business.hours },
                { icon: "📞", label: config.business.phone },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 text-sm text-[#ECDCAB]/60">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <a href={`https://wa.me/${config.business.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="w-fit px-7 py-3 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-sm hover:bg-[#DFC57B] transition-colors">
              WhatsApp Us →
            </a>
          </div>

          {/* Visual placeholder */}
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#FCFCF7]/5 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">🏥</div>
              <p className="text-[#ECDCAB]/40 text-sm">Add your clinic photo here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
