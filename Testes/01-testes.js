/**
 describe -> agrupador de testes
 it       -> implementação do teste

TDD -
    crio o teste
    vejo o teste falhar
    crio a implementação para o teste passar
    rodo o teste de novo
    refatoro o código para melhorar...

    Assertion/Asserção
        Verificar se um comportamento está de acordo com o esperado
 */

import { exibirNomeMassa } from "../Conceitos/TesteDeUnidade.js"
import assert from 'node:assert'

        describe ('Testes do Projeto', () => {

            it('Exibir nome em letras maíusculas', () => {
                assert.strictEqual(exibirNomeMassa('Mimosa'),'MIMOSA')
            })
            
         })