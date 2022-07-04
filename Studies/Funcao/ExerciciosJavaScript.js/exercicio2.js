function triangulo(a ,b ,c) {
    if (a == b && b == c) {
        return "Equilátero"
    }else if(a == b || b == c || a ==c) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
} 

console.log(triangulo(3, 4, 3))
console.log(triangulo(3, 4, 5))
console.log(triangulo(4, 3, 3))
