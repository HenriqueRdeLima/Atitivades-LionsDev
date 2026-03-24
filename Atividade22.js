const prompt = require('prompt-sync')();

let paciente = {}

paciente = {
    nome: prompt('qual é o nome do paciente?   '),
    raça: prompt('qual é a raça do paciente?   '),
    idade: prompt('qual é a idade do paciente?   '),
}

if (paciente.idade >= 8) {
    console.log(`o paciente ${paciente.nome} já é sênior e precisa de exames de rotina`);
    
} else {
    console.log(`paciente na faixa de idade regular`);
}

console.log(paciente);
