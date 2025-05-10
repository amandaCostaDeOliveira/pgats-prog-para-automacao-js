//

// função nomeada/tradicional, com parêmetro, sem retorno

function exibirNomeDoDog (nome){
    console.log(nome)
}

exibirNomeDoDog("Pipoca")

// função nomeada/tradicional, com parâmetro, com retorno
function obterNomeDoDogFormatado (nome) {
    return nome.toUpperCase()
}

console.log(obterNomeDoDogFormatado("pipoca"))

// função nomeada/tradicional, com parâmetro + valor dafault, sem retorno
function exibirPorteDoDog (porte = 'ND') {
    console.log(porte)
}
exibirPorteDoDog()
exibirNomeDoDog('Grande')

// função nomeada/tradicional, sem parâmetro, com retorno
function listarNomesDeDogs (){
    return [
        'Pituca',
        'Marea',
        'Anderson'
    ]
}
console.log(listarNomesDeDogs())

function obterObjetosDog(){
    return {
        nome: 'Spike',
        peso: 11.5
    }
}
console.log(obterObjetosDog())

function listarObjetosDog(){
    return {
        nome: 'Spike',
        peso: 11.5
    }, {
        nome: 'Romeo',
        peso: 15.5
    }
}
console.log(listarObjetosDog())