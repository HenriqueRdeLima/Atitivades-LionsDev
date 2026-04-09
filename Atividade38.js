//Laços de Repetição slide atv.1 p.154

const prompt = require('prompt-sync')();

let Tabuada = parseFloat(prompt('qual tabuada desejada?   '))
let multiplicador = parseFloat(prompt('até qual multiplicador você quer?   '))

for (let i = 0; i <= multiplicador * 10; i += Tabuada) {
    console.log(i);
}