function sumar(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error'
    }
    else if (isNaN(b)) {
        resultado = 'Error'
    }
    else {
        resultado = +a + +b
    }
    return resultado
}

function restar(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error'
    }
    else if (isNaN(b)) {
        resultado = 'Error'
    }
    else {
        resultado = a - b
    }
    return resultado
}

function multiplicar(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error'
    }
    else if (isNaN(b)) {
        resultado = 'Error'
    }
    else {
        resultado = a * b
    }
    return resultado
}

function dividir(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error'
    }
    else if (isNaN(b)) {
        resultado = 'Error'
    }
    else {
        resultado = a / b
    }
    return resultado.toFixed(3)
}

function calcularModulo(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error'
    }
    else if (isNaN(b)) {
        resultado = 'Error'
    }
    else {
        resultado = a % b
    }
    return resultado
}

let num1 = '22'
let num2 = 43
let resultado = sumar(num1, num2)
console.log(resultado)
resultado = restar(num1, num2)
console.log(resultado)
resultado = multiplicar(num1, num2)
console.log(resultado)
resultado = dividir(num1, num2)
console.log(resultado)
resultado = calcularModulo(num1, num2)
console.log(resultado)