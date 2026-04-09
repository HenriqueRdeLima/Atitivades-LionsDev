//Exercícios: Funções e Estruturas de Seleção numero:9

const prompt = require('prompt-sync')();

function triagem_chamado(criticidade) {

    let setor;

    switch (criticidade) {

        case 1:
            setor = 'etendimento eásico'
            break

        case 2:
            setor = 'equipe especializada'
            break

        case 3:
            setor = 'gestão de Crise'
            break

        default:
            setor = 'criticidade inválida'
    }

    return setor
}

let fila_de_atendimento = []

let criticidade = parseFloat(prompt('digite a criticidade do problema (1, 2 , 3)   '))

let setor_responsavel = triagem_chamado(criticidade)

fila_de_atendimento.push(setor_responsavel)

console.log('setor responsável ', setor_responsavel)

console.log('fila de atendimento atualizada', fila_de_atendimento)