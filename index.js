const container = document.querySelector('#container')
const ships = [17, 12, 6] 

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
}

function handleClickOnCelss(cell, cellId) {

    // cellId = 14
    // ships = [17, 12, 6] 

    for(ship of ships) {

        console.log(ship)

        if(cellId === ship) {
            alert('CATAPUM CON-PUN!!')
            cell.classList.add('hit')
            cell.innerText = 'O'
            return 
        }
    }

    console.log('Splash!!')
    cell.classList.add('miss')
    cell.innerText = 'X'
}

window.onload = function () {
    fillTablero()
   
}