//Exercícios: Estruturas de Repetição numero:4

const prompt = require('prompt-sync')()

let salarios = [2500 , 3200 , 4100 , 5000 , 6200]

for (let i = 0; i < salarios.length; i++) {
    salarios[i] = (salarios[i] * 1.10).toFixed(2) 
//perguntei pro chat pra ver como deixava o numero mais curto sem tantos 0
}
console.log(`salarios atualizados: ${salarios}`);
