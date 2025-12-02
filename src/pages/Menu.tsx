
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { detailedMenu } from "./menu-data";

// Modal customizado para exibir os 4 cards do cronograma
// Modal em carrossel para exibir um dia por vez
function CronogramaModalCarrossel({ calendarioDias, open, setOpen }) {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // -1 para prev, 1 para next
  const total = calendarioDias.length;

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (!open) setCurrent(0);
  }, [open]);

  if (!open) return null;

  // Função para pegar o índice circular
  const getIndex = (idx) => (idx + total) % total;

  // Dias a serem exibidos: anterior, atual, próximo
  const prevIdx = getIndex(current - 1);
  const nextIdx = getIndex(current + 1);
  const diasParaExibir = [prevIdx, current, nextIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-all" onClick={() => setOpen(false)} />
      <div className="relative z-10 w-full max-w-2xl mx-auto p-6">
        <div className="flex justify-end mb-2">
          <button onClick={() => setOpen(false)} className="text-gray-200 hover:text-white text-2xl font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur focus:outline-none">×</button>
        </div>
        <div className="flex items-center justify-center gap-2 relative h-[420px]">
          <button onClick={goPrev} aria-label="Dia anterior" className="z-10 text-3xl px-2 py-1 text-primary-foreground bg-primary/20 rounded-full hover:bg-primary/40 transition">‹</button>
          <div className="relative flex items-center justify-center w-full h-full">
            {diasParaExibir.map((idx, i) => {
              // 0: prev, 1: current, 2: next
              const isCurrent = i === 1;
              const isSide = i !== 1;
              // Animação e escala
              const base =
                "absolute left-1/2 top-1/2 transition-all duration-500 ease-in-out";
              const translate =
                i === 0
                  ? "-translate-x-[140%] -translate-y-1/2 scale-90 opacity-60 z-0"
                  : i === 2
                  ? "translate-x-[40%] -translate-y-1/2 scale-90 opacity-60 z-0"
                  : "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 z-10";
              return (
                <Card
                  key={idx}
                  className={
                    base +
                    " " +
                    translate +
                    (isCurrent
                      ? " shadow-2xl border-2 border-primary animate-fade-in"
                      : " shadow-md border border-gray-300")
                  }
                  style={{ width: isCurrent ? 340 : 220, pointerEvents: isCurrent ? 'auto' : 'none' }}
                >
                  <CardHeader className="bg-primary/10 rounded-t-lg p-6">
                    <CardTitle className={isCurrent ? "text-2xl flex items-center gap-2" : "text-lg flex items-center gap-2"}>
                      <span className={isCurrent ? "inline-block bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow" : "inline-block bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow"}>
                        {calendarioDias[idx].dia}
                      </span>
                      <span>{calendarioDias[idx].semana}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={isCurrent ? "p-6" : "p-3"}>
                    <ul className={isCurrent ? "list-disc ml-6 space-y-2" : "list-disc ml-4 space-y-1 text-sm"}>
                      {calendarioDias[idx].tarefas.map((tarefa, i) =>
                        isCurrent ? (
                          <li key={i} className="text-base">{tarefa}</li>
                        ) : i < 3 ? (
                          <li key={i}>{tarefa}</li>
                        ) : null
                      )}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <button onClick={goNext} aria-label="Próximo dia" className="z-10 text-3xl px-2 py-1 text-primary-foreground bg-primary/20 rounded-full hover:bg-primary/40 transition">›</button>
        </div>
        <div className="text-center mt-4 text-sm text-gray-300">{current + 1} de {total} dias</div>
      </div>
    </div>
  );
}

export default function Menu() {
  // Exibe todos os campos do detailedMenu, incluindo observação
  // Estado para abrir o modal do cronograma
  const [cronogramaOpen, setCronogramaOpen] = React.useState(false);

  // Dados do cronograma (exemplo, adapte conforme necessário)
  const calendarioDias = [
  {
    "dia": 18,
    "semana": "Quinta-feira",
    "tarefas": [
      "Cozinhar e desfiar o frango para o salpicão",
      "Separar ossos e peles do frango e descartar",
      "Armazenar o frango desfiado em pote hermético na geladeira",
      "Preparar a primeira camada do pavê (creme base)",
      "Preparar mistura de nozes trituradas e reservar",
      "Separar todos os ingredientes secos das sobremesas (açúcar, farinha, chocolate em pó, nozes, especiarias)",
      "Lavar e higienizar os potes que serão usados para armazenar os preparos",
      "Verificar lista de compras e ajustar o que falta"
    ]
  },
  {
    "dia": 19,
    "semana": "Sexta-feira",
    "tarefas": [
      "Marinar carnes da ceia (Peru/Chester e Lombo) com alho, cebola, vinho branco e ervas",
      "Cortar e cozinhar batatas para o salpicão",
      "Cortar e cozinhar cenouras para o salpicão",
      "Deixar os legumes cozidos esfriando antes de armazenar",
      "Preparar a base do salpicão (misturar frango + maionese + temperos ) sem os ingredientes frescos ainda",
      "Cozinhar o arroz que será usado em recheios ou acompanhamentos da ceia",
      "Picar cebola, tomate e cheiro-verde para facilitar o preparo do vinagrete do sábado",
      "Comprar pães, frios, frutas, bolos e bebidas",
      "Organizar geladeira para abrir espaço para carnes e sobremesas",
      "Conferir carvão, gelo e descartáveis"
    ]
  },
  {
    "dia": 20,
    "semana": "Sábado",
    "tarefas": [
      "Finalizar e montar o pavê (montar camadas e colocar para gelar)",
      "Montar o salpicão adicionando ingredientes frescos (milho, ervilha, uva-passa, maçã, batata palha)",
      "Temperar saladas verdes",
      "Preparar entradas e mesa de frios",
      "Assar carnes da ceia caso opte por adiantar o preparo",
      "Montar o vinagrete (usar os picados do dia anterior)",
      "Fatiar pão de alho e deixá-lo pronto para o churrasco",
      "Montar espetinhos vegetarianos",
      "Temperar carnes do churrasco se ainda não estiverem temperadas",
      "Organizar o espaço do churrasco (grelhas, facas, tábuas)",
      "Iniciar churrasco no horário programado",
      "Montar mesa da ceia à noite (se já estiver no sítio)"
    ]
  },
  {
    "dia": 21,
    "semana": "Domingo",
    "tarefas": [
      "Finalizar saladas e ajustar temperos antes do almoço",
      "Organizar mesa do café da manhã",
      "Reaquecer carnes que foram assadas no sábado (se necessário)",
      "Preparar feijão tropeiro com sobras do churrasco",
      "Fritar bacon, linguiça e ovos para o tropeiro",
      "Misturar farinha, couve refogada e temperos no final",
      "Montar a mesa do almoço",
      "Verificar gelo e bebidas",
      "Servir almoço e aproveitar com a família",
      "Organizar descarte e embalagem de sobras"
    ]
  }
];


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Topo: seta de voltar e título */}
      <div className="flex items-center gap-4 mt-6 mb-8">
        <a href="/" aria-label="Voltar para página principal" className="inline-flex items-center text-primary hover:underline hover:text-primary-700 transition-colors text-lg font-medium">
          <span className="mr-2 text-2xl">←</span>
          Voltar
        </a>
        <h1 className="text-2xl font-bold flex-1 text-center text-gray-900">Cardápio da Ceia</h1>
      </div>

      {/* Botão de ação para abrir o cronograma */}
      <div className="flex justify-center mb-8">
        <Button
          variant="default"
          size="lg"
          className="px-8 py-4 text-lg font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => setCronogramaOpen(true)}
        >
          Ver Cronograma de Preparo
        </Button>
      </div>

      {/* Modal do cronograma em carrossel */}
      <CronogramaModalCarrossel calendarioDias={calendarioDias} open={cronogramaOpen} setOpen={setCronogramaOpen} />

      <div className="grid gap-6 md:grid-cols-2">
        {detailedMenu.map((item) => (
          <Card key={item.id} className="shadow-warm animate-fade-in transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.time}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="font-semibold">Pratos Principais:</span>
                <ul className="list-disc ml-6">
                  {item.main.map((main, i) => (
                    <li key={i}>
                      <span className="font-medium">{main.name}</span>
                      {main.quantidade && (
                        <span className="ml-2 text-xs text-gray-500">({main.quantidade})</span>
                      )}
                      {main.observacao && (
                        <span className="block text-xs text-gray-400 ml-2">{main.observacao}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Acompanhamentos e Petiscos:</span>
                <ul className="list-disc ml-6">
                  {item.sides.map((side, i) => (
                    <li key={i}>
                      <span className="font-medium">{side.name}</span>
                      {side.quantidade && (
                        <span className="ml-2 text-xs text-gray-500">({side.quantidade})</span>
                      )}
                      {side.observacao && (
                        <span className="block text-xs text-gray-400 ml-2">{side.observacao}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {item.outros && item.outros.length > 0 && (
                <div className="mb-2">
                  <span className="font-semibold">Outros Ingredientes:</span>
                  <ul className="list-disc ml-6">
                    {item.outros.map((outro, i) => (
                      <li key={i}>
                        <span className="font-medium">{outro.name}</span>
                        {outro.quantidade && (
                          <span className="ml-2 text-xs text-gray-500">({outro.quantidade})</span>
                        )}
                        {outro.observacao && (
                          <span className="block text-xs text-gray-400 ml-2">{outro.observacao}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
