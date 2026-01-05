import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Loader2, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureForm = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const formatWhatsapp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Formata como (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsapp(e.target.value);
    setWhatsapp(formatted);
  };

  const validateWhatsapp = (phone: string) => {
    const numbers = phone.replace(/\D/g, "");
    return numbers.length === 10 || numbers.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateWhatsapp(whatsapp)) {
      toast({
        title: "Número inválido",
        description: "Por favor, insira um número de WhatsApp válido com DDD.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // URL do Webhook (Google Apps Script)
      const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxlpzTVfddaqDyez98SJ7V1Av5J8Bd8RMwb3cQzeUc2EOFOl3hAmzAgk6cPpo1Ftnhj/exec";

      if (!WEBHOOK_URL) {
        console.warn("URL do Webhook não configurada!");
        // Simula delay se não tiver webhook configurado para não quebrar a UX
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Usando FormData nativo para compatibilidade com Google Apps Script
        const formData = new FormData();
        formData.append('whatsapp', whatsapp.replace(/\D/g, ""));
        formData.append('date', new Date().toISOString());
        formData.append('url', window.location.href);
        formData.append('userAgent', navigator.userAgent);

        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
      }

      // Salva no localStorage como backup
      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push({
        whatsapp: whatsapp.replace(/\D/g, ""),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("leads", JSON.stringify(leads));

      toast({
        title: "Sucesso!",
        description: "Seu acesso foi liberado. Redirecionando...",
      });

      // Redireciona para página de obrigado
      setTimeout(() => {
        navigate("/obrigado");
      }, 1000);

    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-card/10 backdrop-blur-lg border border-secondary/30 rounded-2xl p-6 md:p-8 card-professional">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Acesso Gratuito
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2 text-center">
          Receba sua Cartilha Agora
        </h3>

        <p className="text-primary-foreground/70 text-sm mb-6 text-center font-body">
          Digite seu WhatsApp e receba gratuitamente a Cartilha Informativa sobre Aposentadoria por Invalidez
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleChange}
              className="pl-12 h-14 text-lg bg-background/80 border-secondary/30 focus:border-secondary focus:ring-secondary placeholder:text-muted-foreground/50"
              maxLength={16}
              required
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                Quero Receber Minha Cartilha
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-primary-foreground/50 mt-4 text-center font-body">
          🔒 Seus dados estão seguros e não serão compartilhados
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
