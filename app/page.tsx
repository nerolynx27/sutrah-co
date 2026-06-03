import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFCF7]">
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
