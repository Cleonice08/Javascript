function valor(dinheiro) {
    reais = `R$ ${dinheiro.toFixed(2).toString().replace(".", ",")}`
    console.log(reais)
}

valor(0.1 + 0.2)