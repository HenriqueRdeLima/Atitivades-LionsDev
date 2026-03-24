//10. Computadores em Cluster / Nuvem Virtual

const prompt = require('prompt-sync')();

let servidor = {
    nome: 'servidor principal AWS', 
    capacidademaximaGigabytes: 500,
    siteshospedados: [{dominio: 'Amazon' ,
    tamanhoocupadoGB: 100}]
}

let dominionovo = prompt('sigite o domínio do novo site   ')

let tamanhonovo = parseFloat(prompt('digite o tamanho do site (em GB)   '))

let totalocupado = 0

let i = 0

while (i < servidor.siteshospedados.length) {
    totalocupado += servidor.siteshospedados[i].tamanhoocupadoGB;
    i++;
}

let totalfinal = totalocupado + tamanhonovo

if (totalfinal <= servidor.capacidademaximaGigabytes) {
    let novosite = {
    dominio: dominionovo ,tamanhoocupadoGB: tamanhonovo
}

    servidor.siteshospedados.push(novosite)
    console.log('upload concluído, sistema operacional')
} else {
    servidor.alertasobrecarga = true
    console.log('falha:faltou espaço fisico. cancele o deploy')
}
