//Exercícios: Funções e Estruturas de Seleção numero:2

const prompt = require('prompt-sync')()

let nome = prompt('qual é o nome do usuário   ')

let cracha = parseFloat(prompt('qual é o código do crachá   '))

function validar(nome, cracha) {
   
    if (nome.length > 5 && cracha > 1000) {
        return true
}
    
    else {
        return false
}}

if (validar(nome, cracha)) {
    console.log('acesso permitido')
} 
else {
    console.log('acesso negado')
}