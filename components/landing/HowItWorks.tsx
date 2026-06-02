export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Business",
      description:
        "Fill in a short form — your business name, services, and what you want your website to do. Takes 5 minutes.",
    },
    {
      number: "02",
      title: "We Build It in 7 Days",
      description:
        "Our team designs and builds your website. You get a preview link to review before anything goes live.",
    },
    {
      number: "03",
      title: "Launch & We Manage It",
      description:
        "Your site goes live on your domain. We handle all updates, hosting, and maintenance every month.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
            Simple as 1, 2, 3
          </h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg max-w-xl mx-auto">
            From zero to a professional website live online — in one week.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[#BF932A]/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-5">
              {/* Number circle */}
              <div className="relative w-20 h-20 rounded-full bg-[#1A1A1A] border border-[#BF932A]/40 flex items-center justify-center flex-shrink-0 z-10">
                <span className="text-[#BF932A] font-extrabold text-xl">{step.number}</span>
              </div>
              <div>
                <h3 className="text-[#FCFCF7] font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-[#ECDCAB]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
