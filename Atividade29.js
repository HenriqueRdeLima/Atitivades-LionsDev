//5. Sistema de Mentoria Acadêmica

const prompt = require('prompt-sync')();

let projeto = {
    cordenador: prompt('qual é o nome do cordenador?   '),
    limitedevagas: prompt('qual é o limite de vagas?   '),
    areadeestudo: prompt('qual é a area de estudo?   '),
    mentores: [],
    statusdoprojeto: 'aberto para inscrições'
}
let João = {
    nome: 'João',
    areadeatuação: 'programação'
}
let carlos = {
    nome: 'Carlos',
    areadeatuação: 'design'
}
let novomentor = {
    nome: prompt('qual é o nome do mentor?   '),
    areadeatuação: prompt('qual é a area de atuação do mentor?   ')
}
projeto.mentores.push(João, carlos)

if (novomentor.areadeatuação === projeto.areadeestudo) {
    console.log(`novo mentor ${novomentor.nome} aprovado`);
    projeto.mentores.push(novomentor)
    projeto.statusdoprojeto = 'bloqueado para inscrições, pode iniciar o projeto'

}
else {
    console.log(`novo mentor ${novomentor.nome} reprovado`);
    projeto.statusdoprojeto = 'aberto para novas inscrições'
}
console.log(projeto);