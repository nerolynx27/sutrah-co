"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES_COUNT = 6;

const initialServices = Array(SERVICES_COUNT).fill(null).map(() => ({
  name: "", price: "", description: "",
}));

export default function IntakePage() {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    business_name: "", business_type: "", tagline: "", website_goal: "",
    owner_name: "", whatsapp: "", email: "", phone: "", address: "", maps_url: "",
    hours_weekday: "", hours_saturday: "", hours_sunday: "",
    services: initialServices,
    about: "", colors: "", websites_like: "",
    has_logo: "", has_photos: "",
    package: "",
    has_domain: "", domain_name: "", domain_registrar: "",
  });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const setService = (index: number, field: string, value: string) =>
    setForm((f) => {
      const services = [...f.services];
      services[index] = { ...services[index], [field]: value };
      return { ...f, services };
    });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, services: form.services.filter(s => s.name) }),
    });
    if (!res.ok) {
      setError("Something went wrong. Please try again or WhatsApp us at +60 11-1979 1976");
      setLoading(false);
    } else {
      setSubmitted(true);
    }
  };

  const inputClass = "w-full bg-[#0D0D0D] border border-[#FCFCF7]/10 rounded-xl px-4 py-3 text-[#FCFCF7] text-sm placeholder:text-[#ECDCAB]/30 focus:outline-none focus:border-[#BF932A]/50 transition-colors";
  const labelClass = "text-[#ECDCAB]/70 text-sm font-medium mb-1.5 block";
  const selectClass = `${inputClass} cursor-pointer`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center bg-[#1A1A1A] rounded-2xl border border-[#BF932A]/30 p-10">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-[#FCFCF7] font-bold text-2xl mb-3">Form Received!</h2>
          <p className="text-[#ECDCAB]/60 leading-relaxed mb-6">
            Thank you! We'll review your details and contact you within 24 hours via WhatsApp.
          </p>
          <p className="text-[#ECDCAB]/40 text-sm mb-8">Need it urgent? WhatsApp us directly:</p>
          <a href="https://wa.me/60111979197"
            className="inline-block px-8 py-3 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold hover:bg-[#DFC57B] transition-colors">
            WhatsApp +60 11-1979 1976
          </a>
          <div className="mt-6">
            <Link href="/" className="text-[#ECDCAB]/40 text-sm hover:text-[#ECDCAB] transition-colors">
              ← Back to Sutrah.co
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <div className="border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <Link href="/" className="text-xl font-bold text-[#FCFCF7]">
          Sutrah<span className="text-[#BF932A]">.co</span>
        </Link>
        <span className="text-[#ECDCAB]/40 text-sm">Client Intake Form</span>
      </div>

      {/* Progress bar */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#BF932A] text-sm font-semibold">Step {step} of {totalSteps}</span>
          <span className="text-[#ECDCAB]/40 text-sm">{Math.round((step / totalSteps) * 100)}% complete</span>
        </div>
        <div className="w-full bg-[#1A1A1A] rounded-full h-1.5">
          <div className="bg-[#BF932A] h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-[#1A1A1A] rounded-2xl border border-[#FCFCF7]/5 p-8">

          {/* Step 1 — Business Info */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 1</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Business Information</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Business Name *</label>
                <input required className={inputClass} placeholder="e.g. Klinik Amanah" value={form.business_name} onChange={e => set("business_name", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Business Type *</label>
                <select className={selectClass} value={form.business_type} onChange={e => set("business_type", e.target.value)}>
                  <option value="">Select your industry</option>
                  <option>Klinik / Clinic</option>
                  <option>Salon</option>
                  <option>Spa / Wellness</option>
                  <option>Restaurant / Cafe</option>
                  <option>Catering</option>
                  <option>Retail / Kedai</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Tagline or Slogan</label>
                <input className={inputClass} placeholder="e.g. Your Health, Our Priority" value={form.tagline} onChange={e => set("tagline", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>What's the main goal of your website?</label>
                <select className={selectClass} value={form.website_goal} onChange={e => set("website_goal", e.target.value)}>
                  <option value="">Select a goal</option>
                  <option>Get more bookings / appointments</option>
                  <option>Look more professional online</option>
                  <option>Sell products online</option>
                  <option>Share business info and location</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2 — Contact */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 2</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Contact Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Your Name *</label>
                  <input required className={inputClass} placeholder="Ahmad Rizal" value={form.owner_name} onChange={e => set("owner_name", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>WhatsApp Number *</label>
                  <input required className={inputClass} placeholder="011-1234 5678" value={form.whatsapp} onChange={e => set("whatsapp", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Email Address *</label>
                  <input required type="email" className={inputClass} placeholder="you@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Business Phone</label>
                  <input className={inputClass} placeholder="03-1234 5678" value={form.phone} onChange={e => set("phone", e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Business Address</label>
                <textarea rows={2} className={inputClass} placeholder="No. 12, Jalan Utama, Taman Maju, 47500 Subang Jaya, Selangor" value={form.address} onChange={e => set("address", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Google Maps Link</label>
                <input className={inputClass} placeholder="Paste your Google Maps URL here" value={form.maps_url} onChange={e => set("maps_url", e.target.value)} />
                <span className="text-[#ECDCAB]/30 text-xs">Go to Google Maps → find your business → click Share → copy link</span>
              </div>
            </div>
          )}

          {/* Step 3 — Hours */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 3</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Operating Hours</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Weekdays (Mon–Fri)</label>
                <input className={inputClass} placeholder="e.g. 9am – 6pm" value={form.hours_weekday} onChange={e => set("hours_weekday", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Saturday</label>
                <input className={inputClass} placeholder="e.g. 9am – 1pm or Closed" value={form.hours_saturday} onChange={e => set("hours_saturday", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Sunday & Public Holidays</label>
                <input className={inputClass} placeholder="e.g. Closed" value={form.hours_sunday} onChange={e => set("hours_sunday", e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 4 — Services */}
          {step === 4 && (
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 4</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Services & Pricing</h2>
                <p className="text-[#ECDCAB]/50 text-sm mt-1">Add up to 6 services. Fill only the ones you offer.</p>
              </div>
              {form.services.map((s, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#0D0D0D] border border-[#FCFCF7]/5">
                  <p className="text-[#BF932A] text-xs font-bold uppercase tracking-widest mb-3">Service {i + 1}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Name</label>
                      <input className={inputClass} placeholder="e.g. General Consultation" value={s.name} onChange={e => setService(i, "name", e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Price (RM)</label>
                      <input className={inputClass} placeholder="e.g. RM 30" value={s.price} onChange={e => setService(i, "price", e.target.value)} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-3">
                    <label className={labelClass}>Description</label>
                    <input className={inputClass} placeholder="Brief description of this service" value={s.description} onChange={e => setService(i, "description", e.target.value)} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 5 — About */}
          {step === 5 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 5</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">About Your Business</h2>
                <p className="text-[#ECDCAB]/50 text-sm mt-1">Write 3–5 sentences about your story, mission, and what makes you different.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>About Us</label>
                <textarea rows={6} className={inputClass} placeholder="e.g. Klinik Amanah has been serving the community since 2010. Our experienced team is committed to providing quality, affordable healthcare..." value={form.about} onChange={e => set("about", e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 6 — Design */}
          {step === 6 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 6</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Design Preferences</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Preferred Colors</label>
                <input className={inputClass} placeholder="e.g. Blue and white, Gold and black, Pastel pink..." value={form.colors} onChange={e => set("colors", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Websites You Like</label>
                <textarea rows={3} className={inputClass} placeholder="Paste links to websites you like the look and feel of" value={form.websites_like} onChange={e => set("websites_like", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Do you have a logo?</label>
                <div className="flex flex-col gap-2">
                  {["Yes — I will send it via WhatsApp", "No — please design one for me"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="has_logo" value={opt} checked={form.has_logo === opt} onChange={e => set("has_logo", e.target.value)} className="accent-[#BF932A]" />
                      <span className="text-[#ECDCAB]/70 text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Do you have photos of your business?</label>
                <div className="flex flex-col gap-2">
                  {["Yes — I will send them via WhatsApp / Google Drive", "No — please use stock photos"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="has_photos" value={opt} checked={form.has_photos === opt} onChange={e => set("has_photos", e.target.value)} className="accent-[#BF932A]" />
                      <span className="text-[#ECDCAB]/70 text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 7 — Package */}
          {step === 7 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 7</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Choose Your Package</h2>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Starter", setup: "RM 500", monthly: "RM 99/mo", features: "5 pages · WhatsApp button · Mobile-friendly · Basic SEO" },
                  { name: "Pro", setup: "RM 1,000", monthly: "RM 199/mo", features: "8 pages · Gallery · Booking form · SEO optimised · Priority support" },
                  { name: "Premium", setup: "RM 2,000", monthly: "RM 399/mo", features: "Custom design · Animations · Unlimited pages · Same-day support" },
                ].map(pkg => (
                  <label key={pkg.name} className={`flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all ${form.package === pkg.name ? "border-[#BF932A]/60 bg-[#BF932A]/10" : "border-[#FCFCF7]/5 bg-[#0D0D0D] hover:border-[#BF932A]/20"}`}>
                    <input type="radio" name="package" value={pkg.name} checked={form.package === pkg.name} onChange={e => set("package", e.target.value)} className="accent-[#BF932A] mt-1" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#FCFCF7] font-bold">{pkg.name}</span>
                        <span className="text-[#BF932A] font-bold">{pkg.monthly}</span>
                        <span className="text-[#ECDCAB]/40 text-xs">{pkg.setup} setup</span>
                      </div>
                      <p className="text-[#ECDCAB]/50 text-sm">{pkg.features}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 8 — Domain */}
          {step === 8 && (
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#BF932A] text-xs font-semibold uppercase tracking-widest">Step 8</span>
                <h2 className="text-2xl font-bold text-[#FCFCF7] mt-1">Domain & Hosting</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Do you already have a domain name?</label>
                <div className="flex flex-col gap-2">
                  {["Yes — I already have one", "No — I need help getting one"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="has_domain" value={opt} checked={form.has_domain === opt} onChange={e => set("has_domain", e.target.value)} className="accent-[#BF932A]" />
                      <span className="text-[#ECDCAB]/70 text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              {form.has_domain === "Yes — I already have one" && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Domain Name</label>
                    <input className={inputClass} placeholder="e.g. klinik-amanah.com" value={form.domain_name} onChange={e => set("domain_name", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Where was it registered?</label>
                    <input className={inputClass} placeholder="e.g. Namecheap, GoDaddy, Exabytes" value={form.domain_registrar} onChange={e => set("domain_registrar", e.target.value)} />
                  </div>
                </>
              )}

              {error && <p className="text-red-400 text-sm text-center">{error}</p>}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-base hover:bg-[#DFC57B] transition-all shadow-lg shadow-[#BF932A]/20 disabled:opacity-60 mt-2"
              >
                {loading ? "Submitting..." : "Submit My Form →"}
              </button>
              <p className="text-center text-[#ECDCAB]/30 text-xs">
                We'll contact you within 24 hours via WhatsApp
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#FCFCF7]/5">
            <button
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
              className="px-6 py-2.5 rounded-full border border-[#ECDCAB]/20 text-[#ECDCAB]/60 text-sm hover:border-[#ECDCAB]/40 hover:text-[#ECDCAB] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Back
            </button>

            {step < totalSteps && (
              <button
                onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
                className="px-8 py-2.5 rounded-full bg-[#BF932A] text-[#0D0D0D] font-bold text-sm hover:bg-[#DFC57B] transition-all"
              >
                Continue →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
