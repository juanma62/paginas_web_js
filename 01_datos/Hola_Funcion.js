/* 
    JavaScript (@Oracle) -> ECMAScript (Empresa estandarizadora de JavaScript) -> ES6 / ES2015
*/

function saludoMio() {
    var saludo = 'Hola' // Declaración de variable
    var user = 'mundo'
    var saludoUser = saludo + " " + user
    console.log (saludoUser)
}

function sumar(a, b){
    let resultado = a + b
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