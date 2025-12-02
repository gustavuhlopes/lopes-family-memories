// Dados detalhados do cardápio, ingredientes e cronograma
export const detailedMenu = [
  {
    id: "sabado-almoco",
    title: "SÁBADO - CHURRASCO E ALMOÇO ESPECIAL",
    time: "12:00h - 18:30h",
    main: [
      {
        name: "Entradas do Churrasco",
        quantidade: "Frango 4 kg, porco 6 kg, Pães de Alho 30 unidades, Petiscos variados",
        observacao: "Serviço inicial do churrasco, das 12h até o almoço."
      },
      {
        name: "Carnes Nobres (Alcatra, Contra-filé)",
        quantidade: "12 kg",
        observacao: "Servidas no almoço principal, a partir das 14:30."
      },
      {
        name: "Espetinhos de Legumes",
        quantidade: "15 unidades",
        observacao: "Abobrinha, cebola, pimentão, cenoura, berinjela. Para Carol e mãe."
      }
    ],
    sides: [
      {
        name: "Arroz Branco",
        quantidade: "2.5 kg (cru, para almoço e ceia)",
        observacao: "Acompanhamento do almoço."
      },
      {
        name: "Vinagrete",
        quantidade: "2.5 kg",
        observacao: "Acompanhamento do almoço."
      },
      {
        name: "Batata Maionese",
        quantidade: "3 kg",
        observacao: "Acompanhamento do almoço."
      }
    ],
    outros: [
      {
        name: "Churrasco contínuo",
        quantidade: "Carnes variadas extras (aprox. 4 kg), pão de alho e petiscos",
        observacao: "Após o almoço, segue o churrasco até 18:30."
      },
      {
        name: "Espetinhos de Legumes Extra",
        quantidade: "10 unidades",
        observacao: "Para consumo durante o churrasco da tarde."
      }
    ]
  },
  {
    id: "sabado-tarde",
    title: "SÁBADO - TARDE",
    time: "15:30h - 18:30h",
    main: [
      {
        name: "Linguiça de Pernil (ou Salsichão)",
        quantidade: "6 kg",
        observacao: "Para petiscar durante a tarde."
      },
      {
        name: "Espetinhos de Legumes",
        quantidade: "15 unidades",
        observacao: "Versão sem hambúrguer e sem salsicha vegetal."
      }
    ],
    sides: [
      {
        name: "Pão de Alho (com alho e queijo)",
        quantidade: "50 unidades",
        observacao: "Churrasco."
      }
    ],
    outros: []
  },
  {
    id: "sabado-ceia",
    title: "SÁBADO - CEIA NATALINA",
    time: "22:00h",
    main: [
      {
        name: "Peru ou Chester",
        quantidade: "5 kg",
        observacao: "Para a Ceia. Marinar na sexta."
      },
      {
        name: "Lombo Suíno ao Molho Cítrico",
        quantidade: "3.5 kg",
        observacao: "Para a Ceia. Marinar na sexta."
      },
      {
        name: "Assado de Legumes ao Forno",
        quantidade: "1 bandeja grande",
        observacao: "Batata, abobrinha, cenoura, cebola, pimentão, alecrim. Sem carne."
      }
    ],
    sides: [
      {
        name: "Salpicão de Frango",
        quantidade: "2.2 kg total",
        observacao: "Frango cozido e desfiado antes."
      },
      {
        name: "Arroz à Grega",
        quantidade: "2.5 kg arroz cru",
        observacao: "Arroz com passas e frutas secas."
      },
      {
        name: "Batatas Coradas com Alecrim",
        quantidade: "3.5 kg de batata",
        observacao: "Ceia."
      },
      {
        name: "Farofa Natalina",
        quantidade: "1.5 kg",
        observacao: "Veg-friendly."
      },
      {
        name: "Sobremesas",
        quantidade: "Rabanada, pavê, frutas",
        observacao: "Veg-friendly."
      },
      {
        name: "Salada Completa Veggie",
        quantidade: "1 bowl grande",
        observacao: "Folhas, tomates, manga, amêndoas, molho à parte."
      }
    ],
    outros: []
  },
  {
    id: "domingo-cafe",
    title: "DOMINGO - CAFÉ DA MANHÃ",
    time: "08:00h - 10:00h",
    main: [
      {
        name: "Pães variados",
        quantidade: "50–60 pães",
        observacao: "Veg-friendly."
      },
      {
        name: "Bolos simples",
        quantidade: "3 bolos",
        observacao: "Veg-friendly."
      },
      {
        name: "Frutas da estação",
        quantidade: "5 kg",
        observacao: "Veg-friendly."
      }
    ],
    sides: [
      {
        name: "Queijo e presunto",
        quantidade: "1.5 kg de cada",
        observacao: "Queijo ok, presunto para os demais."
      },
      {
        name: "Manteiga, requeijão e geleia",
        quantidade: "2 potes cada",
        observacao: "Aprovado pelas vegetarianas."
      },
      {
        name: "Café / Leite / Suco",
        quantidade: "bebidas gerais",
        observacao: "Sem leite vegetal."
      }
    ],
    outros: [
      {
        name: "Iogurte",
        quantidade: "3 litros",
        observacao: "Natural e de frutas."
      },
      {
        name: "Granola",
        quantidade: "1 kg",
        observacao: "Para acompanhar."
      }
    ]
  },
  {
    id: "domingo-almoco",
    title: "DOMINGO - ALMOÇO TROPEIRO & REAPROVEITAMENTO",
    time: "13:00h",
    main: [
      {
        name: "Feijão Tropeiro",
        quantidade: "Feijão 2 kg, farinha 1 kg, couve 6 molhos, torresmo, linguiça e carnes do churrasco",
        observacao: "Prato principal."
      },
      {
        name: "Feijão Tropeiro de Legumes (veg-friendly)",
        quantidade: "Feijão, legumes, ovos, farinha, couve",
        observacao: "Versão sem carnes."
      },
      {
        name: "Reaproveitamento da Ceia",
        quantidade: "-",
        observacao: "Carnes e acompanhamentos."
      }
    ],
    sides: [
      {
        name: "Arroz Branco",
        quantidade: "Aproveitar arroz anterior",
        observacao: "Ok."
      },
      {
        name: "Salada simples",
        quantidade: "1 bowl grande",
        observacao: "Veg-friendly."
      },
      {
        name: "Farofa extra",
        quantidade: "0.5 kg",
        observacao: "Veg-friendly."
      }
    ],
    outros: [
      {
        name: "Petiscos e carnes do churrasco",
        quantidade: "-",
        observacao: "Reaproveitamento."
      }
    ]
  }
];
