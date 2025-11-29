import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
                <span>🏡</span>
                Lopes e Assis
              </h3>
              <p className="text-sm text-muted-foreground">
                Celebrando união, amor e tradição através das gerações.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#inicio"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#programacao"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Programação
                  </a>
                </li>
                <li>
                  <a
                    href="#mensagens"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Deixar Mensagem
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Dúvidas ou sugestões?<br />
                Entre em contato com os organizadores!
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lopes e Assis. Feito com amor para nossa família.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>pela família</span>
            </div>
          </div>

          {/* Special Message */}
          <div className="text-center pt-4">
            <p className="text-sm font-medium text-primary italic">
              "Lopes e Assis - Onde as memórias viram tradição" 🏡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
