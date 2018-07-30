class App{
    constructor(){

        this.btnTop = document.querySelector('#btnTop')
        this.divTop = document.querySelector('#divTop')

        document.addEventListener('scroll', this.scrollDetect.bind(this))
        this.btnTop.addEventListener('click', 
            this.subir.bind(this))
    }

    scrollDetect(oE){
        if(oE.target.scrollingElement.scrollTop > 95){
            this.divTop.classList.remove('oculto')
        } else {
            this.divTop.classList.add('oculto')
        }
    }
    subir(oE) {
        console.log('Subiendo');
        document.scrollingElement.scrollTop = 0
    }
}

document.addEventListener("DOMContentLoaded", ()=> {new  App()})