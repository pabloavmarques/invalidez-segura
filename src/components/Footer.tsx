import { Scale, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-secondary/20">
              <Scale className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-primary-foreground">
                Araujo Costa
              </h3>
              <p className="text-xs text-secondary font-body tracking-widest uppercase">
                Advogados Associados
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-primary-foreground/60 text-sm mb-6 font-body max-w-2xl mx-auto">
            Este material tem caráter meramente informativo e não substitui a consulta 
            com um advogado especializado. Cada caso deve ser analisado individualmente.
          </p>

          {/* Divider */}
          <div className="border-t border-secondary/20 pt-6">
            <p className="text-center text-primary-foreground/50 text-xs font-body flex items-center justify-center gap-1">
              Feito com <Heart className="w-3 h-3 text-secondary" /> por Araujo Costa Advogados
            </p>
            <p className="text-center text-primary-foreground/40 text-xs font-body mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
