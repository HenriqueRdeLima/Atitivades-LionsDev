//Atividade 1, slide switch p.165

const prompt = require('prompt-sync')();

let genero = prompt('qual o Gênero escolhido? (tudo minisculo e sem caractere especial/acentuação   ')
switch (genero) {
    case 'acao':
        console.log('sala 1');
        break;
    
    case 'comedia':
        console.log('sala 2');
        break;
    
    case 'terror':
        console.log('sala 3');
        break;

    case 'animacao':
        console.log('sala 4');
        break;
    
    default:
        console.log('Gênero não encontrado, tente novamente');
}
