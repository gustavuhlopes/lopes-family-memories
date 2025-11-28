import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

interface Message {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
    
    // Subscribe to realtime updates
    const channel = supabase
      .channel("family_messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "family_messages",
        },
        (payload) => {
          setMessages((prev) => [payload.new as Message, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("family_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao carregar mensagens:", error);
      return;
    }

    if (data) {
      setMessages(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha seu nome e mensagem.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("family_messages").insert([
      {
        name: name.trim(),
        message: message.trim(),
      },
    ]);

    if (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Mensagem enviada! 💛",
        description: "Sua mensagem foi adicionada ao mural com sucesso.",
      });
      setName("");
      setMessage("");
    }

    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section id="mensagens" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mural de Mensagens
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deixe seu recado de carinho para a família
            </p>
          </div>

          {/* Message Form */}
          <Card className="p-6 md:p-8 shadow-soft border-2 border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Seu Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Sua Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Compartilhe uma mensagem de carinho, uma memória especial ou um recado para a família..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  rows={4}
                  className="text-base resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-warm hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem 💛"}
              </Button>
            </form>
          </Card>

          {/* Messages List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Mensagens da Família ({messages.length})
            </h3>

            {messages.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Seja o primeiro a deixar uma mensagem! 💛
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <Card
                    key={msg.id}
                    className="p-6 shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                        💛
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h4 className="font-semibold text-foreground text-lg">
                            {msg.name}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(msg.created_at)}
                          </span>
                        </div>
                        <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
