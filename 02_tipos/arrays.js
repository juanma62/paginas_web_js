let oDatos = {
    cero : 'Pepe',
    uno : 'Rosa',
    dos : 'María'
}

let aDatos = ['Pepe', 'Rosa', 'María']

console.log(typeof oDatos, oDatos)
console.log(typeof aDatos, aDatos)

aDatos[0] = 'Juan'
console.log(typeof aDatos, aDatos)

aDatos[aDatos.length] = 'Antonio'
aDatos.push('Elena')
console.log(typeof aDatos, aDatos)

let aDatosFull = [
    {nombre: 'Rosa', puesto: 'Profesor'},
    {nombre: 'Juan', puesto: 'Profesor'},
    {nombre: 'Emilia', puesto: 'Directora'}
]

console.log(typeof aDatosFull, aDatosFull)
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
console.log(typeof aDatosFull, aDatosFull)