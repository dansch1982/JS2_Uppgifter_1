/* Skriv ett program som skriver ut talen 1 till 16 med hjälp av en
loop. */

function five() {
    const output = document.getElementById(arguments.callee.name)
    five.textContent = ""
    for (let index = 0; index < 16; index++) {
        output.textContent += index+1
    }
}