function anobissesto(ano){

let verdadeiro = true 
let falso = false

    if(ano%4==0){
     
        if(ano%100!==0 || ano%400==0){
         
        return verdadeiro

    }

    else{
        return falso
    }
  
}
else{
        return falso
}

console.log(anobissesto(2016))
