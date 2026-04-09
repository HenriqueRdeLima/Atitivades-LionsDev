//Exercícios: Estruturas de Repetição numero:3

const prompt = require('prompt-sync')()

let total = 0
let resposta

do {
    let valoritem = parseFloat(prompt("digite o valor do item: "))

    total = total + valoritem

    resposta = prompt("quer adicionar mais algum item? (responda: sim/nao) ")

} while (resposta === "sim")

console.log(`o valor total da compra é: ${total}`)