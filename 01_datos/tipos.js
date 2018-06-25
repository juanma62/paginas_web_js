/* Tipos de datos
-ELEMENTALES
    - number
    - string
    - boolean
- REFERENCIADOS    
    - object
- undefined
*/

/* TIPOS ELEMENTABLE
- Son inmutables
- Se utilizan por valor
*/

function aumentar(pIndice) {
    pIndice +=1
    return pIndice
}

let indice = 1
indice = 2

indice = aumentar(indice)
console.log(indice)

// OPERACIONES CON ELEMENTALES

let a = 5
let b = a

a += 5

console.log(a)
console.log(b)



/* TIPOS REFERENCIADOS
- Son mutables
- Se utilizan por referencias
*/

let libro = {
    titulo: 'El Quijote',
    indice: 1,
    loTengo: true,
    autor : {
        nombre: 'Miguel',
        apellidos: 'De Crevantes'
    }
}

console.log(typeof libro)
console.log(libro)

libro2 = libro

libro.indice = 2
console.log(libro2)

function aumentarObjeto(pLibro) {
    pLibro.indice +=1
    pLibro.loTengo = false
}

aumentarObjeto(libro)
console.log(libro)