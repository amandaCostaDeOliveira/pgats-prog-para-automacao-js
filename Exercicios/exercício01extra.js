const listaMisturada = [8, 68, 'Amanda', 29, 'PGATS', 1, 57, 'Julio de Lima']

function removerStrings(listaInteirosStrings){
    return listaInteirosStrings.filter(elemento => typeof elemento === 'number' && isFinite(elemento));
}

console.log (`Lista com inteiros e strings: ${listaMisturada}`)
console.log(`Lista apenas com inteiros: ${removerStrings(listaMisturada)}`)
