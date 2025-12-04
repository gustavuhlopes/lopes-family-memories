import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";


// Lista real de participantes
const adultos = [
  "Gustavo", "Anne", "Eduardo", "Larissa", "Bruna Lais", "Thayson", "João", "Raí Marcel",
  "Marcella", "Marcelino", "Marlene", "Fabrícia", "Vanessa", "Iracema", "Estevão", "Roanna",
  "Regina Lopes", "Sebastiana Georgina", "José Lopes", "Mercilene", "Carol", "Jeferson", "Domitilla",
  "Miguel", "Fabi", "Flávio", "José Gabriel", "Raíza", "Jander"
];
// Crianças
const criancas = ["Melina", "Jamile", "Pérola", "Hoji", "Lis Flor"];

// Função para dividir adultos igualmente e distribuir crianças
function dividirEquipesComCriancas(adultos: string[], criancas: string[], nEquipes: number) {
  // Divide adultos
  const equipes = Array.from({ length: nEquipes }, () => [] as string[]);
  adultos.forEach((pessoa, i) => {
    equipes[i % nEquipes].push(pessoa);
  });
  // Adiciona uma criança em cada equipe, a última vai para a equipe com menos adultos
  criancas.forEach((crianca, i) => {
    equipes[i % nEquipes].push(crianca + " 👧");
  });
  return equipes;
}


const equipes = dividirEquipesComCriancas(adultos, criancas, 4);
const nomesEquipes = ["Equipe Sol", "Equipe Lua", "Equipe Estrela", "Equipe Cometa"];
const coresEquipes = ["bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800", "bg-pink-100 text-pink-800", "bg-green-100 text-green-800"];
const iconesEquipes = ["☀️", "🌙", "⭐", "☄️"];

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
      "5 → Caprichadinho",
      "3 → Ok",
      "0 → Jogou de qualquer jeito"
    ],
    max: 5
  },
  {
    titulo: "Praticidade",
    descricao: [
      "5 → Resolveram tudo sem dar trabalho",
      "3 → Pediram uma ajuda ou outra",
      "0 → Só faltaram pedir manual de instruções"
    ],
    max: 5
  }
];

const cartoes = [
  {
    cor: "bg-yellow-200 text-yellow-900 border-yellow-400",
    titulo: "Cartão Amarelo",
    pontos: -3,
    descricao: "Bagunça desnecessária, atraso leve, perguntas óbvias demais."
  },
  {
    cor: "bg-red-200 text-red-900 border-red-400",
    titulo: "Cartão Vermelho",
    pontos: -7,
    descricao: "Atraso grande, tarefa incompleta, esquecer itens essenciais."
  }
];

export default function Gincana() {
  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
              <span className="text-3xl">🎄</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Gincana de Natal – Regras e Funcionamento</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Família Lopes – 2025
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Este ano o nosso Natal vai ter algo especial: uma <b>GINCANA</b> em equipes, com atividades simples e divertidas — e que ao mesmo tempo vão ajudar na organização do nosso final de semana no sítio.<br/>
              Nada complicado, nada de estresse. É só pra gente se divertir, trabalhar em equipe e deixar tudo mais leve.
            </p>
          </div>
        </motion.div>

        {/* Equipes */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">👥 Divisão das Equipes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Teremos <b>34 pessoas</b>, divididas em 4 equipes com quantidades equilibradas. Cada equipe receberá uma tarefa prática relacionada à organização do nosso encontro — algo simples e dentro das nossas necessidades.</p>
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
              <div className="mt-6">
                <p className="font-semibold mb-2">Exemplos de tarefas:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  {tarefasExemplo.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">As tarefas serão distribuídas com antecedência para que cada equipe possa se organizar.</p>
              </div>
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

        {/* Cartões */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">🚨 Cartões (Pontos Negativos)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cartoes.map((c, i) => (
                  <Card key={i} className={`border-2 ${c.cor}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">{c.titulo} <Badge variant="outline">{c.pontos} pts</Badge></CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{c.descricao}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground text-sm">Um toque de humor pra deixar tudo mais divertido!</p>
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
