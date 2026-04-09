//4. Sistema de Lanchonete de Fast Food

const prompt = require('prompt-sync')();

let pedido = {
    nome: prompt('qual é seu nome?   '),
    valorhamburguer: 30,
    quantiddehamburguer: prompt('quantos hamburgueres você vai querer?   '),
    extras: []
}
let ingredientesextras = prompt('quais ingredientes extras você quer?   ')
let ingredientesextras2 = prompt('quais ingredientes extras você quer?   ') 

let valoringredientesextras = prompt('qual é o valor do ingrediente extra 1?   ')
let valoringredientesextras2 = prompt('qual é o valor do ingrediente extra 2?   ')

pedido.extras.push(ingredientesextras, ingredientesextras2)

let valordosextras = parseFloat(valoringredientesextras) + parseFloat(valoringredientesextras2)

let valordaconta = pedido.valorhamburguer * pedido.quantiddehamburguer + valordosextras

if (pedido.extras.length > 2 && (pedido.quantiddehamburguer) > 2) {
    valortotal - 20/100 * valortotal
}
console.log(pedido);
console.log(`o valor total do pedido é de ${valordaconta}`);
