function main1(){
    /* document.body.addEventListener('mousemove', (ev) => {
        console.log(ev.clientX, ev.clientY)
    }) */
    let aDivs = document.querySelectorAll('section div')

    // Recorrer el array
    aDivs.forEach((div) => {
        div.addEventListener('mouseover',
        () => {div.style.backgroundColor = 'pink'})
        div.addEventListener('mouseout',
        () => {div.style.backgroundColor = 'brow'})
    })
}

function main(){
    let aDivs = document.querySelectorAll('section div')
    // Recorrer el array
    aDivs.forEach((div) => {
        //div.addEventListener('mouseover', hover)
        div.onmouseover = hover
        //div.addEventListener('mouseout', hover)
        div.onmouseout = hover
    })
    function hover(oE){
        if(oE.type == 'mouseover'){
            this.style.backgroundColor = "pink"
        } else {
            this.style.backgroundColor = "brown"
        }
    }
}


document.addEventListener('DOMContentLoaded', main) // poner en escucha
// window.addEventListener('load', main) // poner en escucha con window