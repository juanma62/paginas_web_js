function iterar(){
    for(i=0; i<3; i++){
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterarInversa(){
    for(i=3; i>0; i--){
        console.log(`Soy la vuelta ${i}`)
    }
}

/* iterar()
iterarInversa() */

function factorial(num){
    let factorial = 1
    for (let i = 1; i <= num; i++){
        factorial = factorial * i       
    }
    return factorial
}

function factorialInverso(num){
    let factorial = 1
    for (let i = num; i > 0; i--){
        factorial = factorial * i       
    }
    return factorial
}

console.log(factorial(5))
console.log(factorialInverso(5))

aDatos = [20, 30, 40]

function totalizar(aDatos){
    let num = 0
    for (let i = 0; i < aDatos.length; i++){
        num += aDatos[i]
    }
    return num
}
console.log(totalizar(aDatos))

let aNombres = ['Pepe', 'Juan', 'Rosa', 'María']

function leer(aNombres){
    let lista = ''
    for(let i = 0; i<aNombres.length; i++){
        lista +=`
        El usuario ${i+1} es ${aNombres[i]}`
    }
    return lista
}

console.log(leer(aNombres))
