import { Card } from "./ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const History = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "1960",
      title: "Os Primeiros Passos",
      description: "A família Lopes tem suas raízes firmadas em valores de união, trabalho e amor. Tudo começou com nossos avós, que nos ensinaram o verdadeiro significado de família.",
      icon: "🌱",
    },
    {
      year: "1980",
      title: "Crescimento da Família",
      description: "A família cresce e se fortalece. Novos membros chegam, trazendo alegria e renovando nossas tradições. Os encontros familiares se tornam cada vez mais especiais.",
      icon: "🏡",
    },
    {
      year: "2000",
      title: "Nova Geração",
      description: "Uma nova geração de Lopes nasce e traz energia renovada. Mantemos vivas as tradições enquanto criamos novas memórias juntos.",
      icon: "👶",
    },
    {
      year: "2025",
      title: "União Fortalecida",
      description: "Hoje somos uma família grande e unida, que valoriza cada momento juntos. Este encontro celebra não apenas nosso passado, mas também nosso futuro compartilhado.",
      icon: "❤️",
    },
  ];

  return (
    <section id="historia" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <span className="text-3xl">📖</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma jornada de amor, união e tradição que atravessa gerações
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            {timeline.map((event, index) => (
              <div key={index} className="relative">
                <div className="flex gap-8 items-start">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl border-4 border-card shadow-soft">
                      {event.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 p-6 shadow-soft hover:shadow-warm transition-all duration-300 animate-slide-up">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="pt-12 space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground">
              Nossos Valores
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-foreground mb-3">União</h4>
                <p className="text-muted-foreground">
                  Juntos somos mais fortes. Valorizamos cada membro da nossa família.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="text-5xl mb-4">💛</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Amor</h4>
                <p className="text-muted-foreground">
                  O amor é o que nos mantém unidos através das gerações.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Tradição</h4>
                <p className="text-muted-foreground">
                  Mantemos vivas as tradições enquanto criamos novas memórias.
                </p>
              </Card>
            </div>
          </div>

          {/* Quote */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <blockquote className="text-center space-y-4">
              <p className="text-xl md:text-2xl font-medium text-foreground italic">
                "A família não é apenas sobre estar relacionado pelo sangue, mas sobre estar conectado pelo coração."
              </p>
              <footer className="text-muted-foreground font-medium">
                — Sabedoria da Família Lopes
              </footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default History;
