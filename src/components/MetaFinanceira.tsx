import React from "react";


interface MetaFinanceiraProps {
  valorAtual?: number | null;
  meta?: number | null;
  loading?: boolean;
  error?: string | null;
}


const MetaFinanceira: React.FC<MetaFinanceiraProps> = ({ valorAtual, meta, loading, error }) => {
  if (loading) {
    return (
      <section className="w-full max-w-2xl mx-auto my-12 p-6 bg-yellow-50 rounded-xl shadow-lg border border-yellow-200 text-center">
        <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center justify-center gap-2">
          🎉 Rumo a nossa festa!
        </h2>
        <p className="text-yellow-800">Carregando valores...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className="w-full max-w-2xl mx-auto my-12 p-6 bg-yellow-50 rounded-xl shadow-lg border border-yellow-200 text-center">
        <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center justify-center gap-2">
          🎉 Rumo a nossa festa!
        </h2>
        <p className="text-red-600">Erro ao carregar valores: {error}</p>
      </section>
    );
  }
  if (valorAtual == null || meta == null) {
    return null;
  }
  const progresso = Math.min((valorAtual / meta) * 100, 100);
  const falta = Math.max(meta - valorAtual, 0);
  return (
    <section className="w-full max-w-2xl mx-auto my-12 p-6 bg-yellow-50 rounded-xl shadow-lg border border-yellow-200 text-center">
      <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center justify-center gap-2">
        🎉 Rumo à Festa dos Sonhos!
      </h2>
      <p className="text-lg text-yellow-800 mb-4">
        Já arrecadamos <span className="font-bold">R$ {valorAtual.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span> de <span className="font-bold">R$ {meta.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>!
      </p>
      <div className="w-full bg-yellow-200 rounded-full h-6 mb-2 overflow-hidden">
        <div
          className="bg-yellow-400 h-6 rounded-full transition-all duration-700 flex items-center justify-end pr-2"
          style={{ width: `${progresso}%` }}
        >
          <span className="text-yellow-900 font-bold text-sm">
            {progresso.toFixed(0)}%
          </span>
        </div>
      </div>
      <p className="text-yellow-700 mt-2">
        Falta só <span className="font-bold">R$ {falta.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span> para alcançarmos nossa meta e fazer essa festa acontecer! 💛
      </p>
      <p className="text-yellow-600 mt-4 italic">
        Cada contribuição é um passo mais perto de celebrar juntos!
      </p>
    </section>
  );
};

export default MetaFinanceira;
