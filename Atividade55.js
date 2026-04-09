//Exercícios: Funções e Estruturas de Seleção numero:7

const prompt = require('prompt-sync')()

const conversor = (valor, moeda) => {
    let convertido

    switch (moeda) {
        case 'USD':
            convertido = valor * 5
            break

        case 'EUR':
            convertido = valor * 6
            break

        case 'GBP':
            convertido = valor * 7
            break

        default:
           console.log('moeda não existente');
           
}

return convertido
}

let valor_reais = parseFloat(prompt('Digite o valor em reais   '))
let moeda_destino = prompt('Digite a moeda (USD/EUR/GBP)   ')

let resultado = conversor(valor_reais, moeda_destino)

console.log(`Valor convertido, 1 real vale ${resultado} ${moeda_destino}`)