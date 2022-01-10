function one() {
    const password = "qwerty"
    if (prompt('Skriv in lösenord:') === password) {
        alert("Rätt lösenord!")
    } else {
        alert("Felaktigt lösenord!")
    }
}