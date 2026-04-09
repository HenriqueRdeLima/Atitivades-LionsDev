//Exercícios: Estruturas de Repetição numero:5

const prompt = require('prompt-sync')()

let pesototal = 0
let quantidadecaixas = 0

while (true) {
    let pesocaixa = parseFloat(prompt("Digite o peso da caixa (kg): "))

    if (pesototal + pesocaixa > 1000) {
        console.log('limite de 1000 kg atingido! Caixa não adicionada.')
        break
    }

    pesototal += pesocaixa
    quantidadecaixas++
}

console.log(`pepso total carregado ${pesototal}`)
console.log(`quantidade de caixas carregadas ${quantidadecaixas}`)