// Elementos extraídos del DOM
const container = document.querySelector('#container')
let counterElement // Almacenará el texto del contador de barcos cuando lo creemos en la función fillTablero

// Game variables
let ships = [17, 12, 6] 
let hits = 0

/*  EL TABLERO: 8 x 8
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
*/

// Esta función hace aparecer el tablero
function fillTablero () {
    // Crear tablero
    const tablero = document.createElement('div')
    tablero.setAttribute('id', 'tablero')

    // Generación de celdas
    for (let i = 0; i < 64; i++){
        // Crea una celda
        let cell = document.createElement('div')
        cell.setAttribute('id', i)
        cell.classList.add('ship')
        cell.innerText =`CELL ${i}`

        // Añade un chismoso que detecta cuándo hacemos click en la celda
        cell.addEventListener('click', function () {
            handleClickOnCelss(cell, i)
        })

        // Insertar la celda al tablero
        tablero.appendChild(cell)
    }

    // Insertar el tablero en el contenedor para que aparezca
    container.appendChild(tablero)

    let counterText = document.createElement('h2')
    counterText.innerText = `Remaining ships: ${ships.length}`
    container.appendChild(counterText)
    counterElement = counterText

}

function handleClickOnCelss(cell, cellId) {

    let containsMiss = cell.classList.contains('miss')
    let containsHit = cell.classList.contains('hit')

    if(containsHit || containsMiss) {
        return 
    }

    // Forma 2 de detectar si acertamos un barco
    // Includes nos dice si un valor (cellId) está incluido dentro de un array (ships)
    if(ships.includes(cellId)) {
        console.log('CATAPUM CON-PUN!!')
        // Añade la clase hit para estilar cuando acertamos la celda
        cell.classList.add('hit')
        cell.innerText = 'O'
        hits++
        console.log(hits)
        counterElement.innerText = `Remaining ships: ${ships.length - hits}`
    } else {
        console.log('Splash!!')
        // Añade la clase hit para estilar cuando fallamos la celda
        cell.classList.add('miss')
        cell.innerText = 'X'
    }
}

window.onload = function () {
    fillTablero()
}