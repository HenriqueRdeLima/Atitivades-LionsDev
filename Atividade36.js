//Atividade 2, slide switch p.166

const prompt = require('prompt-sync')();

let nota = parseFloat(prompt('qual é a nota?   '))

switch (true) {
    case nota >= 90 && nota <= 100:
    console.log('A');
    break

    case nota >= 80 && nota <= 89:
        console.log('B');
    break
    
    case nota >= 70 && nota <= 79:
        console.log('C');
    break
    
    case nota >= 60 && nota <= 69:
        console.log('D');
    break

    case nota >= 0 && nota <= 59:
        console.log('E');
    break

    default:
        console.log('Nota invalida');
}