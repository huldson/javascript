const nome = 'rebeca'
const concatenacao = 'olá' + nome + '!'

const template = `
    ola
    ${nome}!`//nele voce consegue botar quebra de linha pulando a linha e faz a contenação melhor .
    console.log(concatenacao, template)
    console.log(`1 + 1 = ${1+1}`)//ele entende que 1+1 =2 se colocar ele em ${}
    const up = texto => texto.toUpperCase()
    console.log(`ei....${up('computador')}!`)// up pega o string passa  pra texto que aplica a toUpperCase fazendo  ficar em maiusculoloulo