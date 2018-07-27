class App{
    constructor(){
        this.abtnMas = document.querySelectorAll('.mas')
        this.abtnMas.forEach(
            (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
        )  
    }

    mostrar(oE) {
        let nodoBtn = oE.target
        let nodoTexto = nodoBtn.previousElementSibling
        nodoTexto.classList.toggle('hide') // Lo dejamos en el estado primero
        if(nodoTexto.classList.contains('hide')) { // cambiamos con el if el texto
            nodoBtn.textContent = 'Ver mas'
        } else {
            nodoBtn.innerHTML = 'Ocultar texto'
        }
    }

}

document.addEventListener("DOMContentLoaded",() => {new App()})