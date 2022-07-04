function inversor(numero) {
    if(!numero) {
       return true
    }else{
        if(isNaN(numero * -1) || (numero * -1) == -1) {
            if(numero == true) {
                return false
            }else { 
                return numero
            }
        }else {
            return numero * -1
        }
    }
}

console.log(inversor('-1a'))
console.log(isNaN('a' * -1 ))