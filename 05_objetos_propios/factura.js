let factura1 = {
    empresa : {
        nombre : 'J&M Artes gráficas',
        direccion : 'Camino de Humanes, 49',
        telefono : '123123123',
        nif : '22222222D'
    },
    cliente  : {
        nombre : 'Juan Manuel',
        direccion : 'Calle del Pez, 13',
        telefono : '456456456',
        nif : '33333333F'
    }, 
    elementos : [
        {descripcion : 'La isla del tesoro',
        precio : 30,
        cantidad : 10},
        {descripcion : 'Drácula',
        precio : 75,
        cantidad : 5},
        {descripcion : 'El señor de los anillos',
        precio : 50,
        cantidad : 24}
    ],
    importeTotal : '',
    tipoIva : 1.04,
    formaPago : 'Transferencia'
}

factura1.calcularImporteTotal = function(){
    // Actualiza el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => this.importeTotal += (
            item.precio*item.cantidad*this.tipoIva
        )
    )
}

factura1.mostrar = function(){
    // Muestra por pantalla el importe total
    this.calcularImporteTotal()
    this.pintarDatos()
}

factura1.pintarDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') {
                if(!Array.isArray(oDatos[key])){
                    console.log(`Las propiedades de ${key} son: `)
                    this.pintarDatos(oDatos[key])
                }
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}

factura1.mostrar()