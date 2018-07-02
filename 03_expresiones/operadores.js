let x = 23
/* console.log(++x)
console.log(x++)
console.log(x) */

function asignaciones() {
    let x = 2
    x += 1
    console.log(x)
}

/* asignaciones() */

/* function isPar(par) {
    let isPar = true
    if (typeof par != 'number' || (par % 2)) {
        isPar = false
    }
    return isPar
} */

function isPar(par) {
    return (typeof par == 'number' && par % 2 == 0) ? true : false
}

/* console.log('25 es par?', isPar(25))
console.log('24 es par?', isPar(24))
console.log('0 es par?', isPar(0))
console.log('Pepe es par?', isPar('Pepe'))
console.log('"" es par?', isPar(''))
console.log(' es par?', isPar())
console.log('True es par?', isPar(true))
console.log('False es par?', isPar(false)) */

function compararCadenas() {
    let a = 'Alex'
    let b = 'Pepepotamo'
    if (a <! b){
        console.log('a es mayor')
    }else{
        console.log('b es mayor')
    }
}
compararCadenas()