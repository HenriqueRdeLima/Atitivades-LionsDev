//calculadora

const prompt = require('prompt-sync')()

function adicao(a, b) {
    return a + b
}


function subtracao(a, b) {
    return a - b
}


function divisao(a, b) {
    return a / b
}


function multiplicacao(a, b) {
    return a * b
}


function porcentagem(a, b) {
    return (a / 100) * b
}


function potencia(a, b) {
    return a ** b
}

function raiz(a) {
    return Math.sqrt(a)//tive q dar um google aqui
}


let continuar = 's'

while (continuar.toLowerCase() === 's') {

    let numero_1 = parseFloat(prompt('digite o primeiro número   '))
    let operacao = prompt('escolha a operação (+ , - , / , * , % , ** , raiz)   ')
    let numero_2 = parseFloat(prompt('digite o segundo número   '))
   

    let resultado

    switch (operacao) {
        case '+':
            resultado = adicao(numero_1, numero_2)
            console.log('resultado da adição:', resultado)
            break

        case '-':
            resultado = subtracao(numero_1, numero_2)
            console.log('resultado da subtração ', resultado)
            break

        case '/':
            resultado = divisao(numero_1, numero_2)
            console.log('resultado da divisão ', resultado)
            break

        case '*':
            resultado = multiplicacao(numero_1, numero_2)
            console.log('resultado da multiplicação ', resultado)
            break

        case '%':
            resultado = porcentagem(numero_1, numero_2)
            console.log('resultado da multiplicação ', resultado)
            break

        case '**':
            resultado = potencia(numero_1, numero_2)
            console.log('resultado da potenciação ', resultado)
            break

        case 'raiz':
            resultado = raiz(numero_1)
            console.log('resultado da potenciação ', resultado)
            break

        default:
            console.log('operação inválida')
    }

    continuar = prompt('deseja fazer outra operação? s/n   ')
}
