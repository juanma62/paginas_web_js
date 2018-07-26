class App{
    constructor(){
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)
        /* aNodos.forEach(
            (node) => {node.innerHTML = 'Ja, ja'}
        ) */
        let nodo4 = document.getElementById('p1')
        console.dir(nodo4)
        let nodo5 = document.getElementsByTagName('p')
        console.dir(nodo5)
        let nodo6 = document.getElementsByName('nombre')
        console.dir(nodo6)
        let nodo7 = document.getElementsByClassName('importante')
        console.dir(nodo7)

        let nodoMenu = document.querySelector('#menu')
        console.dir(nodoMenu)
    }
}

document.addEventListener("DOMContentLoaded", 
    () => {
        new App()
    })