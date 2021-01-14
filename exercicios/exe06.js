function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * (taxa/100) * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + (taxa/100)) ** tempo
}

console.log(jurosSimples(100, 10, 2));
console.log(jurosCompostos(100, 10, 2));
