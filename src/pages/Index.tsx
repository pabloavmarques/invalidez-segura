import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiseasesSection from "@/components/DiseasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiseasesSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
