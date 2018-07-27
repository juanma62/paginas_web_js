class App{
    constructor(){
        this.leer = document.querySelector('.ocultar')
        this.textoMas = document.querySelector('.ocultar')
        
        this.leer = addEventListener('click', this.leer(this))
    }
}

document.addEventListener("DOMContentLoaded",() => {new App()})

this.parrafoBoton.classList.remove('boton')