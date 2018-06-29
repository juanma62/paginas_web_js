/**
 * Función saludar
 * Hola chaval -> <18
 * Hola colega -> <30
 * Buenos dias -> <70
 * Saludos, maestro
 */

function saludar(edad) {
    let aMensaje = ['Hola chaval', 'Hola colega', 'Buenos días', 'Saludos maestro']
    let mensaje = 3
    if (edad < 18) {
        mensaje = 0
    }else if (edad < 30) {
        mensaje = 1
    }else if (edad < 70) {
        mensaje = 2
    }
    return aMensaje[mensaje]
}
function probar() {
    let edad = 10
    console.log(`Si tu edad es ${edad}`, saludar(edad))
    edad = 19
    console.log(`Si tu edad es ${edad}`, saludar(edad))
    edad = 40
    console.log(`Si tu edad es ${edad}`, saludar(edad))
    edad = 80
    console.log(`Si tu edad es ${edad}`, saludar(edad))
}

probar()