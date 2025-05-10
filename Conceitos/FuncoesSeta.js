// função seta, com parêmetro, sem retorno

const exibirNomeDoDog = (nome) => {
    console.log(nome)
}
exibirNomeDoDog("Pipoca")

// função seta, com parâmetro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}
console.log(obterNomeDoDogFormatado("pipoca"))

// função seta, com parâmetro + valor dafault, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}
exibirPorteDoDog()
exibirNomeDoDog('Grande')

// função seta, sem parâmetro, com retorno
const listarNomesDeDogs = () => {
    return [
        'Pituca',
        'Marea',
        'Anderson'
    ]
}
console.log(listarNomesDeDogs())

const obterObjetosDog = () => {
    return {
        nome: 'Spike',
        peso: 11.5
    }
}
console.log(obterObjetosDog())

const listarObjetosDog = () => {
    return {
        nome: 'Spike',
        peso: 11.5
    }, {
        nome: 'Romeo',
        peso: 15.5
    }
}
console.log(listarObjetosDog())

// funcao seta/arrow sembloco + com retorno 'automático'
const dobrar = (numero) => numero*2
console.log(dobrar(57))