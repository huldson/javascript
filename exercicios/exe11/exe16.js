function calculadora (operador,numero1,numero2){

switch(operador){
 case"+":
    console.log(numero1+numero2) 
 break;

 case"-":
    console.log(numero1-numero2) 
 break;
 case"*":
 console.log(numero1*numero2) 
break;
case"/":
console.log(numero1/numero2) 
break;
default:
    console.log("operador invalido")
  


}}


let operad = "*"
calculadora(operad,5,4)