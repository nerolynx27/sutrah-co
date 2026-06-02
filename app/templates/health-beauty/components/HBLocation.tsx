export default function HBLocation({ config }: { config: any }) {
  return (
    <section id="location" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3">Our Location</h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg">{config.business.address}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#FCFCF7]/5 h-80 md:h-96">
          <iframe
            src={config.business.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "📍", title: "Address", value: config.business.address },
            { icon: "⏰", title: "Hours", value: config.business.hours },
            { icon: "📞", title: "Contact", value: config.business.phone },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#FCFCF7]/5 flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-[#BF932A] font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-[#ECDCAB]/60 text-sm leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
