//exercicios Lista de Revisão: Fundamentos de Programação numero:2

const prompt = require('prompt-sync')();

let visitante = {
    idade: prompt('qual é a sua idade?   '),
    credencial: prompt('você tem credencial VIP? (s/n)   ')
}

switch (true) {
    
    case visitante.idade < 18:
        console.log('ascesso negado, menor de idade')
        break

    case visitante.idade >= 18 && visitante.credencial === 's':
        console.log('acesso liberado na pista VIP')
        break

    case visitante.idade >= 18 && visitante.credencial === 'n':
        console.log('acesso liberado na pista comum')
        break

    default:
        console.log('alguma informação não foi concedida/está errada, tente novamente')
        break   
}