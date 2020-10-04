// funcao sem retorno
function imprimirsoma(a, b){

console.log(a + b)
console.log(a-b)



}
imprimirsoma(3, 3)// ele imprime pois tem console.log dentro da funcao


//funcao com retorno
function soma(a, b = 2){
return a + b
     

}
console.log(soma(2))// o b já estava declarado
console.log(soma(2,7))// mas voce pode declarar novamente 