//function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    //let resultado = Math.pow(base, expoente)
    //Método novo:
    //resultado = base ** expoente

    //return resultado/


//console.log(expoente(2, 3))

function expoente(base,exp){

let resultado = 1
 for(i=0;i<exp;i++){

   resultado=resultado*base

}
return resultado

}
console.log(expoente(2,3))