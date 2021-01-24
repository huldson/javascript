function troco(nota){
    if(typeof nota === 'number'){// verifica se o numero colocado é do tipo number
    let nota1=0,nota5=0,nota10=0,nota20=0,nota50=0,nota100=0
   
     while(nota>=100){// ele testa pra ver se a variavel maior ou igual a cem faz ele entrar dentro do loop
        nota100++//quantas vezes passou pelo loop logo, quantas notas sera necessario.
        nota=nota-100// tira pra sair do loop 
   
    }
    if(nota100!=0){// testa pra ver se foi usado, para não imprimir atoa com o zero notas usadas 
    console.log(nota100+' notas de R$100')
    }

    while(nota>=50){
   
       nota50++
       nota=nota-50
    }
    if(nota50!=0){
        console.log(nota50+' notas de R$50')
    }
    while(nota>=20){
   
        nota20++
        nota=nota-20 
    }  
    if(nota20!=0){
        console.log(nota20+' notas de R$20')
    }  
    while(nota>=10){
        nota10++
        nota=nota-10
     
    }
    if(nota10!=0){
        console.log(nota10+' notas de R$10')    
    }
    while(nota>=05){
        nota5++
        nota=nota-5
    } 
    if(nota5!=0){
       console.log(nota5+' notas de R$5')   
    }
   while(nota>=01){
       nota1++       
       nota=nota-1 
    }
       if(nota1!=0){
        console.log(nota1+' moedas de R$1')
    }}
    else{

        console.log('digite um valor valido.')
    }
                               
              
                   
                          
   
   
   
   
   
   
   }
   troco(37)