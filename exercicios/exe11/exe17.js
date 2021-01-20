function planodesalario(plano,salario){

let aumento

switch (plano) {

case"A":
aumento = (salario/100)*10
console.log(salario)
console.log(salario+aumento)

break;
case"B":
aumento = (salario/100)*15
console.log(salario)
console.log(salario+aumento)

break;
case"C":
aumento = (salario/100)*20
console.log(salario)
console.log(salario+aumento)

break;
default: 
console.log("erro")


}}

plan ="C"
planodesalario(plan,2000)