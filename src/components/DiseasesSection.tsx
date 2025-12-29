import { AlertCircle, CheckCircle2 } from "lucide-react";

const diseases = [
  "Hérnia de disco",
  "Espondilolistese",
  "Escoliose grave",
  "Estenose espinhal",
  "Doença degenerativa do disco",
  "Fraturas vertebrais",
  "Espondilose cervical ou lombar",
  "Lesões na medula espinhal",
  "Artrose na coluna lombar",
];

const DiseasesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                Você sofre com alguma dessas condições?
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Doenças que podem garantir o{" "}
              <span className="gold-gradient-text">benefício</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Entre as doenças mais comuns que podem garantir a aposentadoria por invalidez estão:
            </p>
          </div>

          {/* Diseases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diseases.map((disease, index) => (
              <div
                key={disease}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border card-professional animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium text-card-foreground font-body">
                  {disease}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground font-body">
              Se você sofre com alguma dessas condições,{" "}
              <strong className="text-foreground">
                você pode ter direito à aposentadoria por invalidez
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseasesSection;
