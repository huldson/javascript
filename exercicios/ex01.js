function calcularOperacoes (operador1, operador2) {
    
    if((typeof operador1 === 'number')&&(typeof operador2 === 'number')){
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}}

calcularOperacoes('2', 2)


