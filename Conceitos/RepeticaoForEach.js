/**
 * listaDeAlunos
 *  Mateus
 *  Renata
 *  Leandro
 *  Ana
 *  Lucas
 * 
 * paraCada (item da) listaDeAlunos
 *  //dar uma nota aleatória
 *
 */
const listaDeAlunos=[
    'Mateus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]
listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})

console.log('______________________')

const listaDeAlunosENotas=[
    {
        nome: 'Matheus',
        nota: 7
    },{
        nome: 'Renata',
        nota: 6
    },{
        nome: 'Leandro',
        nota: 5
    },{
        nome: 'Ana',
        nota: 8
    },{
        nome: 'Lucas',
        nota: 9
    }
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}.`)
})

console.log('______________________________')

listaDeAlunosENotas.forEach(aluno => {
    if(aluno.nota<7){
        console.log(`O aluno ${aluno.nome} precisa de trabalho extra.`)
    }
})