let aNombres = ['Pepe', 'Luis', 'Antonio', 'Rosa', 'Arancha']
let aNumbers = [2,5,7,8,9]

for (let i = 0; i < aNombres.length; i++) {
    const ITEM = aNombres[i];
    console.log(`El usuaro ${i+1} se llama ${ITEM}`)   
}

aNombres.forEach(function(item, i){
    console.log(`El usuaro ${i+1} se llama ${item}`)  
});

// Función Arrow
aNombres.forEach(
    (item, i) => console.log(`El usuaro ${i+1} se llama ${item}`
))

aNumbers.forEach(
    (item, i) => console.log(`El número ${i+1} vale ${item}`))

aNumbers.forEach(
    (item) =>{
    let cuadrado = item*item
   console.log(`El cuadrado ${item} es ${cuadrado}`) 
})

let aCuadrados = aNumbers.map(
    (item) => {
        return item*item
    }
)

console.log(aCuadrados)

let aNumbersClon = aNumbers.map(item => item)
console.log(aNumbersClon)

let aPares = aNumbers.filter(
    (item) => {
        if (item%2 == 0){
            return true
        }else{
            return false
        }
    }
)

let aPares2 = aNumbers.filter(
    item => !(item%2)
)

let aImpares = aNumbers.filter(
    item => (item%2 != 0)
)

console.log(aPares)
console.log(aPares2)
console.log(aImpares)