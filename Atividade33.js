//9. Diário de Leituras em Aplicativos de Educação Literária

const prompt = require('prompt-sync')();

let registodeleitura = {
    nome: prompt('qual é o nome do leitor?   '),
    pontosdeleitura: 10,
    historicodias: []
}
let dia0 = {
    data: '12/3',
    paginaslidas: 40
}
let dia1 = {
    data: '2/3',
    paginaslidas: 27
}
registodeleitura.historicodias.push(dia0 , dia1)

let hoje = {
    data: prompt('que dia que foi lido?  '),
    paginaslidas: prompt('quantas paginas foram lidas?   ')
}
if (hoje.paginaslidas >= 50 && registodeleitura.pontosdeleitura > 0) {
    registodeleitura.pontosdeleitura = registodeleitura.pontosdeleitura * 2
    console.log('Super leitor!');
    
}
if (hoje.paginaslidas < 10) {
    registodeleitura.pontosdeleitura = registodeleitura.pontosdeleitura / 2
}
console.log(registodeleitura);
