import React from "react";

const MenuAnnouncement = () => (
  <section className="w-full flex justify-center py-8 bg-primary/10 border-b border-primary">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full flex flex-col items-center border border-primary">
      <h2 className="text-2xl font-bold text-primary mb-2 text-center">O cardápio já está disponível!</h2>
      <p className="text-muted-foreground mb-6 text-center">Confira agora todas as opções deliciosas que preparamos.</p>
      <a
        href="/menu"
        className="w-full md:w-auto px-10 py-5 text-xl font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
      >
        Ver Cardápio
      </a>
    </div>
  </section>
);

export default MenuAnnouncement;
