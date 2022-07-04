// Fora da função ele não acessa o global ele é referencia de module.exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


// Dentro de uma função estara acessando o global 
function logThis () {
    console.log('Dentro de uma Função ...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()