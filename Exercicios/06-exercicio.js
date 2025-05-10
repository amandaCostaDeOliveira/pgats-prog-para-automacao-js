const nome = 'Nilo'
const peso = 1.5
const tempo = 10

const classificarPorteDoDog = (peso) => {
    return peso <=10 ? 'Pequeno' : peso <=50 ? 'Médio' : 'Grande'
} 

const acharAtividade = (classificarPorteDoDog) => {
    switch (classificarPorteDoDog){
        case 'Pequeno':
            return 'Brincar dentro de casa'
            break
        case 'Médio':
            return 'Caminhada no quarteirão'
            break
        case 'Grande':
            return 'Correr no parque'
        default:
            return 'Porte Inválido'       
    }
}

const tipoAtividade = tempo <=15 ? 'Atividade rápida' : tempo <= 30 ? 'Tempo ideal' : 'Hora da Diversão'

console.log(`Dog ${nome}, porte ${classificarPorteDoDog(peso)}, ${tipoAtividade}: ${acharAtividade(classificarPorteDoDog(peso))}`)