//7. Controle de Imigração Governamental

const prompt = require('prompt-sync')();

let estaParaTrabalho = prompt('Está a trabalho? (true/false)   ');
let valorBooleano = estaParaTrabalho === 'true';

let passageiro = {
    nome: prompt('qual é o nome do imigrante?   '),
    nacionalidade: prompt('qual é a nacionalidade do imigrante?   '),
    estaparatrabalho: valorBooleano,
    podeentrar: false
}

let documentos = ['passaporte' , 'visto']

let docsaude = prompt('O documento de saude foi apresentado? True/False  ');

documentos.push(docsaude)

if (passageiro.nacionalidade !== 'Brasil') {
    if (documentos[1] === 'visto' && documentos[2] === 'true') {
    passageiro.podeentrar = true;
}}

else {
    if (documentos[0] === 'Passaporte') {
        passageiro.podeentrar = true;
    }
}

passageiro.documentos = documentos

console.log(passageiro);
