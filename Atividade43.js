//Exercícios: Estruturas de Repetição numero:1

const prompt = require('prompt-sync')();

let senha = 9876
let senhadigitada = prompt('qual é a senha?   ')

while (senha != senhadigitada) {
    console.log(`você errou, tente novamente`);
    senhadigitada = prompt('qual é a senha?   ')
}
 console.log('senha correta')
