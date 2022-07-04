function Bissextos (ano) {
    if (ano <= 0 ){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else{
        return false
    }
}

console.log(Bissextos(4))
console.log(Bissextos(2015))
console.log(Bissextos(2022))
console.log(Bissextos(2010))