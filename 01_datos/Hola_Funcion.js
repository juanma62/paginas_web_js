/* 
    JavaScript (@Oracle) -> ECMAScript (Empresa estandarizadora de JavaScript) -> ES6 / ES2015
*/

let autor = 'Mari'

function saludoMio() {
    let saludo = 'Hola' // Declaración de variable
    let user = 'mundo'
    let saludoUser = saludo + " " + user
    console.log (saludoUser)
}

function sumar(a, b){
    let resultado = a + b // Variable declarada dentro de un grupo {}
    console.log(resultado)
}

sumar(2,4)

saludoMio()

function saludo(user) {
    const SALUDO = 'Hola' //Declaracion de constante
    console.log (SALUDO, user)
}

saludo('Pepe')
saludo('Elena')

console.log(autor)

function dividir(a,b) {
    let resultado
    if(b != 0) {
        resultado = a / b
    }
    console.log(resultado)
}

dividir(10,2)