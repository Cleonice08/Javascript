let pontuacoes = "10, 30, 25, 46, 8, 66"

function pontosavaliar(pontuacoes) {
    let pontos = pontuacoes.split(",")
    let bateRecorde = 0
    let piorJogo = 1
    let pontuacaoMaior = pontuacoes[0]
    let pontuacaoMenor = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > pontuacaoMaior) {
            pontuacaoMaior = pontuacoes[i]
            bateRecorde++
        }else if (pontuacoes[i] < pontuacaoMenor) {
            pontuacaoMenor = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [bateRecorde, piorJogo]
}

console.log(pontosavaliar(pontuacoes))