/**
 * Console API
 */

console.log("Aula inicial JS")

console.error("Falha na execução")

console.warn("Atenção!")

console.table([{
    nome: 'Samuel',
    turma:'02',
    disciplina:'Programação JS'
    },
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Programação JS'
}])
/**
 * Constantes e variáveis
 */
// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informações de um dog que nunca mudam (const)
const nome = 'Loki'
const raca = 'SRD / vira-lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informações de um dog que mudam (let ou var)
let idade = 5
let peso = 10.5
let vacinado = true
let cadastro = false
let tamanho = 'M'

// hoisting -> içamento ou elevação

console.log(irmaos)
var irmaos = ["Thor","Hela"]
//eu chamei o console antes de dar valor para a variável, mas, devido ao içamento, o JS "declara" a variavel irmaos no topo
// então, ao executar o código dessa forma, não vai dar erro porem a declaração estará indefinida
// no caso de let e const, não há hoisting (içamento), portanto, se irmãos fossem desses tipos, daria erro ao executar o código

/**
 * Tipos de dados - cadeia, inteiro, real, logico, vetor, matriz
 * funções (leia e escreva)
 * 
 * cadeia - String
 * inteiro/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 * 
 * undefined
 * null
 * 
 * BigInt - number para números extremamente grandes
 * Symbol - 'identificador único'
 */
/**
 * String
 */
//'Turma 02 do PGATS' - aspas simples ou single quote
//"Turma 02 do PGATS" - aspas duplas ou double quote
//`Turma 02 do PGATS` - template strings

const turma = "02"
const aula = "03"
let data = "05 de Abril"

console.log("Aula " + aula + " da Turma "+ turma + " no sábado dia " + data) //concatenação
console.log(`Aula ${aula} da Turma ${turma} no sábado dia ${data}`) // interpolação

console.log(aula.length)
console.log(data.length)

// split - separar a string
const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ") // vai separar em um vetor
console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

console.log(nomesDeAlunos.includes("Goku"))
console.log(nomesDeAlunos.includes("Amanda"))

console.log(nomesDeAlunos.includes("goku"))
console.log(nomesDeAlunos.toLowerCase().includes("goku"))

console.log(nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "          inteiro  real cadeia de caracteres ...      "

console.log(conceitosLogica)
console.log(conceitosLogica.trim())

let dataSliceDia = "05 de Abril"
const cpf = "11445240670"

console.log(dataSliceDia.slice(0,2)) //o 0 e 2 são posições das letras, passamos a posição da primeira e a posição depois da que nós queremos mostrar

console.log(cpf.slice(0,3))
console.log(cpf.substring(0,3))
