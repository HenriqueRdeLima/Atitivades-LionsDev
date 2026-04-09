//6. Sistema de Segurança de Voo / Aeronave Doméstica

let motoresquerdo = {
    status: 'desligado',
    sensores: {
        temperatura: Number(prompt('qual é a temperatura do motor esquerdo em graus Celsius? ')),
        pressao: Number(prompt('qual é a pressão do óleo em PSI? ')),
        combustivel: Number(prompt('qual é a quantidade de combustível em porcentagem? '))}};
        
if (motoresquerdo.sensores.combustivel > 20 && motoresquerdo.sensores.pressao > 50 && motoresquerdo.sensores.temperatura < 90 && motoresquerdo.sensores.temperatura > 20) {
    motoresquerdo.status = 'pode ligar';
} else {
    motoresquerdo.status = 'não pode ligar';
}

console.log(motoresquerdo);