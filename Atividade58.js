//Exercícios: Funções e Estruturas de Seleção numero:10

const prompt = require('prompt-sync')();

let caixa = {
    operador: prompt('qual é o nome do operador?   '),
    saldo_final: 100.00,
    historico_transacoes: []
}

function registrarVenda(valor) {
    return caixa.saldo_final + valor
}

function registrarDespesa(valor) {
    return caixa.saldo_final - valor
}

let opcao

do {

    console.log('MENU DO CAIXA')
    console.log('V - Registrar Venda')
    console.log('D - Registrar despesa')
    console.log('S - Sair')

    opcao = prompt('escolha uma opção   ').toUpperCase()

    switch(opcao) {

        case 'V':

            let valorvenda = parseFloat(prompt('digite o valor da venda   '))
            caixa.saldo_final = registrarVenda(valorvenda)

            caixa.historico_transacoes.push('Entrada')

            console.log('venda registrada com sucesso')
            console.log('saldo_final atual ', caixa.saldo_final)

        break


        case 'D':

            let valorDespesa = parseFloat(prompt('digite o valor da despesa   '))
            caixa.saldo_final = registrarDespesa(valorDespesa)

            caixa.historico_transacoes.push("Saída")

            console.log('despesa registrada com sucesso!')
            console.log('saldo_final atual', caixa.saldo_final)

        break


        case 'S':

            console.log('Encerrando sistema...')

        break


        default:

            console.log('opção inválida!')

    }

} while(opcao !== 'S')

console.log('REGISTRO FINAL DO CAIXA')
console.log(caixa)