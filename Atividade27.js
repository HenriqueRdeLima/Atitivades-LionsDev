//3. Programa de Milhas Aéreas

const prompt = require('prompt-sync')();

let perfildecliente = {
    nome: prompt('qual é o nome do cliente   '),
    historicodeviajens: [],
    categoria: 'platinium'
}
let voo1 = {
    destino: 'Paris',
    milhas: 1000
}
let voo2 = {
    destino: 'Roma',
    milhas: 1000
}
let voo3 = {
    destino: prompt('qual foi o destino?   '),
    milhas: parseFloat(prompt('quantas milhas você acumulou?   '))
}
perfildecliente.historicodeviajens.push(voo1, voo2, voo3)

let saldo = (voo1.milhas + voo2.milhas + voo3.milhas)

if (saldo >= 5000) {
    saldo -= 5000
    perfildecliente.categoria = 'platinium'
} else {
   perfildecliente.categoria = 'gold' 
}
console.log(perfildecliente);
