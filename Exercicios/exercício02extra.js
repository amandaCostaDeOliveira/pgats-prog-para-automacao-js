const textoSetePrincipiosTeste = 'o teste mostra a presenca, nao a ausencia de defeitos. testes exaustivos sao impossiveis. testes antecipados economizam tempo e dinheiro. os defeitos se agrupam. os testes se degradam. os testes dependem do contexto. falacia da ausencia de defeitos'
let contadorVogais = 0
let tamanhoTexto = textoSetePrincipiosTeste.length

for (let i=0; i<tamanhoTexto; i++){
    
    switch (textoSetePrincipiosTeste[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            contadorVogais++
            break;
    }
}

console.log(`O número de vogais no texto fornecido é ${contadorVogais}`)


