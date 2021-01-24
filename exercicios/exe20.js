function troco(nota){
    if(typeof nota === 'number'){
    let nota1=0,nota5=0,nota10=0,nota20=0,nota50=0,nota100=0
   
     while(nota>=100){
        nota100++
        nota=nota-100
   
    }
    if(nota100!=0){
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