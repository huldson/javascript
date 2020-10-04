const peso1 = 1.3
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//TESTA SE O NUMERO É INTEIRO SE FOR DEVOVLE TRUE SE NÃO FALSE
console.log(Number.isInteger(peso2))


const avaliacao1= 9.34
const avaliacao2= 8.87

const media = (peso1*avaliacao1+avaliacao2*peso2)/2
console.log(media)
console.log(media.toFixed(2))//variavel.tofixed escolhe a quantidade de zcasa decimais exibidasconsole.log(media.toFixed(2))
console.log(media.toString(10))//2 para binairio 10 pra decimal 8 pra base 8