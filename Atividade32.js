//8. Gestão de Eventos para Festival de Música

let grupocorporativo = {
    nome: prompt('qual é o nome da empresa?   '),
    orçamentototal: parseFloat(prompt('qual é o orçamento da empresa?   ')),
    openbarfechado: false,
    consumoextras: []
}
let bebidasimportantes = prompt('quais bebidas são importantes?   ')
let bebidasimportantes2 = prompt('quais bebidas são importantes?   ')

let valorbebidasimportantes = parseFloat(prompt('qual é o valor da bebida importante 1?   '))
let valorbebidasimportantes2 = parseFloat(prompt('qual é o valor da bebida importante 2?   '))

let multaexedente = 500

let orçamentofinal = grupocorporativo.orçamentototal - valorbebidasimportantes - valorbebidasimportantes2
if (grupocorporativo.orçamentototal < 0) {
    grupocorporativo.openbarfechado == true
    grupocorporativo.consumoextras.push (multaexedente)
}

console.log(`o orçamento final foi de ${orçamentofinal}`);
console.log(grupocorporativo);
