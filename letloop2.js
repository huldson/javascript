const funcs = []

for (let i= 0;i<10;i++ ){
funcs.push(function(){
    console.log(i)


}
)
}
funcs[2]() // quando usa let funciona var não.
funcs[8]()