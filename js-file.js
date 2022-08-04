function populateBoard(size) {
    let board = document.querySelector('.board')

    while (board.firstChild) {
        board.removeChild(board.firstChild)
    }

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numberOfSquares = size * size

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = 'white'
        square.classList.add('square')
        square.addEventListener('mouseover', changeBackgroundColor)
        board.appendChild(square)
    }
}

populateBoard(16)

function changeBackgroundColor() {
    this.style.backgroundColor = 'blue'
}

function changeSize() {
    let input = prompt('Enter a new size:')
    if (input < 100 && input >= 3) {
        populateBoard(input)
    }
}

const sizeButton = document.querySelector('.sizeButton')
sizeButton.addEventListener('click', changeSize)