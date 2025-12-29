import { Scale } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-lg bg-secondary/20">
            <Scale className="w-6 h-6 text-secondary" />
          </div>
          <div className="text-center">
            <h1 className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
              Araujo Costa
            </h1>
            <p className="text-xs md:text-sm text-secondary font-body tracking-widest uppercase">
              Advogados Associados
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
