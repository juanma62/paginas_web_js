function app () {

    // Defino los nodos del DOM que me interesen
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOuput = document.querySelector("#output")

    // Defino los manejadores de eventos de algunos nodos
    //domNombre.addEventListener('input', leerDatos)
    //domNombre.addEventListener('change', detectarChange)
    domBtnSaludar.addEventListener('dblclick', saludar)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', saludar)

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
    /* function mostrar() {
        domOuput.innerHTML = ''
        //let valorNombre = domNombre.value
        if (!!domNombre.value) {
           domOuput.innerHTML = `Hola, <strong>${domNombre.value}</strong>` 
        }
    }
    function borrar () {
        domNombre.value = ''  
        saludar()
    } */
    function saludar(ev){
        if (ev.type === 'dblclick') {
            domOuput.innerHTML = "DBLCLICK no se debe usar"
            return
        }
        if(ev.target.id === 'btnBorrar'){
            domNombre.value = ''
        }
        domOuput.innerHTML = ''
        if (!!domNombre.value) {
            domOuput.innerHTML = `Hola, <strong>${domNombre.value}</strong>` 
         }
    }
}
document.addEventListener('DOMContentLoaded', app)