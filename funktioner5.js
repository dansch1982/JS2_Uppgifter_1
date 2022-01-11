function five() {
    const five = document.getElementById('five')
    five.textContent = ""
    for (let index = 0; index < 16; index++) {
        five.textContent += index+1
    }
}