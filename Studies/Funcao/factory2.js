function criarProduto(nome, produto) {
    return {
        nome,
        produto,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
