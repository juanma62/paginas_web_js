/** 
 * Declaración de función
 * Calcular área de diversas figuras
 * 
 * @param: string nombre de la figura
 * @param: objet datos de la figura
 * si es triángulo h y b
 * si es cuadrado l
 * si es círculo r
 * @return: number área de la figura
 * 
 * */ 

function calcularArea(figura, datos) {
    let resultado = 1
    switch (figura) {
        case 'triangulo':            
            for (const key in datos) {
                resultado *= datos[key]
            }
            resultado /= 2
            break;
        case 'cuadrado':
            resultado = datos.l * datos.l
            break;
        case 'circulo':
            resultado = datos.r * datos.r * Math.PI
            break; 
        default:
        throw('La operación no es válida')
            break;
    }
    return resultado.toFixed(2)
}

function probrar () {
    let figura = 'triangulo'
    let datos = {h:12, b:10}
    console.log(calcularArea(figura, datos))
    figura = 'cuadrado'
    datos = {l:10}
    console.log(calcularArea(figura, datos))
    figura = 'circulo'
    datos = {r:20}
    console.log(calcularArea(figura, datos))
}



// Invocar una función

calcularArea ()