function alunoClassificado(nota) {
    let correcao = arredondar(nota)
    if (correcao >= 40) {
        console.log(`Aprovado com nota ${correcao}`);
    }else {
        console.log(`Reprovado com nota ${correcao}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 -(nota % 5))
    }else {
        return nota
    }
}

alunoClassificado(38)
alunoClassificado(61)
alunoClassificado(88)