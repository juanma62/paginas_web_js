function operar() {
    let num1 = '22'
    console.log(typeof num1)
    let num2 = '2'
    console.log(typeof num2)
    let resultado = Number(num1) + Number(num2)
    console.log(typeof resultado)
    resultado = num1 + num2
    console.log(typeof resultado)
    resultado = num1 * num2
    console.log(typeof resultado)
}

function operarCadenas() {
    let num1 = 'Hola'
    console.log(num1, typeof num1)
    let num2 = ' Pepe'
    console.log(num2, typeof num2)
    resultado = num1 + num2
    console.log(resultado, typeof resultado)
    resultado = Number(num1) + Number(num2)
    console.log(resultado, typeof resultado)
    let num3 = 0
    let num4 = 0
    resultado = num3 / num4
    console.log(resultado, typeof resultado)
    isNaN(resultado)
    console.log(isNaN(resultado), resultado)
}

function sumar() {
    let num1 = '22'
    console.log(typeof num1)
    let num2 = '2'
    console.log(typeof num2)
    let resultado = num1 + num2
    console.log(resultado, typeof resultado)
    let num3 = 22
    console.log(typeof num3)
    let num4 = 2
    console.log(typeof num4)
    let resultado2 = num3 + num4
    console.log(resultado2, typeof resultado2)
}

sumar()