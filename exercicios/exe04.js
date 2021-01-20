function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(141, 4)
//meu jeito
function divisora(divd,divi){
let resultado = divd/divi
let resto = divd%divi

console.log(resultado.toFixed(0))
console.log(resto)

}
divisora(46, 5)