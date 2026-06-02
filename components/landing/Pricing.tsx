export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      setup: "RM 500",
      monthly: "RM 99",
      description: "Perfect for small businesses just getting started online.",
      features: [
        "5-page website",
        "Mobile-friendly design",
        "WhatsApp button",
        "Contact form",
        "Basic SEO setup",
        "Monthly maintenance",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      setup: "RM 1,000",
      monthly: "RM 199",
      description: "For businesses that want to stand out and generate more leads.",
      features: [
        "8-page website",
        "Custom design",
        "Gallery / portfolio",
        "Booking / inquiry form",
        "Google Maps embed",
        "SEO optimised",
        "Priority support",
        "Monthly maintenance",
      ],
      cta: "Most Popular",
      highlighted: true,
    },
    {
      name: "Premium",
      setup: "RM 2,000",
      monthly: "RM 399",
      description: "Full-featured site with animations and premium support.",
      features: [
        "Unlimited pages",
        "Premium custom design",
        "Scroll animations",
        "Blog / news section",
        "Advanced SEO",
        "WhatsApp chatbot",
        "Same-day support",
        "Monthly maintenance",
      ],
      cta: "Go Premium",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
            Transparent, simple pricing
          </h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg max-w-xl mx-auto">
            One-time setup fee + affordable monthly retainer. No hidden costs, no surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-6 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#BF932A]/10 border-[#BF932A]/50 shadow-xl shadow-[#BF932A]/10 scale-105"
                  : "bg-[#1A1A1A] border-[#FCFCF7]/5 hover:border-[#BF932A]/20"
              }`}
            >
              {/* Plan name */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-lg ${plan.highlighted ? "text-[#BF932A]" : "text-[#FCFCF7]"}`}>
                    {plan.name}
                  </span>
                  {plan.highlighted && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[#ECDCAB]/50 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#FCFCF7]">{plan.monthly}</span>
                  <span className="text-[#ECDCAB]/50 text-sm">/month</span>
                </div>
                <span className="text-[#ECDCAB]/40 text-sm">{plan.setup} one-time setup</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#ECDCAB]/70">
                    <span className="text-[#BF932A] text-base">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-auto text-center py-3 rounded-full font-bold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-[#BF932A] text-[#0D0D0D] hover:bg-[#DFC57B]"
                    : "border border-[#ECDCAB]/20 text-[#ECDCAB] hover:border-[#BF932A]/50 hover:text-[#FCFCF7]"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
