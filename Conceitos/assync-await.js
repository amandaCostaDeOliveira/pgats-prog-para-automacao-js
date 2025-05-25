//async - assíncrono

async function exibirNomeDogFormatado(nome) {
    return nome.toUpperCase()    
}

// await - esperar

console.log("Sem await")
console.log(exibirNomeDogFormatado('Pipoca'))

console.log("Com await")
console.log(await exibirNomeDogFormatado('Pipoca'))