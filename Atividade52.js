//Exercícios: Funções e Estruturas de Seleção numero:4

const prompt = require('prompt-sync')()

let avaliar_temperaturas = []

let temperatura_1 = parseFloat(prompt('qual é a temperatura 1?   '))
let temperatura_2 = parseFloat(prompt('qual é a temperatura 2?   '))
let temperatura_3 = parseFloat(prompt('qual é a temperatura 3?   '))

avaliar_temperaturas.push(temperatura_1, temperatura_2, temperatura_3)
    
let media_de_temperaturas = (avaliar_temperaturas[0] + avaliar_temperaturas[1] + avaliar_temperaturas[2]) / 3

switch (true) {
    case media_de_temperaturas > 30:
        console.log('alerta de aquecimento')
        break
    
    case media_de_temperaturas <= 30:
        console.log('clima estavel')
}