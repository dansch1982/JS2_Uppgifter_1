function one() {
    const output = document.getElementById(arguments.callee.name)
    const password = "qwerty"
    if (prompt('Skriv in lösenord:') === password) {
        output.textContent = "Rätt lösenord!"
    } else {
        output.textContent = "Felaktigt lösenord!"
    }
}