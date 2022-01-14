/* Skriv ett program som frågar användaren efter ett tal. Det ska
skriva ut om talet är mindre än 100, lika med 100 eller större. */

function two() {
    const output = document.getElementById(arguments.callee.name)
    const number = prompt('Skriv in en siffra');
    if (!number) {
        output.textContent = "Ingenting är ingenting"
    } else if (isNaN(number)) {
        output.textContent = `${number} är ingen siffra`
    } else if (number < 100) {
        output.textContent = `${number} är lägre än 100`
    } else if (number > 100) {
        output.textContent = `${number} är högre än 100`
    } else {
        output.textContent = `${number} är 100`
    }
}