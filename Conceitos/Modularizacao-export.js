/**
 * Sintaxe CommonJS:
 * modulo.exports = {} / require ('')    - deixou de ser usado (até 2020 mais ou menos)
 * 
 * ESM - Ecmascript Standard Modules     - mais usado vamos focar nela
 *  export {} / import {} from ''
 */

function naoExportar () {
//código
console.log('Código')

const nomePet1='Pitoco'
console.log(`O nome do pet é ${nomePet1}`)

const nomePet2='Pipoca'
console.log(`O nome do pet é ${nomePet2}`)

const nomePet3='Pantera'
console.log(`O nome do pet é ${nomePet3}`)

console.log('______________________')

//função
console.log('Função')

function exibirNomePet(nomePet){
    console.log(`O nome do pet é ${nomePet}`)
}

exibirNomePet('Pitoco')
exibirNomePet('Pipoca')
exibirNomePet('Pantera')

console.log('_______________________')
}

//naoExportar()

//Modulo Exportar - exportar função para uusar em outras partes do projeto
//ESM: export {} 

function outraExibirNomePet(nomePetFuncao){
    console.log('Export/Import')
    console.log(`O nome do pet é ${nomePetFuncao}`)
}
export {
   outraExibirNomePet
}

