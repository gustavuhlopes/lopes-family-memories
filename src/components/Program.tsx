import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Activity {
  time: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Program = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  // Data de liberação: 10 de dezembro de 2025, 00:00:00
  const releaseDate = new Date(2025, 11, 10, 0, 0, 0); // mês 11 = dezembro (0-indexed)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCountdown = () => {
    const diff = releaseDate.getTime() - now.getTime();
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const countdown = getCountdown();

  const activities: Activity[] = [
    {
      time: "12:00",
      title: "Chegada e Boas-Vindas",
      description: "Hora de abraçar a família! Chegue, acomode-se e prepare-se para um dia maravilhoso. Teremos música ambiente para recebê-los com carinho.",
      icon: "🤗",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "14:00",
      title: "Churrasco e Confraternização",
      description: "Delicioso churrasco preparado com amor! Carnes selecionadas, acompanhamentos tradicionais e muito bate-papo. Momento perfeito para colocar o papo em dia.",
      icon: "🍖",
      color: "bg-secondary/10 text-secondary",
    },
    {
      time: "16:00",
      title: "Piscina e Diversão",
      description: "Hora de se refrescar! Piscina liberada para todas as idades. Não esqueça o protetor solar e a disposição!",
      icon: "🏊",
      color: "bg-accent/10 text-accent",
    },
    {
      time: "17:30",
      title: "Gincana da Família",
      description: "Competição saudável e divertida! Brincadeiras para todas as idades, prêmios especiais e muita risada garantida. Venha mostrar o espírito Lopes!",
      icon: "🎯",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "18:30",
      title: "Música ao Vivo",
      description: "Momento cultural com música ao vivo! Repertório especial com clássicos que marcaram gerações da nossa família. Prepare a voz para cantar junto!",
      icon: "🎤",
      color: "bg-secondary/10 text-secondary",
    },
    {
      time: "19:30",
      title: "Jantar Especial",
      description: "Mesa farta com receitas tradicionais da família! Pratos preparados com carinho e aquele gostinho de casa. Momento de reunir todos à mesa.",
      icon: "🍽️",
      color: "bg-accent/10 text-accent",
    },
    {
      time: "20:30",
      title: "Momento Família",
      description: "Hora especial de compartilhar histórias, memórias e fortalecer laços. Espaço aberto para depoimentos emocionantes e celebração de conquistas.",
      icon: "❤️",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "21:30",
      title: "Encerramento e Sobremesa",
      description: "Doces momentos! Sobremesas deliciosas e café para finalizar nosso dia. Leve para casa não só as lembranças, mas também a certeza de que somos uma grande família.",
      icon: "🍰",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="programacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <span className="text-3xl">📅</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Programação do Evento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um dia repleto de atividades especiais planejadas para fortalecer nossa união
            </p>
          </div>

          {/* Countdown ou Timeline */}
          {countdown ? (
            <Card className="p-8 text-center shadow-soft border-2 border-primary/10 animate-slide-up">
              <h3 className="text-2xl font-bold mb-4 text-foreground">A programação será liberada em:</h3>
              <div className="flex justify-center gap-4 text-3xl font-mono text-primary">
                <div>
                  <span>{countdown.days}</span>
                  <div className="text-xs text-muted-foreground">dias</div>
                </div>
                <span>:</span>
                <div>
                  <span>{String(countdown.hours).padStart(2, '0')}</span>
                  <div className="text-xs text-muted-foreground">horas</div>
                </div>
                <span>:</span>
                <div>
                  <span>{String(countdown.minutes).padStart(2, '0')}</span>
                  <div className="text-xs text-muted-foreground">min</div>
                </div>
                <span>:</span>
                <div>
                  <span>{String(countdown.seconds).padStart(2, '0')}</span>
                  <div className="text-xs text-muted-foreground">seg</div>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">Volte aqui no dia <strong>10 de dezembro</strong> para ver a programação completa!</p>
            </Card>
          ) : (
            <>
              {/* Timeline */}
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card
                    key={index}
                    className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-warm border-2 ${
                      expandedIndex === index ? "border-primary shadow-warm" : "border-border"
                    }`}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${activity.color}`}>
                        {activity.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="font-semibold">
                            {activity.time}
                          </Badge>
                          <h3 className="text-xl font-bold text-foreground">
                            {activity.title}
                          </h3>
                        </div>

                        {expandedIndex === index && (
                          <p className="text-muted-foreground leading-relaxed animate-fade-in">
                            {activity.description}
                          </p>
                        )}
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex-shrink-0 text-muted-foreground">
                        {expandedIndex === index ? "▲" : "▼"}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Footer Note */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-center text-foreground">
                  <strong>Importante:</strong> Os horários são aproximados e podem sofrer pequenas alterações. 
                  O mais importante é estarmos juntos! 💛
                </p>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Program;
