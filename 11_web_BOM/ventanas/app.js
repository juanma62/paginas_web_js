class App{
    constructor(){
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnCerrar = document.querySelector('#btnCerrar')

        this.btnAbrir.addEventListener('click', this.abrir.bind(this))
        this.btnCerrar.addEventListener('click', this.cerrar.bind(this)) 
    }
    
    abrir(){
        this.oVentana = window.open()
        this.oVentana.document.write('<h1>Nueva ventana</h1>')
    }
    cerrar(){
        this.oVentana.close()
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()} //Función anónima manejadora de eventos
)