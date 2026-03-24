//Laços de Repetição slide atv.5 p.158

const prompt = require('prompt-sync')();

let somapares = 0;
let somaimpares = 0;

let totalPares = 0;
let totalImpares = 0;

let mediapares = 0;
let mediaimpares = 0;

for (let numero = 0; numero <= 999; numero++) {

    if (numero % 2 == 0) {
        somapares += numero;
        totalPares++;
    } else {
        somaimpares += numero;
        totalImpares++;
    }}

mediapares = somapares / totalPares;
mediaIipares = somaimpares / totalImpares;

console.log("Soma dos números pares:", somapares);
console.log("Total de números pares:", totalPares);
console.log("Média dos números pares:", mediapares);

console.log("Soma dos números ímpares:", somaimpares);
console.log("Total de números ímpares:", totalImpares);
console.log("Média dos números ímpares:", mediaimpares);

if (somapares > somaimpares) {
    console.log("A soma dos números pares é maior.");
} else if (somaimpares > somapares) {
    console.log("A soma dos números ímpares é maior.");
} else {
    console.log("As somas são iguais.");
}