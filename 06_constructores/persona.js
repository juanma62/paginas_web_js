// Objeto literal
let persona1 = {
    nombre : 'Pepe',
    edad : 33,
    profesion : 'Informático',
    saludar : function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años y mi profesión es ${this.profesion}.`)
    }
}
// Por debajo de ejecuta new Object()
//persona1.saludar()

function Persona(nombre, edad, profesion){
    this.name = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function(){
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años y mi profesión es ${this.profesion}.`)
    }
}

let persona2 = new Persona('Juan', 24, 'Albañil')
let persona3 = new Persona('Luis', 20, 'Informático')
//console.log(persona1)
//console.log(persona1.constructor)
persona2.saludar()
persona3.saludar()
//console.log(persona2.constructor)