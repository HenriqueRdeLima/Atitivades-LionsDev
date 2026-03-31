//exercicios Lista de Revisão: Fundamentos de Programação numero:3

const prompt = require('prompt-sync')();

let menu = {
    pedido: parseInt(prompt('qual bebida você deseja? 1. Café Expresso/2. Cappuccino/3. Chá/4. Chocolate Quente   ')),
    expresso: 1,
    cappuccino: 2,
    cha: 3,
    chocolate_quente: 4
}

switch (true) {
    case menu.pedido === menu.expresso:
        console.log('preparando o seu expresso')
        break

    case menu.pedido === menu.cappuccino:
        console.log('preparando o seu cappuccino');
        break

    case menu.pedido === menu.cha:
        console.log('preparando o seu chá')
        break

    case menu.pedido === menu.chocolate_quente:
        console.log('preparando o seu chocolate quente')
        break
        
    default:
        console.log('opção invalida');
}

