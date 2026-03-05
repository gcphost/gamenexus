import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <GamesSection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <InfrastructureSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
