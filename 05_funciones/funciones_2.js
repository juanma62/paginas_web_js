/* // Declarar
function miFuncion(x) {
    console.log(x)
}
function calcular(x) {
    return 2*x
}

// Declarar & Asignar
let x = 23

// Invocar, llamar, ejecutar
miFuncion(23)

// Asignando el resultado de invocar ...
let z = calcular(12)

// OTRA FORMA DE CREAR FUNCIONES EN JS:
// por asignacion
// equivale a function otraFuncion() {}

let otraFuncion = function (x,y) {
    return x*y
}  */

// Ejempla de CALLBACK

function verCalculos(x,y, operacion) {
    console.log("El resultado es " + operacion(x,y))
}

// Callback anonimo
verCalculos(6,2, function(a,b) { return a*b})

// Callback con nombre

function sumaCuadrados (a,b) {
    return a*a+b*b
}

function sumaCubos(a,b) {
    return a*a*a+b*b
}

setTimeout(
    function() {
        console.log("Han pasado 3 segundos")
    }, 3000
)

function saludar() {
    console.log('Hola');
}

setTimeout(saludar, 2000)

verCalculos(2,3, sumaCuadrados)
verCalculos(2,3, sumaCubos)

function sumaCuadrados(a,b){
    function cuadrado(x){
        return x*x
    }
    return cuadrado(a) + cuadrado(b)
}
console.log(sumaCuadrados(4,5)) 