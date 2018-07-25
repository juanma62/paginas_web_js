//import * as x from './node_modules/js-cookie/src/js.cookie.js'

if (localStorage.numVisitas) {
    // Existe la cookie NumVisitas
    localStorage.numVisitas++
} else {
    // No existe localStorage NumVisitas
    localStorage.numVisitas = 1
    numVisitas = localStorage.numVisitas
}

console.log('Visita número', localStorage.numVisitas)

let x = navigator.geolocation.getCurrentPosition(
    (data) => {console.log(data)},
    (error) => {console.log(error)}
)

let title = document.querySelector('title')

console.log(title)