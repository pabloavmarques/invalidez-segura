import { useEffect, useState } from "react";
import { CheckCircle2, Download, FileText, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Dispara evento personalizado ao carregar a página de obrigado
    if (window.fbq) {
      window.fbq('trackCustom', 'View Page Cartilha');
    }

    // Desativa confetti após 3 segundos
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // URL do PDF - deve ser substituída pelo link real
  const pdfUrl = "https://drive.google.com/file/d/1gkLALMCTDOrZ1WqXCl83BlZrRcUOVNUY/view?usp=sharing";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              {showConfetti && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? "hsl(24, 18%, 67%)" : "hsl(20, 18%, 13%)",
                        animation: `confetti 1s ease-out forwards`,
                        animationDelay: `${i * 0.1}s`,
                        transform: `rotate(${i * 30}deg) translateY(-60px)`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-slide-up">
              Parabéns! 🎉
            </h1>

            <h2 className="font-display text-xl md:text-2xl text-secondary font-semibold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Seu acesso foi liberado com sucesso!
            </h2>

            <p className="text-lg text-muted-foreground mb-8 font-body animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Clique no botão abaixo para baixar sua{" "}
              <strong className="text-foreground">Cartilha Informativa sobre Aposentadoria por Invalidez</strong>
            </p>

            {/* Download Card */}
            <div
              className="bg-card border border-border rounded-2xl p-8 card-professional mb-8 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-taupe-gradient">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                Cartilha Informativa
              </h3>
              <p className="text-muted-foreground text-sm mb-6 font-body">
                Aposentadoria por Invalidez • PDF Gratuito
              </p>

              <Button
                variant="hero"
                size="xl"
                className="w-full md:w-auto"
                asChild
              >
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Baixar Cartilha Agora
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <div
              className="bg-muted/50 rounded-xl p-6 mb-8 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-muted-foreground font-body text-sm">
                <strong className="text-foreground">Dica:</strong> Leia a cartilha com atenção e,
                se você se identificar com alguma das situações descritas, entre em contato conosco
                para uma análise personalizada do seu caso.
              </p>
            </div>

            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes confetti {
          0% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-100px) scale(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
