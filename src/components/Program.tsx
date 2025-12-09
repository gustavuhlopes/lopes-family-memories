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

const activitiesSabado: Activity[] = [
    {
      time: "11:00",
      title: "Chegada e Boas-Vindas",
      description: "Hora de abraçar a família! Chegue, acomode-se e prepare-se para um dia maravilhoso. Teremos música ambiente para recebê-los com carinho.",
      icon: "🤗",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "13:00",
      title: "Churrasco e Confraternização",
      description: "Delicioso churrasco preparado com amor! Carnes selecionadas, acompanhamentos tradicionais e muito bate-papo. Momento perfeito para colocar o papo em dia. Abra sua cervejinha e vamos celebrar juntos!",
      icon: "🍖",
      color: "bg-secondary/10 text-secondary",
    },
    {
      time: "14:00",
      title: "Piscina e Diversão",
      description: "Hora de se refrescar! Piscina liberada para todas as idades. Não esqueça o protetor solar e a disposição!",
      icon: "🏊",
      color: "bg-accent/10 text-accent",
    },
    {
      time: "17:30",
      title: "Karaokê em Família",
      description: "Solte a voz e divirta-se com toda a família! Escolha suas músicas favoritas, cante em grupo ou solo e viva momentos de alegria, risadas e muita descontração. Não importa o talento, o importante é participar e celebrar juntos!",
      icon: "🎤",
      color: "bg-secondary/10 text-secondary",
    },
    {
      time: "17:30",
      title: "Gincana da Família",
      description: "Competição saudável e divertida! Brincadeiras para todas as idades, prêmios especiais e muita risada garantida. Venha mostrar o espírito Lopes!",
      icon: "🎯",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "20:30",
      title: "Jantar Especial",
      description: "Mesa farta com receitas tradicionais da família! Pratos preparados com carinho e aquele gostinho de casa. Momento de reunir todos à mesa.",
      icon: "🍽️",
      color: "bg-accent/10 text-accent",
    }
  ];

const activitiesDomingo: Activity[] = [
    {
      time: "09:00",
      title: "Café da Manhã",
      description: "Comece o domingo com um café da manhã reforçado, rodeado pela família. Pães, frutas, café e muita conversa boa para renovar as energias.",
      icon: "🥐",
      color: "bg-primary/10 text-primary",
    },
    {
      time: "13:00",
      title: "Almoço com Churrasco e Piscina",
      description: "Mais um momento de confraternização! Churrasco delicioso e piscina liberada para aproveitar o último dia juntos. Desfrute, relaxe e celebre!",
      icon: "🍖🏊",
      color: "bg-secondary/10 text-secondary",
    },
    {
      time: "18:00",
      title: "Arrumação para Ir Embora",
      description: "Hora de organizar as coisas, despedir-se e garantir que tudo esteja pronto para a entrega do sítio às 19h. Agradecemos por cada momento compartilhado!",
      icon: "🧳",
      color: "bg-accent/10 text-accent",
    },
  ];
// ...fim do array activitiesDomingo


interface ProgramProps {
  onCountdownChange?: (countdown: {days: number, hours: number, minutes: number, seconds: number} | null) => void;
}

const Program = ({ onCountdownChange }: ProgramProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);

  useEffect(() => {
    const targetDate = new Date('2025-12-09T20:10:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown(null);
        if (onCountdownChange) onCountdownChange(null);
        return;
      }

      const newCountdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
      setCountdown(newCountdown);
      if (onCountdownChange) onCountdownChange(newCountdown);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [onCountdownChange]);

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
              Um final de semana repleto de atividades especiais planejadas para fortalecer nossa união
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
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Sábado</h3>
                  {activitiesSabado.map((activity, index) => (
                    <Card
                      key={"sabado-" + index}
                      className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-warm border-2 ${
                        expandedIndex === index ? "border-primary shadow-warm" : "border-border"
                      }`}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${activity.color}`}>
                          {activity.icon}
                        </div>
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
                        <div className="flex-shrink-0 text-muted-foreground">
                          {expandedIndex === index ? "▲" : "▼"}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Domingo</h3>
                  {activitiesDomingo.map((activity, index) => (
                    <Card
                      key={"domingo-" + index}
                      className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-warm border-2 ${
                        expandedIndex === (index + activitiesSabado.length) ? "border-primary shadow-warm" : "border-border"
                      }`}
                      onClick={() => setExpandedIndex(expandedIndex === (index + activitiesSabado.length) ? null : (index + activitiesSabado.length))}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${activity.color}`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge variant="outline" className="font-semibold">
                              {activity.time}
                            </Badge>
                            <h3 className="text-xl font-bold text-foreground">
                              {activity.title}
                            </h3>
                          </div>
                          {expandedIndex === (index + activitiesSabado.length) && (
                            <p className="text-muted-foreground leading-relaxed animate-fade-in">
                              {activity.description}
                            </p>
                          )}
                        </div>
                        <div className="flex-shrink-0 text-muted-foreground">
                          {expandedIndex === (index + activitiesSabado.length) ? "▲" : "▼"}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
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
