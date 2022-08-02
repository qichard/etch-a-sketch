function populateBoard(size) {
    const container = document.querySelector('.container')

    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.append(row)

        for (let i = 0; i < size; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
            container.appendChild(row)
        }
    }
}

populateBoard(16)

function changeSize() {
    let userInput = window.prompt("Enter how many squares you want on each side: ")
    if (userInput > 100 || userInput < 2) {
        userInput = window.prompt("Enter a number less than 100 and greater than 2 again please: ")
    }
    populateBoard(userInput)
}

changeSize()

const targetSquares = document.querySelector('.container').querySelectorAll('.square')
for (const targetSquare of targetSquares) {
    targetSquare.addEventListener('mouseenter', () => {
        targetSquare.classList.add('clicked')
    })
}