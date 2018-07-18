function Empresa(nombre, direccion, telefono, nif){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
}

function Elementos(descripcion, precio, cantidad){
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura(tipoIva, formaPago){
    this.empresa = ''
    this.cliente = ''
    this.elementos = []
    this.importeTotal = 0
    this.tipoIva = tipoIva
    this.formaPago = formaPago
    this.calculaImporteTotal = function(){
        // Actualiza el valor de la propiedad correspondiente
        this.importeTotal = 0
        this.elementos.forEach(
            (item) => this.importeTotal += (
                item.precio*item.cantidad*this.tipoIva
            )
        )
    }
    this.mostrar = function(){
        console.log(this)
    }
} 

let factura1 = new Factura(1.04, 'Contado')
factura1.mostrar()

    