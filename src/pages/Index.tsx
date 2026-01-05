import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiseasesSection from "@/components/DiseasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Dispara evento personalizado ao carregar a página inicial
    if (window.fbq) {
      window.fbq('trackCustom', 'View Page Isca');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiseasesSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
