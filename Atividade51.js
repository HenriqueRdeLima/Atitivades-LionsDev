//Exercícios: Funções e Estruturas de Seleção numero:3

const prompt = require('prompt-sync')()

let registro = {
    nome_do_cliente: prompt('qual é o nome do cliente?   '),
    codigo_do_produto: parseFloat(prompt('qual é o numero do produto? (1-Fone, 2- Teclado, 3-Mouse)   '))
}

switch (registro.codigo_do_produto) {
    
    case 1:
        registro['produto'] = 'fone'
        registro['valor'] = 25
        break
    
    case 2:
        registro['produto'] = 'teclado'
        registro['valor'] = 30
        break

    case 3:
        registro['produto'] = 'mouse'
        registro['valor'] = 20
        break
    
    default:
        console.log('codigo invalido')
        break
}

console.table(registro)
