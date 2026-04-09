//Exercícios: Estruturas de Repetição numero:2

const prompt = require('prompt-sync')()

let temperaturainicial = Number(prompt("Digite a temperatura inicial: "))

for (let i = 1; i <= 5; i++) {
    temperaturainicial = temperaturainicial + 2
    console.log(`calibragem ${i}: ${temperaturainicial} graus`)
}