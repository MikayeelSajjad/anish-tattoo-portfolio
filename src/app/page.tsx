import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioVault from "@/components/PortfolioVault";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import BookingBuilder from "@/components/BookingBuilder";
import StudioSection from "@/components/StudioSection";
import MarqueeFooter from "@/components/MarqueeFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Tactical Grain & Radial Background Noise Base */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PortfolioVault />
        <PhilosophySection />
        <ProcessSection />
        <BookingBuilder />
        <StudioSection />
        <MarqueeFooter />
        <FloatingWhatsApp />
      </div>
    </main>
  );
}
