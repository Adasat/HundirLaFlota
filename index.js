// Elementos extraídos del DOM
const container = document.querySelector('#container')
let counterElement // Almacenará el texto del contador de barcos cuando lo creemos en la función fillTablero

// Game variables
let numberOfShips = 8
let ships = shipRandomPositions()
let hits = 0

console.log(ships)

/*  EL TABLERO: 8 x 8
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
    x x x x x x x x
*/

function shipRandomPositions() {

    let randomPositions = []

    while(randomPositions.length < numberOfShips) {

        const decimalBetween0And64 = Math.random() * 64
        const integerBetween0And63 = Math.floor(decimalBetween0And64)
        
        let isIncluded = randomPositions.includes(integerBetween0And63)
        console.log(isIncluded)
        
        if(isIncluded === false) {
            randomPositions.push(integerBetween0And63)
        } 
    }
    
    return randomPositions
}


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
    
    // Comprueba si la celda tiene las clases .miss o .hit 
    let containsMiss = cell.classList.contains('miss')
    let containsHit = cell.classList.contains('hit')

    // Si la celda tiene alguna de esas dos clases, detiene la ejecución para que no salgan números negativos en el texto de abajo
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