Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i =0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Cafeteira', preco: 199.90, fragil: true },
    { nome: 'TV', preco: 1999.00, fragil: true },
    { nome: 'Sofa', preco: 1700.00, fragil: false },
    { nome: 'Liquitificador', preco: 149.90, fragil: true }
]

const precoBaixo = produto => produto.preco < 500
const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 1000.00

console.log(produtos.filter2(precoBaixo).filter2(fragil))
console.log(produtos.filter2(caro))