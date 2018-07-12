/* function esPalindromo(texto){
    let aDatos = texto.split(' ')
    // Reconstruyo la frase
    let frase = aDatos.join('')
    // Array con cada letra
    aDatos = frase.split('')
    // Clon del array con cada letra
    aClon = aDatos.join('|').split('|')
    // Clon del array al reves
    aClon.reverse()
    //frase invertida
    let alReves = aClon.join('')

    let resultado = false
    //Comparacion
    if(frase.toUpperCase() === alreves.toUpperCase()){
        resultado=true
    }

    return resultado
} */

function esPalindromoCorto(texto){
    let resultado = false
    if(texto.split(' ').join('').toUpperCase() === texto.split(' ').join('').split('').reverse().join('').toUpperCase()){
        resultado = true
    }
    return resultado
}

function esPaliShort(texto) {
    let result = false
    if (texto.split(' ').join('').toUpperCase() === texto.split(' ').join('').split('').reverse().join('').toUpperCase()) {
        result = true
    }
    return result
}

function probar(){
    let texto = 'Hola'
    console.log(esPalindromoCorto(texto)) //false
    texto = 'Esto no es un palindromo'
    console.log(esPalindromoCorto(texto)) //false
    texto = 'La ruta nos aporto otro paso natural'
    console.log(esPalindromoCorto(texto)) //true
    texto = 'Dabale arroz a la zorra el abad'
    console.log(esPalindromoCorto(texto)) //true
}

probar()