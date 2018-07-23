let pepe = {
    nombre : 'Pepe',
    direccion : {
        calle : 'Calle del Pez',
        numero : 22,
    },
    saludar : function(){
        console.log(`Hola, soy ${this.nombre} y vivo en la ${this.direccion.calle}, número ${this.direccion.numero}`)
    }
}

let saludarFuera = pepe.saludar

pepe.saludar()

//saludarFuera()

saludarFuera.call(pepe)

//setTimeout(pepe.saludar, 2000)

setTimeout(pepe.saludar.bind(pepe), 3000)