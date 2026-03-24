//Laços de Repetição slide atv.4 p.157

const prompt = require('prompt-sync')();

let lotes = [50, 40, 60, 30, 70];

let totalingressos = 0;

for (let i = 0; i < lotes.length; i++) {
    totalingressos += lotes[i];
}

console.log(`o total de ingressos que foram vendidos foi ${totalingressos}`);