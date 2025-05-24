/**
 * para, faça
 *  contados; condicao. maniduplador do contador (incremento/decremento)
 * 
 * quantidadeDePetiscos; quantidadeDePetiscos < quantidadeCalculada; quantidadeDePetiscos++
 * 
 */

const quantidadeCalculada=3
const gatos = ['Lessie', 'Pony', 'Fumaça']

for(let quantidadeDePetiscos=1; quantidadeDePetiscos<=quantidadeCalculada; quantidadeDePetiscos++){
    console.log(`Dando o petisco nº ${quantidadeDePetiscos}`)
}

console.log('________________________________')


for (let indice=0; indice<gatos.length; indice++){
    console.log(`Dando o petisco para o gato ${gatos[indice]}`)
}

console.log('________________________________')

for (let indice=0; indice<gatos.length; indice++){
    for(let quantidadeDePetiscos=1; quantidadeDePetiscos<=quantidadeCalculada; quantidadeDePetiscos++){
        console.log(`Dando o petisco nº${quantidadeDePetiscos} o gato ${gatos[indice]}`)
    }
    
}





