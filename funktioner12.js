/* Skriv en funktion som returnerar summan av de 100 första
heltalen. Använd en loop. Förbättra sedan funktionen så att den tar
en parameter, som är hur många tal som ska läggas ihop. */

function twelve(amount) {
    const output = document.getElementById(arguments.callee.name)

    if (isNaN(amount)) {
        return output.textContent = `${amount} är ingen siffra.`
    }
    amount = Math.floor(amount)
    let number = 0;
    for (let index = 0; index < amount; index++) {
        number += index + 1
    }
    output.textContent = number
}