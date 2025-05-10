const nomeDog = 'Nick'
const idadeDog = 1
const porteDog = 'Pequeno'
const idadeAdocao = 2
let podeAdotar = false
let simNao

podeAdotar = (porteDog==='Pequeno') ? true : (idadeDog>=idadeAdocao)
simNao = podeAdotar ? 'apto' : 'inapto'

console.log(`O cachorro ${nomeDog} possui ${idadeDog} ano(s) e porte ${porteDog} e está ${simNao} para adoção devido sua idade e/ou porte`)