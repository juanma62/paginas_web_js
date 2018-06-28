let x = 23
console.log(++x)
console.log(x++)
console.log(x)

function asignaciones() {
    let x = 2
    x += 1
    console.log(x)
}

asignaciones()

function isPar(par) {
    let isPar = true
    if(par %2 != 0) {
        isPar = false
    }
    return isPar
}

console.log(isPar(25))