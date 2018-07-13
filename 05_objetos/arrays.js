/* let oDatos = {}
// oDatos = new Object()
let aDatos = [1,2]
// aDatos = new Array()
console.log(aDatos + [3,4])
console.log(aDatos.concat([3,4])) */

let aNombres = ['Pepe', 'Luis', 'Antonio', 'Rosa', 'Arancha']
aNombresOriginal = aNombres.join('|').split('|')
aNombresOriginalNuevo = aNombres.slice()
aNombres.reverse()
aNombres.sort()
console.log(aNombres)
console.log(aNombresOriginal)
console.log(aNombresOriginalNuevo)

aNombres = ['Pepe', 'Luis', 'Antonio', 'Rosa', 'Arancha']
console.log(aNombres.slice(1,4))