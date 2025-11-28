import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Location = () => {
  const address = "R. Sd. Cento e Quatro - Campinho de Baixo, Lagoa Santa - MG, 33400-000";
  const mapsUrl = "https://maps.app.goo.gl/QiB4uBsVF59DbtUM6";

  return (
    <section id="local" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Local do Evento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre o caminho para o nosso encontro especial
            </p>
          </div>

          {/* Address Card */}
          <Card className="p-8 shadow-soft border-2 border-primary/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Endereço</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open(mapsUrl, "_blank")}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-warm hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </Button>
            </div>
          </Card>

          {/* Map Embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft border-2 border-primary/10">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5!2d-43.9!3d-19.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM2JzAwLjAiUyA0M8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Evento da Família Lopes"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="font-semibold text-foreground mb-2">Estacionamento</h4>
              <p className="text-sm text-muted-foreground">Amplo espaço disponível</p>
            </Card>
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">🌳</div>
              <h4 className="font-semibold text-foreground mb-2">Área Externa</h4>
              <p className="text-sm text-muted-foreground">Jardim e área de lazer</p>
            </Card>
            <Card className="p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">♿</div>
              <h4 className="font-semibold text-foreground mb-2">Acessível</h4>
              <p className="text-sm text-muted-foreground">Local acessível para todos</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
