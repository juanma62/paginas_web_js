/*
Tipos de datos:
- string (cadena de caracteres)
- number
- boolean (true / false)
- object (Todo lo que no es lo anterior)
- undefined
*/

var saludo = 'Hola'
var user = 'mundo' // Variable string
var edad = 23 // Variable number
var estudiante = true // Variable boolean
var algo // Variable undefined

// Declaración de variable objeto en notación JSON
var persona = {
    nombre: 'Juan Manuel',
    apellido: 'Salazar Manuel',
    edad : 55,
    estudiante : true
}

console.log(saludo,user)
console.log(edad)
console.log(estudiante)
console.log(algo)
console.log(persona)
console.log(persona.nombre)
console.log(persona.nombre + " " + persona.apellido + " tiene " + persona.edad + " años.")