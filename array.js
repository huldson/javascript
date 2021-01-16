const valores = [7.5, 7.8,55,5.6]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
const s =  valores.length// fala o tamanho do array 
console.log(s)
console.log(valores.length)// pode botar de forma direta
valores.push({id: 3},false,null,'teste')// variaives distintas[objeto,bolleana,nulo,string]
//push utilizado pra incluir no array novos elementos
console.log(valores)

console.log(valores.pop())// elimina o ultimo do array
delete valores[0]// delta alque que voce selecionar 
console.log(valores)

console.log(typeof valores)//sempre é um objeto em js o array 
valores.split(", ")
