function basica(x){
}
let y
basica(y)

function miFuncion(...z){
    console.log('Hola ' + z)
    console.log('Hola ' + arguments[1])
}

let x = 21
miFuncion(x)
miFuncion(x,56)
miFuncion(x,56,89,50,76)