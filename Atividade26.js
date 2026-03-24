//2. Tracker de Atletas Profissionais

const prompt = require('prompt-sync')();

let atleta = []

let nome = prompt('qual é o seu nome?   ')
let pesoatual = parseFloat(prompt('qual é seu peso atual?   '))
let meta = prompt('a sua meta é de emagrecimento ou de performance? true para emagrecimento e false para performance   ')

let valorbooleano = meta === "true"

atleta.push(nome,pesoatual,meta)

let maratonas = [27,26,30]

let maratona1 = parseFloat(prompt('qual foi a distancia de hoje?   '))

maratonas.push(maratona1)

if (valorbooleano === true && (maratonas[1]+maratonas[2]+maratonas[3]) / 3 > 20) {
    atleta[1] = atleta[1] -1
    console.log(`meta atingida, você emagreceu 1 kg!`);
    
}
if (valorbooleano === false && maratonas[3] > maratonas[2]) {
    console.log(`novo recorde pessoal ${maratonas}`);
}