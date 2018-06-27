let calculos = {
    num1 : '',
    num2 : '',
    resultado : '',
    sumar : function() {
        this.resultado = this.num1 + this.num2
    },
    mostrar : function() {
        console.log(this.resultado)
    }
}

calculos.num1 = 23
calculos.num2 = 3
calculos.sumar()
calculos.mostrar()