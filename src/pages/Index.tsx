
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuAnnouncement from "@/components/MenuAnnouncement";
import Location from "@/components/Location";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Messages from "@/components/Messages";
import History from "@/components/History";

import Footer from "@/components/Footer";
import MetaFinanceiraGoogle from "@/components/MetaFinanceiraGoogle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuAnnouncement />
        <Location />
        <Program />
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
