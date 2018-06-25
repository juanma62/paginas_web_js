/* VARIABLES GLOBALES */

function calcular(pTotal, pIncremento) {
    pTotal = pTotal + pIncremento
    //total += pIncremento
    return pTotal
}

function main() {
    let total = 12
    let incremento = 10
    console.log(calcular(total, incremento))
    console.log(total)
}

main()

function disminuir3() {
    let local = 2
    const LOCAL = 4
    local -= LOCAL
    local += 10
    console.log(local) // -2
    console.log(LOCAL) // 4
}

disminuir3()