function salario(horasTrabalhadas, recebePorHora) {
    const salBruto = recebePorHora * horasTrabalhadas
    const liquido = salBruto - salBruto * 30/100
    return `Salário igual a R$ ${liquido}`
}
 console.log(salario(100, 50.00))