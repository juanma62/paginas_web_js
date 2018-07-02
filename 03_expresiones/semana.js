/* @param 'Día de la semana'
@return 'Hora de la alarma' -> 7:00 // 12.00 */



function despertador(dia){
    let hora
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
        case 'D':
            hora = '12:00'
            dia = 'Fin de semana'  
            break;
        default:
            hora = '0:00'
            día = "Error de día"
    }
    return `${hora} y comienza el ${dia}`
}

function probar() {
    let dia = 'L'
    console.log(`Si tu dia es ${dia}, te despiertas a las`, despertador(dia))
    dia = 'M'
    console.log(`Si tu dia es ${dia}, te despiertas a las`, despertador(dia))
    dia = 'S'
    console.log(`Si tu dia es ${dia}, te despiertas a las`, despertador(dia))
    dia = 'D'
    console.log(`Si tu dia es ${dia}, te despiertas a las`, despertador(dia))
}

probar()