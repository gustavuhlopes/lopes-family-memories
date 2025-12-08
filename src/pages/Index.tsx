
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from "react";
import MenuAnnouncement from "@/components/MenuAnnouncement";
import Location from "@/components/Location";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Messages from "@/components/Messages";
import History from "@/components/History";

import Footer from "@/components/Footer";
import MetaFinanceiraGoogle from "@/components/MetaFinanceiraGoogle";



import { useEffect } from "react";

const Index = () => {
  const [programCountdown, setProgramCountdown] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  // A sessão da gincana só aparece quando o countdown do Program acaba
  const showGincana = programCountdown === null;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* Sessão chamativa da Gincana só aparece quando o countdown do Program acaba */}
        {showGincana && (
          <section className="bg-gradient-to-r from-yellow-300 via-pink-200 to-red-300 py-12 px-4 flex flex-col items-center text-center rounded-xl shadow-2xl my-8 mx-auto max-w-3xl border-4 border-yellow-400 animate-pulse">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4 drop-shadow-lg">🎉 Gincana em Família 2025 começou!</h2>
            <p className="text-lg md:text-2xl text-gray-800 mb-6 font-semibold">Prepare-se para muita diversão, desafios e união! Participe da nossa gincana e marque presença nessa festa inesquecível. Clique abaixo para saber mais e ver as equipes!</p>
            <a href="/gincana">
              <button className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-3000 animate-slow-bounce">
                Ir para a Gincana 🚩
              </button>
            </a>
          </section>
        )}
        <MenuAnnouncement />
        <Location />
        <Program onCountdownChange={setProgramCountdown} />
        <Gallery />
        <Messages />
        <History />
      </main>
      {/* Sessão de meta financeira alegre */}
      <MetaFinanceiraGoogle />
      <Footer />
    </div>
  );
};

export default Index;
