function app () {

    // Defino los nodos del DOM que me interesen

    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOuput = document.querySelector("#output")

    // Defino los manejadores de eventos de algunos nodos
    domNombre.addEventListener('input', leerDatos)
    //domNombre.addEventListener('change', detectarChange)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)

    function leerDatos() {
        let valorNombre = domNombre.value
        console.log('Input detectado')
        console.log('Valor nombre: ', valorNombre)
        domOuput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
        console.log(domOuput)
    }
    /* function detectarChange() {
        let finalNombre = domNombre.value
        console.log('Valor final: ', finalNombre)
        console.log('Input detectado')
    } */
    function saludar() {
        console.log('Hola amigo')
    }
    function borrar () {
        console.log('Aun no se borrar');
    }
}
document.addEventListener('DOMContentLoaded', app)