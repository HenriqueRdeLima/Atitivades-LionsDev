const prompt = require('prompt-sync')();

let estação = {
    id: 'Sensor1',
    local: 'Laboratorio',
    temperaturas: []
}
let temperatura1 = parseFloat(prompt('qual é a temperatura 1?   '))
let temperatura2 = parseFloat(prompt('qual é a temperatura 2?   '))
let temperatura3 = parseFloat(prompt('qual é a temperatura 3?   '))

estação.temperaturas.push(temperatura1, temperatura2, temperatura3)

let média = (temperatura1 + temperatura2 + temperatura3) / 3

if (média >= 35) {
    console.log(`PERIGO, média de temperatura extrema ${média} detectada no ${estação.local} `);
} else {
    console.log('temperatura dentro do normal');
}
console.log(estação);
