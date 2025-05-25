function geradorDeTagsDeIdentificacao (nome){
    return nome.toUpperCase()
}

export {
    geradorDeTagsDeIdentificacao
}


function verificarSePodeSerAdotado (idade, porte){
    const idadeMinimaAdocao = 2
    let podeAdotar = false

    return podeAdotar = (idade>=2) ? true : (porte!='P')
}

export {
    verificarSePodeSerAdotado
}

function calcularConsumoDeRacao (nome,idade,peso){
    let racaoDiaria
       
    return racaoDiaria = peso * 300
}

export{
    calcularConsumoDeRacao
}

function decidirTipoDeAtividadePorPorte (porte) {
    switch (porte){
        case 'pequeno':
            return 'brincar dentro de casa'
            break
        case 'médio':
            return 'caminhada no quarteirão'
            break
        case 'grande':
            return 'correr no parque'
        default:
            return 'porte Inválido'       
    }
}

export {
    decidirTipoDeAtividadePorPorte
}


async function buscarDadoAsync () {
    return 'Pipoca'
}

export{
    buscarDadoAsync       
}
