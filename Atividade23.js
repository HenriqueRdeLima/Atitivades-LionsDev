const prompt = require('prompt-sync')();

let filaprojetos = []

let nomeEvalorest = {
  valorestimado: Number(prompt('qual é o valor estimado do projeto em reais? ')),
  nomeempresa: prompt('qual é o nome da empresa? ')
}

let urgente = prompt('o projeto possui prazo urgente? responda true/false ')

let valorbooleano = urgente === "true"

if (valorbooleano && nomeEvalorest.valorestimado >= 3000) {
  nomeEvalorest.valorestimado = nomeEvalorest.valorestimado * 1.15
}

filaprojetos.push(nomeEvalorest)

console.log(filaprojetos)