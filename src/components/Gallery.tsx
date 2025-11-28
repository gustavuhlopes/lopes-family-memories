import { useState } from "react";
import { Card } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - será substituído por integração com Google Drive
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800", alt: "Família reunida" },
    { id: 2, url: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800", alt: "Celebração familiar" },
    { id: 3, url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800", alt: "Momento especial" },
    { id: 4, url: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?w=800", alt: "Refeição em família" },
    { id: 5, url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800", alt: "Diversão garantida" },
    { id: 6, url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800", alt: "União familiar" },
  ];

  return (
    <section id="fotos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <span className="text-3xl">📸</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Galeria de Fotos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reviva os melhores momentos da nossa família
            </p>
          </div>

          {/* Upload Instructions */}
          <Card className="p-6 bg-accent/5 border-accent/20">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span>📤</span> Como enviar suas fotos
              </h3>
              <p className="text-muted-foreground">
                Para adicionar suas fotos ao álbum do evento, envie suas imagens para a pasta 
                compartilhada do Google Drive. Todas as fotos aparecerão automaticamente aqui!
              </p>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://drive.google.com", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar Google Drive
              </Button>
            </div>
          </Card>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-warm transition-all duration-300"
                onClick={() => setSelectedImage(photo.url)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Preview Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Foto ampliada"
                  className="w-full h-auto"
                />
              )}
            </DialogContent>
          </Dialog>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              💡 Dica: Clique nas fotos para visualizá-las em tamanho maior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
