const escola = "cod3r"

console.log(escola.charAt(4))// voce fornece a posição que voce quer ele retorna oqu tiver nele
console.log(escola.charAt(2))// outro exemplo
console.log(escola.charCodeAt(3))// fala na tabela unicode a posição referente ao 3
console.log(escola.indexOf('d'))// acha qual posição esta a letra digitada

console.log(escola.substring(0))// quando colocado só o numero ele conta aparti desse indice 
console.log(escola.substring(1,3))//ela vai contar do indice 1 vai selecionar 3 caracteres. fica uma casa a menos.
console.log('escola '.concat(escola).concat("!"))
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\w/g,'q'))// para colocar letra tem que colocar entre /\w// g pra mudar tudo
console.log('paulo,pedro,pato'.split(','))// transforma os elementos em mfu array  oque tu colocar dentro split  vai ser  o separador.
    