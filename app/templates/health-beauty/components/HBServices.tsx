export default function HBServices({ config }: { config: any }) {
  return (
    <section id="services" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3">Our Services</h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg max-w-xl mx-auto">
            Comprehensive care tailored to your needs. WhatsApp us to book any service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.services.map((service: any) => (
            <div key={service.name} className="group p-6 rounded-2xl bg-[#1A1A1A] border border-[#FCFCF7]/5 hover:border-[#BF932A]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[#FCFCF7] font-bold text-lg">{service.name}</h3>
                <span className="text-[#BF932A] font-bold text-lg ml-4 flex-shrink-0">{service.price}</span>
              </div>
              <p className="text-[#ECDCAB]/60 text-sm leading-relaxed mb-4">{service.description}</p>
              <a href={`https://wa.me/${config.business.whatsapp}?text=Hi, I'd like to book: ${service.name}`}
                target="_blank" rel="noopener noreferrer"
                className="text-sm text-[#BF932A] hover:text-[#DFC57B] transition-colors font-medium">
                Book this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
