import { FileText, CheckSquare, Scale, Clock } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Simples e Clara",
    description: "Linguagem acessível, sem termos técnicos complicados",
  },
  {
    icon: CheckSquare,
    title: "Prática e Objetiva",
    description: "Passo a passo de como verificar se você tem direito",
  },
  {
    icon: Scale,
    title: "Baseada nas Normas do INSS",
    description: "Informações atualizadas conforme a legislação vigente",
  },
  {
    icon: Clock,
    title: "Acesso Imediato",
    description: "Receba no seu WhatsApp instantaneamente",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que baixar nossa{" "}
              <span className="taupe-gradient-text">Cartilha Gratuita</span>?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Preparamos uma cartilha completa com tudo que você precisa saber 
              para entender se tem direito à aposentadoria por invalidez
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border card-professional animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-taupe-gradient flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-card-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
              <Scale className="w-5 h-5 text-secondary" />
              <span className="font-medium text-card-foreground font-body">
                Escritório <strong>Araujo Costa Advogados Associados</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
