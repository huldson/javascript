// armazenando uma fucao em uma variavel
const soma = function (a,b){

console.log(a + b )

}

soma(2, 3)

// armazenando uma funcao arrow em uma variavel

const soma2 = (a,b) => {

return a + b 

}
console.log(soma2(4, 5))

// retorno implcito 
const subtracao =(a, b) => a-b// quando o retorno é simples pode ser feito direto 
 console.log(subtracao(100,70))