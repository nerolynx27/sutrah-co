export default function Services() {
  const services = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Your website goes live in 7 days. No waiting months for a developer who ghosts you halfway through.",
    },
    {
      icon: "🛠️",
      title: "Fully Managed",
      description:
        "We handle updates, security, hosting, and maintenance. You focus on running your business.",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description:
        "90% of your customers browse on their phone. Every site we build looks perfect on any screen.",
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description:
        "One-tap WhatsApp button on every page. Turn visitors into leads without them leaving your site.",
    },
    {
      icon: "🔍",
      title: "SEO Ready",
      description:
        "Built with Google in mind from day one. Your business shows up when people search for you.",
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description:
        "No generic templates. Every site is designed to match your brand and impress your customers.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">
            What You Get
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
            Everything your business needs
          </h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg max-w-xl mx-auto">
            One monthly subscription. Zero headaches. Professional online presence — done.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl bg-[#1A1A1A] border border-[#FCFCF7]/5 hover:border-[#BF932A]/30 transition-all duration-300 hover:bg-[#1A1A1A]/80"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-[#FCFCF7] font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-[#ECDCAB]/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
