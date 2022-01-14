/* Skriv ett program som frågar användaren efter ett lösenord. Hitta
på ett hemligt lösenord och spara det i en variabel. När användaren
har skrivit in ett ord ska programmet jämföra med det sparade
lösenordet och skriva ut om det var rätt eller inte. Använd en ifsats. */

function one() {
    const output = document.getElementById(arguments.callee.name)
    const password = "qwerty"
    if (prompt('Skriv in lösenord:') === password) {
        output.textContent = "Rätt lösenord!"
    } else {
        output.textContent = "Felaktigt lösenord!"
    }
}