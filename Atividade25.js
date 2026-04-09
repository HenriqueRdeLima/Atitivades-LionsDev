//1. Carrinho de Compras de E-commerce

const prompt = require('prompt-sync')();

let usuario = {
    nome: prompt('qual é o nome do usuario? '),
    assinaturaprime: prompt('tem assinatura prime?  (true/false) '),
    listadepreco: []
}

let carrinho = []

let produto1 = parseFloat(prompt('qual é o preço do produto 1? '))
let produto2 = parseFloat(prompt('qual é o preço do produto 2? '))
let produto3 = parseFloat(prompt('qual é o preço do produto 3? '))

usuario.listadepreco.push(produto1, produto2, produto3)
carrinho.push(produto1, produto2, produto3)

let total = usuario.listadepreco[0] + usuario.listadepreco[1] + usuario.listadepreco[2]

if (total >= 200) {
    console.log('Você ganhou frete grátis')
} else {
    console.log('Frete normal foi aplicado')
}

console.log(`total da compra ${total}`)