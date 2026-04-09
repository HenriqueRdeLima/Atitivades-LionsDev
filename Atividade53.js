//Exercícios: Funções e Estruturas de Seleção numero:5

const prompt = require('prompt-sync')()

function codigo_de_status (status) {
    
    switch (status) {
        
        case 'p':
            return 'Pendente de envio'
                

        case 'e':
            return 'Em rota'
                

        case 'c':
            return 'Cancelado'
                
    
        default:
            return 'codigo de status invalido'
    }
    
}

let encomenda = {
    ID: 2030,
    status_da_compra: prompt('qual é o status da compra? (p/e/c)   ')
}

encomenda.status_da_compra = codigo_de_status(encomenda.status_da_compra)

console.log(encomenda);
