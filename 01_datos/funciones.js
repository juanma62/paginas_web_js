/*
    Dos tipos de fucniones
    - Funciones puras sin side effects -> retornan datos
    - Funciones con efecto
*/

function sumar(a, b) { // Función pura
    let resultado = a + b
    return resultado
}

function mostrar(dato) {  // Función con efecto
    console.log(dato)
}

function main() {  // Función contenedora
    mostrar(sumar(45,250))
}

main()