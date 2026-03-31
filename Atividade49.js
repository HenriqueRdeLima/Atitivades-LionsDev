//Exercícios: Funções e Estruturas de Seleção numero:1

const prompt = require('prompt-sync')()

let niveldecargo = prompt('qual é seu nivel? (estagiario/junior/pleno)   ')

let salarioatual = parseFloat(prompt('qual é seu salário atual?   '))

let bonus

function calcularbonus(niveldecargo, salarioatual) {
    switch (niveldecargo) {
        
        case 'estagiario':
            bonus = salarioatual * 0.10
            break
    
        case 'junior':
            bonus = salarioatual * 0.15
            break

        case 'pleno':
            bonus = salarioatual * 0.20
            break

        default: bonus = 0
    }

    return bonus

}

let bonusfinal = calcularbonus(niveldecargo, salarioatual)

console.log(`seu salario com bonus é de ${salarioatual + bonusfinal}`);
