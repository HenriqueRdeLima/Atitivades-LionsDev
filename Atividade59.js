//exercicios Lista de Revisão: Fundamentos de Programação numero:1

const prompt = require('prompt-sync')();

let conta = {
    valor_por_pessoa: parseFloat(prompt('qual foi o valor final da conta?   ')),
    pessoas: parseFloat(prompt('para quantas pessoas a conta será divivdida?   '))
}

if (conta.pessoas > 0) {
    conta.valor_por_pessoa = conta.valor_por_pessoa * 1.10

    conta.valor_por_pessoa = conta.valor_por_pessoa / conta.pessoas
}
else {
    console.log('erro, o numero de pessoas deve ser maior que zero!');
}

console.log(conta);
