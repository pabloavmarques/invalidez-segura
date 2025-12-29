import { ArrowRight, Shield } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const FinalCTASection = () => {
  return (
    <section className="py-20 hero-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Última Chance
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-shadow">
            Descubra se você tem direito à{" "}
            <span className="taupe-gradient-text">Aposentadoria por Invalidez</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body max-w-2xl mx-auto">
            Clique agora e receba a Cartilha Informativa gratuitamente no seu WhatsApp. 
            Foi feita de forma simples, clara e de acordo com as normas do INSS.
          </p>

          <div className="flex items-center justify-center gap-2 text-secondary mb-8">
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <span className="font-semibold font-body">
              Acesse agora — é 100% gratuito
            </span>
          </div>

          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
