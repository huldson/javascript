
let n = "10,29,40,80,40,03,06,09"



function  jogo(numerodejogos){
    let pontos = numerodejogos.split(",")
    let contar = []
    let pior   =  pontos[0] 
    let melhor =  pontos [0] 
    let j = 0,k = 0
    contar[0]=0
    for(i=0;i<=pontos.length;i++){

    if(melhor < pontos[i]){
      
       
        melhor = pontos[i]
        contar[0]++
    }
        if(pior>pontos[i]){  
          
            pior=pontos[i]
            contar[1] = i
       
    }

    }

console.log('quebrou recorde:'+contar[0]+"\n pior jogo foi : "+contar[1])

  


}

jogo(n)