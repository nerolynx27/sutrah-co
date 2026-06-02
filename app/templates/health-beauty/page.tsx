import { config } from "./config";
import HBNavbar from "./components/HBNavbar";
import HBHero from "./components/HBHero";
import HBServices from "./components/HBServices";
import HBAbout from "./components/HBAbout";
import HBLocation from "./components/HBLocation";
import HBFooter from "./components/HBFooter";
import HBWhatsAppFloat from "./components/HBWhatsAppFloat";

export default function HealthBeautyTemplate() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <HBNavbar config={config} />
      <HBHero config={config} />
      <HBServices config={config} />
      <HBAbout config={config} />
      <HBLocation config={config} />
      <HBFooter config={config} />
      <HBWhatsAppFloat whatsapp={config.business.whatsapp} />
    </main>
  );
}
