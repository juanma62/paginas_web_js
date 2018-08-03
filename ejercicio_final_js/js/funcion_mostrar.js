function mostrar(id){
    if (document.getElementById){
        let ocultarMostrar = document.getElementById(id);
        ocultarMostrar.style.display = (ocultarMostrar.style.display == 'block') ? 'none' : 'block';   
    }
}

function cambiarTexto(T){
    if (T.innerHTML == 'Mostrar'){
        T.innerHTML = 'Ocultar'
    }else{
        T.innerHTML = 'Mostrar'
    }
}

var columnas = window.matchMedia("(min-width : 672px)")
function columna(columnas) {
    if (columnas.matches) {
        $('#inicio-muestra').addClass('doscolumnas');
    } else {
        $('#inicio-muestra').removeClass('doscolumnas');
    }
}