
y=[40,54,63,40,73,34,35,61]

function notasaluno(notas){

for(i=0;i<notas.length;i++){
    if(notas[i]<38){
        console.log("reprovado com nota: "+ notas[i])

}   else if(notas[i]>=38 && notas[i]<=40){

        notas[i]=40
        console.log('aprovado com nota : '+notas[i])

}else if(notas[i]>40){
 
    console.log("aprovado com nota : "+arrendondar(notas[i])) 


}





}

function arrendondar(x){

if (x%5 == 3){
    x=x+2
    return x
}
else if (x%5 == 4){
x=x+1
 return x
}
else{
    return x
}



}


}



notasaluno(y)
