const nome = 'Nilo'
const peso = 61

const classificarPorteDoDog = (peso) => {
    return peso <=10 ? 'Pequeno' : peso <=50 ? 'Médio' : 'Grande'
} 

console.log(`Nome: ${nome} | Peso: ${peso}kg | Porte: ${classificarPorteDoDog(peso)}`)