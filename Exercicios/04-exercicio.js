const nomeDog = 'Kloe'
const pesoDoDog = 6.78
const estoqueRacao = 1465
let racaoDiaria
let duracaoRacao

racaoDiaria = pesoDoDog * 30
duracaoRacao = estoqueRacao/racaoDiaria

console.log(`O cachorro ${nomeDog} pesa ${pesoDoDog}kg e por isso recomenda-se ${racaoDiaria}g de ração por dia. Seu estoque atual irá durar ${~~duracaoRacao} dias.`) 
