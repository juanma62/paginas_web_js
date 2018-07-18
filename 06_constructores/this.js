console.log(this)
function prueba(){
    console.log(this)
}

//prueba()

let o = {
    nombre : 'Pepe',
    mostrar : function(){
        console.log(this)
    }
}

//o.mostrar()

function CosaRara(){
    console.log(this)
}

new CosaRara()