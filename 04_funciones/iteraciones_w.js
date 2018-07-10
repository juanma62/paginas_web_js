function iterar(){
    for(i=0; i<3; i++){
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterarWhile(){
    let i = 1
    while (i<=3) {
        console.log(`Soy la vuelta ${i}`)
        i++
    }
}

function iterarDoWhile(){
    let i = 1
    do {
        console.log(`Soy la vuelta ${i}`)
        i++
    } while (i<=3)
}

iterarDoWhile ()