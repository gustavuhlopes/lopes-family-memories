import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";


// Lista real de participantes


const equipes = [
  [
    "Bruna",
    "Heleno",
    "Sebastiana Georgina",
    "Gustavo",
    "Anne",
    "Jeferson",
    "Carol",
    "Eduardo",
    "Lis 👧"
  ],
  [
    "Roanna",
    "Estevão",
    "Iracema",
    "Flávio",
    "Fabi",
    "Larissa",
    "Hoji 👦",
    "Pérola 👧"
  ],
  [
    "Marlene",
    "Marcelino",
    "José Lopes",
    "Marcella",
    "Raí Marcel",
    "Vanessa",
    "Fabrícia",
    "José Gabriel"
    // Nenhuma criança nesta equipe
  ],
  [
    "Regina Lopes",
    "Mercilene",
    "João Lucas",
    "Jéssica",
    "Jander",
    "Raíza",
    "Miguel",
    "Domitilla",
    "Melina 👧",
    "Jamile 👧"
  ]
];
const nomesEquipes = ["Equipe 1", "Equipe 2", "Equipe 3", "Equipe 4"];
const coresEquipes = ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800"];
const iconesEquipes = ["🟦", "🟥", "🟩", "🟨"];

const tarefasExemplo = [
  "Preparar um prato específico (ex.: arroz, farofa, salpicão, sobremesa)",
  "Organizar mesa e utensílios",
  "Cuidar das bebidas",
  "Preparar algo que será usado no sábado logo cedo"
];

const criteriosPontuacao = [
  {
    titulo: "Pontualidade",
    descricao: [
      "10 → Entregou no horário",
      "5 → Atrasou até 10 minutos",
      "0 → Atrasou mais de 10 minutos"
    ],
    max: 10
  },
  {
    titulo: "Organização da Equipe",
    descricao: [
      "10 → Resolveram tudo sozinhos",
      "5 → Pediram ajuda 1 ou 2 vezes",
      "0 → Virou bagunça e precisou de ajuda o tempo todo"
    ],
    max: 10
  },
  {
    titulo: "Entrega Completa",
    descricao: [
      "10 → Tudo completo",
      "5 → Faltou um detalhe",
      "0 → Incompleto ou faltando itens importantes"
    ],
    max: 10
  },
  {
    titulo: "Capricho / Apresentação",
    descricao: [
      "10 → Caprichadinho",
      "5 → Ok",
      "0 → Jogou de qualquer jeito"
    ],
    max: 10
  },
];



export default function Gincana() {
  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        {/* Lançamento das Atividades e Apresentação das Equipes */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
              <span className="text-3xl">🎄</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Gincana de Natal – Lançamento das Atividades</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Família Lopes – 2025
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bem-vindos ao lançamento da nossa <b>GINCANA</b>! As equipes já estão formadas e preparadas para os desafios que vêm aí. Confira abaixo a divisão das equipes e prepare-se para entrar no clima de competição saudável e colaboração!
            </p>
          </div>
        </motion.div>

        {/* Apresentação das Equipes */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">👥 Apresentação das Equipes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">São <b>34 pessoas</b>, divididas em 4 equipes equilibradas. Cada equipe já está pronta para os desafios e atividades que virão!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {equipes.map((equipe, idx) => (
                  <Card key={idx} className={`border-2 ${coresEquipes[idx]} animate-fade-in`}>
                    <CardHeader className="flex flex-row items-center gap-2">
                      <span className="text-2xl">{iconesEquipes[idx]}</span>
                      <CardTitle className="text-lg">{nomesEquipes[idx]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="flex flex-wrap gap-2">
                        {equipe.map((nome) => (
                          <Badge key={nome} variant="outline" className="bg-white/80 text-foreground border-primary/20 shadow-sm">{nome}</Badge>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Desafios Especiais */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card className="mb-8 border-4 border-primary animate-slide-up shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2 text-primary">🔥 1. Desafio dos Molhos – Noite do Macarrão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-muted-foreground">A ceia será uma noite especial de macarrão, e cada equipe ficará responsável por preparar e levar um tipo de molho:</p>
              <ul className="list-disc pl-6 text-lg mb-4">
                <li><b>Equipe 1:</b> Molho Bolonhesa de Carne</li>
                <li><b>Equipe 2:</b> Molho Bechamel (molho branco)</li>
                <li><b>Equipe 3:</b> Molho Bolonhesa de Frango</li>
                <li><b>Equipe 4:</b> Molho Quatro Queijos</li>
              </ul>
              <p className="text-md text-muted-foreground">Cada molho deve ser entregue pronto para servir, com atenção à apresentação e praticidade.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
          <Card className="mb-8 border-4 border-green-500 animate-slide-up shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2 text-green-700">🎉 2. Desafio de Organização do Sítio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-muted-foreground">Cada equipe ficará responsável por organizar e decorar uma área específica do sítio:</p>
              <ul className="list-disc pl-6 text-lg mb-4">
                <li><b>Equipe 1:</b> Decoração próxima à piscina</li>
                <li><b>Equipe 2:</b> Decoração próxima à churrasqueira</li>
                <li><b>Equipe 3:</b> Itens de higiene e organização/decoração dos banheiros</li>
                <li><b>Equipe 4:</b> Organização e decoração dos quartos
                  {/* <ul className="list-disc pl-6 text-base mt-2">
                    <li>Definir onde será o quarto de cada pessoa.</li>
                    <li>Como não há camas para todos, providenciar colchões para dormir no chão (são 25 camas pelo sítio, então 10 pessoas precisarão dormir em colchão).</li>
                    <li>Organizar e distribuir os colchões nos quartos.</li>
                    <li>Colocar nomes nas portas dos quartos para facilitar a identificação.</li>
                    <li>Decorar os quartos</li>
                  </ul> */}
                </li>
              </ul>
              <p className="text-md text-muted-foreground">Essas tarefas devem ser realizadas <b>antes do início das atividades principais</b>, garantindo que todos cheguem e encontrem o ambiente preparado e acolhedor.</p>
            </CardContent>
          </Card>
        </motion.div>


        {/* Entrega */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">🕒 Entrega das Tarefas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A entrega será feita no sábado, na hora combinada (que avisaremos antes). Com isso, a gincana já começa automaticamente!</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pontuação */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">🏆 Como as Equipes Serão Pontuadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">O foco é a organização, o capricho e a responsabilidade. Cada equipe poderá receber até <b>40 pontos</b> distribuídos assim:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {criteriosPontuacao.map((c, i) => (
                  <Card key={i} className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">{c.titulo} <Badge variant="outline" className="ml-2">até {c.max} pts</Badge></CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 text-muted-foreground text-sm">
                        {c.descricao.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>



        {/* Objetivo */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">🎉 Objetivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">O objetivo é se divertir, trabalhar em equipe e ajudar a tornar o nosso final de semana mais organizado, leve e com mais interação entre todos.<br/>No final, somamos as pontuações e declaramos a Equipe Campeã da Gincana de Natal 2025!</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
