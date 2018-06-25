/* VARIABLES GLOBALES */

//var global = 12

function calcular(pDato) {
    global = 12
    global = global + pDato
    //global += pDato
    return global
}

/* console.log(calcular(10))
console.log(global) */

/* VARIABLES LOCALES */

function aumentar() {
    var local = 2
    let tambienLocal = 3
    const LOCAL =4
    console.log(local)
    console.log(tambienLocal)
    console.log(LOCAL)
}

/* aumentar() */

/* VARIABLES LOCALES CON ÁMBITO DE BLOQUE */

function disminuir() {
    if (true) {
        var local = 2
        let tambienLocal = 3
        const LOCAL = 4
    }
    console.log(local)
}

disminuir()
/* console.log(local)
console.log(tambienLocal)
console.log(LOCAL) */