"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await getSupabase().from("leads").insert({
      name: form.name,
      business_name: form.business,
      business_type: form.type,
      email: form.email,
      whatsapp: form.whatsapp,
      message: form.message,
    });

    if (error) {
      setError("Something went wrong. Please try again or WhatsApp us directly.");
      setLoading(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#BF932A] text-sm font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FCFCF7] mt-3 leading-tight">
            Let's build your website
          </h2>
          <p className="text-[#ECDCAB]/60 mt-4 text-lg">
            Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-2xl border border-[#BF932A]/30">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-[#FCFCF7] font-bold text-xl mb-2">Message received!</h3>
            <p className="text-[#ECDCAB]/60">We'll WhatsApp or email you within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#1A1A1A] rounded-2xl border border-[#FCFCF7]/5 p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#ECDCAB]/70 text-sm font-medium">Your Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Ahmad Rizal"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#ECDCAB]/70 text-sm font-medium">Business Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Klinik Amanah"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#ECDCAB]/70 text-sm font-medium">Business Type *</label>
              <select
                required
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm focus:outline-none focus:border-[#BF932A]/50 transition-colors"
              >
                <option value="">Select your industry</option>
                <option value="health-beauty">Health & Beauty (Klinik, Salon, Spa)</option>
                <option value="fnb">F&B (Restaurant, Cafe, Catering)</option>
                <option value="retail">Retail / E-commerce</option>
                <option value="professional">Professional Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#ECDCAB]/70 text-sm font-medium">Email *</label>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#ECDCAB]/70 text-sm font-medium">WhatsApp Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="+60 12 345 6789"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#ECDCAB]/70 text-sm font-medium">Tell us about your business</label>
              <textarea
                rows={4}
                placeholder="What does your business do? What do you want your website to achieve?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-base hover:bg-[#DFC57B] transition-all duration-200 shadow-lg shadow-[#BF932A]/20 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send My Request →"}
            </button>

            <p className="text-center text-[#ECDCAB]/30 text-xs">
              Or WhatsApp us directly:{" "}
              <a href="https://wa.me/601XXXXXXXX" className="text-[#BF932A] hover:underline">
                +60 1X-XXX XXXX
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
