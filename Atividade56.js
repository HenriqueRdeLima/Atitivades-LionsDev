//Exercícios: Funções e Estruturas de Seleção numero:8

const prompt = require('prompt-sync')()

let servidor = {
    nome: prompt('qual é o nome do servidor?   '),
    espaco_em_GB: parseInt(prompt('qual é o espaço do servidor em GB?   ')),
    espaco_ja_ocupado: parseInt(prompt('qual é o espaço já ocupado no servidor?   '))
}

function analisar_espaco(servidor, tamanho_do_novo_arquivo) {

    switch (true) {

        case (servidor.espaco_ja_ocupado + tamanho_do_novo_arquivo <= servidor.espaco_em_GB):

            servidor.espaco_ja_ocupado += tamanho_do_novo_arquivo
            return true

        case (servidor.espaco_ja_ocupado + tamanho_do_novo_arquivo > servidor.espaco_em_GB):

            return false
    }
}

let tamanhoArquivo = parseInt(prompt('qual é o tamanho do novo arquivo?   '))

let resultado = analisar_espaco(servidor, tamanhoArquivo)

switch (resultado) {

    case true:
        console.log('arquivo aceito')
        console.log(`novo espaço ocupado ${servidor.espaco_ja_ocupado} `)
        break

    case false:
        console.log('sem espaço de armazenamento')
        break
}