class App{
    constructor(){
        this.listaReyes = ['Felipe', 'Carlos', 'Juan Carlos', 'Isabel', 'Fernando']
        this.dNombres = document.getElementById('#recibir').value
    }
    /* if(dNombres == listaReyes){
        console.log('Existe el nombre')
    }else{
        console.log('Ese no es un rey de España')
    } */
}
    



document.addEventListener("DOMContentLoaded",() => {new App()})