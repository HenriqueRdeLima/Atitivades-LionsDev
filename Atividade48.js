//Exercícios: Estruturas de Repetição numero:6

const prompt = require('prompt-sync')()

let carrinhos = [
    {cliente: 'João', produtos: [50.0 , 120.5 , 15.0]},
    {cliente: 'Maria' , produtos: [200.0 , 45.9]},
    {cliente: 'Carlos' , produtos: [10.0 , 5.5 , 32.0 , 8.0]}
]

let relatorio = []

carrinhos.forEach(carrinho => {

let total = 0

carrinho.produtos.forEach(valor => {
        total += valor
})

console.log(`cliente ${carrinho.cliente}`)
console.log(`total da compra ${total.toFixed(2)}`)
// denovo o tofixed peguei no google pra deixar mais bonito

let totalpago = 0

while (totalpago < total) {
    let pagamento = parseFloat(prompt('Digite o valor recebido   '))
        totalpago += pagamento
}

let troco = totalpago - total

if (troco > 0) {
    console.log(`Troco ${troco.toFixed(2)}`) 
    // denovo o tofixed pra deixar mais bonito
} else {
    console.log('Pagamento exato')
}

relatorio.push({
    cliente: carrinho.cliente,
     total: total,
     pago: totalpago,
     troco: troco
})})

console.log('relatorio fibal')

console.table(relatorio)