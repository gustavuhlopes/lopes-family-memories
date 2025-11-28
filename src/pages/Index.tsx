import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Messages from "@/components/Messages";
import History from "@/components/History";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Location />
        <Program />
        <Gallery />
        <Messages />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
