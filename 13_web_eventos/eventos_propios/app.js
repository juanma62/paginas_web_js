function main(){
    document.querySelector('#btnPulsar')
    .addEventListener('click', pulsar)

    document.querySelector('main')
    .addEventListener('escribir', escribir)

    /* document.querySelector('#output')
    .addEventListener('escribir', escribir) */

    function pulsar(oEv){
        oEv.target.dispatchEvent(
            new Event('escribir',{
                'bubbles' : true
            })
        )
    }

    function escribir(oEv){
        console.dir(oEv)
        document.querySelector('#output').innerHTML = "He recibido el evento de escribir"
    }
}


document.addEventListener("DOMContentLoaded", main)