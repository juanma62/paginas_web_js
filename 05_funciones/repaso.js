function algo(x){
}

let o = function(){
   
}

algo(o)
algo({})

// Funciones

function otra(x){
}

let o2 = function(){
    let o3 = function(){
        console.log("Hola")
    }
}

otra(o2)
otra(function(){})

// Formas de crear funciones

// Declaración
function suma1(a,b){
    return a+b
}

// Asignación
let suma2 = function(a,b){
    return a+b
}

console.log(suma1(5,6))
console.log(suma2(4,8))

// ES6 Función Arrow o Lambdas
let suma3a = (a,b) =>{return a+b}
let suma3b = (a,b) => a+b

let cuadrado = a => a*a
console.log(cuadrado(5))