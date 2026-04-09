//Atividade 3, slide switch p.167

const prompt = require('prompt-sync')();

let codproduto = prompt('qual é o codigo do produto?   ')

switch (codproduto) {
    case 'A1':
        console.log('Você escolheu Batata chips');
    break

    case 'A2':
        console.log('Você escolheu Amendoim');
    break

    case 'A3':
        console.log('Você escolheu Biscoito de Chocolate');
    break

      default:
        console.log('Codigo invalido, tente novamente');
}