"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    setup: "RM 500",
    setupAmount: 500,
    deposit: 250,
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
    setupAmount: 1000,
    deposit: 500,
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
    setupAmount: 2000,
    deposit: 1000,
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

type Plan = (typeof plans)[number];

export default function Pricing() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function openModal(plan: Plan) {
    setSelected(plan);
    setName("");
    setEmail("");
    setError("");
  }

  function closeModal() {
    setSelected(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-bill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          plan: selected.name,
          amount: selected.deposit,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
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
                <button
                  onClick={() => openModal(plan)}
                  className={`mt-auto text-center py-3 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                    plan.highlighted
                      ? "bg-[#BF932A] text-[#0D0D0D] hover:bg-[#DFC57B]"
                      : "border border-[#ECDCAB]/20 text-[#ECDCAB] hover:border-[#BF932A]/50 hover:text-[#FCFCF7]"
                  }`}
                >
                  {plan.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#1A1A1A] border border-[#FCFCF7]/10 rounded-2xl p-8 w-full max-w-md flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-[#FCFCF7]">Pay deposit</h3>
                <p className="text-[#ECDCAB]/50 text-sm mt-1">
                  {selected.name} Plan — RM {selected.deposit} deposit (50% of setup fee)
                </p>
              </div>
              <button onClick={closeModal} className="text-[#ECDCAB]/40 hover:text-[#FCFCF7] transition-colors text-xl leading-none">
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ECDCAB]/60">Full name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ahmad bin Ali"
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] placeholder-[#ECDCAB]/20 text-sm focus:outline-none focus:border-[#BF932A]/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ECDCAB]/60">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ahmad@example.com"
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] placeholder-[#ECDCAB]/20 text-sm focus:outline-none focus:border-[#BF932A]/50"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-[#BF932A] text-[#0D0D0D] font-bold py-3 rounded-full text-sm hover:bg-[#DFC57B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Redirecting to payment..." : `Pay RM ${selected.deposit} via FPX →`}
              </button>

              <p className="text-[#ECDCAB]/30 text-xs text-center">
                Secure payment powered by BillPlz. Remaining balance due after kickoff call.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
