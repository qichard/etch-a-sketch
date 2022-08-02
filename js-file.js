const container = document.querySelector('.container')

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    container.append(row)

    for (let i = 0; i < 16; i++) {
        const content = document.createElement('div')
        content.classList.add('content')
        row.appendChild(content)
        container.appendChild(row)
    }
}