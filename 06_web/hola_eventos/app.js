function app () {

    // Defino los nodos del DOM que me interesen
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar").addEventListener('click', saludar)
    let domBtnBorrar = document.querySelector("#btnBorrar").addEventListener('click', borrar)
    let domOuput = document.querySelector("#output")

    // Defino los manejadores de eventos de algunos nodos
    //domNombre.addEventListener('input', leerDatos)
    //domNombre.addEventListener('change', detectarChange)
    //domBtnSaludar.addEventListener('click', saludar)
    //domBtnBorrar.addEventListener('click', borrar)

    /* function leerDatos() {
        let valorNombre = domNombre.value
        console.log('Input detectado')
        console.log('Valor nombre: ', valorNombre)
        console.log(domOuput)
    } */
    /* function detectarChange() {
        let finalNombre = domNombre.value
        console.log('Valor final: ', finalNombre)
        console.log('Input detectado')
    } */
    function saludar() {
        domOuput.innerHTML = ''
        //let valorNombre = domNombre.value
        if (!!domNombre.value) {
           domOuput.innerHTML = `Hola, <strong>${domNombre.value}</strong>` 
        }
    }
    function borrar () {
        domNombre.value = ''  
        saludar()
    }
}
document.addEventListener('DOMContentLoaded', app)