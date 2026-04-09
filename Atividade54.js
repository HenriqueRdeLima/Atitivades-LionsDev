//Exercícios: Funções e Estruturas de Seleção numero:6

const prompt = require('prompt-sync')()

function classificação(lista) {

    let soma = lista[0] + lista[1] + lista[2]

    switch (true) {

        case (soma > 200):
            return 'veterano'

        case (lista[2] > 90):
            return 'veterano'

        default:
            return 'iniciante'
}}

let pontuações = []

pontuações[0] = parseFloat(prompt('Digite a pontuação da partida 1   '))
pontuações[1] = parseFloat(prompt('Digite a pontuação da partida 2   '))
pontuações[2] = parseFloat(prompt('Digite a pontuação da partida 3   '))

let resultado = classificação(pontuações)

console.log('classificação', resultado)