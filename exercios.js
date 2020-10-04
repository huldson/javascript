#include<stdio.h>


int main(){


var array=[10];	
var x,i,j,y;
var cont=0;
j=0;
printf("digite o valor que deseja:\n");
scanf("%d",&x);
y=x;
for(i=0;i<10;i++){
printf("digite o valor para armazenar no indice[%d]",i);
scanf("%d",&array[i]);
}
for(i=0;i<10;i++){

if(array[i]!=array[i+1]){

	
if(array[i]==y){

	y--;
	
if(y==0){
		printf("\ndentro\n ");
cont++;
y=x;
}
else{
j++;
printf("\nfora\n");
}	
	
}
	else{
	y=x;	
	}
}}
printf(" repetiu : %d",cont);	
	
	
return 0;}