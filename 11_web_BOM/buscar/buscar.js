class App {
    constructor(){
        this.inClave = document.querySelector('#inClave')
        this.btnBuscar = document.querySelector('#btnBuscar')

        this.btnBuscar.addEventListener('click', () => {
            let clave = this.inClave.value
            const url = 'https://www.google.es/search?ei=3TFYW8fvJ4akaY-moZAB&q='
            if (clave){
               window.location.href = url + clave
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})