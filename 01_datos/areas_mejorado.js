function calcularCirculo(radio) {
    return (Math.PI * Math.pow(radio, 2)).toFixed(2)
}

function calcularCircunf(radio) {
    return (Math.PI * radio * 2).toFixed(2)
}

function motrarCirculo(radio, circulo) {
    let mensaje = `El área del círculo de radio ${radio} es ${circulo}`
    console.log(mensaje)
}

function mostrarCircunf(radio, circulo) {
    let mensaje = `El diámetro del círculo de radio ${radio} es ${circulo}`
    console.log(mensaje)
}

function main() {
    let radio = 3
    //let diametro = 6
    motrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
    radio = 7
    motrarCirculo(radio, calcularCirculo(radio))
}

main()