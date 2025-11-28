import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Data do evento - ajustar conforme necessário
  const eventDate = new Date("2025-12-31T14:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProgram = () => {
    document.querySelector("#programacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Família Lopes reunida" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Família Lopes
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 font-medium drop-shadow-md">
              Onde as memórias viram tradição 🏡
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Prepare-se para um dia inesquecível de união, alegria e tradição. Junte-se a nós nesta 
            celebração especial da nossa família!
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8">
            {[
              { value: timeLeft.days, label: "Dias" },
              { value: timeLeft.hours, label: "Horas" },
              { value: timeLeft.minutes, label: "Minutos" },
              { value: timeLeft.seconds, label: "Segundos" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 min-w-[100px] shadow-warm"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={scrollToProgram}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-warm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ver Programação 🎉
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
