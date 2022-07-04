function diaDaSemana (dias) {
    switch (dias){
        case 1:
            return "Fim se semana" 
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dias uteis"
        case 7:
            return "Fim se semana"
        default:
            return "Dia inválido"

    }
}

console.log(diaDaSemana(2))
console.log(diaDaSemana(10))
console.log(diaDaSemana(7))