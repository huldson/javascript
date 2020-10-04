const funcs = []

for (var i= 0;i<10;i++ ){
funcs.push(function(){// colar elementos dentro deu um array, colocando uma função
    console.log(i)


}
)
}
funcs[2]()// erro hisotirico do javascript, usar let
funcs[8]()//