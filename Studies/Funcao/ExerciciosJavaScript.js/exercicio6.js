function jurosSimples (capitalInicial, taxadeJuros, tempoAplicacao) {
    jurosSimples = capitalInicial * taxadeJuros * tempoAplicacao
    return jurosSimples
}

function aplicacao(capitalInicial, taxadeJuros, tempoAplicacao) {
    montante = Math.pow(capitalInicial + 1, tempoAplicacao)
    return montante
}

console.log(jurosSimples(2000, 0.10, 2))
console.log(aplicacao(2000, 0.10, 2))