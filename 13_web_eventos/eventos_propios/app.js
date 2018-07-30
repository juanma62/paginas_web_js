function main(){
    document.querySelector('#btnPulsar')
    .addEventListener('click', pulsar)

    document.querySelector('#output')
    .addEventListener('escribir', escribir)

    function pulsar(oEv){
        oEv.target.dispatchEvent(
            new Event('escribir')
        )
    }

    function escribir(oEv){
        console.dir(oEv)
        document.querySelector('#output').innerHTML = "He recibido el evento de escribir"
    }
}


document.addEventListener("DOMContentLoaded", main)