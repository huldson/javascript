let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log('os verdadeiros')// todods saão verdadeiros 
console.log(!!3)
console.log(!!-1)// todos os numeros reais são verdadeiros menos o 0
console.log(!!' ') // se tiver um espaço dentro é verdadeiro 
console.log(!!'texto') // todos os texto são verdadeiros
console.log(!![])// mesmo vazio o rarray é possitivo 
console.log(!!{})
console.log(!!Infinity) // infinito é verdadeiro 
console.log(!!(isAtivo = true)) // ve se a variavel é verdadeiro

console.log('os falsos')
console.log(!!'')// string vazio
console.log(!!null)
console.log(!!NaN)// se não for um numero 
console.log(!!0)
console.log(!!undefined)
console.log(!!(''|| null || 0 || ' '))

let nome = 'carlos'
console.log(nome||"desconhecido")// ele retorna sempre o primeiro verdadeiro, se tiver vazio seria false