/**
 tentar {
 // conexao com banco (exemplo)
 } pegar (erro/excecao) {
    //salvar a exceção em algum lugar...
    //exibir
 }
    lançar = throw
*/

try {
    console.log('Tentando alimentar o Pet')
    throw new Error('Pet não quis alimento.')
}   catch(excecao) {
        console.log(excecao)
        console.log(excecao.name)
        console.log(excecao.message)
}   finally {
    console.log('SEMPRE SEREI EXECUTADO')
}

try {
    console.log('Tentando alimentar o Pet')
    //throw new Error('Pet não quis alimento.')

    //TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
}   catch(excecao) {
        console.log(excecao)
        console.log(excecao.name)
        console.log(excecao.message)

        //CAPTURAR A EXCECAO (ERR0)

}   finally {
    console.log('SEMPRE SEREI EXECUTADO')

    //FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
}