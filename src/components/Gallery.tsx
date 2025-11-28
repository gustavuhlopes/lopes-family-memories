import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

import storage from "../integrations/firebase/storage";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<{ id: string; url: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  // Removido campo de nome da foto
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  // Função para buscar as fotos
  async function loadImages() {
    try {
      setLoading(true);
      const photosRef = ref(storage, "photos");
      console.log("Buscando imagens em:", photosRef.fullPath);
      const res = await listAll(photosRef);
      const list = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            id: itemRef.name,
            url,
            name: itemRef.name,
          };
        })
      );
      setImages(list);
    } catch (err) {
      console.error("Erro ao carregar fotos do Storage:", err);
      setImages([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Atualiza as fotos toda vez que o modal fecha
  useEffect(() => {
    if (!uploadModalOpen) {
      loadImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadModalOpen]);

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
                <span>📤</span> Envie suas fotos
              </h3>
              <p className="text-muted-foreground">
                Clique no botão abaixo para enviar suas fotos diretamente.
                Elas aparecerão aqui automaticamente após o envio!
              </p>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setUploadModalOpen(true)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Enviar Foto
              </Button>
              {/* Modal de Upload de Foto */}
              <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
                <DialogContent className="max-w-md">
                  <DialogTitle asChild>
                    <h3 className="text-lg font-semibold mb-4">Enviar nova foto</h3>
                  </DialogTitle>
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setUploadError(null);
                      if (!uploadFile) {
                        setUploadError("Selecione uma imagem.");
                        return;
                      }
                      setUploading(true);
                      try {
                        // 1. Upload da imagem para o Storage
                        const storageRef = ref(storage, `photos/${Date.now()}_${uploadFile.name}`);
                        await uploadBytes(storageRef, uploadFile);
                        console.log("Imagem enviada para:", storageRef.fullPath);
                        // 2. Resetar formulário e fechar modal
                        setUploadFile(null);
                        setUploadModalOpen(false);
                        // 3. Atualizar galeria buscando do Storage
                        setLoading(true);
                        const photosRef = ref(storage, "photos");
                        const res = await listAll(photosRef);
                        const list = await Promise.all(
                          res.items.map(async (itemRef) => {
                            const url = await getDownloadURL(itemRef);
                            return {
                              id: itemRef.name,
                              url,
                              name: itemRef.name,
                            };
                          })
                        );
                        setImages(list);
                      } catch (err) {
                        console.error("Erro ao enviar foto:", err);
                        setUploadError("Erro ao enviar foto: " + (err instanceof Error ? err.message : String(err)));
                      } finally {
                        setUploading(false);
                      }
                    }}
                  >
                    {/* Campo de nome removido */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Imagem</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full"
                        onChange={e => setUploadFile(e.target.files?.[0] || null)}
                        required
                      />
                    </div>
                    {uploadError && <div className="text-red-500 text-sm">{uploadError}</div>}
                    <Button type="submit" disabled={uploading} className="w-full">
                      {uploading ? "Enviando..." : "Enviar"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          {/* Photo Grid */}
          {loading ? (
            <div>Carregando imagens...</div>
          ) : images.length === 0 ? (
            <div>Nenhuma imagem enviada ainda.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-warm transition-all duration-300"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Nome removido do hover */}
                </div>
              ))}
            </div>
          )}

          {/* Image Preview Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              <DialogTitle asChild>
                <span className="sr-only">Visualização da imagem</span>
              </DialogTitle>
              {selectedImage && (
                <img src={selectedImage} className="w-full h-[70vh] object-contain" />
              )}
            </DialogContent>
          </Dialog>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              💡 Clique nas fotos para visualizar em tamanho maior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
