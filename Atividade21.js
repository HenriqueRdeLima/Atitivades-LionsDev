const prompt = require('prompt-sync')();

let estoquetamanhos = ['10','15','8']

let Pvendido = parseFloat(prompt('qual é a quantidade de camisas P que foram vendidas hoje?   '))

estoquetamanhos[0] = estoquetamanhos[0] - Pvendido

if (estoquetamanhos[0] >= 5) {
    console.log('Estoque atualizado quantidade restante da camisa tamanho P = ',estoquetamanhos[0]
    );   
}
else{
    console.log('ALERTA: Estoque de camisas tamanho P está critico!');
}