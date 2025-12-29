import { Shield, ArrowDown } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Cartilha Gratuita • Aposentadoria por Invalidez
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up text-shadow"
            style={{ animationDelay: "0.1s" }}
          >
            Você sente{" "}
            <span className="taupe-gradient-text">dores nas costas</span>{" "}
            ao trabalhar?
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto animate-slide-up font-body"
            style={{ animationDelay: "0.2s" }}
          >
            Ou tem alguma doença que dificulta suas atividades do dia a dia?
          </p>

          <p 
            className="text-xl md:text-2xl text-secondary font-semibold mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Isso pode gerar o direito à{" "}
            <span className="underline decoration-secondary/50 underline-offset-4">
              aposentadoria por invalidez
            </span>
          </p>

          {/* Description */}
          <p 
            className="text-base md:text-lg text-primary-foreground/70 mb-12 max-w-3xl mx-auto animate-slide-up font-body leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Esse benefício é destinado a pessoas que ficaram incapacitadas de forma 
            total e permanente para o trabalho — e que, muitas vezes, 
            <strong className="text-secondary"> nem sabem que têm esse direito</strong>.
          </p>

          {/* Lead Capture Form */}
          <div 
            className="animate-scale-in"
            style={{ animationDelay: "0.5s" }}
          >
            <LeadCaptureForm />
          </div>

          {/* Scroll Indicator */}
          <div 
            className="mt-16 animate-float"
            style={{ animationDelay: "0.6s" }}
          >
            <ArrowDown className="w-6 h-6 text-secondary/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
