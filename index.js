const container = document.querySelector('#container')

console.log(container)

/*  EL TABLERO: 8 x 8
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
*/

function fillTablero () {
    const tablero = document.createElement('div')
    tablero.setAttribute('id', 'tablero')
    let cell = ''

    for (let i = 0; i < 64; i++){
        cell += `<div id=${i}>CELL ${i}</div>`
    }

    tablero.innerHTML = cell

    console.log(tablero)

    container.appendChild(tablero)

    

}

window.onload = function () {
    fillTablero()
   
}